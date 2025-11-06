export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-10 text-yellow-600">
          개인정보 처리방침
        </h1>

        <div className="space-y-6 leading-relaxed text-[15px]">
          <section>
            <p className="text-xl text-gray-500 mb-2">
              시행일자: <strong>2025-11-11</strong>
            </p>
            <p className="text-xl text-gray-500">
              서비스명: <strong>Codiyoung</strong> (이하 “서비스”)
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mt-6 mb-2 text-gray-900">
              무엇을 수집하나요?
            </h2>
            <span className="font-semibold mt-6 mb-2 text-gray-900">
              · 필수 정보 :{" "}
            </span>
            이름, 연락처, 이메일, 비밀번호(해시 처리), 포지션(코딩, 디자인,
            영상편집), 가입일
            <br />
            <span className="font-semibold mt-6 mb-2 text-gray-900">
              · 선택/자동 수집(사용 시) :{" "}
            </span>
            접속 일시, IP, 기기·브라우저 정보, 쿠키/로그(품질 개선· 보안 목적)
          </section>

          <section>
            <h2 className="font-semibold text-lg mt-6 mb-2 text-gray-900">
              어떻게 수집하나요?
            </h2>
            · 운영자(관리자)가 계정 관리 과정에서 등록 및 수정
          </section>

          <section>
            <h2 className="font-semibold text-lg mt-6 mb-2 text-gray-900">
              왜 사용하나요?
            </h2>
            ·  <span className="font-semibold mt-6 mb-2 text-gray-900">회원관리</span> (본인확인, 공지/문의 응대),  <span className="font-semibold mt-6 mb-2 text-gray-900">서비스 제공· 개선, 보안 및
            부정이용 방지</span>
          </section>

          <section>
            <h2 className="font-semibold text-lg mt-6 mb-2 text-gray-900">
              얼마나 보관하나요?
            </h2>
            · 기본적으로  <span className="font-semibold mt-6 mb-2 text-gray-900">탈퇴 시 지체 없이 파기</span> <br />·  <span className="font-semibold mt-6 mb-2 text-gray-900">법령에 따른 예외 보관:</span>
            소비자 불만· 분쟁처리 기록 3년, 접속기록 3개월
          </section>

          <section>
            <h2 className="font-semibold text-lg mt-6 mb-2 text-gray-900">
              제 3자 제공
            </h2>
            ·  <span className="font-semibold mt-6 mb-2 text-gray-900">제3자 제공:</span> 원칙적으로 하지 않습니다. 필요한 경우, 제공받은
            자/목적/항목/기간을 사전 안내 후 동의를 받습니다.
          </section>

          <section>
            <h2 className="font-semibold text-lg mt-6 mb-2 text-gray-900">
              이용자 권리
            </h2>
            · 마이페이지 또는 고객센터에서 열람· 정정· 삭제· 처리정지·
            동의철회를 요청하실 수 있어요. 신혹히 처리하고 결과를 안내합니다.
          </section>

          <section>
            <h2 className="font-semibold text-lg mt-6 mb-2 text-gray-900">
              보안
            </h2>
            · 마비밀번호는 **단방향 해시(salt 포함)**로 저장합니다
            <br /> · 접근통제· 암호화· 로그관리 등 기술· 관리· 물리적 보호조치를
            적용합니다
          </section>

          <section>
            <h2 className="font-semibold text-lg mt-6 mb-2 text-gray-900">
              고지 및 개정
            </h2>
            · 본 방침이 바뀌면 사유와 적용일을 사전 공지(중요 변경은 통상 30일
            전)합니다.
          </section>
        </div>
      </div>
    </div>
  );
}
