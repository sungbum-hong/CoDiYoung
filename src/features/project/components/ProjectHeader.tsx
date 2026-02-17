import Link from 'next/link';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { COLORS } from '../../../constants/colors';

export default function ProjectHeader({ title, author, date }: { title: string; author: string; date: string }) {
  return (
    <div className="mb-8">
      <h1 
        className="text-3xl font-bold mb-4 leading-tight"
        style={{ color: COLORS.TEXT_PRIMARY }}
      >
        {title}
      </h1>
      
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
             {/* Creating a fallback avatar if no image is provided */}
            <UserCircleIcon className="w-full h-full text-gray-400" />
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Link 
            href={`/profile/${author}`}
            className="font-bold hover:underline underline-offset-4"
            style={{ color: COLORS.TEXT_PRIMARY }}
          >
            {author}
          </Link>
          <span style={{ color: COLORS.TEXT_TERTIARY }}>{date}</span>
        </div>
      </div>
    </div>
  );
}
