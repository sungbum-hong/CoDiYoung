// AdminSidebar.jsx (fixed 제거)

import { useState } from "react";

export default function AdminSidebar({ activeMenu, setActiveMenu }) {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = ["홈", "사용자 관리", "콘텐츠 관리", "공지/배너", "설정"];

  return (
    <aside
      className={`w-48 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`}
    >
      <ul className="space-y-2 mx-5 font-medium text-center mt-4">
        {menuItems.map((item) => {
          const isActive = activeMenu === item;
          return (
            <li key={item}>
              <button
                onClick={() => setActiveMenu(item)}
                className={`flex items-center justify-center w-full my-2 py-3 rounded-full text-lg transition-colors ${
                  isActive
                    ? "bg-[#FF0066] text-white font-semibold"
                    : "hover:bg-[#FF0066] hover:text-white text-gray-700"
                }`}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
