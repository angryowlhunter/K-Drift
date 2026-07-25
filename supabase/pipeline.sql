-- K-Drift content pipeline (P0): sources -> raw_items -> digest_items.
-- Run in the Supabase SQL editor after schema.sql.

create type source_type as enum ('api', 'rss', 'manual');
create type digest_status as enum ('draft', 'approved', 'rejected');

-- Registered channels. Many can be registered but disabled until their connector exists.
create table sources (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  type        source_type not null,
  url         text,
  category    category,                 -- default category hint (nullable)
  config      jsonb not null default '{}',
  enabled     boolean not null default true,
  created_at  timestamptz not null default now()
);

-- Raw collected items, deduped by hash.
create table raw_items (
  id          uuid primary key default gen_random_uuid(),
  source_id   uuid references sources(id) on delete set null,
  external_id text,
  url         text,
  title       text,
  content     text not null default '',
  hash        text not null unique,
  curated     boolean not null default false,
  fetched_at  timestamptz not null default now()
);

-- AI-curated drafts awaiting human review. Approval feeds articles/newsletter.
create table digest_items (
  id               uuid primary key default gen_random_uuid(),
  raw_item_id      uuid references raw_items(id) on delete set null,
  category         category,
  title_ko         text not null,
  summary_ko       text not null default '',
  what_it_means_ko text not null default '',
  effective_date   text,                 -- 시행일; free text, may be unknown
  source_urls      text[] not null default '{}',
  confidence       real,                 -- 0..1, from source authority + AI
  status           digest_status not null default 'draft',
  reviewer         text,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create index raw_items_source_idx on raw_items(source_id);
create index raw_items_curated_idx on raw_items(curated, fetched_at desc);
create index digest_items_status_idx on digest_items(status, created_at desc);

-- Admin-only: all access via service-role server code. No public read yet.
alter table sources enable row level security;
alter table raw_items enable row level security;
alter table digest_items enable row level security;

-- (schema.sql already set default privileges for new public tables; explicit for clarity)
grant all on sources, raw_items, digest_items to service_role;

-- Seed: manual safety valve + high-relevance korea.kr feeds (verified live).
insert into sources (name, type, url, category, enabled) values
  ('수동 입력',                  'manual', null,                                     null,    true),
  ('법무부 (출입국·비자)',        'rss',    'https://www.korea.kr/rss/dept_moj.xml',  'visa',  true),
  ('고용노동부 (노동)',           'rss',    'https://www.korea.kr/rss/dept_moel.xml', 'labor', true),
  ('정부 보도자료 (전체)',        'rss',    'https://www.korea.kr/rss/pressrelease.xml', null, true);
