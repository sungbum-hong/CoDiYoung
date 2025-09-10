import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { COLORS } from "../../../../utils/colors.js";
import ApplicantCard from "./ApplicantCard.jsx";

export default function ApplicantListView({ applicants = [], projectTitle, onBack }) {
  const handleApprove = (applicant) => {
    console.log('승인:', applicant);
    // 승인 로직 구현
  };

  const handleReject = (applicant) => {
    console.log('거절:', applicant);
    // 거절 로직 구현
  };

  return (
    <div className="w-full min-h-screen flex flex-col py-6 px-24">

      {/* 신청자 카드 - 단일 카드로 모든 신청자 표시 */}
      <div className="flex justify-center flex-1">
        <ApplicantCard
          applicants={applicants}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </div>
    </div>
  );
}