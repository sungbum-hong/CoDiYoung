import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { useUserList, useDeleteUser } from "./hooks/useUserManagement.js";
import { useState } from "react";

export default function UserManagement({ setIsOpenAddUser, setIsOpenEditUser, setSelectedUser }) {
  const [selectedUserId, setSelectedUserId] = useState(null);

  // API 데이터 사용
  const {
    users,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    retry
  } = useUserList({ limit: 10 });

  // 행 클릭 핸들러
  const handleRowClick = (userId) => {
    setSelectedUserId(selectedUserId === userId ? null : userId);
  };

  // 선택된 사용자 정보 가져오기
  const selectedUser = users.find(user => user.id === selectedUserId);

  const { mutate: deleteUser, isPending: isDeleting } = useDeleteUser();

  const handleDelete = () => {
    if (!selectedUserId) return;

    if (window.confirm('정말로 이 사용자를 삭제하시겠습니까?')) {
      deleteUser(selectedUserId, {
        onSuccess: () => {
          setSelectedUserId(null);
          alert('사용자가 삭제되었습니다.');
        },
        onError: (error) => {
          alert(error.message || '사용자 삭제에 실패했습니다.');
        }
      });
    }
  };

  const columns = [
    { name: "이름", key: "name" },
    { name: "연락처", key: "phoneNumber" },
    { name: "이메일", key: "email" },
    { name: "비밀번호", key: "password" },
    { name: "포지션", key: "category" },
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
      <div className="mb-6 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          {selectedUserId ? (
            <span className="text-pink-600 font-medium">
              선택됨: {selectedUser?.name} ({selectedUser?.email})
            </span>
          ) : (
            <span>수정할 사용자를 선택해주세요</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (selectedUserId && selectedUser) {
                setSelectedUser(selectedUser);
                setIsOpenEditUser(true);
              }
            }}
            disabled={!selectedUserId}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${selectedUserId
              ? 'bg-[#FF0066] text-white hover:bg-pink-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
          >
            <FaEdit size={20} />
          </button>
          <button
            onClick={handleDelete}
            disabled={!selectedUserId || isDeleting}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${selectedUserId
              ? 'bg-gray-500 text-white hover:bg-gray-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
          >
            <FaTrash size={18} />
          </button>
          <button
            onClick={() => setIsOpenAddUser(true)}
            className="bg-[#FF0066] text-white w-12 h-12 rounded-full hover:bg-pink-700 flex items-center justify-center"
          >
            <FaPlus size={20} />
          </button>
        </div>
      </div>

      {users.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-32">
          <div className="text-gray-500 mb-2">등록된 사용자가 없습니다.</div>
          <div className="text-sm text-gray-400">
            상단의 + 버튼을 클릭하여 새 사용자를 추가하세요.
          </div>
        </div>
      ) : (
        <div className="overflow-hidden">
          <div className="flex w-full">
            {columns.map((column, index) => (
              <div key={index} className="flex-1 flex flex-col">
                <div className="w-full py-3 px-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {column.name}
                </div>
                <div className="w-full">
                  {users.map((userData, userIndex) => (
                    <div
                      key={userData.id || userIndex}
                      onClick={() => handleRowClick(userData.id)}
                      className={`h-12 px-2 text-center text-sm flex items-center justify-center border-b border-gray-100 last:border-b-0 cursor-pointer transition-colors duration-200 ${selectedUserId === userData.id
                        ? 'bg-pink-100 text-pink-800 border-pink-200'
                        : 'text-gray-500 hover:bg-gray-50'
                        }`}
                    >
                      {column.key === "name" ? (
                        <span className={`font-medium text-sm ${selectedUserId === userData.id ? 'text-pink-900' : 'text-gray-900'
                          }`}>
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

          {hasNextPage && (
            <div className="mt-4 text-center">
              <button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className="px-4 py-2 bg-[#FF0066] text-white rounded hover:bg-pink-700 disabled:opacity-50"
              >
                {isFetchingNextPage ? '로딩 중...' : '더 보기'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
