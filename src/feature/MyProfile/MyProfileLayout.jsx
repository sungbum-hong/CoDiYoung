import ProfileSidebar from './ProfileSidebar';
import ProfileContent from './ProfileContent';
import { COLORS } from '../../constants/colors';

export default function MyProfileLayout() {
  return (
    <div 
      className="flex flex-col md:flex-row w-full min-h-screen"
      style={{ backgroundColor: COLORS.GRAY_50 }}
    >
      <ProfileSidebar />
      <ProfileContent />
    </div>
  );
}