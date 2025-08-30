import { COLORS } from '../utils/colors.js';

// 공통 로딩 컴포넌트
export default function LoadingFallback({ message = "로딩 중..." }) {
  return (
    <div className="flex justify-center items-center h-32">
      <div className="flex items-center gap-2">
        <div 
          className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin"
          style={{ borderColor: COLORS.PRIMARY, borderTopColor: 'transparent' }}
        ></div>
        <span style={{ color: COLORS.GRAY_600 }}>{message}</span>
      </div>
    </div>
  );
}