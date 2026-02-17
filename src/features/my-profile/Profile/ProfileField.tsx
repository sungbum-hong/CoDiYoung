import { useState, useEffect } from "react";
import Button from "../../../shared/ui/Button";
import { COLORS } from "../../../constants/colors";
import { MESSAGES } from "../../../constants/messages";
import { CONFIG } from "../../../constants/config";
import { useUpdateNickname, useUpdateEmail, useUpdatePassword } from "../hooks/useProfile";

export default function ProfileField({ label, value, onUpdate }: { label: string; value: string; onUpdate: (value: string) => void }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [currentPassword, setCurrentPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{currentPassword?: string; newPassword?: string; confirmPassword?: string}>({});

  const updateNicknameMutation = useUpdateNickname();
  const updateEmailMutation = useUpdateEmail();
  const updatePasswordMutation = useUpdatePassword();

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
      // 비밀번호 편집 시작할 때 모든 필드 초기화
      if (label === "비밀번호") {
        setInputValue('');
        setCurrentPassword('');
        setConfirmPassword('');
        setErrors({});
      }
    }
  };

  const handleSave = async () => {
    // 이메일은 수정 불가
    if (label === "이메일") {
      alert("이메일은 변경할 수 없습니다.");
      setIsEditing(false);
      return;
    }

    // 비밀번호가 아닌 경우 값이 변경되지 않았으면 편집 모드 종료
    if (label !== "비밀번호" && inputValue === value) {
      setIsEditing(false);
      return;
    }

    try {
      if (label === "닉네임") {
        await updateNicknameMutation.mutateAsync(inputValue);
        alert('닉네임이 성공적으로 변경되었습니다.');
      } else if (label === "비밀번호") {
        // 비밀번호 유효성 검사
        const newErrors: {currentPassword?: string; newPassword?: string; confirmPassword?: string} = {};

        if (!currentPassword) {
          newErrors.currentPassword = '현재 비밀번호를 입력해주세요.';
        }

        if (!inputValue) {
          newErrors.newPassword = '새 비밀번호를 입력해주세요.';
        } else if (inputValue.length < 8) {
          newErrors.newPassword = '새 비밀번호는 8자 이상이어야 합니다.';
        }

        if (!confirmPassword) {
          newErrors.confirmPassword = '새 비밀번호 확인을 입력해주세요.';
        } else if (inputValue !== confirmPassword) {
          newErrors.confirmPassword = '새 비밀번호가 일치하지 않습니다.';
        }

        if (currentPassword && inputValue && currentPassword === inputValue) {
          newErrors.newPassword = '새 비밀번호는 현재 비밀번호와 달라야 합니다.';
        }

        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }

        await updatePasswordMutation.mutateAsync({
          currentPassword,
          newPassword: inputValue
        });
        alert('비밀번호가 성공적으로 변경되었습니다.');
      }
      setIsEditing(false);
      setErrors({});
    } catch (error) {
      alert(`변경에 실패했습니다: ${(error as Error).message}`);
      // 에러 시 원래 값으로 되돌리기
      setInputValue(value);
      if (label === "비밀번호") {
        setCurrentPassword('');
        setConfirmPassword('');
      }
    }
  };

  const handleCancel = () => {
    setInputValue(value); // 원래 값으로 되돌리기
    setIsEditing(false);
  };


  const isLoading = updateNicknameMutation.isPending || updateEmailMutation.isPending || updatePasswordMutation.isPending;

  return (
    <div
      className={`border rounded-lg transition-all p-4 ${
        isEditing && label === "비밀번호" ? "min-h-[240px]" : isEditing ? "min-h-[80px]" : "h-16"
      }`}
      style={{
        borderColor: COLORS.PRIMARY,
        transitionDuration: `${CONFIG.ANIMATION.FADE_DURATION}ms`,
      }}
    >
      {isEditing ? (
        label === "비밀번호" ? (
          <div className="flex flex-col gap-3 w-full">
            <div className="text-sm font-medium text-center animate-in fade-in duration-1500">
              {label} 변경
            </div>

            {/* 현재 비밀번호 */}
            <div className="flex flex-col gap-1 animate-in slide-in-from-top-2 duration-1500 delay-[500ms]">
              <label className="text-xs text-gray-600">현재 비밀번호</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                disabled={isLoading}
                className="rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 disabled:bg-gray-100"
                style={{
                  border: `1px solid ${errors.currentPassword ? COLORS.ERROR : COLORS.GRAY_300}`,
                }}
                placeholder="현재 비밀번호를 입력하세요"
              />
              {errors.currentPassword && (
                <span className="text-xs text-red-500">{errors.currentPassword}</span>
              )}
            </div>

            {/* 새 비밀번호 */}
            <div className="flex flex-col gap-1 animate-in slide-in-from-top-2 duration-1500 delay-[1000ms]">
              <label className="text-xs text-gray-600">새 비밀번호</label>
              <input
                type="password"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
                className="rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 disabled:bg-gray-100"
                style={{
                  border: `1px solid ${errors.newPassword ? COLORS.ERROR : COLORS.GRAY_300}`,
                }}
                placeholder="새 비밀번호를 입력하세요 (8자 이상)"
              />
              {errors.newPassword && (
                <span className="text-xs text-red-500">{errors.newPassword}</span>
              )}
            </div>

            {/* 새 비밀번호 확인 */}
            <div className="flex flex-col gap-1 animate-in slide-in-from-top-2 duration-1500 delay-[1500ms]">
              <label className="text-xs text-gray-600">새 비밀번호 확인</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isLoading}
                className="rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 disabled:bg-gray-100"
                style={{
                  border: `1px solid ${errors.confirmPassword ? COLORS.ERROR : COLORS.GRAY_300}`,
                }}
                placeholder="새 비밀번호를 다시 입력하세요"
              />
              {errors.confirmPassword && (
                <span className="text-xs text-red-500">{errors.confirmPassword}</span>
              )}
            </div>

            <div className="flex gap-2 justify-end animate-in slide-in-from-bottom-2 duration-1500 delay-[2000ms]">
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
          <div className="flex items-center gap-3 w-full animate-in fade-in duration-1500">
            <div className="text-sm font-medium text-center min-w-[60px] flex items-center justify-center">
              {label}
            </div>
            <input
              type="text"
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
        )
      ) : (
        <div className="flex items-center w-full">
          <div className="text-sm min-w-[60px]">{label}</div>
          <div className="flex-1 text-center">
            <span className="text-sm">{label === "비밀번호" ? "••••••••" : inputValue}</span>
          </div>
          <div className="min-w-[60px] flex justify-end">
            <Button
              variant="secondary"
              onClick={handleToggle}
              disabled={label === "이메일"}
              className="!h-8 !text-xs disabled:opacity-50"
            >
              {label === "이메일" ? "변경불가" : MESSAGES.UI.EDIT}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
