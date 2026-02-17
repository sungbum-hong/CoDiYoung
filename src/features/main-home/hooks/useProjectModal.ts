import { useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "../../../constants/routes";

export function useProjectModal() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | number | null>(null);

  const handleProjectClick = (projectId: string | number) => {
    setSelectedProjectId(projectId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMoreClick = () => {
    router.push(ROUTES.PROJECTS);
  };

  const onCardKeyDown = (e: React.KeyboardEvent, projectId: string | number) => {
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
