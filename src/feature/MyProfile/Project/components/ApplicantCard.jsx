import { useState } from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import Button from "../../../../ui/Button";

export default function ApplicantCard({ applicants, onApprove, onReject }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  if (!applicants || applicants.length === 0) {
    return (
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-blue-700 font-semibold underline mb-4">신청자 정보</h2>
        <div className="border-2 border-purple-400 rounded-lg p-6 flex flex-col items-center">
          <p>신청자가 없습니다.</p>
        </div>
      </div>
    );
  }

  const currentApplicant = applicants[selectedIndex];
  const nickname = currentApplicant?.nickname || '신청자';
  const answers = currentApplicant?.answers || [];
  const question = answers[0]?.answerText || '답변 내용이 없습니다.';
  
  // Mock 데이터에서는 position과 tech 정보가 answers에 없을 수 있으므로 기본값 설정
  const position = "프론트엔드"; // 실제로는 applicant.position 또는 answers에서 추출
  const tech = "React"; // 실제로는 applicant.tech 또는 answers에서 추출

  return (
    <div className="w-full max-w-4xl mx-auto p-4 h-full">
      {/* 제목 */}
      <h2 className="font-semibold mb-4">신청자 정보</h2>

      {/* 카드 컨테이너 */}
      <div className="border-2 border-purple-400 rounded-lg p-8 flex flex-col gap-6 h-full min-h-[600px]">
        {/* 번호 버튼 - 유저 선택 */}
        <div className="flex gap-5">
          {applicants.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold transition-colors ${
                selectedIndex === index 
                  ? 'bg-purple-400 text-white' 
                  : 'bg-gray-300 text-black hover:bg-gray-400'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* 프로필 + 닉네임 */}
        <div className="flex items-center gap-6 w-full justify-center">
          <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
            {currentApplicant?.profileImageUrl ? (
              <img 
                src={currentApplicant.profileImageUrl} 
                alt={nickname} 
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <UserIcon className="w-12 h-12 text-gray-600" />
            )}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-xl">닉네임: {nickname}</p>
          </div>
        </div>

        {/* 질문/포지션/기술 */}
        <div className="w-full space-y-8 mt-8 flex-1">
          <div>
            <p className="font-semibold text-lg">1. {question}</p>
          </div>
          <div>
            <p className="font-semibold text-lg">2. 포지션: {position}</p>
          </div>
          <div>
            <p className="font-semibold text-lg">3. 기술: {tech}</p>
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className="flex justify-between w-full mt-auto">
          <Button
            variant="secondary"
            className="px-8 py-3"
          >
            수락
          </Button>
          <Button 
            variant="outline"
            className="px-8 py-3"
          >
            거절
          </Button>
        </div>
      </div>
    </div>
  );
}