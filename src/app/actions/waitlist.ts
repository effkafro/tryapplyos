"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const schema = z.object({
  email: z
    .string()
    .email()
    .max(255)
    .transform((s) => s.toLowerCase().trim()),
  locale: z.enum(["de", "en"]).default("de"),
  _hp: z
    .string()
    .optional()
    .refine((v) => !v, { message: "spam" }),
});

export type WaitlistInput = {
  email: string;
  locale: "de" | "en";
  _hp?: string;
};

export type WaitlistResult =
  | { ok: true; count: number }
  | { ok: false; error: "invalid" | "duplicate" | "spam" | "server" };

export async function joinWaitlist(input: WaitlistInput): Promise<WaitlistResult> {
  const parsed = schema.safeParse(input);
  if (!parsed.success) {
    const isHoneypot = parsed.error.issues.some((i) => i.path[0] === "_hp");
    return { ok: false, error: isHoneypot ? "spam" : "invalid" };
  }
  const { email, locale } = parsed.data;

  try {
    const h = await headers();
    const supabase = await getSupabaseServerClient();
    const { error } = await supabase.from("waitlist").insert({
      email,
      locale,
      referer: h.get("referer") ?? null,
      user_agent: h.get("user-agent") ?? null,
    });

    if (error) {
      if (error.code === "23505") return { ok: false, error: "duplicate" };
      console.error("waitlist insert failed", error);
      return { ok: false, error: "server" };
    }

    const { data: count, error: rpcError } = await supabase.rpc("get_waitlist_count");
    if (rpcError) {
      console.error("waitlist count rpc failed", rpcError);
      return { ok: true, count: 0 };
    }
    return { ok: true, count: typeof count === "number" ? count : 0 };
  } catch (err) {
    console.error("waitlist action error", err);
    return { ok: false, error: "server" };
  }
}

export async function getWaitlistCount(): Promise<number> {
  try {
    const supabase = await getSupabaseServerClient();
    const { data, error } = await supabase.rpc("get_waitlist_count");
    if (error) {
      console.error("waitlist count rpc failed", error);
      return 0;
    }
    return typeof data === "number" ? data : 0;
  } catch (err) {
    console.error("waitlist count error", err);
    return 0;
  }
}
