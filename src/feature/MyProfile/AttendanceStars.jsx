export default function AttendanceStars() {
  const ROWS = 3;
  const COLS = 10;
  const TOTAL_DAYS = ROWS * COLS;
  const attendedDays = 2; // ✅ 출석한 날짜 수

  return (
    <div className="flex flex-col gap-15 mt-5">
      {Array.from({ length: ROWS }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-10">
          {Array.from({ length: COLS }).map((_, colIndex) => {
            const starIndex = rowIndex * COLS + colIndex;
            const isAttended = starIndex < attendedDays;

            return (
              <span
                key={colIndex}
                className={`text-5xl cursor-pointer transition-colors ${
                  isAttended
                    ? "text-[var(--color-blue-600)]"
                    : "text-[var(--color-gray-300)]"
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
