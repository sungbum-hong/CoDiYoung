import { UserCircleIcon } from '@heroicons/react/24/solid';
import { COLORS } from '../../../constants/colors';

export default function ProfileHeader({ user, isMyProfile = false }: { user: any; isMyProfile?: boolean }) {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="flex flex-col">
        {/* Top Section: Avatar + Info */}
        <div className="flex items-center gap-6 mb-6">
            {/* Avatar Area */}
            <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                {user.profileImage ? (
                    <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                    <UserCircleIcon className="w-full h-full text-gray-300" />
                )}
                </div>
                
                {/* Edit Button (Camera Icon) */}
                {isMyProfile && (
                    <button className="absolute bottom-0 right-0 translate-x-1 translate-y-1 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100 ring-4 ring-white hover:bg-gray-50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                )}
            </div>

            {/* Info Area (Name & Badge) */}
            <div className="flex flex-col items-start gap-2">
                <h1 className="text-xl font-bold text-gray-900">
                    {user.name}
                </h1>
                
                {/* Tags / Badge */}
                {user.tags && user.tags.length > 0 ? (
                    <div className="flex gap-2">
                        {user.tags.map((tag: string) => (
                            <span key={tag} className="px-3 py-1 rounded-lg text-xs font-medium border border-purple-500 text-purple-600 bg-white">
                                {tag}
                            </span>
                        ))}
                    </div>
                ) : (
                    <span 
                        className="px-3 py-1 rounded-lg text-xs font-medium border border-purple-500 text-purple-600 bg-white"
                    >
                        {user.category || '비공개'}
                    </span>
                )}
            </div>
        </div>

        {/* Introduction */}
        <p 
            className="text-left text-sm whitespace-pre-line leading-relaxed text-gray-800 font-medium pl-1"
        >
            {user.introduction}
        </p>
      </div>
    </div>
  );
}
