import { useState, useEffect } from "react";
import Button from "../../../ui/Button.jsx";
import { COLORS } from "../../../constants/colors.js";
import { MESSAGES } from "../../../constants/messages";
import { CONFIG } from "../../../constants/config";
import { useUpdateNickname, useUpdateEmail } from "../hooks/useProfile.js";

export default function ProfileField({ label, value, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  
  const updateNicknameMutation = useUpdateNickname();
  const updateEmailMutation = useUpdateEmail();

  // value가 변경되면 inputValue도 업데이트
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleToggle = () => {
    if (isEditing) {
      // 편집 완료 시 실제 업데이트 실행
      handleSave();
    } else {
      // 편집 시작
      setIsEditing(true);
    }
  };

  const handleSave = async () => {
    // 값이 변경되지 않았으면 그냥 편집 모드 종료
    if (inputValue === value) {
      setIsEditing(false);
      return;
    }

    // 이메일은 수정 불가
    if (label === "이메일") {
      alert("이메일은 변경할 수 없습니다.");
      setIsEditing(false);
      return;
    }

    try {
      if (label === "닉네임") {
        await updateNicknameMutation.mutateAsync(inputValue);
      } else if (label === "비밀번호") {
        // TODO: 비밀번호 변경 API 호출 로직 추가
        alert("비밀번호 변경 기능은 아직 구현되지 않았습니다.");
      }
      setIsEditing(false);
    } catch (error) {
      // 에러 시 원래 값으로 되돌리기
      setInputValue(value);
    }
  };

  const handleCancel = () => {
    setInputValue(value); // 원래 값으로 되돌리기
    setIsEditing(false);
  };

  const isLoading = updateNicknameMutation.isPending || updateEmailMutation.isPending;

  return (
    <div
      className={`border rounded-lg transition-all flex items-center p-6 ${
        isEditing ? "h-21" : "h-12"
      }`}
      style={{
        borderColor: COLORS.PRIMARY,
        transitionDuration: `${CONFIG.ANIMATION.FADE_DURATION}ms`,
      }}
    >
      {isEditing ? (
        <div className="flex items-center gap-3 w-full">
          <div className="text-sm font-medium text-center min-w-[60px] flex items-center justify-center">
            {label}
          </div>
          <input
            type={label === "비밀번호" ? "password" : "text"}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading || label === "이메일"}
            className="rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 flex-1 disabled:bg-gray-100"
            style={{
              border: `1px solid ${COLORS.GRAY_300}`,
            }}
            placeholder={label === "이메일" ? "변경 불가" : `새로운 ${label}을 입력하세요`}
          />
          <div className="flex gap-2">
            <Button
              variant="secondary"
              onClick={handleToggle}
              disabled={isLoading}
              className="h-8 text-xs"
            >
              {isLoading ? "저장 중..." : "저장"}
            </Button>
            <Button
              variant="outline"
              onClick={handleCancel}
              disabled={isLoading}
              className="h-8 text-xs"
            >
              취소
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center w-full">
          <div className="text-sm min-w-[60px]">{label}</div>
          <div className="flex-1 text-center">
            <span className="text-sm">{inputValue}</span>
          </div>
          <div className="min-w-[60px] flex justify-end">
            <Button
              variant="secondary"
              onClick={handleToggle}
              disabled={label === "이메일"}
              className="!h-8 !text-xs disabled:opacity-50"
            >
              {label === "이메일" ? "변경" : MESSAGES.UI.EDIT}
            </Button>
          </div>
        </div>
      )}
    </div>

  );
}
