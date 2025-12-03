import { useState, useRef, useEffect } from "react";
import { FaTimes, FaCamera } from "react-icons/fa";

export default function AddModal({ isOpen, onClose, onSubmit, title, showNameInput = false, isUploading }) {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const fileInputRef = useRef(null);

    // 모달이 열릴 때 상태 초기화
    useEffect(() => {
        if (isOpen) {
            setName("");
            setLink("");
            setSelectedFile(null);
            setPreviewUrl(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            alert('이미지 파일만 업로드 가능합니다.');
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            alert('파일 크기는 10MB 이하만 가능합니다.');
            return;
        }

        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));

        // 파일명으로 이름 자동 설정 (이름 입력 필드가 있고 비어있을 때)
        if (showNameInput && !name) {
            const fileName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
            setName(fileName);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedFile) {
            alert("이미지를 선택해주세요.");
            return;
        }

        if (showNameInput && !name.trim()) {
            alert("이름을 입력해주세요.");
            return;
        }

        onSubmit({ file: selectedFile, name, link });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* 배경: 투명하지만 클릭 방지를 위해 존재 (완전 투명) */}
            <div className="absolute inset-0 bg-black/0" onClick={onClose}></div>

            {/* 모달 컨텐츠: 약간의 블러와 반투명 배경으로 가독성 확보하되 '투명한 느낌' 유지 */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl w-full max-w-md p-6 m-4 border border-white/50">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
                        <FaTimes size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* 이미지 업로드 영역 */}
                    <div
                        className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-[#FF0066] hover:bg-pink-50/50 transition-all aspect-video flex flex-col items-center justify-center relative overflow-hidden group"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        {previewUrl ? (
                            <img src={previewUrl} alt="Preview" className="absolute inset-0 w-full h-full object-contain p-2" />
                        ) : (
                            <div className="text-gray-500 flex flex-col items-center">
                                <FaCamera size={32} className="mb-2 text-gray-400 group-hover:text-[#FF0066]" />
                                <p className="text-sm font-medium">이미지 업로드</p>
                                <p className="text-xs mt-1 text-gray-400">(Click to browse)</p>
                            </div>
                        )}
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>

                    {/* 이름 입력 (옵션) */}
                    {showNameInput && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0066] focus:border-transparent transition-all"
                                placeholder="이름을 입력하세요"
                            />
                        </div>
                    )}

                    {/* 링크 입력 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">링크 (URL)</label>
                        <input
                            type="text"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0066] focus:border-transparent transition-all"
                            placeholder="https://example.com (선택사항)"
                        />
                    </div>

                    {/* 버튼 */}
                    <div className="flex justify-end gap-2 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                        >
                            취소
                        </button>
                        <button
                            type="submit"
                            disabled={isUploading}
                            className="px-6 py-2 bg-[#FF0066] text-white rounded-lg hover:bg-[#e6005c] transition-colors disabled:opacity-50 flex items-center gap-2 font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            {isUploading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                            {isUploading ? "추가 중..." : "추가하기"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
