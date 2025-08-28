import { useState } from "react";
import Button from "../../ui/Button.jsx";
import { COLORS } from "../../utils/colors.js";
import { MESSAGES } from "../../constants/messages.js";

export default function ProfileImageSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("u1");

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
        <div className="flex items-center gap-3 w-full">
          <div className="w-8 h-8 rounded-full" style={{ backgroundColor: COLORS.GRAY_300 }}></div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 flex-1"
            style={{ 
              borderColor: COLORS.GRAY_300,
              focusRingColor: COLORS.PRIMARY 
            }}
            onFocus={(e) => e.target.style.borderColor = COLORS.PRIMARY}
            onBlur={(e) => e.target.style.borderColor = COLORS.GRAY_300}
          />
          <Button variant="secondary" onClick={() => {}} className="h-8 text-xs">
            {MESSAGES.UI.CHANGE_IMAGE}
          </Button>
          <Button variant="secondary" onClick={handleToggle} className="h-8 text-xs">
            {MESSAGES.UI.CHANGE_COMPLETE}
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: COLORS.GRAY_300 }}></div>
            <span className="text-sm">{username}</span>
          </div>
          <Button variant="secondary" onClick={handleToggle} className="h-8 text-xs">
            {MESSAGES.UI.EDIT}
          </Button>
        </div>
      )}
    </div>
  );
}