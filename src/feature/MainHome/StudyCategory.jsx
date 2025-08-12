import { useNavigate } from "react-router-dom";

export default function StudyCategory({
  title = "스터디 채널",
  rows = [
    { label: "코딩", count: 9 },
    { label: "디자인", count: 9 },
    { label: "영상편집", count: 9 },
  ],
}) {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/study/${category}`);
  };

  return (
    <section className="space-y-6 mb-21">
      <h2 className="font-bold text-2xl mb-7">{title}</h2>

      {rows.map((r) => (
        <div key={r.label}>
          <p className="text-gray-500 font-bold text-1.5xl mb-3">{r.label}</p>
          <div className="grid grid-cols-9 gap-4">
            {Array.from({ length: r.count }).map((_, i) => (
              <button
                key={i}
                onClick={() => handleCategoryClick(r.label)}
                className="w-12 h-12 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`${r.label} 스터디 채널 ${i + 1}번`}
              ></button>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
