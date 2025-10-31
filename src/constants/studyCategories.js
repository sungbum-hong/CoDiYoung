import { CodeBracketIcon, PaintBrushIcon, VideoCameraIcon, PencilIcon } from "@heroicons/react/24/outline";
import { COLORS } from "./colors.js";

export const STUDY_CATEGORY_CONFIG = {
  "코딩": {
    color: "#ef4444", // red-500
    icon: CodeBracketIcon
  },
  "디자인": {
    color: "#eab308", // yellow-500
    icon: PaintBrushIcon
  },
  "영상편집": {
    color: "#8b5cf6", // violet-500
    icon: VideoCameraIcon
  }
};

export const DEFAULT_CATEGORY_CONFIG = {
  color: COLORS.GRAY_500,
  icon: PencilIcon
};