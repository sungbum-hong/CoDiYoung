import { useState } from 'react';
import { COLORS } from '../../../constants/colors.js';

export default function ProjectCard({ 
  project, 
  onProjectClick 
}) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between h-full min-h-[220px]"
      onClick={() => onProjectClick && onProjectClick(project.id)}
    >
      <div className="flex justify-between items-start gap-4">
        {/* Left Content */}
        <div className="flex-1">
          {/* Title */}
          <h3 className="font-bold text-lg text-gray-900 mb-3 leading-snug line-clamp-2">
            {project.title}
          </h3>
          
          {/* Info */}
          <div className="text-sm text-gray-600 space-y-1 mb-4">
            {project.description.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span 
                key={i}
                className={`text-xs px-2 py-1 rounded-full font-medium ${
                  tag === '디자이너' ? 'bg-yellow-100 text-yellow-700' : 
                  tag === '백엔드' ? 'bg-pink-100 text-pink-700' : 
                  'bg-gray-100 text-gray-600'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Content (Thumbnail) */}
        <div className="flex flex-col items-end gap-2">
          <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
            {project.thumbnail ? (
              <img src={project.thumbnail} alt="thumbnail" className="w-full h-full object-cover" />
            ) : null}
          </div>
          
          {/* Member Avatars (+1) */}
          <div className="flex -space-x-2 mt-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white" />
            ))}
            <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] text-gray-500 font-bold">
              +1
            </div>
          </div>
        </div>
      </div>

      {/* Bottom User Info & Like */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            {project.user?.avatar && (
              <img src={project.user.avatar} alt="user" className="w-full h-full object-cover" />
            )}
          </div>
          <span className="text-sm font-medium text-gray-700">{project.user?.name}</span>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          {isLiked ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}