
import React, { useState, useRef, useEffect } from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

const MyStudyCard = ({ study }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 relative hover:shadow-sm transition-shadow">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
             {study.user?.avatar && <img src={study.user.avatar} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <div>
            <div className="font-bold text-gray-900 text-sm">{study.user?.nickname}</div>
            <div className="text-gray-400 text-xs">{study.date}</div>
          </div>
        </div>

        {/* Kebab Menu */}
        <div className="relative" ref={menuRef}>
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
            >
                <EllipsisVerticalIcon className="w-6 h-6" />
            </button>
            
            {isMenuOpen && (
                <div className="absolute right-0 top-8 w-24 bg-white border border-gray-200 rounded-lg shadow-lg z-10 py-1">
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        수정하기
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-50">
                        삭제하기
                    </button>
                </div>
            )}
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-4">
        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 mb-2 truncate">{study.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
            {study.content}
          </p>
        </div>

        {/* Optional Image */}
        {study.image && (
          <div className="w-24 h-24 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden">
            <img src={study.image} alt="Study" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyStudyCard;
