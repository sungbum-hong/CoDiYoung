import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function AccountCreationForm({setIsOpenAddUser}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    position: "",
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="flex items-center justify-center p-5">
      <div
        className="bg-white border-4 rounded-3xl p-12 w-full"
        style={{ borderColor: "#FF0066" }}
      >
        <h1 className="text-3xl font-semibold text-center mb-12">계정 생성</h1>

        <div className="space-y-10 flex flex-col justify-center">
          {/* 이름 */}
          <div className="flex items-center justify-between">
            <label className="w-24 text-lg font-medium text-right mr-8">
              이름
            </label>
            <div
              className="w-1 h-6 mr-8"
              style={{ backgroundColor: "#FF0066" }}
            ></div>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-80 px-5 py-3 border-2 rounded-2xl text-base outline-none focus:ring-4 transition"
              style={{ borderColor: "#FF0066" }}
              placeholder="이름을 입력하세요"
            />
          </div>

          {/* 이메일 */}
          <div className="flex items-center justify-between">
            <label className="w-24 text-lg font-medium text-right mr-8">
              이메일
            </label>
            <div
              className="w-1 h-6 mr-8"
              style={{ backgroundColor: "#FF0066" }}
            ></div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-80 px-5 py-3 border-2 rounded-2xl text-base outline-none focus:ring-4 transition"
              style={{ borderColor: "#FF0066" }}
              placeholder="이메일을 입력하세요"
            />
          </div>

          {/* 연락처 */}
          <div className="flex items-center justify-between">
            <label className="w-24 text-lg font-medium text-right mr-8">
              연락처
            </label>
            <div
              className="w-1 h-6 mr-8"
              style={{ backgroundColor: "#FF0066" }}
            ></div>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-80 px-5 py-3 border-2 rounded-2xl text-base outline-none focus:ring-4 transition"
              style={{ borderColor: "#FF0066" }}
              placeholder="연락처를 입력하세요"
            />
          </div>

          {/* 비밀번호 */}
          <div className="flex items-center justify-between">
            <label className="w-24 text-lg font-medium text-right mr-8">
              비밀번호
            </label>
            <div
              className="w-1 h-6 mr-8"
              style={{ backgroundColor: "#FF0066" }}
            ></div>
            <div className="w-80 relative">
              <input
                type="text"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className="w-full px-5 py-3 pr-14 border-2 rounded-2xl text-base outline-none focus:ring-4 transition"
                style={{ borderColor: "#FF0066" }}
                placeholder="비밀번호를 입력하세요"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-90 transition"
                style={{ backgroundColor: "#FF0066" }}
              >
                +
              </button>
            </div>
          </div>

          {/* 포지션 */}
          <div className="flex items-center justify-between">
            <label className="w-24 text-lg font-medium text-right mr-8">
              포지션
            </label>
            <div
              className="w-1 h-6 mr-8"
              style={{ backgroundColor: "#FF0066" }}
            ></div>
            <input
              type="text"
              value={formData.position}
              onChange={(e) => handleChange("position", e.target.value)}
              className="w-80 px-5 py-3 border-2 rounded-2xl text-base outline-none focus:ring-4 transition"
              style={{ borderColor: "#FF0066" }}
              placeholder="포지션을 입력하세요"
            />
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex justify-center gap-7 mt-12">
          <button
            onClick={()=>setIsOpenAddUser(false)}
            className="px-12 py-3 border-2 rounded-full text-base font-medium bg-white text-[#FF0066] transition-colors duration-200 hover:bg-[#FF0066] hover:text-white"
          >
            생성
          </button>

          <button
            onClick={() => setIsOpenAddUser(false)}
            className="px-12 py-3 border-2 rounded-full text-base font-medium bg-white hover:bg-gray-50 transition"
            style={{ borderColor: "#FF0066", color: "#FF0066" }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
