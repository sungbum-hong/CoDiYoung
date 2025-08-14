import { useState } from "react";
import Button from "../../ui/Button.jsx";
import { COLORS } from '../../constants/colors';
import { MESSAGES } from '../../constants/messages';
import { CONFIG } from '../../constants/config';

export default function ProfileField({ label, value }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleToggle = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div 
      className={`border rounded-lg transition-all ${
        isEditing ? 'p-4' : 'p-3'
      }`}
      style={{
        borderColor: COLORS.PRIMARY,
        transitionDuration: `${CONFIG.ANIMATION.FADE_DURATION}ms`
      }}
    >
      {isEditing ? (
        <div className="flex items-center gap-3">
          <div className="text-sm font-medium text-center min-w-[60px] flex items-center justify-center">
            {label}
          </div>
          <input
            type={label === "비밀번호" ? "password" : "text"}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 flex-1"
            style={{
              border: `1px solid ${COLORS.GRAY_300}`,
              ':focus': {
                ringColor: COLORS.PRIMARY
              }
            }}
          />
          <Button variant="secondary" onClick={handleToggle} className="h-8 text-xs">
            {MESSAGES.UI.CHANGE_COMPLETE}
          </Button>
        </div>
      ) : (
        <div className="flex items-center">
          <div className="text-sm min-w-[60px]">
            {label}
          </div>
          <div className="flex-1 text-center">
            <span className="text-sm">{inputValue}</span>
          </div>
          <div className="min-w-[60px] flex justify-end">
            <Button variant="secondary" onClick={handleToggle} className="h-8 text-xs">
              {MESSAGES.UI.EDIT}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}