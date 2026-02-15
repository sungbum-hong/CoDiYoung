import { CONFIG } from '../../constants/config.js';
import { MOCK_PARTNERS } from '../../mock/home.js';

export default function Partners() {
  const partners = MOCK_PARTNERS;
  
  return (
    <div className="flex flex-col items-center w-full bg-gray-50 rounded-xl py-12 px-4">
      {/* Title Section */}
      <div className="text-center mb-12">
        <p className="text-sm text-blue-400 font-medium mb-2">
          함께하면 더 큰 가능성! 코디영의 든든한 파트너들
        </p>
        <h2 className="text-3xl font-bold text-gray-900">
          파트너&서포터
        </h2>
      </div>

      {/* Logos Section */}
      <div
        className="flex justify-center items-center flex-wrap"
        style={{ gap: '4rem' }} // 넉넉한 간격
      >
        {partners.map((partner, i) => (
          <a 
            key={partner.id || i}
            href={partner.link} 
            target='_blank' 
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-opacity hover:opacity-80"
          >
            <img
              src={partner.imageUrl}
              alt={partner.name}
              className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
