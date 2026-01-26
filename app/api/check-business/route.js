import { NextResponse } from 'next/server'

// ============================================================
// 🔹 SECTION 1: 테스트 데이터
// ============================================================
// 실제 API 연동 전 테스트용 더미 데이터
// TODO: 실제 API 연동 시 이 섹션 제거

const dummyData = {
  '1234567890': {
    businessNumber: '123-45-67890',
    businessName: '(주)테크놀로지코리아',
    status: '계속사업자',
    openDate: '2020-03-15',
    taxType: '일반과세자',
    representative: '김철수',
    address: '서울특별시 강남구 테헤란로 123'
  },
  '2345678901': {
    businessNumber: '234-56-78901',
    businessName: '글로벌마켓',
    status: '휴업',
    openDate: '2018-07-22',
    taxType: '간이과세자',
    representative: '이영희',
    address: '경기도 성남시 분당구 판교역로 456'
  },
  '3456789012': {
    businessNumber: '345-67-89012',
    businessName: '스타트업벤처스',
    status: '폐업',
    openDate: '2019-11-08',
    closeDate: '2023-05-30',
    taxType: '일반과세자',
    representative: '박민수',
    address: '서울특별시 서초구 서초대로 789'
  }
}

// ============================================================
// 🔹 SECTION 2: API 핸들러
// ============================================================

/**
 * POST /api/check-business
 * 사업자등록번호 조회 API 엔드포인트
 * 
 * @param {Request} request - HTTP 요청 객체
 * @returns {NextResponse} JSON 응답
 */
export async function POST(request) {
  try {
    // ------------------------------------------------
    // 📍 STEP 1: 요청 데이터 파싱
    // ------------------------------------------------
    const { businessNumber } = await request.json()

    // ------------------------------------------------
    // 📍 STEP 2: 입력 검증
    // ------------------------------------------------
    if (!businessNumber || businessNumber.length !== 10) {
      return NextResponse.json(
        { success: false, message: '올바른 사업자등록번호를 입력해주세요.' },
        { status: 400 }
      )
    }

    // ------------------------------------------------
    // 📍 STEP 3: 데이터 조회
    // ------------------------------------------------
    
    // ============================================
    // 🟢 현재 모드: 테스트 모드
    // ============================================
    // API 호출 시뮬레이션 (0.8초 대기)
    /*
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const data = dummyData[businessNumber]

    if (data) {
      // 성공: 데이터 있음
      return NextResponse.json({
        success: true,
        data: data
      })
    } else {
      // 실패: 데이터 없음
      return NextResponse.json(
        { 
          success: false, 
          message: '등록되지 않은 사업자등록번호입니다. 테스트용 번호: 1234567890, 2345678901, 3456789012' 
        },
        { status: 404 }
      )
    }
    */
    // ============================================
    // 🔴 실제 API 모드 (주석 처리)
    // ============================================
    // TODO: 공공데이터포털 API 키 발급 후 아래 코드 활성화
    // 환경변수: BUSINESS_API_KEY
    
    
    // ------------------------------------------------
    // 📍 실제 API 호출
    // ------------------------------------------------
    const API_KEY = process.env.BUSINESS_API_KEY
    
    // API 키 확인
    if (!API_KEY) {
      console.error('환경변수 BUSINESS_API_KEY가 설정되지 않았습니다.')
      return NextResponse.json(
        { success: false, message: '서버 설정 오류입니다.' },
        { status: 500 }
      )
    }

    const apiUrl = `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=${API_KEY}`
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        b_no: [businessNumber]
      })
    })

    const apiData = await response.json()
  //26.1.24에 추가한 코드  
      console.log('=== API 전체 응답 ===')
      console.log(JSON.stringify(apiData, null, 2))

  if (apiData.data && apiData.data.length > 0) {
      console.log('=== 첫 번째 사업자 데이터 ===')
      console.log(JSON.stringify(apiData.data[0], null, 2))
  }

    // ------------------------------------------------
    // 📍 API 응답 처리
    // ------------------------------------------------
