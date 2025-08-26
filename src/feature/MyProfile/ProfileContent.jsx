import { useUI } from '../../contexts/UIContext';
import ProfileField from './ProfileField';
import ProfileImageSection from './ProfileImageSection';
import AttendanceStars from './AttendanceStars';

export default function ProfileContent() {
  const { user } = useUI();

  if (!user) {
    return (
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="text-center text-gray-500">
          사용자 정보를 불러올 수 없습니다.
        </div>
      </div>
    );
  }

  return (
    <main className="flex-1 p-6 flex flex-col gap-10">
      {/* 프로필 이미지 섹션 */}
      <ProfileImageSection />

      <div className="bg-white shadow-sm rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">프로필 정보</h1>

        <div className="space-y-4">
          {/* 사용자 정보 필드들 */}
          <ProfileField label="이름" value={user.name} />
          <ProfileField label="이메일" value={user.email} />
          <ProfileField label="전화번호" value={user.phone} />
          <ProfileField label="비밀번호" value="••••••••" />

          {/* 출석 스타 */}
          <div className="mt-6">
            <AttendanceStars />
          </div>
        </div>
      </div>
    </main>
  );
}
