import { CONFIG } from '../../constants/config.js';
import { COLORS } from '../../utils/colors.js';

export default function Avatar({ size = 'md', src, alt }) {
  const cls = CONFIG.AVATAR_SIZES[size] || CONFIG.AVATAR_SIZES.md;
  
  return (
    <div 
      className={`${cls} rounded-full flex items-center justify-center overflow-hidden`}
      style={{ backgroundColor: COLORS.GRAY_200 }}
    > 
      {src ? <img src={src} alt={alt || ''} className="w-full h-full object-cover" /> : null}
    </div>
  );
}