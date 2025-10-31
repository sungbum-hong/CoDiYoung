import ChartBar from './ChartBar';
import UserTableCell from './UserTableCell';
import EditButton from './EditButton';

/**
 * 관리자 홈 차트 컴포넌트
 */
export default function AdminHomeChart({ chartData, users, onEditUser }) {
  if (!chartData || !chartData.chartData) {
    return null;
  }

  const { chartData: data } = chartData;
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="overflow-hidden">
      <div className="flex w-full">
        {/* 각 컬럼별로 차트 막대와 테이블 셀을 세로로 정렬 */}
        {data.map((item, index) => (
          <div key={index} className="w-1/5 flex flex-col items-center">
            {/* 차트 막대 */}
            <ChartBar data={item} maxValue={maxValue} />

            {/* 테이블 헤더 */}
            <div className="bg-gray-50 w-full py-3 px-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              {item.name}
            </div>

            {/* 테이블 데이터 */}
            <div className="w-full">
              {users.map((user) => (
                <UserTableCell
                  key={user.id}
                  user={user}
                  columnIndex={index}
                />
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
            {users.map((user) => (
              <div
                key={user.id}
                className="h-12 px-2 text-center flex items-center justify-center border-b border-gray-100 last:border-b-0"
              >
                <EditButton
                  onClick={() => onEditUser && onEditUser(user)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}