import { COLORS } from '../../../constants/colors';

export default function ProfileTabs({ activeTab, onTabChange, tabs }: { activeTab: string; onTabChange: (tab: string) => void; tabs: { id: string; label: string }[] }) {
  return (
    <div className="flex justify-center w-full border-b" style={{ borderColor: COLORS.BORDER_SECONDARY }}>
      <div className="flex gap-16">
        {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`pb-4 px-2 text-sm font-medium relative transition-colors ${
                        isActive ? 'text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    {tab.label}
                    {isActive && (
                        <div 
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900"
                        />
                    )}
                </button>
            );
        })}
      </div>
    </div>
  );
}
