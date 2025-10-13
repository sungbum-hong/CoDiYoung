import { useState, useRef, useEffect } from "react";
import Button from "../../../ui/Button.jsx";
import { COLORS } from "../../../utils/colors.js";
import { MESSAGES } from "../../../constants/messages.js";
import { UserProfileService } from "../../../services/userProfileService.js";
import { useAuthState } from "../../../hooks/useAuth.js";

export default function ProfileImageSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [imageError, setImageError] = useState(null);
  const fileInputRef = useRef(null);
  
  const { user, updateUserProfile } = useAuthState();

  // 컴포넌트 마운트 시 기존 프로필 이미지 로드
  useEffect(() => {
    const loadCurrentProfileImage = async () => {
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
      } catch (error) {
        console.error('기존 프로필 이미지 로드 실패:', error);
      }
    };

    loadCurrentProfileImage();
  }, []);

  const handleToggle = () => {
    setIsEditing((prev) => !prev);
    setImageError(null);
  };

  // 파일 선택 핸들러
  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 파일 변경 핸들러
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // 파일 유효성 검사
    if (!validateFile(file)) {
      return;
    }

    try {
      setIsUploading(true);
      setImageError(null);


      // 이미지 업로드
      const imageKey = await UserProfileService.uploadImageFile(file);

      // 프로필 이미지 업데이트 API 호출
      await UserProfileService.updateProfileImage({ imageKey });

      // 프로필 이미지 URL 가져오기 (표시용)
      // imageKey가 이미 완전한 URL인지 확인
      if (imageKey.startsWith('http')) {
        setProfileImage(imageKey);
      } else {
        const imageUrl = await UserProfileService.getImageUrl(imageKey);
        setProfileImage(imageUrl);
      }

      // 사용자 정보 업데이트 (AuthContext)
      if (updateUserProfile) {
        updateUserProfile({ profileImage: imageKey });
      }

      alert('프로필 이미지가 성공적으로 업데이트되었습니다.');
      setIsEditing(false);

    } catch (error) {
      console.error('프로필 이미지 업로드 실패:', error);
      
      let errorMessage = error.message;
      
      // CORS 에러인 경우 더 명확한 메시지 제공
      if (error.message.includes('NetworkError') || error.message.includes('CORS') || error.message.includes('cross-origin')) {
        errorMessage = 'CORS 설정 문제로 업로드에 실패했습니다.\n백엔드팀에서 Cloudflare R2 CORS 설정을 확인해주세요.';
      }
      
      setImageError(errorMessage);
      alert(`이미지 업로드에 실패했습니다.\n${errorMessage}`);
    } finally {
      setIsUploading(false);
      // 파일 input 초기화
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  // 파일 유효성 검사
  const validateFile = (file) => {
    // 파일 크기 체크 (5MB 제한)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setImageError('파일 크기는 5MB 이하여야 합니다.');
      alert('파일 크기는 5MB 이하여야 합니다.');
      return false;
    }

    // 파일 타입 체크
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setImageError('JPG, PNG, WebP 파일만 업로드할 수 있습니다.');
      alert('JPG, PNG, WebP 파일만 업로드할 수 있습니다.');
      return false;
    }

    return true;
  };

  // 현재 프로필 이미지 URL 가져오기
  const getCurrentProfileImageUrl = () => {
    return profileImage;
  };

  return (
    <div
      className={`border rounded-lg transition-all duration-300 flex items-center p-6 ${
        isEditing ? "h-21" : "h-12"
      }`}
      style={{ borderColor: COLORS.PRIMARY }}
    >
      {/* 숨겨진 파일 입력 */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/webp"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {isEditing ? (
        <div className="flex items-center justify-between w-full">
          {/* 프로필 이미지 표시 */}
          <div className="flex items-center gap-3">
            <div 
              className="w-16 h-16 rounded-full border-2 border-gray-200 overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: COLORS.GRAY_100 }}
            >
              {getCurrentProfileImageUrl() ? (
                <img 
                  src={getCurrentProfileImageUrl()} 
                  alt="프로필 이미지"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div 
                className="w-full h-full flex items-center justify-center text-gray-400 text-xs"
                style={{ display: getCurrentProfileImageUrl() ? 'none' : 'flex' }}
              >
                이미지
              </div>
            </div>
            
            {/* 에러 메시지 */}
            {imageError && (
              <div className="text-red-500 text-xs max-w-xs">
                {imageError}
              </div>
            )}
          </div>
          
          {/* 버튼들 */}
          <div className="flex items-center gap-3">
            <Button 
              variant="secondary" 
              onClick={handleFileSelect}
              disabled={isUploading}
              className={`h-8 text-xs ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isUploading ? (
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 border border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                  업로드 중...
                </div>
              ) : (
                MESSAGES.UI.CHANGE_IMAGE
              )}
            </Button>
            <Button 
              variant="secondary" 
              onClick={handleToggle} 
              disabled={isUploading}
              className={`h-8 text-xs ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {MESSAGES.UI.CHANGE_COMPLETE}
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between w-full">
          {/* 프로필 이미지 표시 (읽기 전용) */}
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 rounded-full border border-gray-200 overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: COLORS.GRAY_100 }}
            >
              {getCurrentProfileImageUrl() ? (
                <img 
                  src={getCurrentProfileImageUrl()} 
                  alt="프로필 이미지"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div 
                className="w-full h-full flex items-center justify-center text-gray-400 text-xs"
                style={{ 
                  display: getCurrentProfileImageUrl() ? 'none' : 'flex',
                  fontSize: '8px'
                }}
              >
                이미지
              </div>
            </div>
            {user?.nickname && (
              <span className="text-sm font-medium">{user.nickname}</span>
            )}
          </div>
          
          <Button variant="secondary" onClick={handleToggle}  className="!h-8 !text-xs disabled:opacity-50">
            {MESSAGES.UI.EDIT}
          </Button>
        </div>
      )}
    </div>
  );
}