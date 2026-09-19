-- 일본어(ja)·중국어 간체(zh) 로케일을 DB enum에 추가
-- Supabase SQL Editor에서 실행하세요. (이미 추가돼 있으면 아무 일도 일어나지 않습니다)
alter type locale add value if not exists 'ja';
alter type locale add value if not exists 'zh';
