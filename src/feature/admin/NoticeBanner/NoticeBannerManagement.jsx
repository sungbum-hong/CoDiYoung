import { useState, useRef } from "react";
import { FaEdit } from "react-icons/fa";

export default function NoticeBannerManagement() {
  const [image, setImage] = useState("/cdymainbanner.png");
  const fileInputRef = useRef(null);

  // 아이콘 클릭 시 파일 선택 창 열기
  const handleEditClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 파일 선택 시 이미지 변경
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
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
            className="p-3 rounded-full text-white bg-[#FF0066] hover:bg-[#e6005c] transition-colors"
            onClick={handleEditClick}
          >
            <FaEdit size={25} />
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


