export default function AttendanceStars() {
  const totalDays = 42; // 3 rows × 14 columns
  const attendedDays = 2; // 출석한 날짜 수

  return (
    <div className="flex flex-col gap-1 mt-6">
      {[...Array(3)].map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-8">
          {[...Array(14)].map((_, colIndex) => {
            const starIndex = rowIndex * 14 + colIndex;
            const isAttended = starIndex < attendedDays;
            
            return (
              <span
                key={colIndex}
                className={`text-xl cursor-pointer ${
                  isAttended ? "text-[var(--color-blue-600)]" : "text-[var(--color-gray-300)]"
                }`}
                title={`Day ${starIndex + 1}`}
              >
                ★
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}