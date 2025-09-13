import { useState, useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import ProjectCreateForm from "./ProjectCreateForm";
import ApplicantListView from "./components/ApplicantListView";
import { ProjectService } from "../../../services/projectService.js";
import {
  MockProjectService,
  USE_MOCK_DATA,
} from "../../../mock-logic/index.js";

export default function ProjectContent() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showApplicantList, setShowApplicantList] = useState(false);
  const [progressingProjects, setProgressingProjects] = useState([]);
  const [appliedProjects, setAppliedProjects] = useState([]);
  const [projectApplicants, setProjectApplicants] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);

  const handleCreateClick = () => {
    setShowCreateForm(true);
  };

  const handleBackClick = () => {
    setShowCreateForm(false);
  };

  const handleApplicantIconClick = (projectId) => {
    setCurrentProjectId(projectId);
    setShowApplicantList(true);
  };

  const handleBackToProjects = () => {
    setShowApplicantList(false);
    setCurrentProjectId(null);
  };

  // 진행 프로젝트 조회
  const fetchProgressingProjects = async () => {
    try {
      const response = USE_MOCK_DATA
        ? await MockProjectService.getProgressingProjects()
        : await ProjectService.getProgressingProjects();
      console.log("진행 프로젝트 응답:", response);
      if (response) {
        const projectsArray = Array.isArray(response) ? response : [response];
        setProgressingProjects(projectsArray);

        // 각 진행 프로젝트의 신청자 조회
        for (const project of projectsArray) {
          console.log(`프로젝트 정보:`, project);
          if (project.id) {
            console.log(`프로젝트 ${project.id}의 신청자 조회 시작`);
            await fetchProjectApplicants(project.id);
          } else {
            console.log(`프로젝트 ID가 null입니다:`, project.title);
            console.log(
              `서버에서 프로젝트 ID를 반환하지 않아 신청자 조회가 불가능합니다.`
            );
            // 임시로 빈 신청자 배열 설정
            setProjectApplicants((prev) => ({
              ...prev,
              ["no-id"]: [],
            }));
          }
        }
      } else {
        setProgressingProjects([]);
      }
    } catch (error) {
      console.error("진행 프로젝트 조회 실패:", error);
      setProgressingProjects([]);
    }
  };

  // 신청 프로젝트 조회
  const fetchAppliedProjects = async () => {
    try {
      const response = USE_MOCK_DATA
        ? await MockProjectService.getAppliedProjects()
        : await ProjectService.getAppliedProjects();
      console.log("신청 프로젝트 응답:", response);
      if (response) {
        const projectsArray = Array.isArray(response) ? response : [response];
        setAppliedProjects(projectsArray);
      } else {
        setAppliedProjects([]);
      }
    } catch (error) {
      console.error("신청 프로젝트 조회 실패:", error);
      setAppliedProjects([]);
    }
  };

  // 프로젝트 신청자 조회
  const fetchProjectApplicants = async (projectId) => {
    try {
      const response = USE_MOCK_DATA
        ? await MockProjectService.getProjectApplicants(projectId)
        : await ProjectService.getProjectApplicants(projectId);
      console.log(`프로젝트 ${projectId} 신청자 응답:`, response);
      if (response) {
        const applicantsArray = Array.isArray(response) ? response : [response];
        setProjectApplicants((prev) => ({
          ...prev,
          [projectId]: applicantsArray,
        }));
      }
    } catch (error) {
      console.error(`프로젝트 ${projectId} 신청자 조회 실패:`, error);
      // 신청자가 없는 경우도 정상적인 상황
      if (
        error.message.includes("신청자가 없습니다") ||
        error.message.includes("404")
      ) {
        console.log(`프로젝트 ${projectId}에 신청자가 없음 - 정상 상황`);
        setProjectApplicants((prev) => ({
          ...prev,
          [projectId]: [],
        }));
      }
    }
  };

  // 모든 프로젝트 데이터 조회
  const fetchAllProjects = async () => {
    setIsLoading(true);
    try {
      await Promise.all([fetchProgressingProjects(), fetchAppliedProjects()]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("ProjectContent Mock 데이터 사용 여부:", USE_MOCK_DATA);
    fetchAllProjects();
  }, []);

  if (showCreateForm) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center p-6">
        <ProjectCreateForm onBack={handleBackClick} />
      </div>
    );
  }

  if (showApplicantList) {
    const currentProject = progressingProjects.find(
      (p) => p.id === currentProjectId
    );
    const applicants = currentProjectId
      ? projectApplicants[currentProjectId] || []
      : [];

    return (
      <ApplicantListView
        applicants={applicants}
        projectTitle={currentProject?.title || "프로젝트"}
        onBack={handleBackToProjects}
      />
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col py-6 px-24">
      {/* 신청 프로젝트 + 아이콘 */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold">진행 프로젝트</h2>
          {/* 신청자/완료 이미지를 제목 오른쪽에 배치 */}
          <div className="flex gap-4">
            {/* 신청자 리스트 보기 버튼 */}
            <div className="flex gap-2">
              <button
                onClick={handleCreateClick}
                className="w-10 h-10 rounded-full bg-white border-2 border-violet-600 text-violet-600 
             hover:bg-violet-600 hover:text-white transition flex items-center justify-center text-sm shadow-sm"
              >
                ➕
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl h-64 border-2 border-[var(--color-primary)] rounded-md relative">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-bold text-lg">로딩 중...</span>
            </div>
          ) : progressingProjects && progressingProjects.length > 0 ? (
            <div className="w-full h-full overflow-y-auto">
              {progressingProjects.map((project, index) => (
                <div key={index} className="relative w-full h-full">
                  {/* 프로젝트 이미지 */}
                  <div
                    className="absolute w-[70px] h-[70px] rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600"
                    style={{ left: "20px", top: "12px" }}
                  >
                    프로젝트
                    <br />
                    이미지
                  </div>

                  {/* 프로젝트 정보 */}
                  <div
                    className="absolute"
                    style={{ left: "198px", top: "13px" }}
                  >
                    <div className="text-xs font-bold">
                      프로젝트 명: {project.title || ""}
                    </div>
                  </div>

                  <div
                    className="absolute"
                    style={{ left: "198px", top: "38px" }}
                  >
                    <div className="text-xs font-bold">
                      참여 인원: {project.memberCount ?? 0}명
                    </div>
                  </div>

                  <div
                    className="absolute"
                    style={{ left: "198px", top: "65px" }}
                  >
                    <div className="text-xs font-bold">
                      포지션:{" "}
                      {project.positions && Array.isArray(project.positions)
                        ? project.positions.join(", ")
                        : "미설정"}
                    </div>
                  </div>

                  <div
                    className="absolute"
                    style={{ left: "198px", top: "92px" }}
                  >
                    <div className="text-xs font-bold">
                      연락처:{" "}
                      {project.kakakoLink ? (
                        <a
                          href={project.kakakoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
                        >
                          {project.kakakoLink}
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  {/* 크루 제목 */}
                  <div
                    className="absolute text-xs font-bold"
                    style={{ left: "22px", top: "113px" }}
                  >
                    크루
                  </div>

                  {/* 크루 동그라미들 */}
                  <div
                    className="absolute flex gap-[20px]"
                    style={{ left: "20px", top: "136px" }}
                  >
                    {project.memberBriefs && project.memberBriefs.length > 0 ? (
                      project.memberBriefs.slice(0, 2).map((member, i) => (
                        <div
                          key={i}
                          className="w-[38px] h-[38px] rounded-full bg-gray-300 flex items-center justify-center text-xs"
                        >
                          {member.name?.[0] ?? "?"}
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="w-[38px] h-[38px] rounded-full bg-gray-300"></div>
                        <div className="w-[38px] h-[38px] rounded-full bg-gray-300"></div>
                      </>
                    )}
                  </div>

                  {/* 기술 제목 */}
                  <div
                    className="absolute text-xs font-bold"
                    style={{ left: "21px", top: "182px" }}
                  >
                    기술
                  </div>

                  {/* 기술 동그라미 */}
                  <div
                    className="absolute"
                    style={{ left: "21px", top: "205px" }}
                  >
                    <div className="w-[38px] h-[38px] rounded-full bg-gray-300 flex items-center justify-center text-xs">
                      {project.techs &&
                      Array.isArray(project.techs) &&
                      project.techs.length > 0
                        ? project.techs[0].slice(0, 2)
                        : "미설정"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-bold text-lg">없음</span>
            </div>
          )}
        </div>
      </div>

      {/* 진행 프로젝트 */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold">진행 프로젝트</h2>
          {/* 신청자/완료 이미지를 제목 오른쪽에 배치 */}
          <div className="flex gap-4">
            {/* 신청자 리스트 보기 버튼 */}
            <div className="flex gap-2">
              {progressingProjects.length > 0 && progressingProjects[0] ? (
                progressingProjects[0].id ? (
                  <button
                    onClick={() =>
                      handleApplicantIconClick(progressingProjects[0].id)
                    }
                    className="w-[58px] h-[58px] rounded-full flex items-center justify-center text-sm font-bold text-white hover:scale-105 transition-transform cursor-pointer"
                    style={{ backgroundColor: "#6366F1" }}
                    title={`신청자 목록 보기 (${
                      projectApplicants[progressingProjects[0].id]?.length || 0
                    }명)`}
                  >
                    <UserIcon className="w-6 h-6 text-white" />
                  </button>
                ) : (
                  <div className="w-[58px] h-[58px] rounded-full bg-orange-200 flex items-center justify-center text-xs text-orange-700 font-semibold">
                    서버
                    <br />
                    이슈
                  </div>
                )
              ) : (
                <div className="w-[58px] h-[58px] rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600">
                  프로젝트
                  <br />
                  없음
                </div>
              )}
            </div>
            <div className="w-[58px] h-[58px] rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600">
              완료
              <br />
              이미지
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl h-64 border-2 border-[var(--color-primary)] rounded-md relative">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-bold text-lg">로딩 중...</span>
            </div>
          ) : progressingProjects && progressingProjects.length > 0 ? (
            <div className="w-full h-full overflow-y-auto">
              {progressingProjects.map((project, index) => (
                <div key={index} className="relative w-full h-full">
                  {/* 프로젝트 이미지 */}
                  <div
                    className="absolute w-[70px] h-[70px] rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600"
                    style={{ left: "20px", top: "12px" }}
                  >
                    프로젝트
                    <br />
                    이미지
                  </div>

                  {/* 프로젝트 정보 */}
                  <div
                    className="absolute"
                    style={{ left: "198px", top: "13px" }}
                  >
                    <div className="text-xs font-bold">
                      프로젝트 명: {project.title || ""}
                    </div>
                  </div>

                  <div
                    className="absolute"
                    style={{ left: "198px", top: "38px" }}
                  >
                    <div className="text-xs font-bold">
                      참여 인원: {project.memberCount ?? 0}명
                    </div>
                  </div>

                  <div
                    className="absolute"
                    style={{ left: "198px", top: "65px" }}
                  >
                    <div className="text-xs font-bold">
                      포지션:{" "}
                      {project.positions && Array.isArray(project.positions)
                        ? project.positions.join(", ")
                        : "미설정"}
                    </div>
                  </div>

                  <div
                    className="absolute"
                    style={{ left: "198px", top: "92px" }}
                  >
                    <div className="text-xs font-bold">
                      연락처:{" "}
                      {project.kakakoLink ? (
                        <a
                          href={project.kakakoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
                        >
                          {project.kakakoLink}
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  {/* 크루 제목 */}
                  <div
                    className="absolute text-xs font-bold"
                    style={{ left: "22px", top: "113px" }}
                  >
                    크루
                  </div>

                  {/* 크루 동그라미들 */}
                  <div
                    className="absolute flex gap-[20px]"
                    style={{ left: "20px", top: "136px" }}
                  >
                    {project.memberBriefs && project.memberBriefs.length > 0 ? (
                      project.memberBriefs.slice(0, 2).map((member, i) => (
                        <div
                          key={i}
                          className="w-[38px] h-[38px] rounded-full bg-gray-300 flex items-center justify-center text-xs"
                        >
                          {member.name?.[0] ?? "?"}
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="w-[38px] h-[38px] rounded-full bg-gray-300"></div>
                        <div className="w-[38px] h-[38px] rounded-full bg-gray-300"></div>
                      </>
                    )}
                  </div>

                  {/* 기술 제목 */}
                  <div
                    className="absolute text-xs font-bold"
                    style={{ left: "21px", top: "182px" }}
                  >
                    기술
                  </div>

                  {/* 기술 동그라미 */}
                  <div
                    className="absolute"
                    style={{ left: "21px", top: "205px" }}
                  >
                    <div className="w-[38px] h-[38px] rounded-full bg-gray-300 flex items-center justify-center text-xs">
                      {project.techs &&
                      Array.isArray(project.techs) &&
                      project.techs.length > 0
                        ? project.techs[0].slice(0, 2)
                        : "미설정"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-bold text-lg">없음</span>
            </div>
          )}
        </div>
      </div>

      {/* 프로젝트 - 페이지네이션 */}
      <div>
        <h2 className="text-sm font-semibold mb-3">프로젝트</h2>
        <div className="flex space-x-4">
          <div className="w-6 h-6 rounded-full bg-gray-300" />
          <div className="w-6 h-6 rounded-full bg-gray-300" />
          <div className="w-6 h-6 rounded-full bg-gray-300" />
        </div>
      </div>
    </div>
  );
}
