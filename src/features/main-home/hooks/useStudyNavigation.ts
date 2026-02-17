import { useRouter } from "next/navigation";
import { ROUTES } from "../../../constants/routes";

export function useStudyNavigation() {
  const router = useRouter();

  const handleCategoryClick = (category: string, userId?: string) => {
    if (userId) {
      // userId가 있으면 해당 사용자의 스터디 채널로 이동 (/study/user1)
      router.push(`${ROUTES.STUDY_CHANNEL.replace(":userId", userId)}`);
    } else {
      // userId가 없으면 첫 번째 사용자로 이동 (임시 처리)
      router.push(`/study/1`);
    }
  };

  const handleWriteClick = () => {
    router.push(ROUTES.WRITE);
  };

  return {
    handleCategoryClick,
    handleWriteClick,
  };
}
