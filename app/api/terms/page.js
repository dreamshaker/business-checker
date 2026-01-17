export const metadata = {
  title: '이용약관 - 사업자 조회',
  description: '사업자 조회 서비스 이용약관'
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">이용약관</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">제1조 (목적)</h2>
          <p className="text-gray-700 leading-relaxed">
            본 약관은 사업자등록번호 조회 서비스(이하 "서비스")의 이용과 관련하여 
            회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">제2조 (정의)</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            본 약관에서 사용하는 용어의 정의는 다음과 같습니다:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>"서비스"란 사업자등록번호를 통한 기업 정보 조회 서비스를 의미합니다.</li>
            <li>"이용자"란 본 서비스에 접속하여 본 약관에 따라 서비스를 이용하는 자를 말합니다.</li>
            <li>"회사"란 서비스를 제공하는 사업자를 의미합니다.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">제3조 (서비스의 제공)</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            회사는 다음과 같은 서비스를 제공합니다:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>사업자등록번호를 통한 기업 정보 조회</li>
            <li>사업자 상태 확인 (계속사업자, 휴업, 폐업)</li>
            <li>기업의 기본 정보 제공 (개업일, 대표자명, 주소 등)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">제4조 (서비스의 중단)</h2>
          <p className="text-gray-700 leading-relaxed">
            회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 
            사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">제5조 (정보의 정확성)</h2>
          <p className="text-gray-700 leading-relaxed">
            본 서비스는 공공데이터포털의 API를 통해 정보를 제공하며, 
            회사는 제공된 정보의 정확성에 대해 보증하지 않습니다. 
            정확한 정보는 국세청 홈택스 등 공식 기관을 통해 확인하시기 바랍니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">제6조 (면책조항)</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            회사는 다음 각 호의 경우에 대해 책임을 지지 않습니다:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우</li>
            <li>이용자의 귀책사유로 인한 서비스 이용의 장애</li>
            <li>제공된 정보의 부정확성으로 인한 이용자의 손해</li>
            <li>이용자가 서비스를 이용하여 기대하는 수익을 얻지 못한 경우</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">제7조 (개인정보 보호)</h2>
          <p className="text-gray-700 leading-relaxed">
            회사는 이용자의 개인정보 보호를 위해 노력합니다. 
            개인정보 처리에 관한 자세한 사항은 개인정보처리방침을 참조하시기 바랍니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">제8조 (약관의 변경)</h2>
          <p className="text-gray-700 leading-relaxed">
            회사는 필요한 경우 본 약관을 변경할 수 있으며, 
            변경된 약관은 웹사이트에 공지함으로써 효력이 발생합니다.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            <strong>시행일:</strong> 2026년 1월 15일
          </p>
        </div>

        <div className="mt-8">
          <a 
            href="/" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            ← 홈으로 돌아가기
          </a>
        </div>
      </div>
    </div>
  )
}