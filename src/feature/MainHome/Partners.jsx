import { CONFIG } from '../../constants/config.js';
import { COLORS } from '../../constants/colors.js';

export default function Partners({ logos = [] }) {
  return (
    <div 
      className="flex justify-center mb-9"
      style={{ gap: CONFIG.CARD.PARTNER.GAP }}
    >
      {logos.map((src, i) => (
        <div 
          key={i} 
          className="flex items-center justify-center"
          style={{ 
            width: CONFIG.CARD.PARTNER.WIDTH, 
            height: CONFIG.CARD.PARTNER.HEIGHT,
            borderRadius: CONFIG.BORDER_RADIUS.MEDIUM,
            backgroundColor: COLORS.GRAY_300
          }}
        >
          {/* <img src={src} alt={`partner-${i}`} loading="lazy" className="max-w-full max-h-full" /> */}
        </div>
      ))}
    </div>
  );
}
