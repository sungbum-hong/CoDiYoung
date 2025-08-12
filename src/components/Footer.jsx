export default function Footer() {
  return (
    <footer className="mt-10 bg-gray-100 p-4">
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div>로고</div>
        <div className="flex gap-4">
          <span>고객센터</span>
          <span>제휴</span>
          <span>공지사항</span>
        </div>
      </div>
      <p className="mt-2 text-xs text-gray-400">
        © 2025 YourCompany. All rights reserved.
      </p>
    </footer>
  );
}
