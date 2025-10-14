import { FaEdit, FaPlus } from "react-icons/fa";

export default function UserManagement({setIsOpenAddUser}) {
  

  const columns = [
    { name: "이름", key: "name" },
    { name: "연락처", key: "phone_number" },
    { name: "이메일", key: "email" },
    { name: "비밀번호", key: "password" },
    { name: "포지션", key: "position" },
    { name: "가입일", key: "createAt" },
  ];

  const userDatas = [
    {
      name: "지호",
      phone_number: "010-0000-0001",
      email: "coding1@test.com",
      password: "Password1!",
      position: "CODING",
      createAt: "2025-01-01",
    },
    {
      name: "민수",
      phone_number: "010-0000-0002",
      email: "coding2@test.com",
      password: "Password2!",
      position: "DESIGN",
      createAt: "2025-01-02",
    },
    {
      name: "영희",
      phone_number: "010-0000-0003",
      email: "coding3@test.com",
      password: "Password3!",
      position: "PLANNING",
      createAt: "2025-01-03",
    },
    {
      name: "철수",
      phone_number: "010-0000-0004",
      email: "coding4@test.com",
      password: "Password4!",
      position: "CODING",
      createAt: "2025-01-04",
    },
  ];
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
                {userDatas.map((userData, userIndex) => (
                  <div
                    key={userIndex}
                    className="h-12 px-2 text-center text-sm text-gray-500 flex items-center justify-center border-b border-gray-100 last:border-b-0"
                  >
                    {column.key === "name" ? (
                      <span className="font-medium text-gray-900 text-sm">
                        {userData[column.key]}
                      </span>
                    ) : column.key === "password" ? (
                      <span className="text-sm">••••••••</span>
                    ) : (
                      <span className="text-sm">{userData[column.key]}</span>
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
              {userDatas.map((userData, userIndex) => (
                <div
                  key={userIndex}
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
      </div>
    </div>
  );
}
