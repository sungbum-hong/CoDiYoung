"use client";

import { useRef, useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useAuthState, useAuthActions } from '../hooks/useAuth';
import useAuthStore from '../stores/authStore.js';
import { ROUTES } from '../constants/routes.js';
import { MESSAGES } from '../constants/messages.js';
export default function UserProfile() {
  const dropdownRef = useRef(null);
  const router = useRouter();
  const { user } = useAuthState();
  const { handleLogout } = useAuthActions();
  const resetState = useAuthStore((state) => state.resetState);
  const [profileImage, setProfileImage] = useState(null);
  const [nickname, setNickname] = useState('');

  // 프로필 정보 로드 (Mock)
  useEffect(() => {
    // Mock data for profile
    setProfileImage("https://api.dicebear.com/9.x/avataaars/svg?seed=Felix");
    setNickname("Mock User");
  }, []);

  const onLogout = async () => {
    await handleLogout();
    resetState(); // 폼 상태 초기화 (이메일, 비밀번호 등)
    router.push(ROUTES.HOME);
  };

  const onProfileClick = () => {
    router.push(ROUTES.PROFILE);
  };

  return (
    <div className="relative group" ref={dropdownRef}>
      <button className="p-1 rounded-full hover:ring-2 hover:ring-gray-300 transition-all">
        {profileImage ? (
          <img
            src={profileImage}
            alt={nickname || user?.name || '프로필'}
            className="w-8 h-8 rounded-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
        ) : null}
        <UserCircleIcon 
          className={`w-8 h-8 text-gray-500 ${profileImage ? 'hidden' : 'block'}`} 
        />
      </button>

      {/* 호버 메뉴 */}
      <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <button
          onClick={onProfileClick}
          className="btn-menu-item"
        >
          {MESSAGES.UI.MY_PROFILE}
        </button>
        <button
          onClick={onLogout}
          className="btn-menu-item"
        >
          {MESSAGES.UI.LOGOUT}
        </button>
      </div>
    </div>
  );
}