import { CONFIG } from '../constants/config.js';
import { MESSAGES } from '../constants/messages.js';

const BASE_URL = 'http://15.164.125.28:8080';

export class StudyService {
  // 이미지 업로드를 위한 presigned URL 요청
  static async getPresignedUrl(originalFilename, contentType) {
    try {
      const token = localStorage.getItem('auth_token');
      console.log('🔑 presigned URL 요청 시작:', { originalFilename, contentType });
      console.log('🔑 토큰 존재:', token ? '있음' : '없음');
      
      const requestUrl = `${BASE_URL}/storage/presign`;
      console.log('🔑 요청 URL:', requestUrl);
      
      const requestBody = {
        originalFilename,
        contentType
      };
      console.log('🔑 요청 바디:', requestBody);
      
      const response = await fetch(requestUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { 'Authorization': `Bearer ${token}` })
        },
        body: JSON.stringify(requestBody)
      });

      console.log('🔑 presigned URL 응답 상태:', response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('🔑 presigned URL 오류 응답:', errorText);
        
        let errorData = {};
        try {
          errorData = JSON.parse(errorText);
        } catch (e) {
          console.error('🔑 JSON 파싱 실패:', e.message);
        }
        
        throw new Error(errorData.message || `Presigned URL 요청 실패 (${response.status}): ${errorText}`);
      }

      const result = await response.json();
      console.log('🔑 presigned URL 응답 데이터:', result);
      return result;
    } catch (error) {
      console.error('🔑 presigned URL 요청 에러:', error);
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error(MESSAGES.ERRORS.NETWORK_ERROR);
      }
      throw error;
    }
  }

  // 이미지 파일을 S3에 직접 업로드
  static async uploadImageToS3(presignedUrl, file) {
    try {
      console.log('📤 S3 업로드 시작 - 파일:', file.name, '크기:', file.size, 'MIME:', file.type);
      
      const response = await fetch(presignedUrl, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': file.type,
        },
        mode: 'cors', // CORS 모드 명시
        credentials: 'omit' // 자격 증명 제외
      });

      console.log('📤 S3 업로드 응답 상태:', response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text().catch(() => '');
        console.error('📤 S3 업로드 실패 응답:', errorText);
        throw new Error(`이미지 업로드 실패 (${response.status}): ${errorText || response.statusText}`);
      }

      console.log('✅ S3 업로드 성공');
      return true;
    } catch (error) {
      console.error('📤 S3 업로드 에러:', error);
      
      // CORS 에러 처리
      if (error.message.includes('CORS') || error.message.includes('NetworkError')) {
        throw new Error('CORS 정책으로 인해 이미지 업로드에 실패했습니다. 서버 관리자에게 문의해주세요.');
      }
      
      throw new Error(`이미지 업로드 실패: ${error.message}`);
    }
  }

  // 스터디 생성
  static async createStudy(content, images = []) {
    console.log('📡 StudyService.createStudy 호출됨');
    console.log('📡 전달받은 content:', content);
    console.log('📡 전달받은 images:', images);
    
    try {
      const token = localStorage.getItem('auth_token');
      console.log('📡 인증 토큰:', token ? '있음' : '없음');
      if (token) {
        console.log('📡 토큰 앞부분:', token.substring(0, 20) + '...');
      }
      
      const requestData = {
        content,
        images
      };
      console.log('📡 요청 데이터:', requestData);
      console.log('📡 요청 URL:', `${BASE_URL}/api/study/create`);
      
      const headers = {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
      };
      console.log('📡 요청 헤더:', headers);
      
      const response = await fetch(`${BASE_URL}/api/study/create`, {
        method: 'POST',
        headers,
        body: JSON.stringify(requestData)
      });

      console.log('📡 응답 상태:', response.status, response.statusText);
      console.log('📡 응답 헤더:', Object.fromEntries(response.headers));
      
      // 403 에러 시 추가 디버깅
      if (response.status === 403) {
        console.log('🔍 403 에러 추가 분석:');
        console.log('🔍 현재 사용자:', localStorage.getItem('user_info'));
        console.log('🔍 요청 바디 크기:', JSON.stringify(requestData).length, 'bytes');
        
        // 다른 엔드포인트 테스트
        console.log('🔍 다른 엔드포인트들 테스트...');
        
        // 1. /api/study/getAll 테스트 (GET)
        try {
          const getAllResponse = await fetch(`${BASE_URL}/api/study/getAll?page=0&size=10`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
          });
          console.log('📋 GET /api/study/getAll 응답:', getAllResponse.status);
        } catch (e) {
          console.log('📋 GET /api/study/getAll 실패:', e.message);
        }
        
        // 2. /api/mypage 테스트 (GET)  
        try {
          const mypageResponse = await fetch(`${BASE_URL}/api/mypage`, {
            method: 'GET', 
            headers: { 'Authorization': `Bearer ${token}` }
          });
          console.log('👤 GET /api/mypage 응답:', mypageResponse.status);
        } catch (e) {
          console.log('👤 GET /api/mypage 실패:', e.message);
        }
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('📡 응답 에러 데이터:', errorData);
        throw new Error(errorData.message || '스터디 작성 실패');
      }

      const result = await response.json();
      console.log('📡 응답 성공 데이터:', result);
      return result;
    } catch (error) {
      console.error('💥 StudyService.createStudy 에러:', error);
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        console.error('💥 네트워크 에러');
        throw new Error(MESSAGES.ERRORS.NETWORK_ERROR);
      }
      throw error;
    }
  }

  // 스터디 조회
  static async getStudy(studyId) {
    try {
      console.log('🔍 스터디 조회 시작:', studyId);
      const token = localStorage.getItem('auth_token');
      
      const response = await fetch(`${BASE_URL}/api/study/${studyId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { 'Authorization': `Bearer ${token}` })
        }
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || '스터디 조회 실패');
      }

      const result = await response.json();
      console.log('🔍 스터디 조회 결과:', result);
      console.log('🔍 콘텐츠 내용 (일부):', result.content ? result.content.substring(0, 200) + '...' : 'null');
      
      // 이미지 태그가 있는지 확인
      if (result.content && result.content.includes('<img')) {
        console.log('🖼️ 이미지 태그 발견됨');
        const imgMatches = result.content.match(/<img[^>]*src="([^"]*)"[^>]*>/g);
        if (imgMatches) {
          console.log('🖼️ 이미지 소스들:', imgMatches.map(img => {
            const srcMatch = img.match(/src="([^"]*)"/);
            return srcMatch ? srcMatch[1].substring(0, 50) + '...' : 'src not found';
          }));
        }
      } else {
        console.log('🖼️ 이미지 태그 없음');
      }

      return result;
    } catch (error) {
      console.error('🔍 스터디 조회 실패:', error);
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error(MESSAGES.ERRORS.NETWORK_ERROR);
      }
      throw error;
    }
  }

  // 스터디 삭제
  static async deleteStudy(studyId) {
    try {
      const token = localStorage.getItem('auth_token');
      
      const response = await fetch(`${BASE_URL}/api/study/delete/${studyId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { 'Authorization': `Bearer ${token}` })
        }
      });

      if (!response.ok) {
        let errorData = {};
        try {
          errorData = await response.json();
        } catch (e) {
          // JSON 파싱 실패 시 텍스트로 읽기 시도
          const errorText = await response.text();
          throw new Error(errorText || '스터디 삭제 실패');
        }
        throw new Error(errorData.message || '스터디 삭제 실패');
      }

      // 성공 응답 처리 - 빈 응답일 수 있음
      try {
        return await response.json();
      } catch (e) {
        // JSON 파싱 실패 시 성공으로 간주 (204 No Content 등)
        return { success: true };
      }
    } catch (error) {
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error(MESSAGES.ERRORS.NETWORK_ERROR);
      }
      throw error;
    }
  }

  // 서버를 통한 이미지 업로드 (CORS 우회) - 여러 엔드포인트 시도
  static async uploadImageViaServer(file) {
    const token = localStorage.getItem('auth_token');
    const formData = new FormData();
    formData.append('file', file); // 'image' 대신 'file' 시도
    formData.append('originalFilename', file.name);
    
    // 시도할 엔드포인트 목록
    const endpoints = [
      '/api/storage/upload',
      '/storage/upload', 
      '/api/upload',
      '/upload',
      '/api/files/upload',
      '/files/upload'
    ];
    
    for (const endpoint of endpoints) {
      try {
        console.log(`🖼️ 서버 업로드 시도: ${BASE_URL}${endpoint}`);
        
        const response = await fetch(`${BASE_URL}${endpoint}`, {
          method: 'POST',
          headers: {
            ...(token && { 'Authorization': `Bearer ${token}` })
          },
          body: formData
        });
        
        console.log(`🖼️ ${endpoint} 응답:`, response.status, response.statusText);
        
        if (response.ok) {
          const result = await response.json();
          console.log('🎉 서버 경유 업로드 성공:', result);
          return result;
        }
        
        // 403이 아닌 다른 오류면 다음 엔드포인트 시도
        if (response.status !== 403 && response.status !== 404) {
          const errorText = await response.text();
          console.error(`🖼️ ${endpoint} 실패:`, errorText);
          throw new Error(`서버 업로드 실패 (${response.status}): ${errorText}`);
        }
        
      } catch (error) {
        if (error.name === 'TypeError') {
          console.warn(`⚠️ ${endpoint} 네트워크 오류:`, error.message);
          continue; // 다음 엔드포인트 시도
        }
        throw error; // 네트워크 오류가 아니면 즉시 실패
      }
    }
    
    throw new Error('사용 가능한 업로드 엔드포인트를 찾을 수 없습니다.');
  }

  // Base64로 이미지를 변환하여 임시 사용 (CORS 우회)
  static async convertToBase64DataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // 이미지 업로드 전체 프로세스
  static async uploadImage(file) {
    try {
      console.log('🖼️ 이미지 업로드 시작:', file.name, file.type, file.size);
      
      // 1. 먼저 서버 경유 업로드 시도
      try {
        return await this.uploadImageViaServer(file);
      } catch (serverError) {
        console.warn('⚠️ 서버 경유 업로드 실패:', serverError.message);
      }
      
      // 2. Base64 데이터 URL로 임시 처리 (CORS 우회)
      console.log('🔄 Base64 변환으로 임시 처리');
      const dataUrl = await this.convertToBase64DataURL(file);
      
      // presigned URL도 요청해서 나중에 서버에서 처리할 수 있도록 key 정보 저장
      try {
        const presignedData = await this.getPresignedUrl(file.name, file.type);
        console.log('📋 presigned 정보 저장:', presignedData.key);
        
        return {
          url: dataUrl, // 임시로 Base64 데이터 URL 사용
          key: presignedData.key,
          isTemporary: true, // 임시 이미지임을 표시
          originalFile: file.name
        };
      } catch (presignedError) {
        console.warn('⚠️ presigned URL 요청도 실패, Base64만 사용:', presignedError.message);
        
        return {
          url: dataUrl, // Base64 데이터 URL
          key: `temp_${Date.now()}_${file.name}`,
          isTemporary: true,
          originalFile: file.name
        };
      }
      
    } catch (error) {
      console.error('💥 이미지 업로드 프로세스 실패:', error);
      throw new Error(`이미지 업로드 프로세스 실패: ${error.message}`);
    }
  }
}

export default StudyService;