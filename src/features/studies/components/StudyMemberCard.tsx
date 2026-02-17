import { UserCircleIcon } from '@heroicons/react/24/solid';
import { COLORS } from '../../../constants/colors';

const CATEGORY_COLORS = {
  coding: COLORS.TEXT_INTERACTIVE_BRAND_PINK,
  design: COLORS.TEXT_INTERACTIVE_BRAND_YELLOW,
  video: COLORS.TEXT_INTERACTIVE_BRAND_PURPLE,
};

interface StudyMember {
  categoryId: string;
  category: string;
  name: string;
  profileImage?: string | null;
  description?: string;
}

export default function StudyMemberCard({ member }: { member: StudyMember }) {
  // Determine color based on categoryId (coding, design, video)
  // Fallback to primary text if generic
  const categoryColor = CATEGORY_COLORS[member.categoryId as keyof typeof CATEGORY_COLORS] || COLORS.TEXT_PRIMARY;

  return (
    <div 
      className="flex flex-col p-6 border rounded-xl bg-white transition-all hover:shadow-lg"
      style={{ borderColor: COLORS.BORDER_SECONDARY }}
    >
      {/* Profile Image / Avatar */}
      <div className="mb-4">
        {member.profileImage ? (
          <img 
            src={member.profileImage} 
            alt={member.name} 
            className="w-12 h-12 rounded-full object-cover bg-gray-100"
          />
        ) : (
          <UserCircleIcon 
            className="w-12 h-12" 
            style={{ color: COLORS.TEXT_DISABLED }} 
          />
        )}
      </div>

      {/* Category Label */}
      <div 
        className="text-sm font-bold mb-1"
        style={{ color: categoryColor }}
      >
        {member.category}
      </div>

      {/* Name */}
      <h3 
        className="text-lg font-bold mb-3"
        style={{ color: COLORS.TEXT_PRIMARY }}
      >
        {member.name}
      </h3>

      {/* Description */}
      <p 
        className="text-sm mb-8 line-clamp-2 h-10"
        style={{ color: COLORS.TEXT_SECONDARY }}
      >
        {member.description}
      </p>

      {/* Action Button */}
      <button 
        className="mt-auto px-4 py-2 border rounded-full text-sm font-medium transition-colors hover:bg-gray-50 bg-white w-fit"
        style={{ 
          borderColor: COLORS.BORDER_SECONDARY,
          color: COLORS.TEXT_PRIMARY
        }}
      >
        프로필보기
      </button>
    </div>
  );
}
