import { useState, useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { useUploadAndAddBanner } from "./hooks/useBannerManagement.js";

export default function NoticeBannerManagement() {
  const [image, setImage] = useState("/cdymainbanner.png");
  const fileInputRef = useRef(null);
  const { uploadAndAdd, isLoading, error } = useUploadAndAddBanner();

  // 아이콘 클릭 시 파일 선택 창 열기
  const handleEditClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 파일 선택 시 이미지 업로드 및 배너 변경
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // 이미지 타입 검증
    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }

    // 파일 크기 검증 (10MB 제한)
    if (file.size > 10 * 1024 * 1024) {
      alert('파일 크기는 10MB 이하만 가능합니다.');
      return;
    }

    try {
      // 미리보기 설정
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);

      // 실제 업로드 및 배너 등록
      await uploadAndAdd(file);
      alert('배너가 성공적으로 변경되었습니다!');
    } catch (error) {
      console.error('배너 업로드 실패:', error);
      alert('배너 업로드에 실패했습니다: ' + error.message);

      // 실패 시 이전 이미지로 되돌리기
      setImage("/cdymainbanner.png");
    } finally {
      // 파일 입력 초기화
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="p-6">
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">배너 관리</h1>

        {/* 편집 버튼 */}
        <div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleImageChange}
          />
          <button
            aria-label="배너 편집"
            className="p-3 rounded-full text-white bg-[#FF0066] hover:bg-[#e6005c] transition-colors disabled:opacity-50"
            onClick={handleEditClick}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <FaEdit size={25} />
            )}
          </button>
        </div>
      </div>

      {/* 배너 이미지 */}
      <div className="w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden ">
        <img
          src={image}
          alt="배너 이미지"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}


