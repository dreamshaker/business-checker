import Script from 'next/script'
import './globals.css'

// ============================================================
// 🔹 SECTION 1: 메타데이터 설정
// ============================================================
// SEO 및 소셜 미디어 공유 최적화를 위한 메타데이터

export const metadata = {
  // 기본 메타데이터
  title: '사업자등록번호 조회 - 무료 기업정보 확인',
  description: '사업자등록번호로 기업 정보를 무료로 즉시 확인하세요. 사업자 상태, 개업일, 대표자명, 주소 등 상세 정보 제공',
  keywords: '사업자등록번호 조회, 사업자번호 조회, 기업정보 조회, 사업자 확인, 사업자등록증 조회, 무료 사업자 조회',
  
  // Open Graph (페이스북, 카카오톡 등)
  openGraph: {
    title: '사업자등록번호 조회',
    description: '사업자등록번호로 기업 정보를 확인하세요',
    type: 'website',
    locale: 'ko_KR',
    siteName: '사업자 조회',
  },
  
  // 검색엔진 크롤링 설정
  robots: {
    index: true,
    follow: true,
  },
  
  // 모바일 최적화
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

// ============================================================
// 🔹 SECTION 2: 루트 레이아웃
// ============================================================
// 모든 페이지에 공통으로 적용되는 레이아웃

/**
 * 애플리케이션 루트 레이아웃
 * @param {Object} props
 * @param {React.ReactNode} props.children - 자식 컴포넌트
 */
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        {/* ============================================
            Google AdSense (승인 후 활성화)
            ============================================
            TODO: AdSense 승인 후 주석 제거 및 ca-pub-XXXX 부분 수정
        */}
        {/* 
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        */}
        
        {/* ============================================
            Google Analytics (선택사항)
            ============================================
            TODO: GA4 측정 ID 발급 후 설정
        */}
        {/* 
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        */}
      </head>
      <body>{children}</body>
    </html>
  )
}