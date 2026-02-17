import { COLORS } from '../../../constants/colors';

export default function ProjectBanner({ imageUrl }: { imageUrl?: string }) {
  return (
    <div 
      className="w-full h-[400px] rounded-2xl mb-12 bg-gray-100 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: COLORS.GRAY_200 }} 
    >
      {/* Placeholder for banner image */}
      {/* If actual image exists, <img> tag would go here */}
    </div>
  );
}
