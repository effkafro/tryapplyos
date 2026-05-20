-- ApplyOS Waitlist — Supabase Schema
-- Manuell im Supabase Dashboard ausführen (SQL Editor).
-- RLS so konfiguriert, dass anonymes Insert erlaubt ist, Lesen nur via SECURITY-DEFINER-RPC.

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  locale text not null default 'de' check (locale in ('de', 'en')),
  referer text,
  user_agent text,
  created_at timestamptz not null default now(),
  constraint waitlist_email_unique unique (email)
);

create index if not exists waitlist_created_at_idx
  on public.waitlist (created_at desc);

-- Row Level Security
alter table public.waitlist enable row level security;

-- Policy: anon kann INSERT, kein SELECT/UPDATE/DELETE
drop policy if exists "anon can insert" on public.waitlist;
create policy "anon can insert" on public.waitlist
  for insert
  to anon
  with check (true);

-- Public counter via SECURITY DEFINER RPC (umgeht RLS, exposed nur die Zahl)
create or replace function public.get_waitlist_count()
returns int
language sql
security definer
set search_path = public
as $$
  select count(*)::int from public.waitlist;
$$;

revoke all on function public.get_waitlist_count() from public;
grant execute on function public.get_waitlist_count() to anon, authenticated;
