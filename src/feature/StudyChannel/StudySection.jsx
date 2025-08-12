export default function StudySection({ studyCount = 4 }) {
  return (
    <section className="mt-10">
      <h2 className="text-gray-800 font-medium mb-4">스터디</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {Array.from({ length: studyCount }).map((_, idx) => (
          <StudyCard key={idx} />
        ))}
      </div>
    </section>
  );
}

function StudyCard() {
  return (
    <div className="h-28 rounded-2xl bg-gray-300" />
  );
}