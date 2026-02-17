import { EllipsisVerticalIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { COLORS } from '../../../constants/colors';

export default function StudyListTab({ studies }: { studies: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 max-w-5xl mx-auto">
      {studies.map((study) => (
        <div 
            key={study.id} 
            className="p-5 border rounded-2xl bg-white flex flex-col justify-between h-full"
            style={{ borderColor: COLORS.BORDER_SECONDARY }}
        >
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                         <UserCircleIcon className="w-full h-full text-gray-400" />
                    </div>
                    <span className="text-xs font-bold" style={{ color: COLORS.TEXT_PRIMARY }}>{study.author}</span>
                    <span className="text-xs" style={{ color: COLORS.TEXT_TERTIARY }}>{study.createdAt}</span>
                </div>
                <button>
                    <EllipsisVerticalIcon className="w-5 h-5" style={{ color: COLORS.TEXT_DISABLED }} />
                </button>
            </div>

            <div className="flex gap-4">
                <div className="flex-1">
                    <h3 className="text-sm font-bold mb-2 line-clamp-1" style={{ color: COLORS.TEXT_PRIMARY }}>
                        {study.title}
                    </h3>
                    <p className="text-xs line-clamp-3 leading-relaxed" style={{ color: COLORS.TEXT_SECONDARY }}>
                        {study.content}
                    </p>
                </div>
                {study.image && (
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                        <img src={study.image} alt="" className="w-full h-full object-cover" />
                    </div>
                )}
            </div>
        </div>
      ))}
    </div>
  );
}
