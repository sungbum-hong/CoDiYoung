import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

export function useStudyNavigation() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`${ROUTES.STUDY_CATEGORY.replace(":category", category)}`);
  };

  const handleWriteClick = () => {
    navigate(ROUTES.WRITE);
  };

  return {
    handleCategoryClick,
    handleWriteClick,
  };
}