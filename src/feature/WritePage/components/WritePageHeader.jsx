import Button from '../../../ui/Button.jsx';
import { COLORS } from '../../../utils/colors.js';

export default function WritePageHeader({ 
  title, 
  isEditMode, 
  editButtons, 
  createButton 
}) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold" style={{ color: COLORS.GRAY_900 }}>
        {title}
      </h1>

      {isEditMode ? (
        <div className="flex space-x-3">
          {editButtons.map((button) => (
            <Button
              key={button.key}
              variant="secondary"
              className="h-8 w-[88px] focus:outline-none focus:ring-2"
              onClick={button.onClick}
              style={button.style}
            >
              {button.text}
            </Button>
          ))}
        </div>
      ) : (
        <Button
          variant="secondary"
          className="h-8 w-32"
          onClick={createButton.onClick}
          style={createButton.style}
        >
          {createButton.text}
        </Button>
      )}
    </div>
  );
}