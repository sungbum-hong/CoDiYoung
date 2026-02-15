(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/hooks/useStudyNavigation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStudyNavigation",
    ()=>useStudyNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$routes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/routes.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useStudyNavigation() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleCategoryClick = (category, userId)=>{
        if (userId) {
            // userId가 있으면 해당 사용자의 스터디 채널로 이동 (/study/1)
            router.push(`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$routes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROUTES"].STUDY_CHANNEL.replace(":userId", userId)}`);
        } else {
            // userId가 없으면 첫 번째 사용자로 이동 (임시 처리)
            router.push(`/study/1`);
        }
    };
    const handleWriteClick = ()=>{
        router.push(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$routes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROUTES"].WRITE);
    };
    return {
        handleCategoryClick,
        handleWriteClick
    };
}
_s(useStudyNavigation, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/constants/studyCategories.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_CATEGORY_CONFIG",
    ()=>DEFAULT_CATEGORY_CONFIG,
    "STUDY_CATEGORY_CONFIG",
    ()=>STUDY_CATEGORY_CONFIG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CodeBracketIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeBracketIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/CodeBracketIcon.js [app-client] (ecmascript) <export default as CodeBracketIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaintBrushIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaintBrushIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/PaintBrushIcon.js [app-client] (ecmascript) <export default as PaintBrushIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$VideoCameraIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoCameraIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/VideoCameraIcon.js [app-client] (ecmascript) <export default as VideoCameraIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PencilIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/PencilIcon.js [app-client] (ecmascript) <export default as PencilIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
;
;
const STUDY_CATEGORY_CONFIG = {
    "코딩": {
        color: "#ef4444",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CodeBracketIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeBracketIcon$3e$__["CodeBracketIcon"]
    },
    "디자인": {
        color: "#eab308",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaintBrushIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaintBrushIcon$3e$__["PaintBrushIcon"]
    },
    "영상편집": {
        color: "#8b5cf6",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$VideoCameraIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoCameraIcon$3e$__["VideoCameraIcon"]
    }
};
const DEFAULT_CATEGORY_CONFIG = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_500,
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PencilIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilIcon$3e$__["PencilIcon"]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/hooks/useCategoryConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategoryConfig",
    ()=>useCategoryConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$studyCategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/studyCategories.js [app-client] (ecmascript)");
;
function useCategoryConfig() {
    const getCategoryConfig = (label)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$studyCategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STUDY_CATEGORY_CONFIG"][label] || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$studyCategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CATEGORY_CONFIG"];
    };
    return {
        getCategoryConfig
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/mock/projects.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROJECTS",
    ()=>PROJECTS
]);
const PROJECTS = [
    {
        id: 1,
        title: "CoDiYoung 리뉴얼 프로젝트",
        currentParticipants: 2,
        totalParticipants: 5,
        deadline: "2024-12-31",
        techStack: [
            "React",
            "TailwindCSS",
            "Zustand"
        ],
        position: "Frontend",
        nickname: "프로젝트리더",
        isInterested: true
    },
    {
        id: 2,
        title: "사이드 프로젝트 팀원 모집",
        currentParticipants: 1,
        totalParticipants: "미정",
        deadline: "-",
        techStack: [
            "Next.js",
            "TypeScript"
        ],
        position: "Backend",
        nickname: "개발자A",
        isInterested: false
    },
    {
        id: 3,
        title: "영상 편집 스터디 모집",
        currentParticipants: 3,
        totalParticipants: 4,
        deadline: "2024-11-30",
        techStack: [
            "Premiere Pro",
            "After Effects"
        ],
        position: "Video Editor",
        nickname: "영상러",
        isInterested: false
    },
    {
        id: 4,
        title: "포트폴리오 공유 플랫폼",
        currentParticipants: 4,
        totalParticipants: 6,
        deadline: "2025-01-15",
        techStack: [
            "Vue.js",
            "Firebase"
        ],
        position: "Designer",
        nickname: "디자이너B",
        isInterested: true
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/hooks/useMainHomeQueries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMainHomeBanners",
    ()=>useMainHomeBanners,
    "useMainHomePartners",
    ()=>useMainHomePartners,
    "useMainHomeProjects",
    ()=>useMainHomeProjects,
    "useMainHomeStudies",
    ()=>useMainHomeStudies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$projects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/mock/projects.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
;
;
// Mock Data for Categories
const MOCK_STUDY_CATEGORIES = {
    coding: {
        content: [
            {
                userId: 1,
                userImage: "https://api.dicebear.com/9.x/avataaars/svg?seed=1",
                category: "coding"
            },
            {
                userId: 2,
                userImage: "https://api.dicebear.com/9.x/avataaars/svg?seed=2",
                category: "coding"
            }
        ]
    },
    design: {
        content: [
            {
                userId: 3,
                userImage: "https://api.dicebear.com/9.x/avataaars/svg?seed=3",
                category: "design"
            }
        ]
    },
    video: {
        content: []
    }
};
const useMainHomeStudies = (params = {})=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "mainHome",
            "studies",
            "grouped",
            params
        ],
        queryFn: {
            "useMainHomeStudies.useQuery": async ()=>MOCK_STUDY_CATEGORIES
        }["useMainHomeStudies.useQuery"],
        staleTime: Infinity,
        select: {
            "useMainHomeStudies.useQuery": (data)=>{
                const categoryMap = {
                    coding: {
                        label: "코딩",
                        key: "coding"
                    },
                    design: {
                        label: "디자인",
                        key: "design"
                    },
                    video: {
                        label: "영상편집",
                        key: "video"
                    }
                };
                return Object.entries(categoryMap).map({
                    "useMainHomeStudies.useQuery": ([key, config])=>{
                        const categoryData = data?.[key];
                        const users = categoryData?.content || [];
                        return {
                            label: config.label,
                            key: key,
                            count: users.length,
                            users: users
                        };
                    }
                }["useMainHomeStudies.useQuery"]);
            }
        }["useMainHomeStudies.useQuery"]
    });
};
_s(useMainHomeStudies, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useMainHomeProjects = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "mainHome",
            "projects"
        ],
        queryFn: {
            "useMainHomeProjects.useQuery": async ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$projects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"]
        }["useMainHomeProjects.useQuery"],
        staleTime: Infinity,
        select: {
            "useMainHomeProjects.useQuery": (data)=>data || []
        }["useMainHomeProjects.useQuery"]
    });
};
_s1(useMainHomeProjects, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useMainHomeBanners = ()=>{
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "mainHome",
            "banners"
        ],
        queryFn: {
            "useMainHomeBanners.useQuery": async ()=>[]
        }["useMainHomeBanners.useQuery"],
        staleTime: Infinity,
        select: {
            "useMainHomeBanners.useQuery": (data)=>data || []
        }["useMainHomeBanners.useQuery"]
    });
};
_s2(useMainHomeBanners, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useMainHomePartners = ()=>{
    _s3();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "mainHome",
            "partners"
        ],
        queryFn: {
            "useMainHomePartners.useQuery": async ()=>[]
        }["useMainHomePartners.useQuery"],
        staleTime: Infinity,
        select: {
            "useMainHomePartners.useQuery": (data)=>data || []
        }["useMainHomePartners.useQuery"]
    });
};
_s3(useMainHomePartners, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/CategoryCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
;
;
function CategoryCard({ label, index, avatarSrc, isLoading, onCategoryClick, userId, userImage, category, nickname, description }) {
    // 카테고리별 텍스트 색상 매핑 (이미지 참고)
    const getCategoryColor = (cat)=>{
        switch(cat){
            case '코딩':
                return '#FF4081'; // 핑크 (이미지와 유사)
            case '디자인':
                return '#FBC02D'; // 옐로우/머스타드 (이미지와 유사)
            case '영상편집':
                return '#7C4DFF'; // 보라 (이미지와 유사)
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_600;
        }
    };
    const categoryColor = getCategoryColor(label);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative flex flex-col bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 h-full w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-gray-100",
                    children: [
                        isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full animate-pulse bg-gray-200"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/CategoryCard.jsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this) : avatarSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: avatarSrc,
                            alt: `${nickname || userId} avatar`,
                            className: "w-full h-full object-cover",
                            onError: (e)=>{
                                e.target.style.display = 'none';
                                if (e.target.nextSibling) {
                                    e.target.nextSibling.style.display = 'flex';
                                }
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/CategoryCard.jsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full flex items-center justify-center text-gray-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl",
                                children: "👤"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/CategoryCard.jsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/CategoryCard.jsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden w-full h-full items-center justify-center bg-gray-100 text-gray-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl",
                                children: "👤"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/CategoryCard.jsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/CategoryCard.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/CategoryCard.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/CategoryCard.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm font-bold mb-1",
                style: {
                    color: categoryColor
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/CategoryCard.jsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-lg text-gray-900 mb-3 truncate",
                children: nickname || userId || `User ${index + 1}`
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/CategoryCard.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-xs leading-relaxed mb-8 line-clamp-3 flex-grow h-[4.5em]",
                children: description || "함께 성장하는 스터디원을 모집합니다! 열정 있는 분들과 함께하고 싶습니다."
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/CategoryCard.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onCategoryClick(label, userId),
                className: "w-full py-2 rounded-full border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50 hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200",
                children: "프로필보기"
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/CategoryCard.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/CategoryCard.jsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = CategoryCard;
var _c;
__turbopack_context__.k.register(_c, "CategoryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudyCategoryApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../hooks/useAvatarGeneration.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$hooks$2f$useStudyNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/hooks/useStudyNavigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$hooks$2f$useCategoryConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/hooks/useCategoryConfig.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../hooks/useAuth.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$hooks$2f$useMainHomeQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/hooks/useMainHomeQueries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$components$2f$CategoryCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/CategoryCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function StudyCategoryApi() {
    _s();
    const title = "스터디 채널";
    // React Query를 사용한 데이터 로드 (사이즈 제한 제거)
    const { data: rows = [], isLoading: loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$hooks$2f$useMainHomeQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainHomeStudies"])({
        codingSize: 50,
        designSize: 50,
        videoSize: 50 // 5명 → 50명으로 증가
    });
    // 아바타 생성을 위한 유효한 rows만 필터링 (count > 0인 것만)
    const validRows = rows.filter((row)=>row.count > 0);
    // 커스텀 훅을 사용한 아바타 생성
    const { getAvatar, isLoading: avatarLoading, error: avatarError } = useAvatarGeneration(validRows, {
        size: 96
    });
    // 네비게이션 훅
    const { handleCategoryClick, handleWriteClick } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$hooks$2f$useStudyNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStudyNavigation"])();
    // 카테고리 설정 훅
    const { getCategoryConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$hooks$2f$useCategoryConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategoryConfig"])();
    // 인증 상태 확인
    const { isAuthenticated } = useAuthState();
    // 로딩 상태 처리
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-6 mb-21",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-7",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold text-2xl",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-gray-500",
                    children: "스터디 데이터를 불러오는 중..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
            lineNumber: 43,
            columnNumber: 7
        }, this);
    }
    // 에러 상태 처리
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-6 mb-21",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-7",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold text-2xl",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-red-500",
                    children: [
                        "스터디 데이터를 불러오는데 실패했습니다: ",
                        error.message
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
            lineNumber: 57,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-4 mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold text-2xl",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleWriteClick,
                            className: "p-2 rounded-full transition-colors",
                            style: {
                                backgroundColor: "transparent"
                            },
                            onMouseEnter: (e)=>e.target.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_100,
                            onMouseLeave: (e)=>e.target.style.backgroundColor = "transparent",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PencilIcon, {
                                className: "w-5 h-5",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_600
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                rows.map((r)=>{
                    const { color, icon: IconComponent } = getCategoryConfig(r.label);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 border-2",
                                style: {
                                    borderColor: color,
                                    backgroundColor: 'transparent'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                        className: "w-5 h-5",
                                        style: {
                                            color: color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-1.5xl",
                                        style: {
                                            color: color
                                        },
                                        children: [
                                            r.label,
                                            " (",
                                            r.count,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6",
                                children: r.count > 0 ? r.users.map((user, i)=>{
                                    const avatarSrc = user.userImage || getAvatar(r.label, i);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$components$2f$CategoryCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: r.label,
                                        index: i,
                                        avatarSrc: avatarSrc,
                                        isLoading: avatarLoading || loading,
                                        onCategoryClick: handleCategoryClick,
                                        userId: user.userId,
                                        userImage: user.userImage,
                                        category: user.category
                                    }, user.userId || i, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
                                        lineNumber: 118,
                                        columnNumber: 21
                                    }, this);
                                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-full text-gray-500 text-sm py-4",
                                    children: "등록된 스터디 맴버가 없습니다."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
                                    lineNumber: 132,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, r.label, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(StudyCategoryApi, "IjfkWHrM1k2txOSRkbiQdfewynQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$hooks$2f$useMainHomeQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainHomeStudies"],
        useAvatarGeneration,
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$hooks$2f$useStudyNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStudyNavigation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$hooks$2f$useCategoryConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategoryConfig"],
        useAuthState
    ];
});
_c = StudyCategoryApi;
var _c;
__turbopack_context__.k.register(_c, "StudyCategoryApi");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryMock.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudyCategoryMock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../hooks/useAvatarGeneration.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$hooks$2f$useStudyNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/hooks/useStudyNavigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$hooks$2f$useCategoryConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/hooks/useCategoryConfig.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../hooks/useAuth.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$components$2f$CategoryCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/CategoryCard.jsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../services/study/mockStudyData.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
function StudyCategoryMock() {
    _s();
    const title = "코디영 스터디 회원";
    // Mock Data 사용
    const rows = [
        {
            label: "코딩",
            count: MOCK_GROUPED_STUDIES.coding.content.length,
            users: MOCK_GROUPED_STUDIES.coding.content
        },
        {
            label: "디자인",
            count: MOCK_GROUPED_STUDIES.design.content.length,
            users: MOCK_GROUPED_STUDIES.design.content
        },
        {
            label: "영상편집",
            count: MOCK_GROUPED_STUDIES.video.content.length,
            users: MOCK_GROUPED_STUDIES.video.content
        }
    ];
    // 아바타 생성을 위한 유효한 rows만 필터링 (count > 0인 것만)
    const validRows = rows.filter((row)=>row.count > 0);
    // 커스텀 훅을 사용한 아바타 생성
    const { getAvatar, isLoading: avatarLoading } = useAvatarGeneration(validRows, {
        size: 96
    });
    // 네비게이션 훅
    const { handleCategoryClick, handleWriteClick } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$hooks$2f$useStudyNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStudyNavigation"])();
    // 카테고리 설정 훅
    const { getCategoryConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$hooks$2f$useCategoryConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategoryConfig"])();
    // 인증 상태 확인
    const { isAuthenticated } = useAuthState();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // 스크롤 핸들러
    const scrollRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const handleScroll = (label, direction)=>{
        const container = scrollRefs.current[label];
        if (container) {
            const scrollAmount = 300; // 카드 너비 + 갭
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-12 mb-24 relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-10 right-0 bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full border border-yellow-300 z-10",
                    children: "⚠️ TEST MODE (MOCK DATA)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryMock.jsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-8 border-b border-gray-100 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold text-2xl text-gray-900",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryMock.jsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push('/studies'),
                            className: "px-4 py-2 text-sm text-gray-500 border border-gray-200 rounded hover:bg-gray-50 transition-colors",
                            children: "모두 보기"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryMock.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryMock.jsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                rows.map((r)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative group/section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-xl text-gray-800",
                                    children: r.label
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryMock.jsx",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryMock.jsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this),
                            r.count >= 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleScroll(r.label, 'right'),
                                className: "absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-600 opacity-0 group-hover/section:opacity-100 transition-opacity hover:bg-gray-50",
                                style: {
                                    transform: 'translate(50%, -50%)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 2,
                                    stroke: "currentColor",
                                    className: "w-5 h-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryMock.jsx",
                                        lineNumber: 86,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryMock.jsx",
                                    lineNumber: 85,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryMock.jsx",
                                lineNumber: 80,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>scrollRefs.current[r.label] = el,
                                className: "flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth -mx-6 px-6 md:mx-0 md:px-0",
                                style: {
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none'
                                },
                                children: r.count > 0 ? r.users.map((user, i)=>{
                                    const avatarSrc = user.userImage || getAvatar(r.label, i);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 w-[280px] md:w-[320px] lg:w-[calc(25%-1.125rem)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$components$2f$CategoryCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            label: r.label,
                                            index: i,
                                            avatarSrc: avatarSrc,
                                            isLoading: avatarLoading,
                                            onCategoryClick: handleCategoryClick,
                                            userId: user.userId,
                                            userImage: user.userImage,
                                            category: user.category,
                                            nickname: user.nickname,
                                            description: user.description
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryMock.jsx",
                                            lineNumber: 106,
                                            columnNumber: 25
                                        }, this)
                                    }, user.userId || i, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryMock.jsx",
                                        lineNumber: 102,
                                        columnNumber: 23
                                    }, this);
                                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full text-gray-500 text-sm py-4",
                                    children: "등록된 스터디 맴버가 없습니다."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryMock.jsx",
                                    lineNumber: 122,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryMock.jsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this)
                        ]
                    }, r.label, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryMock.jsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryMock.jsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(StudyCategoryMock, "6NaIe9jYtYFfGRloKdreihIBk5A=", false, function() {
    return [
        useAvatarGeneration,
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$hooks$2f$useStudyNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStudyNavigation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$hooks$2f$useCategoryConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategoryConfig"],
        useAuthState,
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = StudyCategoryMock;
var _c;
__turbopack_context__.k.register(_c, "StudyCategoryMock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategory.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudyCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$StudyCategoryApi$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryApi.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$StudyCategoryMock$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategoryMock.jsx [app-client] (ecmascript)");
;
;
;
// 개발 중에는 true로 설정하여 Mock 컴포넌트 사용
// 배포 시에는 false로 변경하거나 환경 변수로 제어
const IS_MOCK_MODE = true;
function StudyCategory() {
    if ("TURBOPACK compile-time truthy", 1) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$StudyCategoryMock$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategory.jsx",
            lineNumber: 10,
            columnNumber: 12
        }, this);
    }
    //TURBOPACK unreachable
    ;
}
_c = StudyCategory;
var _c;
__turbopack_context__.k.register(_c, "StudyCategory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/HeroBanner.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BannerSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function BannerSlider({ banners }) {
    // if (!banners || banners.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: banners,
            alt: "메인 배너",
            className: "w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover",
            loading: "eager"
        }, void 0, false, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/HeroBanner.jsx",
            lineNumber: 7,
            columnNumber: 25
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/HeroBanner.jsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = BannerSlider;
var _c;
__turbopack_context__.k.register(_c, "BannerSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function ProjectCard({ project, onProjectClick }) {
    _s();
    const [isLiked, setIsLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between h-full min-h-[220px]",
        onClick: ()=>onProjectClick && onProjectClick(project.id),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-lg text-gray-900 mb-3 leading-snug line-clamp-2",
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600 space-y-1 mb-4",
                                children: project.description.split('\n').map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: line
                                    }, i, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mb-4",
                                children: project.tags.map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-xs px-2 py-1 rounded-full font-medium ${tag === '디자이너' ? 'bg-yellow-100 text-yellow-700' : tag === '백엔드' ? 'bg-pink-100 text-pink-700' : 'bg-gray-100 text-gray-600'}`,
                                        children: tag
                                    }, i, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-end gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0",
                                children: project.thumbnail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: project.thumbnail,
                                    alt: "thumbnail",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this) : null
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex -space-x-2 mt-2",
                                children: [
                                    [
                                        ...Array(3)
                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-6 h-6 rounded-full bg-gray-300 border-2 border-white"
                                        }, i, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] text-gray-500 font-bold",
                                        children: "+1"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mt-auto pt-4 border-t border-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-full bg-gray-200 overflow-hidden",
                                children: project.user?.avatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: project.user.avatar,
                                    alt: "user",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-gray-700",
                                children: project.user?.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            setIsLiked(!isLiked);
                        },
                        className: "p-1 rounded-full hover:bg-gray-100 transition-colors",
                        children: isLiked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: "w-6 h-6 text-red-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            className: "w-6 h-6 text-gray-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(ProjectCard, "eHCM9bKEgGkXltnJZ+5NUCvkPlo=");
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectSectionMock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$components$2f$ProjectCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/ProjectCard.jsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../services/project/mockProjectData.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function ProjectSectionMock() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const navigate = router.push;
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedTech, setSelectedTech] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedPosition, setSelectedPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openFilter, setOpenFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // 'tech' | 'position' | null
    const itemsPerPage = 9;
    // 44페이지를 시뮬레이션하기 위해 데이터 뻥튀기 (9개 * 44페이지)
    // 필터링 테스트를 위해 일부 데이터의 태그를 랜덤하게 변경
    const totalProjectsRaw = Array(9 * 44).fill(null).map((_, i)=>{
        const original = MOCK_PROJECTS[i % MOCK_PROJECTS.length];
        // 태그 다양화 (필터링 테스트용)
        let tags = [
            ...original.tags
        ];
        if (i % 3 === 0) tags = [
            "프론트엔드",
            "React"
        ];
        if (i % 4 === 0) tags = [
            "백엔드",
            "Java"
        ];
        if (i % 5 === 0) tags = [
            "디자이너",
            "Figma"
        ];
        return {
            ...original,
            id: i + 1,
            title: `${original.title} (${i + 1})`,
            tags
        };
    });
    // 필터링 로직
    const filteredProjects = totalProjectsRaw.filter((project)=>{
        const matchTech = selectedTech ? project.tags.includes(selectedTech) : true;
        const matchPosition = selectedPosition ? project.tags.includes(selectedPosition) : true;
        return matchTech && matchPosition;
    });
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    // 현재 페이지 데이터 슬라이싱
    const currentProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    // 페이지 변경 핸들러
    const handlePageChange = (page)=>{
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    // 필터 옵션
    const techOptions = [
        "React",
        "Java",
        "Spring",
        "Node.js",
        "Python"
    ];
    const positionOptions = [
        "프론트엔드",
        "백엔드",
        "디자이너",
        "기획자"
    ];
    const toggleFilter = (filterName)=>{
        setOpenFilter(openFilter === filterName ? null : filterName);
    };
    const handleFilterSelect = (type, value)=>{
        if (type === 'tech') setSelectedTech(value === selectedTech ? null : value);
        if (type === 'position') setSelectedPosition(value === selectedPosition ? null : value);
        setOpenFilter(null);
        setCurrentPage(1); // 필터 변경 시 1페이지로 초기화
    };
    // 페이지네이션 렌더링 로직 (5개씩 보여주기)
    const renderPagination = ()=>{
        const pageGroupSize = 5;
        const currentGroup = Math.ceil(currentPage / pageGroupSize);
        const startPage = (currentGroup - 1) * pageGroupSize + 1;
        const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);
        const pages = [];
        for(let i = startPage; i <= endPage; i++){
            pages.push(i);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center gap-2 mt-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handlePageChange(1),
                    disabled: currentPage === 1,
                    className: "w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 2,
                        stroke: "currentColor",
                        className: "w-4 h-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handlePageChange(currentPage - 1),
                    disabled: currentPage === 1,
                    className: "w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 2,
                        stroke: "currentColor",
                        className: "w-4 h-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M15.75 19.5L8.25 12l7.5-7.5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                pages.map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handlePageChange(page),
                        className: `w-8 h-8 rounded-full font-medium text-sm flex items-center justify-center transition-colors ${currentPage === page ? "bg-purple-600 text-white" : "text-gray-600 hover:bg-gray-100"}`,
                        children: page
                    }, page, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handlePageChange(currentPage + 1),
                    disabled: currentPage === totalPages,
                    className: "w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 2,
                        stroke: "currentColor",
                        className: "w-4 h-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handlePageChange(totalPages),
                    disabled: currentPage === totalPages,
                    className: "w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 2,
                        stroke: "currentColor",
                        className: "w-4 h-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M11.25 4.5l7.5 7.5-7.5 7.5m6-15l7.5 7.5-7.5 7.5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
            lineNumber: 79,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mb-24 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-10 right-0 bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full border border-yellow-300 z-10",
                children: "⚠️ TEST MODE (MOCK DATA)"
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-8 pb-4 border-b border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold text-2xl text-gray-900",
                            children: "프로젝트"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>toggleFilter('tech'),
                                            className: `px-3 py-1.5 text-sm border rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors ${selectedTech ? 'border-blue-500 text-blue-600 bg-blue-50' : 'border-gray-200 text-gray-600'}`,
                                            children: [
                                                selectedTech || "기술스택",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 1.5,
                                                    stroke: "currentColor",
                                                    className: `w-3 h-3 transition-transform ${openFilter === 'tech' ? 'rotate-180' : ''}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        openFilter === 'tech' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleFilterSelect('tech', null),
                                                    className: "w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-50",
                                                    children: "전체"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this),
                                                techOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleFilterSelect('tech', option),
                                                        className: `w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${selectedTech === option ? 'text-blue-600 font-bold bg-blue-50' : 'text-gray-700'}`,
                                                        children: option
                                                    }, option, false, {
                                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                                                        lineNumber: 177,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>toggleFilter('position'),
                                            className: `px-3 py-1.5 text-sm border rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors ${selectedPosition ? 'border-blue-500 text-blue-600 bg-blue-50' : 'border-gray-200 text-gray-600'}`,
                                            children: [
                                                selectedPosition || "포지션",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 1.5,
                                                    stroke: "currentColor",
                                                    className: `w-3 h-3 transition-transform ${openFilter === 'position' ? 'rotate-180' : ''}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                                                        lineNumber: 197,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                                                    lineNumber: 196,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this),
                                        openFilter === 'position' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleFilterSelect('position', null),
                                                    className: "w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-50",
                                                    children: "전체"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, this),
                                                positionOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleFilterSelect('position', option),
                                                        className: `w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${selectedPosition === option ? 'text-blue-600 font-bold bg-blue-50' : 'text-gray-700'}`,
                                                        children: option
                                                    }, option, false, {
                                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                                                        lineNumber: 210,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: currentProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$components$2f$ProjectCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        project: project,
                        onProjectClick: (id)=>navigate(`/project/${id}`)
                    }, project.id, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            renderPagination()
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_s(ProjectSectionMock, "8VBhaFn3HjNTsezaG3CapnQJfNs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProjectSectionMock;
var _c;
__turbopack_context__.k.register(_c, "ProjectSectionMock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/Partners.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Partners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/config.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../services/home/mockPartnerData.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
function Partners() {
    const partners = MOCK_PARTNERS;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center w-full bg-gray-50 rounded-xl py-12 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-blue-400 font-medium mb-2",
                        children: "함께하면 더 큰 가능성! 코디영의 든든한 파트너들"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/Partners.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-gray-900",
                        children: "파트너&서포터"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/Partners.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/Partners.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center flex-wrap",
                style: {
                    gap: '4rem'
                },
                children: partners.map((partner, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: partner.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center justify-center transition-opacity hover:opacity-80",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: partner.imageUrl,
                            alt: partner.name,
                            className: "h-12 md:h-16 w-auto object-contain transition-all duration-300"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/Partners.jsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    }, partner.id || i, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/Partners.jsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/Partners.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/Partners.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Partners;
var _c;
__turbopack_context__.k.register(_c, "Partners");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full py-12 px-6 md:px-24 lg:px-36 bg-white mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row justify-between items-start md:items-end gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/cdylogo.png",
                                alt: "CoDiYoung Logo",
                                className: "h-10 w-auto"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600",
                            children: "함께 배우고 성장하는 청년 스터디 커뮤니티 플랫폼"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 text-sm font-bold text-gray-800 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/terms",
                                    className: "hover:text-purple-600 transition-colors",
                                    children: "이용약관"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/privacy",
                                    className: "hover:text-purple-600 transition-colors",
                                    children: "개인정보처리방침"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-start md:items-end gap-4 w-full md:w-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.instagram.com/codiyoung_community?igsh=ZTg5ZGt6NWlsdDVk",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-gray-800 hover:text-purple-600 transition-colors mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6 text-sm text-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://open.kakao.com/o/sNuPVDLh",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "hover:text-purple-600 transition-colors",
                                    children: "신청하기"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/ads",
                                    className: "hover:text-purple-600 transition-colors",
                                    children: "광고/외주"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about/made-us",
                                    className: "hover:text-purple-600 transition-colors",
                                    children: "Made by Us"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400 mt-2",
                            children: "© 2025 Codiyoung"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/HomePage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$StudyCategory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/StudyCategory.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$components$2f$HeroBanner$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/components/HeroBanner.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$ProjectSectionMock$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/ProjectSectionMock.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$Partners$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/Partners.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/components/Footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function HomePage() {
    // const { data: banners } = useMainHomeBanners();
    const banners = '/banner.png';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_800
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-21",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$components$2f$HeroBanner$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        banners: banners
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/HomePage.jsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/HomePage.jsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/HomePage.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$StudyCategory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/HomePage.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$ProjectSectionMock$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/HomePage.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "p-4 flex flex-col",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$Partners$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/HomePage.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/HomePage.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/HomePage.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/HomePage.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$HomePage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MainHome/HomePage.jsx [app-client] (ecmascript)");
"use client";
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MainHome$2f$HomePage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/app/page.jsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Project_CoDiYoung_src_35f0e44d._.js.map