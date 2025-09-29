export const validateKakaoOpenTalkLink = (url) => {
    if (!url.trim()) return true; // 빈 값은 허용
    const kakaoOpenTalkPattern = /^https:\/\/open\.kakao\.com\/o\/[a-zA-Z0-9]+$/;
    return kakaoOpenTalkPattern.test(url);
  };
  
  export const validateProjectForm = (formData) => {
    if (!formData.projectName.trim()) {
      return { isValid: false, message: '프로젝트 명을 입력해주세요.' };
    }
  
    if (!formData.participants) {
      return { isValid: false, message: '참여 인원을 선택해주세요.' };
    }
  
    if (!formData.motivation.trim()) {
      return { isValid: false, message: '프로젝트 설명을 입력해주세요.' };
    }
  
    if (formData.openTalkLink && !validateKakaoOpenTalkLink(formData.openTalkLink)) {
      return { 
        isValid: false, 
        message: '올바른 카카오톡 오픈채팅 링크를 입력해주세요.\n예: https://open.kakao.com/o/g6RZJeyg' 
      };
    }
  
    if (formData.projectName.length > 100) {
      return { isValid: false, message: '프로젝트 명은 100자 이하여야 합니다.' };
    }
  
    if (formData.motivation.length > 1000) {
      return { isValid: false, message: '프로젝트 설명은 1000자 이하여야 합니다.' };
    }
  
    return { isValid: true };
  };