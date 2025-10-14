import { useState } from "react";

export default function UserRoleManagement() {
  const [selectedName, setSelectedName] = useState("김○○");
  const [selectedRole, setSelectedRole] = useState("유저");
  const [openDropdown, setOpenDropdown] = useState(null);

  const names = ["김지호", "김나연", "박상환"];
  const roles = ["유저", "매니저", "관리자", "최고 관리자"];

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const selectName = (name) => {
    setSelectedName(name);
    setOpenDropdown(null);
  };

  const selectRole = (role) => {
    setSelectedRole(role);
    setOpenDropdown(null);
  };

  return (
    <div className="py-6">
      {/* Dropdowns */}
      <div className="flex gap-5 mb-30">
        {/* Name Dropdown */}
        <div className="flex-1 relative">
          <button
            onClick={() => toggleDropdown("name")}
            className="w-full px-5 py-4 border-2 border-pink-600 rounded-xl bg-white flex items-center justify-between hover:bg-pink-50 transition-colors"
          >
            <span className="text-gray-800 font-medium">이름</span>
            <div className="w-0.5 h-5 bg-pink-600 mx-3"></div>
            <span className="font-semibold ml-auto">
              {selectedName}
            </span>
            <span className="text-pink-600 ml-auto">▼</span>
          </button>

          {openDropdown === "name" && (
            <div className="absolute top-full mt-2 left-0 right-0 bg-white border-2 border-pink-600 rounded-xl shadow-lg z-10">
              {names.map((name) => (
                <div
                  key={name}
                  onClick={() => selectName(name)}
                  className="px-5 py-3 hover:bg-pink-50 cursor-pointer first:rounded-t-lg last:rounded-b-lg transition-colors"
                >
                  {name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Role Dropdown */}
        <div className="flex-1 relative">
          <button
            onClick={() => toggleDropdown("role")}
            className="w-full px-5 py-4 border-2 border-pink-600 rounded-xl bg-white flex items-center justify-between hover:bg-pink-50 transition-colors"
          >
            <span className="text-gray-800 font-medium">역할</span>
            <div className="w-0.5 h-5 bg-pink-600 mx-3"></div>
            <span className="font-semibold ml-auto">
              {selectedRole}
            </span>
            <span className="text-pink-600 ml-auto">▼</span>
          </button>

          {openDropdown === "role" && (
            <div className="absolute top-full mt-2 left-0 right-0 bg-white border-2 border-pink-600 rounded-xl shadow-lg z-10">
              {roles.map((role) => (
                <div
                  key={role}
                  onClick={() => selectRole(role)}
                  className="px-5 py-3 hover:bg-pink-50 cursor-pointer first:rounded-t-lg last:rounded-b-lg transition-colors"
                >
                  {role}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Reference Section */}
      <div className="mt-16">
        <div className="text-2xl mb-5 text-gray-800">※ 참고사항</div>

        <div className="border-2 rounded-xl overflow-hidden">
          {/* Header */}
          <div className="flex border-b-3 border-[#FF0066] ">
            <div className="flex-1 px-5 py-5 text-center font-semibold">
              역할
            </div>
            <div className="flex-1 px-5 py-5 text-center font-semibold">
              활동 범위
            </div>
          </div>

          {/* Rows */}
          <div className="flex">
            <div className="flex-1 px-5 py-5 text-center">최고 관리자</div>
            <div className="flex-1 px-5 py-5 text-center">
              모든 설정/권한/데이터 접근
            </div>
          </div>

          <div className="flex">
            <div className="flex-1 px-5 py-5 text-center">관리자</div>
            <div className="flex-1 px-5 py-5 text-center">
              콘텐츠 삭제/배너 관리
            </div>
          </div>

          <div className="flex">
            <div className="flex-1 px-5 py-5 text-center">매니저</div>
            <div className="flex-1 px-5 py-5 text-center">배너관리</div>
          </div>
        </div>
      </div>
    </div>
  );
}
