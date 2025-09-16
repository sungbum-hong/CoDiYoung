import {
  Bars3BottomLeftIcon,
  Bars3Icon,
  Bars3BottomRightIcon,
} from '@heroicons/react/24/outline';

export default function AlignmentDropdown({ 
  isOpen, 
  onToggle, 
  onAlign, 
  buttonHoverHandlers 
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        className="p-2 rounded transition-colors"
        {...buttonHoverHandlers}
        title="정렬"
      >
        <Bars3Icon className="w-5 h-5" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <button
            type="button"
            onClick={() => onAlign('left')}
            className="w-full flex items-center px-3 py-2 hover:bg-gray-100 first:rounded-t-lg"
          >
            <Bars3BottomLeftIcon className="w-4 h-4 mr-2" />
          </button>
          <button
            type="button"
            onClick={() => onAlign('center')}
            className="w-full flex items-center px-3 py-2 hover:bg-gray-100"
          >
            <Bars3Icon className="w-4 h-4 mr-2" />
          </button>
          <button
            type="button"
            onClick={() => onAlign('right')}
            className="w-full flex items-center px-3 py-2 hover:bg-gray-100 last:rounded-b-lg"
          >
            <Bars3BottomRightIcon className="w-4 h-4 mr-2" />
          </button>
        </div>
      )}
    </div>
  );
}