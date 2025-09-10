// Mock 신청자 데이터

export const mockApplicants = {
  // 프로젝트 ID별 신청자 목록
  1: [ // React + TypeScript 스터디 신청자들
    {
      userId: 7,
      nickname: "개발새싹",
      profileImageUrl: "https://via.placeholder.com/100x100?text=개",
      answers: [
        {
          questionId: 1,
          question: "왜 이 프로젝트에 참여하고 싶나요?",
          answerText: "React와 TypeScript를 실무에서 사용하고 싶어서 지원했습니다."
        },
        {
          questionId: 2,
          question: "개발 경험을 알려주세요.",
          answerText: "JavaScript로 간단한 웹사이트를 만들어본 경험이 있습니다."
        }
      ]
    },
    {
      userId: 8,
      nickname: "코딩마스터",
      profileImageUrl: null,
      answers: [
        {
          questionId: 1,
          question: "왜 이 프로젝트에 참여하고 싶나요?",
          answerText: "팀 프로젝트 경험을 쌓고 싶습니다."
        },
        {
          questionId: 2,
          question: "개발 경험을 알려주세요.",
          answerText: "React 개인 프로젝트 3개 완성했습니다."
        }
      ]
    },
    {
      userId: 9,
      nickname: "프론트러버",
      profileImageUrl: "https://via.placeholder.com/100x100?text=프",
      answers: [
        {
          questionId: 1,
          question: "왜 이 프로젝트에 참여하고 싶나요?",
          answerText: "TypeScript를 배우고 싶어서 지원합니다."
        },
        {
          questionId: 2,
          question: "개발 경험을 알려주세요.",
          answerText: "Vue.js 경험이 있고, React로 전환하고 싶습니다."
        }
      ]
    }
  ],
  
  2: [ // Node.js 백엔드 프로젝트 신청자들
    {
      userId: 10,
      nickname: "백엔드킹",
      profileImageUrl: null,
      answers: [
        {
          questionId: 1,
          question: "백엔드 개발 경험이 있나요?",
          answerText: "Express.js로 REST API 개발 경험 1년 있습니다."
        }
      ]
    },
    {
      userId: 11,
      nickname: "서버개발자",
      profileImageUrl: "https://via.placeholder.com/100x100?text=서",
      answers: [
        {
          questionId: 1,
          question: "백엔드 개발 경험이 있나요?",
          answerText: "Spring Boot와 Node.js 모두 사용 가능합니다."
        }
      ]
    }
  ],
  
  3: [ // Flutter 앱 개발 팀 신청자들
    {
      userId: 12,
      nickname: "모바일러",
      profileImageUrl: "https://via.placeholder.com/100x100?text=모",
      answers: [
        {
          questionId: 1,
          question: "Flutter 경험이 있나요?",
          answerText: "Flutter로 개인 앱 2개 개발했습니다."
        },
        {
          questionId: 2,
          question: "디자인 툴 사용 가능한가요?",
          answerText: "Figma 사용 가능합니다."
        }
      ]
    }
  ]
};

// 빈 신청자 목록 (신청자가 없는 프로젝트용)
export const emptyApplicants = [];