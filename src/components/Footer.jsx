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

        {/* 카테고리 메뉴 (가로 정렬) */}
        <nav className="ml-auto" aria-label="푸터 카테고리">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm">
            <li>
              <a
                href="/terms"
                className="hover:underline rounded px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/40"
              >
                이용약관
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:underline rounded px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/40"
              >
                개인정보처리방침
              </a>
            </li>
            <li>
              <a
                href="/apply"
                className="hover:underline rounded px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/40"
              >
                신청하기
              </a>
            </li>
            <li>
              <a
                href="/ads"
                className="hover:underline rounded px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/40"
              >
                광고문의
              </a>
            </li>
            <li className="font-medium">
              <a
                href="/about/made-us"
                className="hover:underline rounded px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/40"
              >
                Made Us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* 저작권 문구 */}
      <div className="flex justify-center sm:justify-end mt-4">
        <p className="text-xs" style={{ color: COLORS.GRAY_400 }}>
          © {new Date().getFullYear()} Codiyoung
        </p>
      </div>
    </footer>
  );
}
