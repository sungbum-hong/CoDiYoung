import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function AdminHome() {
  const data = [
    { name: "프로필", value: 4000 },
    { name: "이름", value: 3000 },
    { name: "스터디", value: 2000 },
    { name: "프로젝트", value: 2780 },
    { name: "오프라인", value: 1890 },
  ];

  const users = [
    { id: 1, name: "지호", study: 2, project: 5, offline: 0 },
    { id: 2, name: "민수", study: 3, project: 2, offline: 1 },
    { id: 3, name: "영희", study: 1, project: 8, offline: 2 },
    { id: 4, name: "철수", study: 4, project: 3, offline: 0 },
  ];

  return (
    <div className="p-6">
      <div className="overflow-hidden">
        {/* Flex 컨테이너로 차트와 테이블을 정렬 */}
        <div className="flex w-full">
          {/* 각 컬럼별로 차트 막대와 테이블 셀을 세로로 정렬 */}
          {data.map((item, index) => (
            <div key={index} className="w-1/5 flex flex-col items-center">
              {/* 차트 막대 */}
              <div className="h-40 flex items-end justify-center pb-2">
                <div
                  className="bg-[#FF0066] rounded-t"
                  style={{
                    width: '40px',
                    height: `${(item.value / Math.max(...data.map(d => d.value))) * 120}px`
                  }}
                ></div>
              </div>

              {/* 테이블 헤더 */}
              <div className="bg-gray-50 w-full py-3 px-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                {item.name}
              </div>

              {/* 테이블 데이터 */}
              <div className="w-full">
                {users.map((user, userIndex) => (
                  <div key={user.id} className="h-12 px-2 text-center text-sm text-gray-500 flex items-center justify-center border-b border-gray-100 last:border-b-0">
                    {index === 0 ? (
                      <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto flex items-center justify-center">
                        <span className="text-xs font-semibold text-gray-600">{user.name.charAt(0)}</span>
                      </div>
                    ) : index === 1 ? (
                      <span className="font-medium text-gray-900 text-sm">{user.name}</span>
                    ) : index === 2 ? (
                      <span className="text-sm">{user.study}</span>
                    ) : index === 3 ? (
                      <span className="text-sm">{user.project}</span>
                    ) : (
                      <span className="text-sm">{user.offline}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* 편집 컬럼 */}
          <div className="w-1/6 flex flex-col items-center">
            <div className="h-40 flex items-end justify-center pb-2">
              {/* 편집 컬럼에는 차트 없음 */}
            </div>

            <div className="bg-gray-50 w-full py-3 px-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              편집
            </div>

            <div className="w-full">
              {users.map((user, userIndex) => (
                <div key={user.id} className="h-12 px-2 text-center flex items-center justify-center border-b border-gray-100 last:border-b-0">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
