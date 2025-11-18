import { FaEdit, FaPlus } from "react-icons/fa";
import { useUserList } from "./hooks/useUserManagement.js";
import { useState } from "react";
import { getMockUserPage } from "../../../mock/userData.js";

export default function UserManagement({setIsOpenAddUser, setIsOpenEditUser}) {
  const [lastUserId, setLastUserId] = useState(null);

  // Mock 데이터 사용 (UI 테스트용)
  const mockData = getMockUserPage(lastUserId, 10);
  const users = mockData.data;
  const nextCursor = mockData.nextCursor;
  const hasNext = mockData.hasNext;
  const isLoading = false;
  const isError = false;
  const error = null;
  const retry = () => console.log('Mock retry called');

  // 실제 API 호출 (현재 주석 처리)
  /*
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
  */

  const columns = [
    { name: "이름", key: "name" },
    { name: "연락처", key: "phoneNumber" },
    { name: "이메일", key: "email" },
    { name: "비밀번호", key: "password" },
    { name: "포지션", key: "userCategory" },
    { name: "가입일", key: "createdAt" },
  ];

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
        <button
          onClick={() => setIsOpenEditUser(true)}
          className="bg-[#FF0066] text-white w-12 h-12 rounded-full hover:bg-pink-700 flex items-center justify-center"
        >
          <FaEdit size={20} />
        </button>
        <button
          onClick={() => setIsOpenAddUser(true)}
          className="bg-[#FF0066] text-white w-12 h-12 rounded-full hover:bg-pink-700 flex items-center justify-center"
        >
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
                      ) : column.key === "password" ? (
                        <span className="text-sm font-mono text-gray-400">
                          {userData[column.key] ? '••••••••' : '-'}
                        </span>
                      ) : (
                        <span className="text-sm">{userData[column.key] || '-'}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
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