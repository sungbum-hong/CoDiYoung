import { UserCircleIcon, HeartIcon } from '@heroicons/react/24/solid';
import { COLORS } from '../../../constants/colors';

export default function ProjectListTab({ projects }: { projects: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 max-w-5xl mx-auto">
        {projects.map(project => (
            <div 
                key={project.id}
                className="border rounded-lg p-5 bg-white flex items-start gap-4"
                style={{ borderColor: COLORS.BORDER_SECONDARY }}
            >
                <div className="flex-1">
                    <h3 className="font-bold text-sm mb-1 line-clamp-2" style={{ color: COLORS.TEXT_PRIMARY }}>
                        {project.title}
                    </h3>
                    
                    <div className="text-xs mb-3 space-y-1" style={{ color: COLORS.TEXT_PRIMARY }}>
                        <p>참여 인원 : {project.members}명</p>
                        <p>마감일 : {project.deadline}</p>
                    </div>

                    <div className="flex gap-2 mb-4">
                        {project.positions.map((pos: string, idx: number) => (
                            <span 
                                key={idx}
                                className="px-2 py-0.5 rounded text-[10px] font-medium"
                                style={{ 
                                    backgroundColor: idx === 0 ? COLORS.GRAY_100 : '#ffe4ef', // Mocking badge colors
                                    color: idx === 0 ? COLORS.TEXT_SECONDARY : COLORS.TEXT_INTERACTIVE_BRAND_PINK 
                                }}
                            >
                                {pos}
                            </span>
                        ))}
                         <span className="bg-gray-200 text-gray-500 px-2 py-0.5 rounded text-[10px]">+1</span>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t" style={{ borderColor: COLORS.BORDER_TERTIARY }}>
                        <div className="flex items-center gap-2">
                            <UserCircleIcon className="w-5 h-5 text-gray-300" />
                            <span className="text-xs font-bold" style={{ color: COLORS.TEXT_PRIMARY }}>디자인 취준생</span>
                        </div>
                        <HeartIcon className="w-5 h-5 text-pink-500" />
                    </div>
                </div>
                
                 {/* Right Image Placeholder */}
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0" />
            </div>
        ))}
    </div>
  );
}
