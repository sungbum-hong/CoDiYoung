import { COLORS } from "../../../utils/colors.js";

export default function StudyCard({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="size-[100px] rounded-2xl cursor-pointer transition-colors"
      style={{ backgroundColor: COLORS.GRAY_300 }}
      onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.GRAY_400}
      onMouseLeave={(e) => e.target.style.backgroundColor = COLORS.GRAY_300}
    />
  );
}