import { COLORS } from "../../utils/colors.js";

export default function AttendanceSection({ attendanceFilledCount = 2 }) {
  return (
    <section className="mt-8">
      <h2 className="font-medium mb-4" style={{ color: COLORS.GRAY_800 }}>출석체크</h2>
      <AttendanceGrid total={30} filled={attendanceFilledCount} />
    </section>
  );
}

function AttendanceGrid({ total = 30, filled = 0 }) {
  const items = Array.from({ length: total });
  return (
    <div className="grid grid-cols-10 gap-6 select-none">
      {items.map((_, index) => (
        <StarIcon key={index} filled={index < filled} />
      ))}
    </div>
  );
}

function StarIcon({ filled = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={
        "w-7 h-7 " + (filled ? "text-[var(--color-blue-900)]" : "text-[var(--color-gray-300)]")
      }
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}