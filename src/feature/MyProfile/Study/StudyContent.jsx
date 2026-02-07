
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

// Mock Data
import { MOCK_MY_STUDIES } from "../../../services/profile/mockProfileData.js";

// Component
import MyStudyCard from "./MyStudyCard";

export default function StudyContent() {
  const navigate = useNavigate();
  const studyCount = MOCK_MY_STUDIES.length;

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Top Banner */}
      <div className="bg-gray-100 rounded-full py-4 px-8 mb-8 flex justify-center items-center relative">
        <Link 
            to="/write" 
            className="text-gray-600 font-medium hover:text-gray-900 flex items-center gap-2"
        >
          오늘의 스터디를 기록해보세요.
          <PencilSquareIcon className="w-5 h-5" />
        </Link>
      </div>

      {/* 2. Study Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_MY_STUDIES.map((study) => (
          <MyStudyCard key={study.id} study={study} />
        ))}
      </div>
      
      {/* Empty State (if needed) */}
      {studyCount === 0 && (
          <div className="text-center py-20 text-gray-400">
              아직 작성된 스터디가 없습니다.
          </div>
      )}
    </div>
  );
}
