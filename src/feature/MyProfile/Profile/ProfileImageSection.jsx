import { useState } from "react";
import Button from "../../../ui/Button.jsx";
import { COLORS } from "../../../utils/colors.js";
import { MESSAGES } from "../../../constants/messages.js";

export default function ProfileImageSection() {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div
      className={`border rounded-lg transition-all duration-300 flex items-center p-6 ${
        isEditing ? "h-32" : "h-20"
      }`}
      style={{ borderColor: COLORS.PRIMARY }}
    >
      {isEditing ? (
        <div className="flex items-center justify-between w-full">
          <div className="w-8 h-8 rounded-full" style={{ backgroundColor: COLORS.GRAY_300 }}></div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" onClick={() => {}} className="h-8 text-xs">
              {MESSAGES.UI.CHANGE_IMAGE}
            </Button>
            <Button variant="secondary" onClick={handleToggle} className="h-8 text-xs">
              {MESSAGES.UI.CHANGE_COMPLETE}
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: COLORS.GRAY_300 }}></div>
          </div>
          <Button variant="secondary" onClick={handleToggle} className="h-8 text-xs">
            {MESSAGES.UI.EDIT}
          </Button>
        </div>
      )}
    </div>
  );
}