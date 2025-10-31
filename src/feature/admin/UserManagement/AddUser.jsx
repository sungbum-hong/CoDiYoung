import { useState } from "react";
import { AdminApiService } from "../../../services/admin/adminApi";
export default function AccountCreationForm({ setIsOpenAddUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    userCategory: "CODING",
    nickname: "",
  });
  const apiTestFunc = async (userData) => {
    try {
      const result = await AdminApiService.createAdmin(userData);

      alert("계정이 성공적으로 생성되었습니다!");
      setIsOpenAddUser(false); // 성공 시 모달 닫기

      return result;
    } catch (error) {
      alert("오류 발생: " + error.message);
    }
  };

  const getRandomPassword = (length = 12) => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{};:,.<>?";
    const all = upper + lower + numbers + symbols;

    let password = "";
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (password.length < length) {
      password += all[Math.floor(Math.random() * all.length)];
    }

    // 랜덤 순서로 섞기
    const resultPassword = password
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");

    // ✅ formData의 password만 새 값으로 업데이트
    setFormData((prev) => ({
      ...prev,
      password: resultPassword,
    }));
  };

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
              required
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
              required
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
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              className="w-80 px-5 py-3 border-2 rounded-2xl text-base outline-none focus:ring-4 transition"
              style={{ borderColor: "#FF0066" }}
              placeholder="010-1234-5678"
              required
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
                type="password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className="w-full px-5 py-3 pr-14 border-2 rounded-2xl text-base outline-none focus:ring-4 transition"
                style={{ borderColor: "#FF0066" }}
                placeholder="비밀번호를 입력하세요"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-90 transition"
                onClick={() => getRandomPassword()}
                style={{ backgroundColor: "#FF0066" }}
              >
                +
              </button>
            </div>
          </div>

          {/* 닉네임 */}
          <div className="flex items-center justify-between">
            <label className="w-24 text-lg font-medium text-right mr-8">
              닉네임
            </label>
            <div
              className="w-1 h-6 mr-8"
              style={{ backgroundColor: "#FF0066" }}
            ></div>
            <input
              type="text"
              value={formData.nickname}
              onChange={(e) => handleChange("nickname", e.target.value)}
              className="w-80 px-5 py-3 border-2 rounded-2xl text-base outline-none focus:ring-4 transition"
              style={{ borderColor: "#FF0066" }}
              placeholder="닉네임을 입력하세요"
              required
            />
          </div>

          {/* 사용자 카테고리 */}
          <div className="flex items-center justify-between">
            <label className="w-24 text-lg font-medium text-right mr-8">
              카테고리
            </label>
            <div
              className="w-1 h-6 mr-8"
              style={{ backgroundColor: "#FF0066" }}
            ></div>
            <select
              value={formData.userCategory}
              onChange={(e) => handleChange("userCategory", e.target.value)}
              className="w-80 px-5 py-3 border-2 rounded-2xl text-base outline-none focus:ring-4 transition"
              style={{ borderColor: "#FF0066" }}
              required
            >
              <option value="CODING">CODING</option>
              <option value="DESIGN">DESIGN</option>
              <option value="VIDEO_EDITING">VIDEO_EDITING</option>
            </select>
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex justify-center gap-7 mt-12">
          <button
            onClick={() => apiTestFunc(formData)}
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
