import Button from '../../../ui/Button.jsx';
import { COLORS } from "../../../constants/colors.js";

export default function WritePageHeader({ 
  title, 
  isEditMode, 
  editButtons, 
  createButton 
}) {
  return (
    <header 
      className="flex items-center justify-between mb-8"
      role="banner"
      aria-labelledby="page-title"
    >
      <h1 
        id="page-title"
        className="text-3xl font-bold" 
        style={{ color: COLORS.GRAY_900 }}
        aria-live="polite"
      >
        {title}
      </h1>

      {isEditMode ? (
        <div 
          className="flex space-x-3"
          role="group" 
          aria-labelledby="edit-actions-label"
        >
          <div id="edit-actions-label" className="sr-only">편집 액션</div>
          {editButtons.map((button) => (
            <Button
              key={button.key}
              variant="secondary"
              className="h-8 w-[88px] focus:outline-none focus:ring-2"
              onClick={button.onClick}
              style={button.style}
              aria-label={button.ariaLabel || button.text}
              aria-describedby={button.key && `${button.key}-desc`}
            >
              {button.text}
              {button.key && (
                <span id={`${button.key}-desc`} className="sr-only">
                  {button.description}
                </span>
              )}
            </Button>
          ))}
        </div>
      ) : (
        <Button
          variant="secondary"
          className="h-8 w-32"
          onClick={createButton.onClick}
          style={createButton.style}
          aria-label={createButton.ariaLabel || createButton.text}
          aria-describedby="create-button-desc"
        >
          {createButton.text}
          <span id="create-button-desc" className="sr-only">
            {createButton.description || "새 스터디를 작성합니다"}
          </span>
        </Button>
      )}
    </header>
  );
}