-- K-Drift schema (run in Supabase SQL editor)
-- Locales: vi (default), en, ko. Categories: visa, medical, housing, labor, education.

create type locale as enum ('vi', 'en', 'ko');
create type category as enum ('visa', 'medical', 'housing', 'labor', 'education');
create type article_status as enum ('draft', 'published');
create type subscriber_status as enum ('active', 'unsubscribed');

-- Articles: language-independent metadata. One row per logical article.
create table articles (
  id           uuid primary key default gen_random_uuid(),
  slug         text unique not null,
  category     category not null,
  cover_image  text,
  author       text,
  status       article_status not null default 'draft',
  published_at timestamptz,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- Per-language body. fallback handled in app (ko -> en).
create table article_translations (
  id          uuid primary key default gen_random_uuid(),
  article_id  uuid not null references articles(id) on delete cascade,
  locale      locale not null,
  title       text not null,
  summary     text,
  body_mdx    text not null default '',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  unique (article_id, locale)
);

create index article_translations_article_idx on article_translations(article_id);
create index articles_category_idx on articles(category);
create index articles_status_published_idx on articles(status, published_at desc);

-- Newsletter subscribers.
create table subscribers (
  id          uuid primary key default gen_random_uuid(),
  email       text unique not null,
  locale      locale not null default 'vi',
  source      text not null default 'landing',
  status      subscriber_status not null default 'active',
  created_at  timestamptz not null default now()
);

-- Archive of sent newsletter issues.
create table newsletter_issues (
  id          uuid primary key default gen_random_uuid(),
  issue_no    int,
  subject     text not null,
  locale      locale not null default 'vi',
  article_ids uuid[] not null default '{}',
  sent_at     timestamptz,
  created_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table articles enable row level security;
alter table article_translations enable row level security;
alter table subscribers enable row level security;
alter table newsletter_issues enable row level security;

-- Public can read only PUBLISHED articles and their translations.
create policy "public reads published articles"
  on articles for select
  using (status = 'published');

create policy "public reads translations of published articles"
  on article_translations for select
  using (exists (
    select 1 from articles a
    where a.id = article_translations.article_id and a.status = 'published'
  ));

-- Subscribers/issues: no public read. Writes go through the server (service role),
-- which bypasses RLS, so no insert policy is needed here.

-- ---------------------------------------------------------------------------
-- Grants: give the standard Supabase roles access to this schema.
-- (RLS still constrains anon/authenticated; service_role bypasses RLS.)
-- ---------------------------------------------------------------------------
grant usage on schema public to anon, authenticated, service_role;

grant all on all tables    in schema public to anon, authenticated, service_role;
grant all on all sequences in schema public to anon, authenticated, service_role;
grant all on all routines  in schema public to anon, authenticated, service_role;

alter default privileges in schema public
  grant all on tables    to anon, authenticated, service_role;
alter default privileges in schema public
  grant all on sequences to anon, authenticated, service_role;
