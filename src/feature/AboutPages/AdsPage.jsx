export default function AdsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-10 text-yellow-600">
          광고/외주
        </h1>

        {/* 배너 광고 섹션 */}
        <section className="space-y-6 mb-16">
          <h2 className="text-xl font-semibold text-gray-900">배너 광고</h2>

          {/* 광고 이미지 영역 */}
          <div className="w-full rounded-2xl overflow-hidden">
            <img
              src="/cdymainbanner.png" // 실제 경로로 교체
              alt="배너 광고 예시"
              className="w-full object-cover"
            />
          </div>

          <p className="text-gray-700 leading-relaxed">
            메인페이지에 자연스러운 노출 광고를 할 수 있습니다.
            <br />
            CODIYOUNG 유저 수에 따라서 금액이 변동되며 기간은 1주일입니다.
          </p>

          {/* 광고 가격표 */}
          <div className="overflow-x-auto">
            <table className="w-full border border-yellow-400 text-center text-sm">
              <thead>
                <tr className="text-gray-800">
                  <th className="border border-yellow-400 py-2 px-3">파일 유형</th>
                  <th className="border border-yellow-400 py-2 px-3">유저수</th>
                  <th className="border border-yellow-400 py-2 px-3">결제 수단</th>
                  <th className="border border-yellow-400 py-2 px-3">기간</th>
                  <th className="border border-yellow-400 py-2 px-3">수정 횟수</th>
                  <th className="border border-yellow-400 py-2 px-3">금액</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-yellow-400 py-2 px-3">Png, jpg</td>
                  <td className="border border-yellow-400 py-2 px-3">1~20명</td>
                  <td className="border border-yellow-400 py-2 px-3">계좌 이체</td>
                  <td className="border border-yellow-400 py-2 px-3">1주일</td>
                  <td className="border border-yellow-400 py-2 px-3">1회</td>
                  <td className="border border-yellow-400 py-2 px-3 font-semibold">
                    50,000원
                  </td>
                </tr>
                <tr>
                  <td className="border border-yellow-400 py-2 px-3">동일</td>
                  <td className="border border-yellow-400 py-2 px-3">20~50명</td>
                  <td className="border border-yellow-400 py-2 px-3">동일</td>
                  <td className="border border-yellow-400 py-2 px-3">동일</td>
                  <td className="border border-yellow-400 py-2 px-3">동일</td>
                  <td className="border border-yellow-400 py-2 px-3 font-semibold">
                    100,000원
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 외주 문의 섹션 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">외주 문의</h2>
          <p className="leading-relaxed text-gray-700">
            코디영은 함께 배우고 성장하는 청년들이 웹/앱 프로젝트를 직접 만들고 운영합니다.
            <br />
            프로젝트 제안이 오면 하고 싶은 마음이 모인 전담 팀을 꾸려 기획–디자인–개발–테스트까지
            책임져요.
            <br />
            비용과 일정은 요구사항에 따라 달라져요. 하고 싶은 서비스 이야기를 들려주시면,
            <br />
            미팅 후 맞춤 견적과 일정을 정중히 제안드리겠습니다.
          </p>
        </section>
      </div>
    </div>
  );
}
