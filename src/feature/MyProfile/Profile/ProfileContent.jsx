import { COLORS } from '../../../utils/colors.js';
import ProfileField from './ProfileField';
import ProfileImageSection from './ProfileImageSection';
import AttendanceStars from '../AttendanceStars';
import { useProfile } from '../hooks/useProfile.js';

export default function ProfileContent() {
  const { data: user, isLoading, error } = useProfile();

  if (isLoading) {
    return (
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="text-center" style={{ color: COLORS.GRAY_500 }}>
          프로필 정보를 불러오는 중...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="text-center" style={{ color: COLORS.ERROR || '#EF4444' }}>
          프로필 정보를 불러오는데 실패했습니다: {error.message}
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="text-center" style={{ color: COLORS.GRAY_500 }}>
          사용자 정보를 불러올 수 없습니다.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white  rounded-lg p-6">

      <div className="space-y-4">
        {/* 프로필 이미지 섹션 */}
        <ProfileImageSection />

        {/* 사용자 정보 필드들 */}
        <ProfileField label="닉네임" value={user.nickName || '닉네임 없음'} />
        <ProfileField label="이메일" value={user.email || '이메일 없음'} />
        <ProfileField label="비밀번호" value="••••••••" />

        {/* 출석 스타 */}
        <div className="mt-6">
          <AttendanceStars />
        </div>
      </div>
    </div>
  );
}
