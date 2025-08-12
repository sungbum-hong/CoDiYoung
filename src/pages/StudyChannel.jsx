export default function StudyChannel() {
  const attendanceFilledCount = 2; // 샘플: 채워진 별 개수

  return (
    <div className="min-h-screen bg-white">
      {/* 상단 바: 좌측 로고, 우측 로그인 */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between text-gray-700">
          <span className="text-sm">로고</span>
          <span className="text-sm">로그인</span>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <main className="max-w-6xl mx-auto px-6 pb-16">
        {/* 프로필 & 요약 */}
        <section className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 py-6">
          {/* 큰 프로필 원 */}
          <div className="flex items-center justify-center">
            <div className="w-56 h-56 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="font-semibold text-gray-700">C1</span>
            </div>
          </div>

          {/* 정보 표 */}
          <div className="self-center flex justify-end pr-50">
            <div className="grid grid-cols-[80px_1fr] gap-y-6 gap-x-10 text-gray-800">
              <div className="text-gray-600">분야</div>
              <div className="font-medium">코딩</div>

              <div className="text-gray-600">스터디</div>
              <div className="font-medium">1,234</div>
            </div>
          </div>
        </section>

        {/* 출석체크 */}
        <section className="mt-8">
          <h2 className="text-gray-800 font-medium mb-4">출석체크</h2>
          <AttendanceGrid total={30} filled={attendanceFilledCount} />
        </section>

        {/* 스터디 카드(플레이스홀더) */}
        <section className="mt-10">
          <h2 className="text-gray-800 font-medium mb-4">스터디</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="h-28 rounded-2xl bg-gray-300"
              />
            ))}
          </div>
        </section>

        {/* 참여 프로젝트 */}
        <section className="mt-12">
          <h2 className="text-gray-800 font-medium mb-4">참여 프로젝트</h2>
          <div className="rounded-2xl border-2 border-blue-900 p-6 h-[360px]">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-gray-300 rounded-full" />
              <div className="w-14 h-14 bg-gray-300 rounded-full" />
              <div className="w-14 h-14 bg-gray-300 rounded-full" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function AttendanceGrid({ total = 30, filled = 0 }) {
  const items = Array.from({ length: total });
  return (
    <div className="grid grid-cols-10 gap-6 select-none">
      {items.map((_, index) => (
        <StarIcon key={index} filled={index < filled} />
      ))}
    </div>
  );
}

function StarIcon({ filled = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={
        "w-7 h-7 " + (filled ? "text-blue-900" : "text-gray-300")
      }
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}
