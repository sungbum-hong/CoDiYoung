import { CONFIG } from '../../constants/config.js';
import { COLORS } from '../../constants/colors.js';

export default function Partners() {
  const bannerLogos = [
    {
      img : '/ansan.png',
      link : 'https://www.asyouthspace.kr/'
    },
  ]
  return (
    <div 
      className="flex justify-center mb-9"
      style={{ gap: CONFIG.CARD.PARTNER.GAP }}
    >
      {bannerLogos.map((bannerLogo, i) => (
        <div 
          key={i} 
          className="flex items-center justify-center"
          style={{ 
            width: CONFIG.CARD.PARTNER.WIDTH, 
            height: CONFIG.CARD.PARTNER.HEIGHT,
            borderRadius: CONFIG.BORDER_RADIUS.MEDIUM,
          }}
        >
          {/* <img src={src} alt={`partner-${i}`} loading="lazy" className="max-w-full max-h-full" /> */}
          <a href={bannerLogo.link} target='_blank'> <img src={bannerLogo.img} /></a>
        </div>
      ))}
    </div>
  );
}
