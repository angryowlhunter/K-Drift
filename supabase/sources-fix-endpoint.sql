-- 정책뉴스 API 엔드포인트 교정: 구버전(policyNewsService) → 신버전(policyNewsService2)
update sources
set url = 'https://apis.data.go.kr/1371000/policyNewsService2/policyNewsList2'
where type = 'api';
