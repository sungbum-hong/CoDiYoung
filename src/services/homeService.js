import { ApiUtils } from './common/api.utils.js';
import { CONFIG } from '../constants/config.js';

const BASE_URL = CONFIG.API.BASE_URL;

/**
 * 홈 화면 관련 API 서비스
 */
export class HomeService {
    /**
     * 파트너 목록 조회
     * @returns {Promise<Array>} 파트너 목록 ([{ id, link, imageUrl }])
     */
    static async getPartners() {
        const url = `${BASE_URL}/api/home/findPartners`;

        return await ApiUtils.fetchWrapper(url, {
            method: 'GET',
            requireAuth: false, // 홈 화면은 비로그인 상태에서도 볼 수 있을 가능성이 높음
            errorMessage: '파트너 목록 조회 실패',
            context: 'Home Get Partners'
        });
    }

    /**
     * 배너 목록 조회
     * @returns {Promise<Array>} 배너 목록 ([{ id, link, imageUrl }])
     */
    static async getBanners() {
        const url = `${BASE_URL}/api/home/findBanners`;

        return await ApiUtils.fetchWrapper(url, {
            method: 'GET',
            requireAuth: false, // 홈 화면은 비로그인 상태에서도 볼 수 있을 가능성이 높음
            errorMessage: '배너 목록 조회 실패',
            context: 'Home Get Banners'
        });
    }
}
