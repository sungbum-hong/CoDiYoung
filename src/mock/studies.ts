import { COLORS } from "../constants/colors";

export const STUDY_CATEGORIES = [
  {
    id: "coding",
    label: "코딩",
    color: COLORS.TEXT_INTERACTIVE_BRAND_PINK,
  },
  {
    id: "design",
    label: "디자인",
    color: COLORS.TEXT_INTERACTIVE_BRAND_YELLOW,
  },
  {
    id: "video",
    label: "영상편집",
    color: COLORS.TEXT_INTERACTIVE_BRAND_PURPLE,
  },
];

export const MOCK_STUDY_MEMBERS = [
  // === Coding Members ===
  {
    id: 1,
    name: "프로카공러",
    category: "코딩",
    categoryId: "coding",
    description: "다양한 프로젝트하여 서로 실력 쌓았으면 좋겠습니다!",
    profileImage: null,
  },
  {
    id: 2,
    name: "버그수집가",
    category: "코딩",
    categoryId: "coding",
    description: "매일 조금씩 기록하는 개발자입니다.",
    profileImage: null,
  },
  {
    id: 3,
    name: "코딩조아",
    category: "코딩",
    categoryId: "coding",
    description: "알고리즘 스터디 같이 하실 분 구합니다.",
    profileImage: null,
  },

  // === Design Members ===
  {
    id: 101,
    name: "디자인천재",
    category: "디자인",
    categoryId: "design",
    description: "UI/UX 포트폴리오 함께 만드실 분!",
    profileImage: null,
  },
  {
    id: 102,
    name: "픽셀장인",
    category: "디자인",
    categoryId: "design",
    description: "피그마 마스터가 되고 싶은 디자이너입니다.",
    profileImage: null,
  },
  {
    id: 103,
    name: "크리에이티브",
    category: "디자인",
    categoryId: "design",
    description: "브랜딩 디자인에 관심이 많습니다.",
    profileImage: null,
  },
  {
    id: 104,
    name: "심플이베스트",
    category: "디자인",
    categoryId: "design",
    description: "미니멀리즘 디자인을 추구합니다.",
    profileImage: null,
  },

  // === Video Members ===
  {
    id: 201,
    name: "컷편집러",
    category: "영상편집",
    categoryId: "video",
    description: "프리미어 프로 스터디 모집합니다.",
    profileImage: null,
  },
  {
    id: 202,
    name: "모션그래픽",
    category: "영상편집",
    categoryId: "video",
    description: "애프터이펙트 고수분들과 교류하고 싶어요.",
    profileImage: null,
  },
  {
    id: 203,
    name: "유튜브꿈나무",
    category: "영상편집",
    categoryId: "video",
    description: "브이로그 편집 노하우 공유해요.",
    profileImage: null,
  },
  {
    id: 204,
    name: "시네마틱",
    category: "영상편집",
    categoryId: "video",
    description: "다빈치 리졸브 색보정 스터디.",
    profileImage: null,
  },
  {
    id: 205,
    name: "영상미학",
    category: "영상편집",
    categoryId: "video",
    description: "영상 연출에 대해 공부하고 있습니다.",
    profileImage: null,
  },
];
