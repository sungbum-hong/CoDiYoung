import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useRouter, useParams, usePathname } from "next/navigation";
import { MESSAGES } from "../../../constants/messages.js";
import { sanitizeHtml } from "../utils/sanitizer.js";
import { mapImagesToContent } from "../../../utils/imageUtils.js";

/**
 * Mock version of useWritePage
 */
export function useWritePage() {
  const router = useRouter();
  const { id } = useParams();
  const pathname = usePathname();
  const currentPath = pathname || "";
  const isEditMode = currentPath.startsWith("/edit/");
  const isViewMode = currentPath.startsWith("/write/") && !!id;
  const isMounted = useRef(true);

  // 로컬 상태 관리 (UI 전용)
  const [content, setContent] = useState("");
  const [savedStudyId, setSavedStudyId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);

  // 모달 상태 관리
  const [modals, setModals] = useState({
    record: false,
    delete: false,
    edit: false,
    complete: false,
  });
  const [completeMessage, setCompleteMessage] = useState("");

  // Mock Data Loading
  useEffect(() => {
    isMounted.current = true;
    if ((isEditMode || isViewMode) && id && !isInitialized) {
      // Simulate fetch delay
      setTimeout(() => {
        if (isMounted.current) {
          setContent(
            "<h2>Mock Study Content</h2><p>This is a mock study content.</p>",
          );
          setIsInitialized(true);
        }
      }, 500);
    }
    return () => {
      isMounted.current = false;
    };
  }, [id, isEditMode, isViewMode, isInitialized]);

  // Actions (Mock)
  const handleSave = async () => {
    await new Promise((r) => setTimeout(r, 500));
    setCompleteMessage(MESSAGES.UI.SAVE_COMPLETE || "저장되었습니다.");
    setModals((prev) => ({ ...prev, record: true }));
  };

  const handleDelete = async () => {
    await new Promise((r) => setTimeout(r, 500));
    setCompleteMessage(MESSAGES.UI.DELETE_COMPLETE || "삭제되었습니다.");
    setModals((prev) => ({ ...prev, complete: true, delete: false }));
  };

  const handleEdit = async () => {
    await new Promise((r) => setTimeout(r, 500));
    setCompleteMessage(MESSAGES.UI.EDIT_COMPLETE || "수정되었습니다.");
    setModals((prev) => ({ ...prev, complete: true, edit: false }));
  };

  const openModal = (name) => setModals((prev) => ({ ...prev, [name]: true }));
  const closeModal = (name) =>
    setModals((prev) => ({ ...prev, [name]: false }));

  return {
    studyData: { id: id || 1, content: content },
    content,
    setContent,
    savedStudyId,
    isEditMode,
    isViewMode,
    isLoading: false,
    errorMessage,
    studyError: null,
    isCreateSuccess: false,
    isUpdateSuccess: false,
    isDeleteSuccess: false,
    modals,
    completeMessage,
    actions: {
      handleSave,
      handleDelete,
      handleEdit,
      handleCancel: () => router.push("/"),
      navigateToEdit: () => router.push(`/edit/${id}`),
      openModal,
      closeModal,
      clearError: () => setErrorMessage(""),
      resetForm: () => setContent(""),
      handleRetry: () => {},
    },
    utils: {
      extractImagesFromContent: () => [],
      validateContent: () => content.length > 0,
    },
  };
}
