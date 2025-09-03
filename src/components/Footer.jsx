import { COLORS } from '../utils/colors.js';

export default function Footer() {
  return (
    <footer
      className="relative mt-10 px-9 pt-6 pb-3"
      style={{
        background: "linear-gradient(to bottom, #f9f9ff, #f3e8ff)", // ✅ 그라데이션 적용
      }}
    >
      <div
        className="mb-18 flex justify-between items-center text-sm relative"
        style={{ color: COLORS.GRAY_600 }}
      >
        {/* 로고 이미지만 별도 위치 조정 */}
        <div className="absolute left-1 top-7/3 -translate-y-1/2">
          <img
            src="/cdylogo.png"
            alt="Company Logo"
            className="h-14 w-auto"
          />
        </div>

        {/* 메뉴는 오른쪽에 그대로 */}
        <div className="flex gap-12 ml-auto">
          <span>제휴문의</span>
          <span>신청하기</span>
          <span>SNS</span>
        </div>
      </div>

      {/* 저작권 문구 오른쪽 하단 */}
      <div className="flex justify-end mt-4">
        <p className="text-xs" style={{ color: COLORS.GRAY_400 }}>
          © 2025 YourCompany. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
