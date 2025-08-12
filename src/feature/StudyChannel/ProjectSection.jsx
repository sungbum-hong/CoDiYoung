export default function ProjectSection({ projectCount = 3 }) {
  return (
    <section className="mt-12">
      <h2 className="text-gray-800 font-medium mb-4">참여 프로젝트</h2>
      <div className="rounded-2xl border-2 border-blue-900 p-6 h-[360px]">
        <div className="flex items-center gap-6">
          {Array.from({ length: projectCount }).map((_, idx) => (
            <ProjectAvatar key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectAvatar() {
  return (
    <div className="w-14 h-14 bg-gray-300 rounded-full" />
  );
}