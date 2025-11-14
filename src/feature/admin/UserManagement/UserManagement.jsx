import { FaEdit, FaPlus } from "react-icons/fa";
import { useUserList, useUpdateOfflineCount } from "./hooks/useUserManagement.js";
import { useState, useCallback } from "react";

export default function UserManagement({setIsOpenAddUser}) {
  const [lastUserId, setLastUserId] = useState(null);
  const {
    users,
    nextCursor,
    hasNext,
    isLoading,
    isError,
    error,
    retry,
    rawData
  } = useUserList({ lastUserId, limit: 10 });


  const updateOfflineCountMutation = useUpdateOfflineCount();

  const columns = [
    { name: "이름", key: "name" },
    { name: "연락처", key: "phoneNumber" },
    { name: "이메일", key: "email" },
    { name: "포지션", key: "userCategory" },
    { name: "가입일", key: "createdAt" },
    { name: "오프라인 횟수", key: "offlineCount" },
  ];

  const handleOfflineCountEdit = useCallback((userId, currentCount) => {
    const newCount = prompt(`새로운 오프라인 참가 횟수를 입력하세요 (현재: ${currentCount})`);
    if (newCount !== null && !isNaN(newCount)) {
      updateOfflineCountMutation.mutate({
        userId: userId,
        count: parseInt(newCount)
      });
    }
  }, [updateOfflineCountMutation]);

  // 로딩 상태
  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-32">
          <div className="text-gray-500">사용자 목록을 불러오는 중...</div>
        </div>
      </div>
    );
  }

  // 에러 상태
  if (isError) {
    return (
      <div className="p-6">
        <div className="flex flex-col items-center justify-center h-32">
          <div className="text-red-500 mb-2">
            {error?.message || '사용자 목록을 불러오는데 실패했습니다.'}
          </div>
          <button
            onClick={retry}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            다시 시도
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-end gap-2">
        <button className="bg-[#FF0066] text-white w-12 h-12 rounded-full hover:bg-pink-700 flex items-center justify-center">
          <FaEdit size={20} />
        </button>
        <button onClick={()=>{setIsOpenAddUser(true)}} className="bg-[#FF0066] text-white w-12 h-12 rounded-full hover:bg-pink-700 flex items-center justify-center">
          <FaPlus size={20} />
        </button>
      </div>

      {/* 빈 상태 */}
      {users.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-32">
          <div className="text-gray-500 mb-2">등록된 사용자가 없습니다.</div>
          <div className="text-sm text-gray-400">
            상단의 + 버튼을 클릭하여 새 사용자를 추가하세요.
          </div>
        </div>
      ) : (
        <div className="overflow-hidden">
          {/* Flex 컨테이너로 컬럼 정렬 */}
          <div className="flex w-full">
            {/* 각 컬럼별로 헤더와 데이터를 세로로 정렬 */}
            {columns.map((column, index) => (
              <div key={index} className="flex-1 flex flex-col">
                {/* 테이블 헤더 */}
                <div className="w-full py-3 px-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {column.name}
                </div>

                {/* 테이블 데이터 */}
                <div className="w-full">
                  {users.map((userData, userIndex) => (
                    <div
                      key={userData.id || userIndex}
                      className="h-12 px-2 text-center text-sm text-gray-500 flex items-center justify-center border-b border-gray-100 last:border-b-0"
                    >
                      {column.key === "name" ? (
                        <span className="font-medium text-gray-900 text-sm">
                          {userData[column.key]}
                        </span>
                      ) : column.key === "createdAt" ? (
                        <span className="text-sm">
                          {userData[column.key] ? new Date(userData[column.key]).toLocaleDateString() : '-'}
                        </span>
                      ) : column.key === "offlineCount" ? (
                        <button
                          className="text-sm text-blue-600 hover:underline"
                          onClick={() => handleOfflineCountEdit(userData.id, userData.offlineCount || 0)}
                        >
                          {userData.offlineCount || 0}
                        </button>
                      ) : (
                        <span className="text-sm">{userData[column.key] || '-'}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* 편집 컬럼 */}
            <div className="w-20 flex flex-col">
              <div className="w-full py-3 px-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                편집
              </div>

              <div className="w-full">
                {users.map((userData, userIndex) => (
                  <div
                    key={userData.id || userIndex}
                    className="h-12 px-2 text-center flex items-center justify-center border-b border-gray-100 last:border-b-0"
                  >
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 더 보기 버튼 */}
          {hasNext && (
            <div className="mt-4 text-center">
              <button
                onClick={() => setLastUserId(nextCursor)}
                className="px-4 py-2 bg-[#FF0066] text-white rounded hover:bg-pink-700"
              >
                더 보기
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
