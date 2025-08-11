export default function StudyCategory({
  title = "스터디 채널",
  rows = [
    { label: "코딩", count: 10 },
    { label: "디자인", count: 10 },
    { label: "영상편집", count: 10 },
  ],
}) {
  return (
    <section className="study-section">
      <h2 className="study-section-title">{title}</h2>

      {rows.map((r) => (
        <div className="study-block" key={r.label}>
          <div className="study-block-label">{r.label}</div>
          <div className="study-block-dots">
            {Array.from({ length: r.count }).map((_, i) => (
              <button key={i} className="dot" aria-label={`${r.label}-${i + 1}`} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
