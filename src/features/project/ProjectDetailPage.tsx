'use client';

import { MOCK_PROJECT_DETAIL } from '../../mock/projectDetail';
import ProjectHeader from './components/ProjectHeader';
import ProjectBanner from './components/ProjectBanner';
import ProjectSidebar from './components/ProjectSidebar';
import ProjectContent from './components/ProjectContent';

export default function ProjectDetailPage() {
  // In a real app, we would fetch data based on ID here using useParams()
  // For now, using static mock data
  const data = MOCK_PROJECT_DETAIL;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header (Top section above banner) */}
      <div className="max-w-4xl">
         {/* Navigation Back or Breadcrumbs could go here */}
      </div>

      {/* Main Banner */}
      <ProjectBanner />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Content (8 cols) */}
        <div className="lg:col-span-8">
            <ProjectHeader 
                title={data.title}
                author={data.author}
                date={data.createdAt}
            />
            <ProjectContent htmlContent={data.content} />
        </div>

        {/* Right Column: Sidebar (4 cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-8">
            <ProjectSidebar 
                metadata={{
                    recruitmentCount: parseInt(data.recruitmentCount) || 0,
                    deadline: data.deadline,
                    positions: data.positions,
                    techStack: data.techStack,
                    slogan: data.slogan,
                    questions: data.questions,
                    period: "3개월", // Placeholder or mock
                    contact: "open.kakao.com/..." // Placeholder or mock
                }}
                onApply={() => alert('지원하기 기능은 준비중입니다.')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
