import { ProjectUtils } from "../utils/ProjectUtils";

/**
 * 프로젝트 완료 진행률을 표시하는 컴포넌트
 */
export default function ProjectProgress({ project, className = "" }: { project: any; className?: string }) {
  const { completionRate, isFullyCompleted, completedCount, totalCount } =
    ProjectUtils.getCompletionProgress(project);

  if (totalCount === 0) return null;

  const percentage = Math.round(completionRate * 100);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* 진행률 바 */}
      <div className="flex-1 bg-gray-200 rounded-full h-2 min-w-[60px]">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${
            isFullyCompleted ? 'bg-green-500' : 'bg-blue-500'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* 진행률 텍스트 */}
      <span className={`text-xs font-medium whitespace-nowrap ${
        isFullyCompleted ? 'text-green-600' : 'text-gray-600'
      }`}>
        {completedCount}/{totalCount} ({percentage}%)
      </span>

      {/* 완료 표시 */}
      {isFullyCompleted && (
        <span className="text-xs font-bold text-green-600">✓</span>
      )}
    </div>
  );
}