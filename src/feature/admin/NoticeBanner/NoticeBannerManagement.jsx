import { useState, useRef } from "react";
import { FaPlus, FaTrash, FaTimes } from "react-icons/fa";
import { useUploadAndAddBanner, useBannerList, useDeleteBanner } from "./hooks/useBannerManagement.js";

import PartnerManagement from "../PartnerManagement/PartnerManagement.jsx";
import AddModal from "../components/AddModal.jsx";

export default function NoticeBannerManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { uploadAndAdd, isLoading: isUploading, error: uploadError } = useUploadAndAddBanner();
  const { data: banners = [], isLoading: isListLoading, error: listError } = useBannerList();
  const deleteBannerMutation = useDeleteBanner();

  // 모달 열기
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // 배너 추가 핸들러
  const handleBannerSubmit = async ({ file, link }) => {
    try {
      await uploadAndAdd(file, link);
      alert('배너가 성공적으로 추가되었습니다!');
      closeModal();
    } catch (error) {
      console.error('배너 업로드 실패:', error);
      alert('배너 업로드에 실패했습니다: ' + error.message);
    }
  };

  // 배너 삭제 핸들러
  const handleDeleteClick = async (bannerId) => {
    if (window.confirm('정말 이 배너를 삭제하시겠습니까?')) {
      try {
        await deleteBannerMutation.mutateAsync(bannerId);
        alert('배너가 삭제되었습니다.');
      } catch (error) {
        console.error('배너 삭제 실패:', error);
        alert('배너 삭제에 실패했습니다.');
      }
    }
  };

  if (isListLoading) {
    return <div className="p-6 text-center">배너 목록을 불러오는 중...</div>;
  }

  return (
    <div className="p-6">
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">배너 관리</h1>
      </div>

      {/* 배너 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 배너 목록 */}
        {banners.map((banner, index) => (
          <div key={banner.id || index} className="relative group rounded-lg overflow-hidden shadow-md aspect-video bg-gray-100">
            {/* 링크가 있으면 a 태그로 감싸기 */}
            {banner.url ? (
              <a href={banner.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img
                  src={banner.imageUrl || banner.url || "/cdymainbanner.png"}
                  alt={`배너 ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </a>
            ) : (
              <img
                src={banner.imageUrl || banner.url || "/cdymainbanner.png"}
                alt={`배너 ${index + 1}`}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <button
                onClick={() => handleDeleteClick(banner.id)}
                className="p-3 bg-white text-red-500 rounded-full hover:bg-red-50 transition-colors"
                title="삭제"
              >
                <FaTrash size={20} />
              </button>
            </div>
          </div>
        ))}

        {/* 추가 버튼 카드 */}
        <div
          onClick={openModal}
          className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center aspect-video cursor-pointer hover:border-[#FF0066] hover:bg-pink-50 transition-all duration-200 group"
        >
          <div className={`p-4 rounded-full bg-gray-100 group-hover:bg-[#FF0066] group-hover:text-white transition-colors mb-2 ${isUploading ? 'animate-pulse' : ''}`}>
            {isUploading ? (
              <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              <FaPlus size={24} className="text-gray-400 group-hover:text-white" />
            )}
          </div>
          <span className="text-gray-500 group-hover:text-[#FF0066] font-medium">
            {isUploading ? '업로드 중...' : '배너 추가'}
          </span>
        </div>
      </div>

      {/* 구분선 */}
      <hr className="my-12 border-gray-200" />

      {/* 파트너 관리 섹션 */}
      <div className="-mx-6">
        <PartnerManagement />
      </div>

      {/* 배너 추가 모달 */}
      <AddModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleBannerSubmit}
        title="배너 추가"
        isUploading={isUploading}
      />
    </div>
  );
}
