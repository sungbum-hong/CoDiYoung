import { useState } from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import Button from "../../../../ui/Button";
import { ProjectService } from "../../../../services/projectService.js";

export default function ApplicantCard({ applicants, projectId, onApprove, onReject }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  
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
  const nickname = currentApplicant?.nickName || '신청자';
  const answers = currentApplicant?.answers || [];
  const firstAnswer = answers[0];
  const question = firstAnswer?.answer || '답변 내용이 없습니다.';
  const questionText = firstAnswer?.questions || '질문 내용이 없습니다.';
  
  // 신청자의 포지션과 기술 정보 (실제 API에서는 별도 필드로 제공되어야 함)
  const position = currentApplicant?.position || "미설정";
  const techs = currentApplicant?.techs || "미설정";
  
  console.log("===== ApplicantCard 디버깅 =====");
  console.log("현재 신청자:", currentApplicant);
  console.log("닉네임:", nickname);
  console.log("사용자 ID:", currentApplicant?.userId);
  console.log("프로젝트 ID:", projectId);
  console.log("포지션:", position);
  console.log("기술:", techs);
  console.log("답변 배열:", answers);
  console.log("첫 번째 답변:", firstAnswer);
  
  // 승인 처리
  const handleApprove = async () => {
    if (!currentApplicant?.userId || !projectId) {
      alert("필요한 정보가 부족합니다.");
      return;
    }
    
    setIsProcessing(true);
    try {
      await ProjectService.approveApplicant(projectId, currentApplicant.userId);
      alert(`${nickname} 신청자를 승인했습니다.`);
      if (onApprove) onApprove(currentApplicant);
      // 페이지 새로고침
      window.location.reload();
    } catch (error) {
      alert("승인 처리 중 오류가 발생했습니다: " + error.message);
    } finally {
      setIsProcessing(false);
    }
  };
  
  // 거절 처리
  const handleReject = async () => {
    if (!currentApplicant?.userId || !projectId) {
      alert("필요한 정보가 부족합니다.");
      return;
    }
    
    setIsProcessing(true);
    try {
      await ProjectService.rejectApplicant(projectId, currentApplicant.userId);
      alert(`${nickname} 신청자를 거절했습니다.`);
      if (onReject) onReject(currentApplicant);
      // 페이지 새로고침
      window.location.reload();
    } catch (error) {
      alert("거절 처리 중 오류가 발생했습니다: " + error.message);
    } finally {
      setIsProcessing(false);
    }
  };

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
            {currentApplicant?.profileImage ? (
              <img 
                src={currentApplicant.profileImage} 
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
        <div className="w-full space-y-6 mt-8 flex-1">
          <div>
            <p className="font-semibold text-lg mb-2">1. {questionText}</p>
            <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{question}</p>
          </div>
          <div>
            <p className="font-semibold text-lg">2. 포지션: {position}</p>
          </div>
          <div>
            <p className="font-semibold text-lg">3. 기술: {techs}</p>
          </div>
          
          {/* 추가 질문들이 있다면 표시 */}
          {answers.slice(1).map((answer, index) => (
            <div key={index + 1}>
              <p className="font-semibold text-lg mb-2">{index + 4}. {answer.questions}</p>
              <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{answer.answer}</p>
            </div>
          ))}
        </div>

        {/* 버튼 영역 */}
        {!isProcessing && (
          <div className="flex justify-between w-full mt-auto">
            <Button
              variant="secondary"
              className="px-8 py-3"
              onClick={handleApprove}
            >
              수락
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-3"
              onClick={handleReject}
            >
              거절
            </Button>
          </div>
        )}
        {isProcessing && (
          <div className="flex justify-center w-full mt-auto">
            <div className="px-8 py-3 text-gray-600 font-semibold">
              처리 중...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}