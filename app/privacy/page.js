export const metadata = {
  title: '개인정보처리방침 - 사업자 조회',
  description: '사업자 조회 서비스 개인정보처리방침'
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">개인정보처리방침</h1>
        
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800 text-sm">
            본 서비스는 사업자등록번호 조회 기능만을 제공하며, 
            별도의 회원가입 없이 이용 가능합니다.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">1. 개인정보의 처리 목적</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            회사는 다음의 목적을 위하여 개인정보를 처리합니다. 
            처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
            이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 
            별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>서비스 제공 및 운영</li>
            <li>서비스 개선 및 통계 분석</li>
            <li>부정 이용 방지</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">2. 개인정보의 처리 및 보유기간</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            본 서비스는 다음과 같이 개인정보를 처리합니다:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>사업자등록번호:</strong> 조회 요청 시에만 임시로 사용되며, 서버에 저장되지 않습니다.</li>
            <li><strong>쿠키 정보:</strong> Google Analytics 및 광고 서비스를 위해 사용될 수 있으며, 브라우저 설정을 통해 거부할 수 있습니다.</li>
            <li><strong>접속 로그:</strong> 서비스 개선을 위해 익명화된 접속 기록이 수집될 수 있으며, 통계 목적으로만 사용됩니다.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">3. 개인정보의 제3자 제공</h2>
          <p className="text-gray-700 leading-relaxed">
            회사는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 
            다만, 다음의 경우에는 예외로 합니다:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-3">
            <li>이용자가 사전에 동의한 경우</li>
            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">4. 개인정보의 파기</h2>
          <p className="text-gray-700 leading-relaxed">
            본 서비스는 사업자등록번호를 포함한 조회 정보를 서버에 저장하지 않으므로, 
            별도의 파기 절차 없이 조회 즉시 자동으로 삭제됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">5. 정보주체의 권리·의무 및 행사방법</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>개인정보 열람 요구</li>
            <li>개인정보 오류 등이 있을 경우 정정 요구</li>
            <li>개인정보 삭제 요구</li>
            <li>개인정보 처리정지 요구</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            다만, 본 서비스는 개인정보를 저장하지 않으므로 위 권리 행사가 필요하지 않을 수 있습니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">6. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            회사는 서비스 개선 및 맞춤형 서비스 제공을 위해 쿠키를 사용할 수 있습니다:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>쿠키란?</strong> 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에 보내는 작은 텍스트 파일로, 이용자의 컴퓨터 하드디스크에 저장됩니다.</li>
            <li><strong>사용 목적:</strong> Google Analytics를 통한 방문 통계, 광고 서비스</li>
            <li><strong>거부 방법:</strong> 브라우저 설정에서 쿠키 저장을 거부할 수 있습니다. 다만, 이 경우 서비스 이용에 불편이 있을 수 있습니다.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">7. 개인정보 보호책임자</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 
            개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 
            아래와 같이 개인정보 보호책임자를 지정하고 있습니다:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700"><strong>개인정보 보호책임자</strong></p>
            <p className="text-gray-700 mt-2">이메일: privacy@example.com</p>
            <p className="text-gray-700">※ 개인정보 보호 담당부서로 연결됩니다.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">8. 개인정보 처리방침 변경</h2>
          <p className="text-gray-700 leading-relaxed">
            이 개인정보 처리방침은 시행일로부터 적용되며, 
            법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 
            변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
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