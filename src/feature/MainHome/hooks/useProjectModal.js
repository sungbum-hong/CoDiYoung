import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes.js";

export function useProjectModal() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleProjectClick = (index) => {
    setSelectedProjectIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMoreClick = () => {
    navigate(ROUTES.PROJECTS);
  };

  const onCardKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleProjectClick(index);
    }
  };

  return {
    isModalOpen,
    selectedProjectIndex,
    handleProjectClick,
    closeModal,
    handleMoreClick,
    onCardKeyDown,
  };
}