import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "../../../constants/routes.js";
import useAuthStore from "../../../stores/authStore.js";

export default function AdminSidebar({ currentPath }) {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const menuItems = [
    { label: "홈", path: ADMIN_ROUTES.HOME },
    { label: "콘텐츠 관리", path: ADMIN_ROUTES.CONTENT },
    { label: "사용자 관리", path: ADMIN_ROUTES.USERS },
    { label: "공지/배너", path: ADMIN_ROUTES.BANNER },
    { label: "설정", path: ADMIN_ROUTES.SETTINGS },
  ];

  const handleLogout = async () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      await logout();
      navigate("/admin/login", { replace: true });
    }
  };

  return (
    <aside
      className={`w-48 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`}
    >
      <ul className="space-y-2 mx-5 font-medium text-center mt-4">
        {menuItems.map((item) => {
          const isActive = currentPath === item.path;
          return (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center justify-center w-full my-2 py-3 rounded-full text-lg transition-colors ${
                  isActive
                    ? "bg-[#FF0066] text-white font-semibold"
                    : "hover:bg-[#FF0066] hover:text-white text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}

        {/* 로그아웃 버튼 */}
        <li className="mt-8">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full my-2 py-3 rounded-full text-lg transition-colors bg-red-500 text-white hover:bg-red-600"
          >
            로그아웃
          </button>
        </li>
      </ul>
    </aside>
  );
}
