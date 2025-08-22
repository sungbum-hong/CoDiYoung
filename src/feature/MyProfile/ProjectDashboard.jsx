import { useState } from "react";

function Section({ title, actionSlot, children }) {
  return (
    <section className="w-full mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        {actionSlot}
      </div>
      {children}
    </section>
  );
}

function EmptyCard({ message, cta, onCtaClick }) {
  return (
    <div className="w-full h-64 flex flex-col items-center justify-center border-2 border-violet-600 rounded-xl text-center">
      <span className="text-lg font-bold text-gray-900">{message}</span>
      {cta && (
        <button 
          onClick={onCtaClick}
          className="mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition"
        >
          {cta}
        </button>
      )}
    </div>
  );
}

function Dots({ total, current, onChange }) {
  return (
    <div className="flex space-x-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onChange(i)}
          className={`w-3 h-3 rounded-full ${
            current === i ? "bg-violet-600" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function ProjectDashboard() {
  const [dotIndex, setDotIndex] = useState(0);

  const handleCreateProject = () => {
    console.log('프로젝트 만들기 클릭');
    // 프로젝트 생성 로직
  };

  return (
    <main className="max-w-screen-xl mx-auto px-8 py-6 bg-white">
      {/* 상단 프로젝트 만들기 버튼 */}
      <div className="flex justify-end mb-8">
        <button
          aria-label="프로젝트 만들기"
          onClick={handleCreateProject}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-violet-600 text-white hover:bg-violet-700 transition"
        >
          ➕
        </button>
      </div>

      {/* 신청/진행 프로젝트 - 데스크탑 기준 2열 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Section title="신청 프로젝트">
          <EmptyCard 
            message="없음" 
            cta="프로젝트 찾기" 
            onCtaClick={() => console.log('프로젝트 찾기 클릭')}
          />
        </Section>
        
        <Section title="진행 프로젝트">
          <EmptyCard 
            message="없음" 
            cta="프로젝트 만들기"
            onCtaClick={handleCreateProject}
          />
        </Section>
      </div>

      {/* 프로젝트 섹션 */}
      <Section title="프로젝트">
        <Dots total={3} current={dotIndex} onChange={setDotIndex} />
        <EmptyCard 
          message="없음"
          cta="프로젝트 만들기"
          onCtaClick={handleCreateProject}
        />
      </Section>
    </main>
  );
}