import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

export function useStudyNavigation() {
  const navigate = useNavigate();

  const handleCategoryClick = (category, userId) => {
    if (userId) {
      // userId가 있으면 해당 사용자의 스터디 채널로 이동 (/study/1)
      navigate(`${ROUTES.STUDY_CHANNEL.replace(":userId", userId)}`);
    } else {
      // userId가 없으면 첫 번째 사용자로 이동 (임시 처리)
      navigate(`/study/1`);
    }
  };

  const handleWriteClick = () => {
    navigate(ROUTES.WRITE);
  };

  return {
    handleCategoryClick,
    handleWriteClick,
  };
}