if (apiData.status_code === 'OK' && apiData.data && apiData.data.length > 0) {
  const businessInfo = apiData.data[0]
  
  // 사업자 상태 변환
  let status = '확인 필요'
  let statusColor = 'gray' // UI용 색상
  
  // b_stt_cd 코드로 판단 (우선)
  if (businessInfo.b_stt_cd === '01') {
    status = '계속사업자'
    statusColor = 'green'
  } else if (businessInfo.b_stt_cd === '02') {
    status = '휴업자'
    statusColor = 'yellow'
  } else if (businessInfo.b_stt_cd === '03') {
    status = '폐업자'
    statusColor = 'red'
  }
  // b_stt 텍스트로 판단 (보조)
  else if (businessInfo.b_stt) {
    const sttText = businessInfo.b_stt.toLowerCase()
    if (sttText.includes('계속') || sttText.includes('사업')) {
      status = '계속사업자'
      statusColor = 'green'
    } else if (sttText.includes('휴업')) {
      status = '휴업자'
      statusColor = 'yellow'
    } else if (sttText.includes('폐업')) {
      status = '폐업자'
      statusColor = 'red'
    }
  }
  
  // 과세유형 변환
  let taxType = '확인 필요'
  
  // tax_type_cd 코드로 판단 (우선)
  if (businessInfo.tax_type_cd === '01') {
    taxType = '일반과세자'
  } else if (businessInfo.tax_type_cd === '02') {
    taxType = '간이과세자'
  } else if (businessInfo.tax_type_cd === '03') {
    taxType = '면세사업자'
  } else if (businessInfo.tax_type_cd === '04') {
    taxType = '비영리법인'
  }
  // tax_type 텍스트로 판단 (보조)
  else if (businessInfo.tax_type) {
    const taxText = businessInfo.tax_type.toLowerCase()
    if (taxText.includes('일반')) {
      taxType = '일반과세자'
    } else if (taxText.includes('간이')) {
      taxType = '간이과세자'
    } else if (taxText.includes('면세')) {
      taxType = '면세사업자'
    }
  }
  
  // 개업일 포맷팅 (YYYYMMDD → YYYY-MM-DD)
  let openDate = '정보 없음'
  if (businessInfo.start_dt) {
    const dt = businessInfo.start_dt
    if (dt.length === 8) {
      openDate = `${dt.substring(0, 4)}-${dt.substring(4, 6)}-${dt.substring(6, 8)}`
    } else {
      openDate = dt
    }
  }
  
  // 폐업일 포맷팅
  let closeDate = null
  if (businessInfo.end_dt && businessInfo.end_dt !== '') {
    const dt = businessInfo.end_dt
    if (dt.length === 8) {
      closeDate = `${dt.substring(0, 4)}-${dt.substring(4, 6)}-${dt.substring(6, 8)}`
    } else {
      closeDate = dt
    }
  }
  
  // 사업자번호 포맷팅 (XXXXXXXXXX → XXX-XX-XXXXX)
  let formattedNumber = businessInfo.b_no || businessNumber
  if (formattedNumber.length === 10) {
    formattedNumber = `${formattedNumber.substring(0, 3)}-${formattedNumber.substring(3, 5)}-${formattedNumber.substring(5, 10)}`
  }
  
  return NextResponse.json({
    success: true,
    data: {
      businessNumber: formattedNumber,
      status: status,
      statusColor: statusColor, // UI에서 색상 결정용
      taxType: taxType,
      openDate: openDate,
      closeDate: closeDate
    }
  })
} else {
  return NextResponse.json(
    { success: false, message: '등록되지 않은 사업자등록번호이거나 조회할 수 없습니다.' },
    { status: 404 }
  )
}

  } catch (error) {
    // ------------------------------------------------
    // 📍 에러 처리
    // ------------------------------------------------
    console.error('API Error:', error)
    return NextResponse.json(
      { success: false, message: '서버 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}