import { COLORS } from "../constants/colors.js";

export default function Footer() {
  return (
    <footer
      className="relative mt-10 px-9 pt-6 pb-3"
      style={{
        background: "linear-gradient(to bottom, #f9f9ff, #f3e8ff)",
      }}
    >
      <div
        className="mb-18 flex items-center relative"
        style={{ color: COLORS.GRAY_600 }}
      >
        {/* 로고 */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 translate-y-2">
          <img src="/cdylogo.png" alt="Company Logo" className="h-14 w-auto" />
        </div>

        {/* 메뉴는 오른쪽에 그대로 (심플 버전) */}
        <nav className="ml-auto">
          <div className="grid grid-cols-3 gap-8 text-center text-xs sm:text-sm">
            {/* 제휴문의 */}
            <div className="flex flex-col items-center gap-5 leading-normal">
              <span>제휴문의</span>
              <div className="flex justify-center">
                {/* 아이콘 */}
                <svg
                  className="w-6 h-6 block"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 12l3 3a2 2 0 1 1-3 3l-4-4" />
                  <path d="M16 8l-4 4-2-2 4-4" />
                  <path d="M2 12l5-5a3 3 0 0 1 4.2 0L12 7" />
                  <path d="M22 12l-5-5a3 3 0 0 0-4.2 0L12 7" />
                </svg>
              </div>
            </div>

            {/* 신청하기 */}
            <div className="flex flex-col items-center gap-5 leading-normal">
              <span>신청하기</span>
              <div className="flex justify-center">
                <svg
                  className="w-6 h-6 block"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
              </div>
            </div>

            {/* SNS */}
            <div className="flex flex-col items-center gap-5 leading-normal">
              <span>SNS</span>
              <div className="flex justify-center gap-3">
                <svg
                  className="w-5 h-5 block"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* 저작권 문구 */}
      <div className="flex justify-center sm:justify-end mt-4">
        <p className="text-xs" style={{ color: COLORS.GRAY_400 }}>
          © 2025 YourCompany. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
