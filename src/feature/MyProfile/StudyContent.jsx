import { COLORS } from '../../constants/colors';

export default function StudyContent() {
  const totalItems = 24; // 6 rows × 4 columns

  return (
    <main className="flex-1 p-6">
  <div className="grid grid-cols-4 gap-x-[4.4%] gap-y-[2.9%]">
  {[...Array(totalItems)].map((_, index) => (
    <div
      key={index}
      className="w-full aspect-square rounded-lg text-gray-900 border-2 flex items-center justify-center cursor-pointer transition-shadow"
      style={{
        borderColor: COLORS.GRAY_300,
        backgroundColor: COLORS.WHITE,
      }}
    >
      <span className="text-sm"></span>
    </div>
  ))}
</div>

</main>

  );
} 