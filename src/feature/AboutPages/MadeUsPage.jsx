export default function MadeUsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        {/* 타이틀 */}
        <h1 className="text-3xl font-bold mb-12 text-yellow-500">
          Made by Us
        </h1>

        {/* 구성원 카드 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-items-center">
          {[
            { role: "PM", desc: "본인 소개 한줄" },
            { role: "Frontend", desc: "본인 소개 한줄" },
            { role: "Backend", desc: "본인 소개 한줄" },
            { role: "Designer", desc: "본인 소개 한줄" },
          ].map((member, i) => (
            <div
              key={i}
              className="flex flex-col items-center space-y-3 text-center"
            >
              {/* 역할 */}
              <h2 className="text-sm font-medium text-gray-900">
                {member.role}
              </h2>

              {/* 프로필 이미지 */}
              <div className="w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                이미지
              </div>

              {/* 소개 문구 */}
              <p className="text-sm text-gray-700">{member.desc}</p>

              {/* 아이콘 or 버튼 자리 */}
              <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
