import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes.js";

export function useProjectModal() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProjectId(projectId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMoreClick = () => {
    navigate(ROUTES.PROJECTS);
  };

  const onCardKeyDown = (e, projectId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleProjectClick(projectId);
    }
  };

  return {
    isModalOpen,
    selectedProjectId,
    handleProjectClick,
    closeModal,
    handleMoreClick,
    onCardKeyDown,
  };
}