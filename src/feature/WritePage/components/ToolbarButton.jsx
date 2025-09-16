export default function ToolbarButton({ 
  onClick, 
  isActive, 
  title, 
  icon: Icon, 
  buttonHoverHandlers, 
  customClass = '',
  customStyle = {} 
}) {
  const baseClass = `p-2 rounded transition-colors ${isActive ? 'bg-gray-300' : ''} ${customClass}`;

  return (
    <button
      type="button"
      onClick={onClick}
      className={baseClass}
      {...buttonHoverHandlers}
      title={title}
      style={customStyle}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}