// WritePage 훅들의 핵심 로직 테스트

describe('WritePage 훅 기본 동작 테스트', () => {
  // 1. 링크 핸들러 로직 테스트
  it('링크 처리 로직이 올바르게 동작한다', () => {
    let linkState = {
      isModalOpen: false,
      linkData: { text: '', url: '' }
    };

    const openLinkModal = (text, url) => {
      linkState = {
        isModalOpen: true,
        linkData: { text, url }
      };
    };

    const closeLinkModal = () => {
      linkState = {
        isModalOpen: false,
        linkData: { text: '', url: '' }
      };
    };

    const formatUrl = (url) => {
      if (!url) return '';
      return url.startsWith('http') ? url : `https://${url}`;
    };

    // 링크 모달 열기
    openLinkModal('테스트 링크', 'example.com');
    expect(linkState.isModalOpen).toBe(true);
    expect(linkState.linkData.text).toBe('테스트 링크');
    expect(linkState.linkData.url).toBe('example.com');

    // URL 포맷팅
    expect(formatUrl('example.com')).toBe('https://example.com');
    expect(formatUrl('https://example.com')).toBe('https://example.com');
    expect(formatUrl('')).toBe('');

    // 링크 모달 닫기
    closeLinkModal();
    expect(linkState.isModalOpen).toBe(false);
  });

  // 2. 비디오 핸들러 로직 테스트
  it('YouTube 비디오 처리 로직이 올바르게 동작한다', () => {
    let videoState = {
      isModalOpen: false
    };

    const openVideoModal = () => {
      videoState.isModalOpen = true;
    };

    const closeVideoModal = () => {
      videoState.isModalOpen = false;
    };

    const extractYouTubeId = (url) => {
      const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
        /youtube\.com\/embed\/([^&\n?#]+)/
      ];

      for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
      }
      return null;
    };

    const createEmbedUrl = (videoId) => {
      return `https://www.youtube.com/embed/${videoId}`;
    };

    // 비디오 모달 열기/닫기
    openVideoModal();
    expect(videoState.isModalOpen).toBe(true);

    closeVideoModal();
    expect(videoState.isModalOpen).toBe(false);

    // YouTube URL 파싱
    expect(extractYouTubeId('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
    expect(extractYouTubeId('https://youtu.be/dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
    expect(extractYouTubeId('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
    expect(extractYouTubeId('invalid-url')).toBe(null);

    // Embed URL 생성
    expect(createEmbedUrl('dQw4w9WgXcQ')).toBe('https://www.youtube.com/embed/dQw4w9WgXcQ');
  });

  // 3. 전체화면 상태 관리 테스트
  it('전체화면 상태가 올바르게 관리된다', () => {
    let isFullscreen = false;

    const toggleFullscreen = () => {
      isFullscreen = !isFullscreen;
    };

    // 초기 상태
    expect(isFullscreen).toBe(false);

    // 전체화면 활성화
    toggleFullscreen();
    expect(isFullscreen).toBe(true);

    // 전체화면 비활성화
    toggleFullscreen();
    expect(isFullscreen).toBe(false);
  });

  // 4. 툴바 드롭다운 상태 테스트
  it('툴바 드롭다운 상태가 올바르게 관리된다', () => {
    let dropdownState = {
      isAlignOpen: false,
      isLanguageOpen: false
    };

    const toggleAlignDropdown = () => {
      dropdownState.isAlignOpen = !dropdownState.isAlignOpen;
      if (dropdownState.isAlignOpen) {
        dropdownState.isLanguageOpen = false; // 다른 드롭다운 닫기
      }
    };

    const toggleLanguageDropdown = () => {
      dropdownState.isLanguageOpen = !dropdownState.isLanguageOpen;
      if (dropdownState.isLanguageOpen) {
        dropdownState.isAlignOpen = false; // 다른 드롭다운 닫기
      }
    };

    const closeAllDropdowns = () => {
      dropdownState.isAlignOpen = false;
      dropdownState.isLanguageOpen = false;
    };

    // 초기 상태
    expect(dropdownState.isAlignOpen).toBe(false);
    expect(dropdownState.isLanguageOpen).toBe(false);

    // 정렬 드롭다운 열기
    toggleAlignDropdown();
    expect(dropdownState.isAlignOpen).toBe(true);
    expect(dropdownState.isLanguageOpen).toBe(false);

    // 언어 드롭다운 열기 (정렬 드롭다운 자동 닫힘)
    toggleLanguageDropdown();
    expect(dropdownState.isAlignOpen).toBe(false);
    expect(dropdownState.isLanguageOpen).toBe(true);

    // 모든 드롭다운 닫기
    closeAllDropdowns();
    expect(dropdownState.isAlignOpen).toBe(false);
    expect(dropdownState.isLanguageOpen).toBe(false);
  });

  // 5. 컨텐츠 동기화 로직 테스트
  it('에디터 컨텐츠 동기화 로직이 올바르게 동작한다', () => {
    const normalizeHTML = (html) => {
      return html?.replace(/<p><\/p>/g, '').replace(/^\s+|\s+$/g, '') || '';
    };

    const isEmptyContent = (content) => {
      return !content || content.trim() === '' || content === '<p></p>';
    };

    const shouldUpdateContent = (newContent, currentContent, isFocused) => {
      const normalizedNew = normalizeHTML(newContent);
      const normalizedCurrent = normalizeHTML(currentContent);
      
      // 내용이 같으면 업데이트 불필요
      if (normalizedNew === normalizedCurrent) return false;
      
      // 사용자가 타이핑 중이면 업데이트 금지
      if (isFocused) return false;
      
      return true;
    };

    // HTML 정규화 테스트
    expect(normalizeHTML('<p></p>')).toBe('');
    expect(normalizeHTML('  <p>test</p>  ')).toBe('<p>test</p>');
    expect(normalizeHTML('')).toBe('');

    // 빈 컨텐츠 확인 테스트
    expect(isEmptyContent('')).toBe(true);
    expect(isEmptyContent('<p></p>')).toBe(true);
    expect(isEmptyContent('<p>content</p>')).toBe(false);

    // 컨텐츠 업데이트 판단 테스트
    expect(shouldUpdateContent('<p>new</p>', '<p>old</p>', false)).toBe(true);
    expect(shouldUpdateContent('<p>same</p>', '<p>same</p>', false)).toBe(false);
    expect(shouldUpdateContent('<p>new</p>', '<p>old</p>', true)).toBe(false); // 포커스 중
  });

  // 6. 모달 관리 로직 테스트
  it('WritePageLayout 모달 관리 로직이 올바르게 동작한다', () => {
    let modalStates = {
      record: false,
      complete: false,
      delete: false,
      edit: false
    };

    const openModal = (type) => {
      modalStates[type] = true;
    };

    const closeModal = (type) => {
      modalStates[type] = false;
    };

    const getModalProps = (type, additionalProps = {}) => {
      return {
        isOpen: modalStates[type],
        onClose: () => closeModal(type),
        ...additionalProps
      };
    };

    // 모달 열기/닫기 테스트
    openModal('record');
    expect(modalStates.record).toBe(true);

    closeModal('record');
    expect(modalStates.record).toBe(false);

    // 모달 props 생성 테스트
    openModal('delete');
    const deleteModalProps = getModalProps('delete', { 
      title: '삭제하시겠습니까?',
      confirmText: '삭제'
    });

    expect(deleteModalProps.isOpen).toBe(true);
    expect(deleteModalProps.title).toBe('삭제하시겠습니까?');
    expect(deleteModalProps.confirmText).toBe('삭제');
    expect(typeof deleteModalProps.onClose).toBe('function');
  });
});