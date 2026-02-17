import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { COLORS } from "../../../../constants/colors";
import ApplicantCard from "./ApplicantCard";

export default function ApplicantListView({ applicants = [], projectTitle, projectId, onBack }: { applicants?: any[]; projectTitle: string; projectId: any; onBack: () => void }) {
  const handleApprove = (applicant: any) => {
    // 승인 로직 구현
  };

  const handleReject = (applicant: any) => {
    // 거절 로직 구현
  };

  return (
    <div className="w-full min-h-screen flex flex-col py-6 px-24">

      {/* 신청자 카드 - 단일 카드로 모든 신청자 표시 */}
      <div className="flex justify-center flex-1">
        <ApplicantCard
          applicants={applicants}
          projectId={projectId}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </div>
    </div>
  );
}