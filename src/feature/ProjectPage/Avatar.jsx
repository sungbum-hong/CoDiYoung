import { CONFIG } from '../../constants/config.js';
import { COLORS } from '../../constants/colors.js';

export default function Avatar({ size = 'md', src, alt }) {
  const cls = CONFIG.AVATAR_SIZES[size] || CONFIG.AVATAR_SIZES.md;

  // 이미지 URL 처리 (다른 컴포넌트와 동일한 방식)
  const imageUrl = src && !src.startsWith('http')
    ? `${CONFIG.API.BASE_URL}/storage/${src}`
    : src;

  return (
    <div
      className={`${cls} rounded-full flex items-center justify-center overflow-hidden`}
      style={{ backgroundColor: COLORS.GRAY_200 }}
    >
      {imageUrl ? <img src={imageUrl} alt={alt || ''} className="w-full h-full object-cover" /> : null}
    </div>
  );
}