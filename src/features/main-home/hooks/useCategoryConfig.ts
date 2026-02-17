import { STUDY_CATEGORY_CONFIG, DEFAULT_CATEGORY_CONFIG } from "../../../constants/studyCategories";

export function useCategoryConfig() {
  const getCategoryConfig = (label: keyof typeof STUDY_CATEGORY_CONFIG | string) => {
    return STUDY_CATEGORY_CONFIG[label as keyof typeof STUDY_CATEGORY_CONFIG] || DEFAULT_CATEGORY_CONFIG;
  };

  return {
    getCategoryConfig,
  };
}