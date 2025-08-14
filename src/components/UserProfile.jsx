import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useAuthState, useAuthActions } from '../hooks/useAuth';
import { ROUTES } from '../constants/routes.js';
import { MESSAGES } from '../constants/messages.js';

export default function UserProfile() {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user } = useAuthState();
  const { handleLogout } = useAuthActions();

  const onLogout = () => {
    handleLogout();
    navigate(ROUTES.HOME);
  };

  const onProfileClick = () => {
    navigate(ROUTES.MY_PROFILE);
  };

  return (
    <div className="relative group" ref={dropdownRef}>
      <button className="p-1 rounded-full hover:ring-2 hover:ring-gray-300 transition-all">
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <UserCircleIcon className="w-8 h-8 text-gray-500" />
        )}
      </button>

      {/* 호버 메뉴 */}
      <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <button
          onClick={onProfileClick}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {MESSAGES.UI.MY_PROFILE}
        </button>
        <button
          onClick={onLogout}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {MESSAGES.UI.LOGOUT}
        </button>
      </div>
    </div>
  );
}