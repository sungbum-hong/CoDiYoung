import { COLORS } from '../utils/colors.js';

export default function Footer() {
  return (
   <footer className="mt-10 px-9 pt-5 pb-3" style={{ backgroundColor: COLORS.GRAY_100 }}>
      <div className="mb-18 flex justify-between items-center text-sm" style={{ color: COLORS.GRAY_600 }}>
        <div>로고</div>
        <div className="flex gap-4">
          <span>고객센터</span>
          <span>제휴</span>
          <span>공지사항</span>
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
