import { CONFIG } from '../constants/config.js';
import { MESSAGES } from '../constants/messages.js';

const BASE_URL = 'http://15.164.125.28:8080';

export class StudyService {
  // 이미지 업로드를 위한 presigned URL 요청
  static async getPresignedUrl(originalFilename, contentType) {
    try {
      const token = localStorage.getItem('auth_token');
      
      const response = await fetch(`${BASE_URL}/storage/presign`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { 'Authorization': `Bearer ${token}` })
        },
        body: JSON.stringify({
          originalFilename,
          contentType
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Presigned URL 요청 실패');
      }

      return await response.json();
    } catch (error) {
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error(MESSAGES.ERRORS.NETWORK_ERROR);
      }
      throw error;
    }
  }

  // 이미지 파일을 S3에 직접 업로드
  static async uploadImageToS3(presignedUrl, file) {
    try {
      const response = await fetch(presignedUrl, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': file.type,
        }
      });

      if (!response.ok) {
        throw new Error('이미지 업로드 실패');
      }

      return true;
    } catch (error) {
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

      return await response.json();
    } catch (error) {
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

  // 이미지 업로드 전체 프로세스 (presigned URL 요청 + S3 업로드)
  static async uploadImage(file) {
    try {
      // 1. presigned URL 요청
      const presignedData = await this.getPresignedUrl(file.name, file.type);
      
      // 2. S3에 이미지 업로드
      await this.uploadImageToS3(presignedData.presignedUrl, file);
      
      // 3. 업로드된 이미지 정보 반환
      return {
        key: presignedData.key,
        url: presignedData.imageUrl
      };
    } catch (error) {
      throw new Error(`이미지 업로드 프로세스 실패: ${error.message}`);
    }
  }
}

export default StudyService;