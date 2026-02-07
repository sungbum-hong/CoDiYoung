
import { useState } from "react";
import { ChevronLeftIcon, PhotoIcon, CalendarIcon } from "@heroicons/react/24/outline";
import Button from "../../../ui/Button";
import TiptapEditor from "../../WritePage/TiptapEditor"; 

export default function ProjectCreateForm({ onBack }) {
  const [formData, setFormData] = useState({
    title: '',
    image: null,
    previewImage: null,
    capacity: '인원 미정 - 최대 8명',
    deadline: '',
    tech: '',
    position: '',
    question: '',
    slogan: '',
    openTalkLink: '',
    content: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ 
        ...prev, 
        image: file,
        previewImage: URL.createObjectURL(file)
      }));
    }
  };

  const handleEditorChange = (content) => {
    setFormData(prev => ({ ...prev, content }));
  };

  const handleSubmit = () => {
    // Mock Submit
    alert("프로젝트 생성 요청 (Mock): " + formData.title);
    onBack();
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      {/* Header */}
      <div className="relative flex items-center justify-center mb-12">
        <button 
            onClick={onBack}
            className="absolute left-0 text-gray-500 hover:text-gray-800"
        >
            <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">프로젝트 개설 정보를 입력해주세요</h1>
      </div>

      {/* Form */}
      <div className="space-y-10">
        
        {/* Row 1: Name & Image */}
        <div className="grid grid-cols-2 gap-10">
            <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">프로젝트 명</label>
                <input 
                    type="text" 
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="프로젝트 명을 입력해 주세요"
                    className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500"
                />
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">프로젝트 이미지</label>
                <div className="relative">
                    <input 
                        type="file" 
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden" 
                        id="project-image"
                    />
                    <label 
                        htmlFor="project-image"
                        className="w-full p-3 border border-gray-200 rounded-lg text-sm text-gray-400 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                    >
                        {formData.image ? formData.image.name : "프로젝트 이미지를 삽입해 주세요"}
                        <PhotoIcon className="w-5 h-5 text-gray-400" />
                    </label>
                    {formData.previewImage && (
                        <div className="mt-2 w-full h-32 rounded-lg overflow-hidden bg-gray-100">
                             <img src={formData.previewImage} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* Row 2: Capacity & Deadline */}
        <div className="grid grid-cols-2 gap-10">
            <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">모집 인원</label>
                <select 
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-purple-500 appearance-none bg-white"
                >
                    <option>인원 미정 - 최대 8명</option>
                    <option>2명</option>
                    <option>3명</option>
                    <option>4명</option>
                    <option>5명</option>
                    <option>6명</option>
                    <option>7명</option>
                    <option>8명</option>
                </select>
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">모집 기간</label>
                <div className="relative">
                    <input 
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-purple-500"
                    />
                    {/* Calendar icon usually handled by browser or custom date picker but kept native for now */}
                </div>
            </div>
        </div>

         {/* Row 3: Tech & Position */}
         <div className="grid grid-cols-2 gap-10">
            <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">기술</label>
                <input 
                    type="text"
                    name="tech" 
                    value={formData.tech}
                    onChange={handleInputChange}
                    placeholder="Vue, Java, Python 등"
                    className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500"
                />
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">포지션</label>
                 <input 
                    type="text" 
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="프론트엔드, 백엔드 등"
                    className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500"
                />
            </div>
        </div>

        {/* Row 4: Question & Slogan */}
        <div className="grid grid-cols-2 gap-10">
            <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">질문</label>
                <textarea 
                    name="question"
                    value={formData.question}
                    onChange={handleInputChange}
                    placeholder={`지원자에게 물어볼 질문을 입력해 주세요\n(예 : 지원동기가 어떻게 되나요?)`}
                    className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500 min-h-[100px] resize-none"
                />
            </div>
             <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">프로젝트 슬로건</label>
                <input 
                    type="text" 
                    name="slogan"
                    value={formData.slogan}
                    onChange={handleInputChange}
                    placeholder="프로젝트 슬로건을 입력해 주세요"
                    className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500"
                />
            </div>
        </div>

        {/* Row 5: Open Link (Single Column) */}
        <div>
             <div className="space-y-2 w-1/2 pr-5">
                <label className="block text-sm font-bold text-gray-700">오픈톡 링크</label>
                <input 
                    type="text" 
                    name="openTalkLink"
                    value={formData.openTalkLink}
                    onChange={handleInputChange}
                    placeholder="오픈톡 링크를 입력해 주세요 (선택사항)"
                    className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500"
                />
                 <p className="text-xs text-gray-400">형식 : https://open.kakao.com/o/xxxxxxx</p>
            </div>
        </div>

        {/* Editor Section */}
         <div className="space-y-4 pt-8">
            <h3 className="text-center font-bold text-gray-900">프로젝트에 대해 소개해 주세요.</h3>
            
            <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">내용</label>
                <div className="border border-gray-200 rounded-lg overflow-hidden min-h-[300px]">
                     <TiptapEditor 
                        content={formData.content} 
                        onChange={handleEditorChange} 
                        placeholder="내용을 입력해 주세요"
                     />
                </div>
            </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-8">
            <button 
                onClick={handleSubmit}
                className="bg-[#7C4DFF] text-white px-20 py-3 rounded-full font-bold shadow-md hover:bg-[#6c42e0] transition-colors"
            >
                개설하기
            </button>
        </div>

      </div>
    </div>
  );
}