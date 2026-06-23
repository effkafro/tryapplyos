import { createBrowserClient } from "@supabase/ssr";

/**
 * Browser-Supabase-Client für clientseitige Auth-Flows (z. B. Passwort-Reset).
 * Nötig, weil das Recovery-Token im URL-Fragment (#access_token=…) bzw. als
 * ?code=-Query ankommt und clientseitig in eine Session umgewandelt werden muss.
 */
export function getSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error(
      "Supabase ENV vars missing: NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY",
    );
  }
  return createBrowserClient(url, key);
}
