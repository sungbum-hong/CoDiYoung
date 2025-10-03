import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useAuthState, useAuthActions } from '../hooks/useAuth';
import { useAuth } from '../contexts/AuthContext';
import { UserProfileService } from '../services/userProfileService.js';
import { ROUTES } from '../constants/routes.js';
import { MESSAGES } from '../constants/messages.js';

export default function UserProfile() {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user } = useAuthState();
  const { handleLogout } = useAuthActions();
  const { resetState } = useAuth();
  const [profileImage, setProfileImage] = useState(null);
  const [nickname, setNickname] = useState('');

  // 프로필 정보 로드
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await UserProfileService.getMyProfile();
        if (profileData.imageKey) {
          // imageKey가 이미 완전한 URL인지 확인
          if (profileData.imageKey.startsWith('http')) {
            setProfileImage(profileData.imageKey);
          } else {
            const imageUrl = await UserProfileService.getImageUrl(profileData.imageKey);
            setProfileImage(imageUrl);
          }
        }
        if (profileData.nickName) {
          setNickname(profileData.nickName);
        }
      } catch (error) {
        console.error('헤더 프로필 정보 로드 실패:', error);
      }
    };

    loadProfile();
  }, []);

  const onLogout = async () => {
    await handleLogout();
    resetState(); // 폼 상태 초기화 (이메일, 비밀번호 등)
    navigate(ROUTES.HOME);
  };

  const onProfileClick = () => {
    navigate(ROUTES.PROFILE);
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