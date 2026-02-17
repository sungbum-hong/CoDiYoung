
import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { UserGroupIcon } from '@heroicons/react/24/solid';

const MyProjectCard = ({ project, type }: { project: any; type: string }) => {
  const [isLiked, setIsLiked] = useState(project.isLiked);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-sm transition-shadow">
      {/* 1. Project Info */}
      <h3 className="font-bold text-gray-900 mb-2 truncate text-sm leading-tight">
        {project.title}
      </h3>
      
      <div className="text-xs text-gray-500 mb-1 font-medium">
        {project.status}
      </div>
      <div className="text-xs text-gray-500 mb-4 font-medium">
        마감일 : {project.deadline}
      </div>

      {/* 2. Tags */}
      <div className="flex gap-2 mb-4">
        {project.positions?.map((pos: string) => (
            <span key={pos} className={`px-2 py-0.5 rounded text-[10px] font-medium border
                ${pos === '디자이너' ? 'text-yellow-600 bg-yellow-50 border-yellow-100' : ''}
                ${pos === '백엔드' ? 'text-pink-600 bg-pink-50 border-pink-100' : ''}
            `}>
                {pos}
            </span> 
        ))}
      </div>

      {/* 3. Footer: User & Interaction */}
      <div className="flex justify-between items-center pt-3 border-t border-gray-50">
        <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gray-200 overflow-hidden">
                {project.user?.avatar && <img src={project.user.avatar} alt="User" className="w-full h-full object-cover" />}
            </div>
            <span className="text-xs text-gray-700 font-medium">{project.user?.nickname}</span>
        </div>

        <div className="flex items-center gap-2">
            {/* Participants Placeholder */}
            {project.participantsCount > 0 && (
                 <div className="flex items-center text-gray-300">
                    <UserGroupIcon className="w-4 h-4 mr-0.5" />
                    <span className="text-xs">+{project.participantsCount}</span>
                 </div>
            )}

            {/* Like Button */}
            <button 
                onClick={toggleLike}
                className="text-pink-500 hover:text-pink-600 transition-colors"
            >
                {isLiked ? (
                    <HeartIcon className="w-5 h-5" />
                ) : (
                    <HeartIconOutline className="w-5 h-5" />
                )}
            </button>
        </div>
      </div>
    </div>
  );
};

export default MyProjectCard;
