// Mock User Profile Service
// TODO: Replace with actual API implementation when backend is ready

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  nickName?: string;
  imageKey?: string;
  bio?: string;
  githubUrl?: string;
  portfolioUrl?: string;
}

export const UserProfileService = {
  /**
   * 내 프로필 조회
   */
  getMyProfile: async (): Promise<UserProfile> => {
    return {
      id: 1,
      name: 'Mock User',
      email: 'mock@example.com',
      nickName: 'MockNickname',
      imageKey: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Felix',
    };
  },

  /**
   * 사용자 프로필 조회
   */
  getUserProfile: async (userId: number): Promise<UserProfile> => {
    return {
      id: userId,
      name: 'Mock User',
      email: 'mock@example.com',
      nickName: 'MockNickname',
      imageKey: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Felix',
    };
  },

  /**
   * 프로필 업데이트
   */
  updateProfile: async (profileData: Partial<UserProfile>): Promise<UserProfile> => {
    return {
      id: 1,
      name: profileData.name || 'Mock User',
      email: profileData.email || 'mock@example.com',
      nickName: profileData.nickName,
      imageKey: profileData.imageKey,
      bio: profileData.bio,
    };
  },

  /**
   * 닉네임 업데이트
   */
  updateNickname: async (data: { nickname: string }): Promise<UserProfile> => {
    return {
      id: 1,
      name: 'Mock User',
      email: 'mock@example.com',
      nickName: data.nickname,
      imageKey: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Felix',
    };
  },

  /**
   * 이메일 업데이트
   */
  updateEmail: async (data: { email: string }): Promise<UserProfile> => {
    return {
      id: 1,
      name: 'Mock User',
      email: data.email,
      nickName: 'MockNickname',
      imageKey: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Felix',
    };
  },

  /**
   * 비밀번호 업데이트
   */
  updatePassword: async (data: { currentPassword: string; newPassword: string }): Promise<void> => {
    // Mock: 성공
    return;
  },

  /**
   * 프로필 이미지 업데이트
   */
  updateProfileImage: async (data: { imageKey: string } | File): Promise<string> => {
    // Mock: 이미지 URL 반환
    if (data instanceof File) {
      return 'https://api.dicebear.com/9.x/avataaars/svg?seed=Updated';
    }
    return 'https://api.dicebear.com/9.x/avataaars/svg?seed=Updated';
  },
};
