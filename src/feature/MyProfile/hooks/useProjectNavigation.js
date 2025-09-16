import { useState } from "react";

export function useProjectNavigation() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showApplicantList, setShowApplicantList] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);

  // 프로젝트 생성 폼으로 이동
  const handleCreateClick = () => {
    setShowCreateForm(true);
  };

  // 프로젝트 목록으로 돌아가기
  const handleBackClick = () => {
    setShowCreateForm(false);
  };

  // 신청자 목록으로 이동
  const handleApplicantIconClick = (projectId) => {
    setCurrentProjectId(projectId);
    setShowApplicantList(true);
  };

  // 프로젝트 목록으로 돌아가기 (신청자 목록에서)
  const handleBackToProjects = () => {
    setShowApplicantList(false);
    setCurrentProjectId(null);
  };

  // 현재 화면 상태 확인
  const getCurrentView = () => {
    if (showCreateForm) return 'create';
    if (showApplicantList) return 'applicants';
    return 'list';
  };

  // 모든 상태 초기화
  const resetNavigation = () => {
    setShowCreateForm(false);
    setShowApplicantList(false);
    setCurrentProjectId(null);
  };

  return {
    // 상태
    showCreateForm,
    showApplicantList,
    currentProjectId,
    
    // 액션
    handleCreateClick,
    handleBackClick,
    handleApplicantIconClick,
    handleBackToProjects,
    
    // 유틸리티
    getCurrentView,
    resetNavigation,
  };
}