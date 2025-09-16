import { STUDY_CATEGORY_CONFIG, DEFAULT_CATEGORY_CONFIG } from "../../../constants/studyCategories";

export function useCategoryConfig() {
  const getCategoryConfig = (label) => {
    return STUDY_CATEGORY_CONFIG[label] || DEFAULT_CATEGORY_CONFIG;
  };

  return {
    getCategoryConfig,
  };
}