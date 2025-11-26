import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { usePartnerList, useUploadAndAddPartner, useDeletePartner } from "./hooks/usePartnerManagement.js";
import AddModal from "../components/AddModal.jsx";

export default function PartnerManagement() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data: partners = [], isLoading: isListLoading } = usePartnerList();
    const { uploadAndAdd, isLoading: isUploading } = useUploadAndAddPartner();
    const { mutate: deletePartner } = useDeletePartner();

    // 모달 열기/닫기
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // 파트너 추가 핸들러
    const handlePartnerSubmit = async ({ file, name, link }) => {
        try {
            await uploadAndAdd(file, name, link);
            alert("파트너가 성공적으로 추가되었습니다.");
            closeModal();
        } catch (error) {
            console.error("파트너 추가 실패:", error);
            alert("파트너 추가에 실패했습니다: " + error.message);
        }
    };

    // 파트너 삭제 핸들러
    const handleDelete = (partnerId, partnerName) => {
        if (window.confirm(`"${partnerName}" 파트너를 삭제하시겠습니까?`)) {
            deletePartner(partnerId);
        }
    };

    // 추가 버튼 클릭 시 파일 선택창 열기
    const handleAddClick = () => {
        fileInputRef.current?.click();
    };

    if (isListLoading) {
        return <div className="p-6 text-center">파트너 목록을 불러오는 중...</div>;
    }

    return (
        <div className="">
            {/* 헤더 */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">파트너 관리</h1>
            </div>

            {/* 파트너 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 파트너 목록 */}
                {partners.map((partner, index) => (
                    <div key={partner.id || index} className="relative group rounded-lg overflow-hidden shadow-md aspect-video bg-gray-100">
                        {/* 링크가 있으면 a 태그로 감싸기 */}
                        {partner.link ? (
                            <a href={partner.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                <img
                                    src={partner.imageUrl || "/placeholder.png"}
                                    alt={partner.name}
                                    className="w-full h-full object-contain p-4"
                                />
                            </a>
                        ) : (
                            <img
                                src={partner.imageUrl || "/placeholder.png"}
                                alt={partner.name}
                                className="w-full h-full object-contain p-4"
                            />
                        )}

                        {/* 호버 오버레이 */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                            <h3 className="text-white font-medium mb-3 px-4 text-center truncate w-full">{partner.name}</h3>
                            <button
                                onClick={() => handleDelete(partner.id, partner.name)}
                                className="p-3 bg-white text-red-500 rounded-full hover:bg-red-50 transition-colors shadow-lg"
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
                    <div className="p-4 rounded-full bg-gray-100 group-hover:bg-[#FF0066] group-hover:text-white transition-colors mb-2">
                        {isUploading ? (
                            <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <FaPlus size={24} className="text-gray-400 group-hover:text-white" />
                        )}
                    </div>
                    <span className="text-gray-500 group-hover:text-[#FF0066] font-medium">
                        {isUploading ? "업로드 중..." : "파트너 추가"}
                    </span>
                </div>
            </div>

            {/* 파트너 추가 모달 */}
            <AddModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSubmit={handlePartnerSubmit}
                title="파트너 추가"
                showNameInput={true}
                isUploading={isUploading}
            />
        </div>
    );
}
