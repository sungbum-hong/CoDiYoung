import { COLORS } from "../../utils/colors.js";
import useStudyChannelStore from "../../stores/studyChannelStore.js";

export default function ProfileSection() {
  const { profile } = useStudyChannelStore();

  return (
    <section className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 py-6">
      {/* 큰 프로필 원 */}
      <div className="flex items-center justify-center">
        <div className="w-56 h-56 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.GRAY_300 }}>
          <span className="font-semibold text-gray-700">C1</span>
        </div>
      </div>

      {/* 정보 표 */}
      <div className="self-center flex justify-end pr-50">
        <div className="grid grid-cols-[80px_1fr] gap-y-6 gap-x-10" style={{ color: COLORS.GRAY_800 }}>
          <div className="text-gray-600">분야</div>
          <div className="font-medium">{profile.category}</div>

          <div className="text-gray-600">스터디</div>
          <div className="font-medium">{profile.studyCount.toLocaleString()}</div>
        </div>
      </div>
    </section>
  );
}