import { useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "../../../constants/routes.js";

export function useProjectModal() {
  const router = useRouter();
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
    router.push(ROUTES.PROJECTS);
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
