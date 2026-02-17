'use client';

import { useRouter } from 'next/navigation';
import { COLORS } from '../../../constants/colors';
import { useAuthState } from '../../../hooks/useAuth';

export default function ProjectSidebar({ metadata, onApply }: { metadata: { positions: string[]; techStack: string[]; period: string; contact: string; recruitmentCount: number; deadline: string; slogan: string; questions: string[] }; onApply: () => void }) {
  const router = useRouter();
  const { isAuthenticated } = useAuthState();

  const handleApplyClick = () => {
    if (!isAuthenticated) {
        // Redirection logic handled in parent or here
        router.push('/signin');
    } else {
        // Application logic
        alert("신청 기능은 준비 중입니다.");
    }
  };

  return (
    <div className="space-y-8">
      {/* Apply Button */}
      <button
        onClick={handleApplyClick}
        className="w-full py-4 rounded-xl font-bold text-white text-lg transition-all hover:opacity-90"
        style={{ 
          backgroundColor: COLORS.PURPLE_500,
          boxShadow: '0 4px 14px 0 rgba(114, 46, 255, 0.39)'
        }}
      >
        프로젝트 신청하기
      </button>

      {/* Info List */}
      <div className="space-y-6 pt-4">
        <InfoItem label="모집 인원" value={metadata.recruitmentCount} />
        <InfoItem label="마감일" value={metadata.deadline} isBold />
        <InfoItem label="포지션" value={metadata.positions.join('  ')} />
        <InfoItem label="기술" value={metadata.techStack.join('  ')} isBold />
      </div>

      <div className="pt-6 border-t" style={{ borderColor: COLORS.BORDER_SECONDARY }}>
        <h3 className="text-sm mb-2" style={{ color: COLORS.TEXT_SECONDARY }}>슬로건</h3>
        <p className="font-bold" style={{ color: COLORS.TEXT_PRIMARY }}>
            {metadata.slogan}
        </p>
      </div>
      
       <div className="pt-6 border-t" style={{ borderColor: COLORS.BORDER_SECONDARY }}>
        <h3 className="text-sm mb-4" style={{ color: COLORS.TEXT_PRIMARY }}>질문</h3>
        <div className="space-y-4">
            {metadata.questions.map((q: string, idx: number) => (
                <div key={idx}>
                    <p className="text-sm font-medium leading-relaxed" style={{ color: COLORS.TEXT_PRIMARY }}>
                        {q}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value, isBold = false }: { label: string; value: string | number; isBold?: boolean }) {
    return (
        <div className="flex items-start">
            <span className="w-24 text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>{label}</span>
            <span className={`text-sm flex-1 ${isBold ? 'font-bold' : ''}`} style={{ color: COLORS.TEXT_PRIMARY }}>
                {value}
            </span>
        </div>
    );
}
