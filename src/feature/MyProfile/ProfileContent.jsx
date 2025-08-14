import ProfileImageSection from './ProfileImageSection';
import ProfileField from './ProfileField';
import AttendanceStars from './AttendanceStars';

export default function ProfileContent() {
  return (
    <main className="flex-1 p-6 flex flex-col gap-6">
      {/* 프로필 이미지 수정 */}
      <ProfileImageSection />

      {/* 닉네임 */}
      <ProfileField label="닉네임" value="DDOLEK" />

      {/* 이메일 */}
      <ProfileField label="이메일" value="coddyyoung@coddyyoun.com" />

      {/* 비밀번호 */}
      <ProfileField label="비밀번호" value="********" />

      {/* 별표 출석 표시 */}
      <AttendanceStars />
    </main>
  );
}