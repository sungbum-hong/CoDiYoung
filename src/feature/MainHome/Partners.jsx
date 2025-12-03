import { CONFIG } from '../../constants/config.js';
import { COLORS } from '../../constants/colors.js';
import { useMainHomePartners } from './hooks/useMainHomeQueries.js';

export default function Partners() {
  const { data: partners = [] } = useMainHomePartners();
  return (
    <div
      className="flex justify-center mb-9"
      style={{ gap: CONFIG.CARD.PARTNER.GAP }}
    >
      {partners.map((partner, i) => (
        <div
          key={partner.id || i}
          className="flex items-center justify-center"
          style={{
            width: CONFIG.CARD.PARTNER.WIDTH,
            height: CONFIG.CARD.PARTNER.HEIGHT,
            borderRadius: CONFIG.BORDER_RADIUS.MEDIUM,
          }}
        >
          {/* <img src={src} alt={`partner-${i}`} loading="lazy" className="max-w-full max-h-full" /> */}
          <a href={partner.link} target='_blank' rel="noopener noreferrer">
            <img
              src={partner.imageUrl}
              alt={`partner-${i}`}
              className="max-w-full max-h-full object-contain"
            />
          </a>
        </div>
      ))}
    </div>
  );
}
