'use client'

import React, { useState } from 'react'
import { Search, Building2, CheckCircle, XCircle, Calendar, FileText } from 'lucide-react'

export default function BusinessChecker() {
  // ============================================================
  // 🔹 SECTION 1: STATE 관리
  // ============================================================
  // 사용자 입력 및 결과 데이터를 관리하는 상태들
  
  const [businessNumber, setBusinessNumber] = useState('') // 사업자번호 입력값
  const [result, setResult] = useState(null) // API 조회 결과
  const [loading, setLoading] = useState(false) // 로딩 상태
  const [error, setError] = useState('') // 에러 메시지

  // ============================================================
  // 🔹 SECTION 2: 유틸리티 함수
  // ============================================================
  // 입력 포맷팅, 검증 등 재사용 가능한 함수들
  
  /**
   * 사업자번호를 XXX-XX-XXXXX 형식으로 포맷팅
   * @param {string} value - 입력된 숫자 문자열
   * @returns {string} 포맷팅된 사업자번호
   */
  const formatBusinessNumber = (value) => {
    const numbers = value.replace(/[^\d]/g, '')
    if (numbers.length <= 3) return numbers
    if (numbers.length <= 5) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 5)}-${numbers.slice(5, 10)}`
  }

  /**
   * 사업자번호 유효성 검증 (10자리 숫자 확인)
   * @param {string} num - 검증할 사업자번호
   * @returns {boolean} 유효 여부
   */
  const validateBusinessNumber = (num) => {
    const cleaned = num.replace(/[^\d]/g, '')
    if (cleaned.length !== 10) {
      return false
    }
    return /^\d{10}$/.test(cleaned)
  }

  /**
   * 사업자 상태에 따른 색상 반환
   * @param {string} status - 사업자 상태
   * @returns {string} Tailwind CSS 클래스명
   */
  const getStatusColor = (status) => {
    if (status === '계속사업자') return 'text-green-600'
    if (status === '휴업') return 'text-yellow-600'
    if (status === '폐업') return 'text-red-600'
    return 'text-gray-600'
  }

  /**
   * 사업자 상태에 따른 아이콘 반환
   * @param {string} status - 사업자 상태
   * @returns {JSX.Element} 아이콘 컴포넌트
   */
  const getStatusIcon = (status) => {
    if (status === '계속사업자') return <CheckCircle className="w-5 h-5" />
    if (status === '휴업') return <FileText className="w-5 h-5" />
    return <XCircle className="w-5 h-5" />
  }

  // ============================================================
  // 🔹 SECTION 3: 이벤트 핸들러
  // ============================================================
  // 사용자 인터랙션 처리 함수들
  
  /**
   * 입력값 변경 핸들러
   * 자동 포맷팅 및 에러/결과 초기화
   */
  const handleInputChange = (e) => {
    const formatted = formatBusinessNumber(e.target.value)
    setBusinessNumber(formatted)
    setError('')
    setResult(null)
  }

  /**
   * 검색 버튼 클릭 핸들러
   * API 호출 및 결과 처리
   */
  const handleSearch = async () => {
    const cleaned = businessNumber.replace(/[^\d]/g, '')
    
    // 입력 검증
    if (!validateBusinessNumber(businessNumber)) {
      setError('올바른 사업자등록번호 형식이 아닙니다. (10자리 숫자)')
      return
    }

    setLoading(true)
    setError('')

    try {
      // API 호출
      const response = await fetch('/api/check-business', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ businessNumber: cleaned }),
      })

      const data = await response.json()

      // 응답 처리
      if (response.ok && data.success) {
        setResult(data.data)
      } else {
        setError(data.message || '조회 중 오류가 발생했습니다.')
      }
    } catch (err) {
      setError('서버 연결에 실패했습니다. 잠시 후 다시 시도해주세요.')
    } finally {
      setLoading(false)
    }
  }

  /**
   * 엔터키 입력 핸들러
   */
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  // ============================================================
  // 🔹 SECTION 4: UI 렌더링
  // ============================================================
  
  return (
    <div 
      className="min-h-screen bg-white flex flex-col"
      data-section="main-container"
    >
      {/* ============================================
          🏠 SCREEN SECTION: MAIN CONTENT AREA
          ============================================
          화면 중앙의 메인 콘텐츠 영역
      */}
      <div 
        className="flex-1 flex flex-col items-center justify-center px-4"
        data-section="content-wrapper"
      >
        <div 
          className="w-full max-w-2xl"
          data-section="content-container"
        >
          
          {/* ============================================
              🏠 SCREEN SECTION: HEADER SECTION
              ============================================
              화면 최상단의 헤더 영역
          */}
          <header 
            className="text-center mb-8"
            data-section="header"
            data-screen-section="header-section"
          >
            <div 
              className="flex items-center justify-center gap-3 mb-2"
              data-element="brand-logo-title"
            >
              <Building2 
                className="w-12 h-12 text-blue-600" 
                data-element="brand-icon"
                aria-label="사업자 조회 로고"
              />
              <h1 
                className="text-5xl font-bold text-gray-800"
                data-element="main-title"
              >
                사업자 조회
              </h1>
            </div>
            <p 
              className="text-gray-600 text-sm mt-2"
              data-element="subtitle"
            >
              사업자등록번호로 기업 정보를 확인하세요
            </p>
          </header>

          {/* ============================================
              🔍 SCREEN SECTION: SEARCH SECTION
              ============================================
              검색 입력 및 실행 영역
          */}
          <section 
            className="mb-4"
            data-section="search"
            data-screen-section="search-section"
          >
            {/* 검색 입력창 */}
            <div 
              className="relative mb-4"
              data-element="search-input-container"
            >
              <input
                type="text"
                value={businessNumber}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="사업자등록번호 입력 (예: 123-45-67890)"
                maxLength="12"
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full shadow-sm hover:shadow-md focus:outline-none focus:shadow-lg transition-shadow"
                data-element="search-input"
                aria-label="사업자등록번호 입력"
              />
              <Search 
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" 
                data-element="search-icon"
                aria-hidden="true"
              />
            </div>

            {/* 검색 버튼 */}
            <div 
              className="flex justify-center gap-3"
              data-element="search-button-container"
            >
              <button
                onClick={handleSearch}
                disabled={loading}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                data-element="search-button"
                aria-label="사업자 조회 실행"
              >
                {loading ? '조회 중...' : '사업자 조회'}
              </button>
            </div>

            {/* 에러 메시지 */}
            {error && (
              <div 
                className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
                data-element="error-message"
                role="alert"
              >
                {error}
              </div>
            )}

            {/* 테스트 안내 */}
            <div 
              className="mt-4 text-center text-xs text-gray-500"
              data-element="helper-text"
            >
              <p>💡 테스트용 사업자번호: 123-45-67890 (정상), 234-56-78901 (휴업), 345-67-89012 (폐업)</p>
            </div>
          </section>

          {/* ============================================
              📊 SCREEN SECTION: RESULTS SECTION
              ============================================
              조회 결과 표시 영역
          */}
          {result && (
            <section 
              className="mt-8 bg-white border border-gray-200 rounded-lg shadow-sm p-6 animate-fade-in"
              data-section="results"
              data-screen-section="results-section"
            >
              {/* 결과 헤더 */}
              <div 
                className="flex items-start justify-between mb-4"
                data-element="result-header"
              >
                <div data-element="company-info">
                  <h2 
                    className="text-2xl font-bold text-gray-800"
                    data-element="company-name"
                  >
                    {result.businessName}
                  </h2>
                  <p 
                    className="text-gray-500 text-sm mt-1"
                    data-element="business-number-display"
                  >
                    {result.businessNumber}
                  </p>
                </div>
                
                <div 
                  className={`flex items-center gap-2 px-3 py-1 rounded-full ${getStatusColor(result.status)} bg-opacity-10`}
                  data-element="status-badge"
                  data-status={result.status}
                >
                  {getStatusIcon(result.status)}
                  <span className="font-semibold">{result.status}</span>
                </div>
              </div>

              {/* 상세 정보 테이블 */}
              <div 
                className="space-y-3 mt-6"
                data-element="detail-table"
              >
                {/* 대표자명 */}
                <div 
                  className="flex border-b border-gray-100 pb-3"
                  data-row="representative"
                >
                  <span 
                    className="w-32 text-gray-600 font-medium"
                    data-element="label"
                  >
                    대표자명
                  </span>
                  <span 
                    className="text-gray-800"
                    data-element="value"
                  >
                    {result.representative}
                  </span>
                </div>
                
                {/* 개업일자 */}
                <div 
                  className="flex border-b border-gray-100 pb-3"
                  data-row="open-date"
                >
                  <span 
                    className="w-32 text-gray-600 font-medium"
                    data-element="label"
                  >
                    개업일자
                  </span>
                  <span 
                    className="text-gray-800 flex items-center gap-2"
                    data-element="value"
                  >
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    {result.openDate}
                  </span>
                </div>
                
                {/* 폐업일자 (조건부) */}
                {result.closeDate && (
                  <div 
                    className="flex border-b border-gray-100 pb-3"
                    data-row="close-date"
                  >
                    <span 
                      className="w-32 text-gray-600 font-medium"
                      data-element="label"
                    >
                      폐업일자
                    </span>
                    <span 
                      className="text-gray-800 flex items-center gap-2"
                      data-element="value"
                    >
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      {result.closeDate}
                    </span>
                  </div>
                )}
                
                {/* 과세유형 */}
                <div 
                  className="flex border-b border-gray-100 pb-3"
                  data-row="tax-type"
                >
                  <span 
                    className="w-32 text-gray-600 font-medium"
                    data-element="label"
                  >
                    과세유형
                  </span>
                  <span 
                    className="text-gray-800"
                    data-element="value"
                  >
                    {result.taxType}
                  </span>
                </div>
                
                {/* 사업장주소 */}
                <div 
                  className="flex pb-3"
                  data-row="address"
                >
                  <span 
                    className="w-32 text-gray-600 font-medium"
                    data-element="label"
                  >
                    사업장주소
                  </span>
                  <span 
                    className="text-gray-800"
                    data-element="value"
                  >
                    {result.address}
                  </span>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>

      {/* ============================================
          📄 SCREEN SECTION: FOOTER SECTION
          ============================================
          화면 하단의 푸터 영역
      */}
      <footer 
        className="py-6 text-center text-sm text-gray-500 border-t border-gray-100"
        data-section="footer"
        data-screen-section="footer-section"
      >
        <p className="mb-3" data-element="footer-description">
          사업자등록번호로 기업 정보를 확인하세요
        </p>
        <div className="flex justify-center gap-4 mb-3" data-element="footer-links">
          <a href="/terms" className="text-blue-600 hover:underline">이용약관</a>
          <span>|</span>
          <a href="/privacy" className="text-blue-600 hover:underline">개인정보처리방침</a>
        </div>
        <p className="text-xs" data-element="footer-copyright">
          © 2026 사업자 조회. All rights reserved.
        </p>
      </footer>
    </div>
  )
}