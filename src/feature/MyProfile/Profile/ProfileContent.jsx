
import { useState } from 'react';
import { MOCK_PROFILE, STUDY_FIELDS } from '../../../services/profile/mockProfileData.js';

export default function ProfileContent() {
  const [formData, setFormData] = useState({
    nickname: MOCK_PROFILE.user.nickname,
    studyField: MOCK_PROFILE.user.studyField,
    intro: MOCK_PROFILE.user.description
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Mock save functionality (alert for now)
    alert("저장되었습니다! (Mock)");
  };

  return (
    <div className="space-y-8">
      {/* 1. Nickname */}
      <div className="space-y-2">
        <label className="block text-sm font-bold text-gray-900">
          닉네임 <span className="text-purple-500">*</span>
        </label>
        <input
          type="text"
          value={formData.nickname}
          onChange={(e) => handleChange('nickname', e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
          placeholder="닉네임을 입력하세요"
        />
      </div>

      {/* 2. Study Field */}
      <div className="space-y-2">
        <label className="block text-sm font-bold text-gray-900">
          공부분야 <span className="text-purple-500">*</span>
        </label>
        <div className="relative">
          <select
            value={formData.studyField}
            onChange={(e) => handleChange('studyField', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm appearance-none focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all bg-white"
          >
            {STUDY_FIELDS.map(field => (
                <option key={field} value={field}>{field}</option>
            ))}
          </select>
           {/* Custom Arrow Icon */}
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* 3. Intro */}
      <div className="space-y-2">
        <label className="block text-sm font-bold text-gray-900">
          한줄소개 <span className="text-purple-500">*</span>
        </label>
        <textarea
          value={formData.intro}
          onChange={(e) => handleChange('intro', e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm min-h-[120px] resize-none focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
          placeholder="나를 소개하는 한마디를 적어주세요."
        />
      </div>

      {/* 4. Email (Readonly) */}
      <div className="space-y-2">
        <label className="block text-sm font-bold text-gray-900">
          이메일 <span className="text-purple-500">*</span>
        </label>
        <input
          type="text"
          value={MOCK_PROFILE.user.email}
          readOnly
          className="w-full px-4 py-3 border border-gray-100 rounded-lg text-sm bg-gray-50 text-gray-500 cursor-not-allowed"
        />
      </div>

       {/* 5. Password */}
       <div className="space-y-2">
        <label className="block text-sm font-bold text-gray-900">
          비밀번호 <span className="text-purple-500">*</span>
        </label>
        <div className="relative">
            <input
            type="password"
            value="********"
            readOnly
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm tracking-widest focus:outline-none focus:border-purple-500"
            />
             <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </button>
        </div>
      </div>

      {/* 6. Password Confirm */}
      <div className="space-y-2">
        <label className="block text-sm font-bold text-gray-900">
          비밀번호확인 <span className="text-purple-500">*</span>
        </label>
        <div className="relative">
             <input
            type="password"
            value="********"
            readOnly
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm tracking-widest focus:outline-none focus:border-purple-500"
            />
             <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="pt-8 flex justify-center">
        <button
          onClick={handleSave}
          className="w-full md:w-[200px] py-3 bg-[#7C4DFF] hover:bg-[#6c42e0] text-white rounded-full font-bold text-sm transition-colors shadow-sm"
        >
          저장하기
        </button>
      </div>
    </div>
  );
}
