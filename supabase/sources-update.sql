-- korea.kr RSS 서비스 중단(2026)에 따른 수집 채널 교체.
-- Supabase SQL Editor에서 실행하세요.

-- 1) 죽은 RSS 채널 비활성화 (기록은 보존)
update sources set enabled = false where type = 'rss';

-- 2) 공식 대체: 정책브리핑 정책뉴스 API (data.go.kr, POLICY_NEWS_API_KEY 필요)
insert into sources (name, type, url, category, enabled)
values ('정책브리핑 정책뉴스 (전체 부처)', 'api',
        'https://apis.data.go.kr/1371000/policyNewsService/policyNewsList', null, true);
