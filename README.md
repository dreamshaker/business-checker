# 사업자등록번호 조회 시스템

Next.js 기반 사업자등록번호 조회 웹 애플리케이션

## 기능

- 사업자등록번호 조회
- 실시간 입력 검증
- 반응형 디자인
- SEO 최적화
- API 라우트 구조

## 기술 스택

- Next.js 14
- React 18
- Tailwind CSS
- Lucide React Icons

## 로컬 실행 방법

1. 의존성 설치
\`\`\`bash
npm install
\`\`\`

2. 환경변수 설정
\`\`\`bash
# .env.local 파일 생성
BUSINESS_API_KEY=your_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

3. 개발 서버 실행
\`\`\`bash
npm run dev
\`\`\`

4. 브라우저에서 http://localhost:3000 열기

## Vercel 배포

1. GitHub에 코드 푸시
2. Vercel에서 Import
3. 환경변수 설정
4. 자동 배포 완료

## 환경 변수

### 로컬 개발 (.env.local)
\`\`\`
BUSINESS_API_KEY=공공데이터포털_API_키
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

### Vercel 배포
Vercel Dashboard → Settings → Environment Variables에서 설정
- BUSINESS_API_KEY: 공공데이터포털에서 발급받은 API 키
- NEXT_PUBLIC_SITE_URL: 배포된 도메인 (예: https://yourdomain.com)

## 라이선스

MIT

## 개발자

- GitHub: [your-username]
- Email: your-email@example.com