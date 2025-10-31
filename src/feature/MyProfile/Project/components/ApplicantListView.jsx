import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { COLORS } from "../../../../constants/colors.js";
import ApplicantCard from "./ApplicantCard.jsx";

export default function ApplicantListView({ applicants = [], projectTitle, projectId, onBack }) {
  const handleApprove = (applicant) => {
    // 승인 로직 구현
  };

  const handleReject = (applicant) => {
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