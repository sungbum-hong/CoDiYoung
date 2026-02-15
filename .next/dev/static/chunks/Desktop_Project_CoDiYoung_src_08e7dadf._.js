(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Project/CoDiYoung/src/mock/profile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_ATTENDANCE",
    ()=>MOCK_ATTENDANCE,
    "MOCK_MY_PROJECTS",
    ()=>MOCK_MY_PROJECTS,
    "MOCK_MY_STUDIES",
    ()=>MOCK_MY_STUDIES,
    "MOCK_PROFILE",
    ()=>MOCK_PROFILE,
    "STUDY_FIELDS",
    ()=>STUDY_FIELDS
]);
const MOCK_PROFILE = {
    user: {
        nickname: "코딩왕",
        email: "mock@example.com",
        studyField: "코딩",
        description: "안녕하세요! 열심히 코딩 공부 중인 개발자입니다.",
        tags: [
            "열정",
            "성실",
            "소통"
        ]
    }
};
const STUDY_FIELDS = [
    "코딩",
    "디자인",
    "영상편집",
    "어학",
    "취업",
    "기타"
];
const MOCK_MY_PROJECTS = {
    interested: [
        {
            id: 1,
            title: "React 프로젝트",
            description: "React로 쇼핑몰 만들기",
            category: "coding",
            positions: [
                "프론트엔드",
                "디자이너"
            ],
            status: "모집중",
            deadline: "2024-03-01",
            isLiked: true,
            participantsCount: 3,
            user: {
                nickname: "리더1",
                avatar: null
            }
        },
        {
            id: 2,
            title: "UI/UX 스터디",
            description: "피그마 기초부터",
            category: "design",
            positions: [
                "디자이너"
            ],
            status: "모집완료",
            deadline: "2024-02-28",
            isLiked: false,
            participantsCount: 5,
            user: {
                nickname: "디자인고수",
                avatar: null
            }
        }
    ],
    applied: [
        {
            id: 3,
            title: "알고리즘 스터디",
            description: "매일 1문제 풀기",
            category: "coding",
            positions: [
                "백엔드",
                "프론트엔드"
            ],
            status: "모집중",
            deadline: "2024-03-15",
            isLiked: true,
            participantsCount: 2,
            user: {
                nickname: "알고리즘신",
                avatar: null
            }
        }
    ],
    ongoing: [
        {
            id: 4,
            title: "Next.js 포트폴리오",
            description: "나만의 포트폴리오 만들기",
            category: "coding",
            positions: [
                "프론트엔드"
            ],
            status: "진행중",
            deadline: "2024-04-01",
            isLiked: true,
            participantsCount: 1,
            user: {
                nickname: "나",
                avatar: null
            }
        }
    ],
    completed: []
};
const MOCK_ATTENDANCE = {
    "2025-12": {
        checkedDates: [
            1,
            2,
            5,
            8,
            9,
            12,
            13,
            15,
            16,
            19,
            20,
            22,
            23,
            26,
            27,
            29,
            30
        ],
        today: 15,
        month: 12,
        year: 2025
    }
};
const MOCK_MY_STUDIES = [
    {
        id: 1,
        title: "오늘의 코딩 공부",
        date: "2024-02-15",
        status: "completed"
    },
    {
        id: 2,
        title: "디자인 기초",
        date: "2024-02-14",
        status: "completed"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/mock/profile.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function ProfileContent() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nickname: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PROFILE"].user.nickname,
        studyField: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PROFILE"].user.studyField,
        intro: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PROFILE"].user.description
    });
    const handleChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const handleSave = ()=>{
        // Mock save functionality (alert for now)
        alert("저장되었습니다! (Mock)");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-bold text-gray-900",
                        children: [
                            "닉네임 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-purple-500",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                lineNumber: 26,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: formData.nickname,
                        onChange: (e)=>handleChange('nickname', e.target.value),
                        className: "w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all",
                        placeholder: "닉네임을 입력하세요"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-bold text-gray-900",
                        children: [
                            "공부분야 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-purple-500",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                lineNumber: 40,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: formData.studyField,
                                onChange: (e)=>handleChange('studyField', e.target.value),
                                className: "w-full px-4 py-3 border border-gray-200 rounded-lg text-sm appearance-none focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all bg-white",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STUDY_FIELDS"]?.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: field,
                                        children: field
                                    }, field, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 text-gray-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M19 9l-7 7-7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-bold text-gray-900",
                        children: [
                            "한줄소개 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-purple-500",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                lineNumber: 64,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: formData.intro,
                        onChange: (e)=>handleChange('intro', e.target.value),
                        className: "w-full px-4 py-3 border border-gray-200 rounded-lg text-sm min-h-[120px] resize-none focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all",
                        placeholder: "나를 소개하는 한마디를 적어주세요."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-bold text-gray-900",
                        children: [
                            "이메일 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-purple-500",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PROFILE"].user.email,
                        readOnly: true,
                        className: "w-full px-4 py-3 border border-gray-100 rounded-lg text-sm bg-gray-50 text-gray-500 cursor-not-allowed"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-bold text-gray-900",
                        children: [
                            "비밀번호 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-purple-500",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                lineNumber: 90,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                value: "********",
                                readOnly: true,
                                className: "w-full px-4 py-3 border border-gray-200 rounded-lg text-sm tracking-widest focus:outline-none focus:border-purple-500"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 hover:text-gray-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 1.5,
                                    stroke: "currentColor",
                                    className: "w-5 h-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                            lineNumber: 101,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                            lineNumber: 102,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                lineNumber: 99,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                lineNumber: 88,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-bold text-gray-900",
                        children: [
                            "비밀번호확인 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-purple-500",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                lineNumber: 111,
                                columnNumber: 18
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                value: "********",
                                readOnly: true,
                                className: "w-full px-4 py-3 border border-gray-200 rounded-lg text-sm tracking-widest focus:outline-none focus:border-purple-500"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                lineNumber: 114,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 hover:text-gray-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 1.5,
                                    stroke: "currentColor",
                                    className: "w-5 h-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                            lineNumber: 122,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                            lineNumber: 123,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                                lineNumber: 120,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-8 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleSave,
                    className: "w-full md:w-[200px] py-3 bg-[#7C4DFF] hover:bg-[#6c42e0] text-white rounded-full font-bold text-sm transition-colors shadow-sm",
                    children: "저장하기"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(ProfileContent, "OACRkRkcHOpzDXlc/PkoaoIeSxA=");
_c = ProfileContent;
var _c;
__turbopack_context__.k.register(_c, "ProfileContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$EllipsisVerticalIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EllipsisVerticalIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/EllipsisVerticalIcon.js [app-client] (ecmascript) <export default as EllipsisVerticalIcon>");
;
var _s = __turbopack_context__.k.signature();
;
;
const MyStudyCard = ({ study })=>{
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close menu when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyStudyCard.useEffect": ()=>{
            const handleClickOutside = {
                "MyStudyCard.useEffect.handleClickOutside": (event)=>{
                    if (menuRef.current && !menuRef.current.contains(event.target)) {
                        setIsMenuOpen(false);
                    }
                }
            }["MyStudyCard.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "MyStudyCard.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["MyStudyCard.useEffect"];
        }
    }["MyStudyCard.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-gray-200 rounded-2xl p-6 relative hover:shadow-sm transition-shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-gray-100 overflow-hidden",
                                children: study.user?.avatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: study.user.avatar,
                                    alt: "Profile",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                                    lineNumber: 28,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-bold text-gray-900 text-sm",
                                        children: study.user?.nickname
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-400 text-xs",
                                        children: study.date
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        ref: menuRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                className: "p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$EllipsisVerticalIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EllipsisVerticalIcon$3e$__["EllipsisVerticalIcon"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 top-8 w-24 bg-white border border-gray-200 rounded-lg shadow-lg z-10 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50",
                                        children: "수정하기"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                                        lineNumber: 47,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-50",
                                        children: "삭제하기"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                                        lineNumber: 50,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                                lineNumber: 46,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-gray-900 mb-2 truncate",
                                children: study.title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 line-clamp-3 leading-relaxed",
                                children: study.content
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    study.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 h-24 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: study.image,
                            alt: "Study",
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MyStudyCard, "2owGd8a9N9o/35rXnS7o7S5+7ak=");
_c = MyStudyCard;
const __TURBOPACK__default__export__ = MyStudyCard;
var _c;
__turbopack_context__.k.register(_c, "MyStudyCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/StudyContent.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudyContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PencilSquareIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilSquareIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/PencilSquareIcon.js [app-client] (ecmascript) <export default as PencilSquareIcon>");
// Mock Data
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/mock/profile.js [app-client] (ecmascript)");
// Component
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$Study$2f$MyStudyCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/MyStudyCard.jsx [app-client] (ecmascript)");
;
;
;
;
;
function StudyContent() {
    const studyCount = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_MY_STUDIES"].length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-100 rounded-full py-4 px-8 mb-8 flex justify-center items-center relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/write",
                    className: "text-gray-600 font-medium hover:text-gray-900 flex items-center gap-2",
                    children: [
                        "오늘의 스터디를 기록해보세요.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PencilSquareIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilSquareIcon$3e$__["PencilSquareIcon"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/StudyContent.jsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/StudyContent.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/StudyContent.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_MY_STUDIES"]?.map((study)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$Study$2f$MyStudyCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        study: study
                    }, study.id, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/StudyContent.jsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/StudyContent.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            studyCount === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-20 text-gray-400",
                children: "아직 작성된 스터디가 없습니다."
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/StudyContent.jsx",
                lineNumber: 36,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/StudyContent.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = StudyContent;
var _c;
__turbopack_context__.k.register(_c, "StudyContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$HeartIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/solid/esm/HeartIcon.js [app-client] (ecmascript) <export default as HeartIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/HeartIcon.js [app-client] (ecmascript) <export default as HeartIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserGroupIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/solid/esm/UserGroupIcon.js [app-client] (ecmascript) <export default as UserGroupIcon>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const MyProjectCard = ({ project, type })=>{
    _s();
    const [isLiked, setIsLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(project.isLiked);
    const toggleLike = ()=>{
        setIsLiked(!isLiked);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-gray-100 rounded-xl p-5 hover:shadow-sm transition-shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-gray-900 mb-2 truncate text-sm leading-tight",
                children: project.title
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-500 mb-1 font-medium",
                children: project.status
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-500 mb-4 font-medium",
                children: [
                    "마감일 : ",
                    project.deadline
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mb-4",
                children: project.positions?.map((pos)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `px-2 py-0.5 rounded text-[10px] font-medium border
                ${pos === '디자이너' ? 'text-yellow-600 bg-yellow-50 border-yellow-100' : ''}
                ${pos === '백엔드' ? 'text-pink-600 bg-pink-50 border-pink-100' : ''}
            `,
                        children: pos
                    }, pos, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
                        lineNumber: 31,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center pt-3 border-t border-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-5 h-5 rounded-full bg-gray-200 overflow-hidden",
                                children: project.user?.avatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: project.user.avatar,
                                    alt: "User",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
                                    lineNumber: 44,
                                    columnNumber: 42
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-700 font-medium",
                                children: project.user?.nickname
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            project.participantsCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center text-gray-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserGroupIcon$3e$__["UserGroupIcon"], {
                                        className: "w-4 h-4 mr-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
                                        lineNumber: 53,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        children: [
                                            "+",
                                            project.participantsCount
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
                                        lineNumber: 54,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
                                lineNumber: 52,
                                columnNumber: 18
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleLike,
                                className: "text-pink-500 hover:text-pink-600 transition-colors",
                                children: isLiked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$HeartIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__["HeartIcon"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
                                    lineNumber: 64,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__["HeartIcon"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
                                    lineNumber: 66,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MyProjectCard, "6sTNVLM0k8+92LASwYDlqqUObRg=");
_c = MyProjectCard;
const __TURBOPACK__default__export__ = MyProjectCard;
var _c;
__turbopack_context__.k.register(_c, "MyProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/ui/Button.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = ({ children, onClick, type = "button", variant = "primary", size = "md", className = "", style = {}, disabled = false, ...props })=>{
    // Simple style mapping since hooks are removed
    const baseStyle = "rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants = {
        primary: "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-purple-500"
    };
    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base"
    };
    const finalClassName = `${baseStyle} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`.trim();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        disabled: disabled,
        className: finalClassName,
        style: style,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/ui/Button.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = 'Button';
const __TURBOPACK__default__export__ = Button;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$memo");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/utils/sanitizer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSecureTextNode",
    ()=>createSecureTextNode,
    "escapeHtml",
    ()=>escapeHtml,
    "sanitizeHtml",
    ()=>sanitizeHtml,
    "sanitizeUrl",
    ()=>sanitizeUrl,
    "sanitizeYouTubeUrl",
    ()=>sanitizeYouTubeUrl,
    "validateFileUpload",
    ()=>validateFileUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/dompurify/dist/purify.es.mjs [app-client] (ecmascript)");
;
const ALLOWED_TAGS = [
    'p',
    'br',
    'strong',
    'em',
    'u',
    's',
    'code',
    'pre',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'ul',
    'ol',
    'li',
    'blockquote',
    'a',
    'img',
    'table',
    'thead',
    'tbody',
    'tr',
    'th',
    'td',
    'div',
    'span',
    'iframe'
];
const ALLOWED_ATTRIBUTES = {
    'a': [
        'href',
        'title',
        'target',
        'rel'
    ],
    'img': [
        'src',
        'alt',
        'title',
        'width',
        'height',
        'data-id',
        'data-key',
        'class'
    ],
    'iframe': [
        'src',
        'width',
        'height',
        'frameborder',
        'allowfullscreen',
        'loading',
        'title',
        'allow'
    ],
    'div': [
        'class',
        'data-youtube-video',
        'data-type',
        'data-language',
        'style'
    ],
    'span': [
        'class',
        'data-language'
    ],
    'pre': [
        'data-type',
        'data-language',
        'class'
    ],
    'code': [
        'class'
    ],
    'button': [
        'type',
        'class',
        'data-copy-target'
    ],
    'table': [
        'class'
    ],
    'th': [
        'colspan',
        'rowspan',
        'class'
    ],
    'td': [
        'colspan',
        'rowspan',
        'class'
    ],
    '*': [
        'style'
    ]
};
const URL_PROTOCOLS = [
    'http:',
    'https:'
];
const YOUTUBE_DOMAINS = [
    'www.youtube.com',
    'youtube.com',
    'youtu.be',
    'm.youtube.com',
    'music.youtube.com'
];
const isValidUrl = (url)=>{
    try {
        const urlObj = new URL(url);
        return URL_PROTOCOLS.includes(urlObj.protocol);
    } catch  {
        return false;
    }
};
const isValidYouTubeUrl = (url)=>{
    if (!url) return false;
    // YouTube URL 정규식으로 먼저 체크 (embed URL도 허용)
    const youtubeRegex = /^https:\/\/(?:www\.|m\.|music\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    if (youtubeRegex.test(url)) return true;
    // 기존 도메인 체크도 유지
    if (!isValidUrl(url)) return false;
    try {
        const urlObj = new URL(url);
        return YOUTUBE_DOMAINS.some((domain)=>urlObj.hostname === domain);
    } catch  {
        return false;
    }
};
const sanitizeConfig = {
    ALLOWED_TAGS,
    ALLOWED_ATTR: ALLOWED_ATTRIBUTES,
    ALLOW_DATA_ATTR: true,
    FORBID_SCRIPT: true,
    FORBID_TAGS: [
        'script',
        'object',
        'embed',
        'form',
        'input',
        'button'
    ],
    FORBID_ATTR: [
        'onload',
        'onerror',
        'onclick',
        'onmouseover',
        'onfocus',
        'onblur'
    ],
    // 더 관대한 설정
    FORCE_BODY: false,
    SANITIZE_DOM: false,
    SANITIZE_NAMED_PROPS: false,
    KEEP_CONTENT: true,
    WHOLE_DOCUMENT: false,
    RETURN_DOCUMENT_FRAGMENT: false,
    IN_PLACE: false
};
// DOMPurify 우회 - 수동 HTML 정화
const manualSanitize = (html)=>{
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        // 위험한 태그 제거
        const dangerousTags = [
            'script',
            'object',
            'applet',
            'form',
            'input',
            'button'
        ];
        dangerousTags.forEach((tagName)=>{
            const elements = doc.querySelectorAll(tagName);
            elements.forEach((el)=>el.remove());
        });
        // 위험한 속성 제거
        const dangerousAttrs = [
            'onload',
            'onerror',
            'onclick',
            'onmouseover',
            'onfocus',
            'onblur',
            'onchange',
            'onsubmit'
        ];
        const allElements = doc.querySelectorAll('*');
        allElements.forEach((el)=>{
            dangerousAttrs.forEach((attr)=>{
                if (el.hasAttribute(attr)) {
                    el.removeAttribute(attr);
                }
            });
            // style 속성 정화
            if (el.hasAttribute('style')) {
                const styleValue = el.getAttribute('style');
                const cleanStyle = sanitizeCss(styleValue);
                el.setAttribute('style', cleanStyle);
            }
        });
        const result = doc.body.innerHTML;
        return result;
    } catch (error) {
        return html;
    }
};
const sanitizeHtml = (dirty)=>{
    if (!dirty || typeof dirty !== 'string') return '';
    // DOMPurify가 iframe 속성을 계속 제거하므로 수동 정화 사용
    const result = manualSanitize(dirty);
    return result;
};
const sanitizeCss = (css)=>{
    if (!css || typeof css !== 'string') return '';
    const dangerousPatterns = [
        /javascript:/gi,
        /expression\s*\(/gi,
        /binding\s*:/gi,
        /@import/gi,
        /behavior\s*:/gi,
        /vbscript:/gi,
        /data:/gi,
        /mocha:/gi,
        /livescript:/gi
    ];
    for (const pattern of dangerousPatterns){
        if (pattern.test(css)) {
            return '';
        }
    }
    return css;
};
const sanitizeUrl = (url)=>{
    if (!url || typeof url !== 'string') return '';
    const trimmedUrl = url.trim();
    const dangerousProtocols = [
        'javascript:',
        'vbscript:',
        'data:',
        'file:',
        'ftp:',
        'jar:',
        'mocha:',
        'livescript:'
    ];
    for (const protocol of dangerousProtocols){
        if (trimmedUrl.toLowerCase().startsWith(protocol)) {
            return '';
        }
    }
    return isValidUrl(trimmedUrl) ? trimmedUrl : '';
};
const sanitizeYouTubeUrl = (url)=>{
    const sanitizedUrl = sanitizeUrl(url);
    const isValid = isValidYouTubeUrl(sanitizedUrl);
    return isValid ? sanitizedUrl : '';
};
const validateFileUpload = (file)=>{
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/webp',
        'image/svg+xml'
    ];
    const allowedExtensions = [
        '.jpg',
        '.jpeg',
        '.png',
        '.gif',
        '.webp',
        '.svg'
    ];
    if (!file) {
        throw new Error('파일이 선택되지 않았습니다.');
    }
    if (file.size > maxSize) {
        throw new Error('파일 크기는 5MB 이하여야 합니다.');
    }
    if (!allowedTypes.includes(file.type)) {
        throw new Error('지원하지 않는 파일 형식입니다.');
    }
    const fileName = file.name.toLowerCase();
    const hasValidExtension = allowedExtensions.some((ext)=>fileName.endsWith(ext));
    if (!hasValidExtension) {
        throw new Error('허용되지 않은 파일 확장자입니다.');
    }
    return true;
};
const escapeHtml = (text)=>{
    if (!text || typeof text !== 'string') return '';
    const htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;'
    };
    return text.replace(/[&<>"'\/]/g, (match)=>htmlEscapes[match]);
};
const createSecureTextNode = (text)=>{
    return document.createTextNode(escapeHtml(text));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/extensions/YouTube.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$utils$2f$sanitizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/utils/sanitizer.js [app-client] (ecmascript)");
;
;
// YouTube iframe 노드 (올바른 렌더링)
const YouTube = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: 'youtube',
    group: 'block',
    atom: true,
    addAttributes () {
        return {
            src: {
                default: null
            },
            width: {
                default: '100%'
            },
            height: {
                default: '400'
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: 'div[data-youtube-video]',
                getAttrs: (element)=>{
                    const iframe = element.querySelector('iframe');
                    if (iframe && iframe.src) {
                        return {
                            src: iframe.src,
                            width: iframe.width || '100%',
                            height: iframe.height || '400'
                        };
                    } else if (iframe) {
                        // src가 없는 iframe이라도 YouTube div로 인식하여 노드 생성
                        // NodeView에서 사용자에게 URL 입력을 요청할 수 있도록 함
                        return {
                            src: '',
                            width: '100%',
                            height: '400'
                        };
                    }
                    return false;
                }
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        // 저장 시 완전한 iframe 구조로 저장
        return [
            'div',
            {
                'data-youtube-video': '',
                style: 'margin: 1rem 0; text-align: center; border-radius: 8px; overflow: hidden;'
            },
            [
                'iframe',
                {
                    src: HTMLAttributes.src || '',
                    width: HTMLAttributes.width || '100%',
                    height: HTMLAttributes.height || '400',
                    frameborder: '0',
                    allowfullscreen: '',
                    loading: 'lazy',
                    style: 'width: 100%; max-width: 100%; aspect-ratio: 16/9; border: none;',
                    title: 'YouTube video'
                }
            ]
        ];
    },
    addNodeView () {
        return ({ node, getPos, editor })=>{
            const srcUrl = node.attrs.src;
            // src가 없거나 null인 경우 사용자에게 URL 입력 요청
            if (!srcUrl || srcUrl === null || srcUrl === '') {
                const dom = document.createElement('div');
                dom.setAttribute('data-youtube-video', '');
                dom.style.cssText = 'margin: 1rem 0; padding: 2rem; background: #f8f9fa; border: 2px dashed #dee2e6; border-radius: 8px; text-align: center;';
                // URL 입력 UI 생성
                const container = document.createElement('div');
                container.innerHTML = `
          <div style="margin-bottom: 1rem; color: #6c757d; font-size: 14px;">
            💡 YouTube 영상 URL이 없습니다. 새로운 URL을 입력해주세요.
          </div>
          <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
            <input type="text" placeholder="YouTube URL을 입력하세요..."
                   style="flex: 1; max-width: 400px; padding: 8px 12px; border: 1px solid #ced4da; border-radius: 4px; font-size: 14px;" />
            <button style="padding: 8px 16px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">
              삭제
            </button>
            <button style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">
              추가
            </button>
          </div>
        `;
                const input = container.querySelector('input');
                const deleteBtn = container.querySelector('button[style*="dc3545"]');
                const addBtn = container.querySelector('button[style*="007bff"]');
                // 삭제 버튼 클릭
                deleteBtn.addEventListener('click', ()=>{
                    if (typeof getPos === 'function') {
                        try {
                            const pos = getPos();
                            if (pos !== undefined && editor && editor.view) {
                                const transaction = editor.view.state.tr.delete(pos, pos + node.nodeSize);
                                editor.view.dispatch(transaction);
                            }
                        } catch (error) {
                        // Silent error handling
                        }
                    }
                });
                // 추가 버튼 클릭
                addBtn.addEventListener('click', ()=>{
                    const url = input.value.trim();
                    if (url) {
                        // YouTube URL에서 비디오 ID 추출
                        const youtubeRegex = /(?:https?:\/\/)?(?:www\.|m\.|music\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
                        const match = url.match(youtubeRegex);
                        if (match) {
                            const videoId = match[1];
                            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                            // 현재 노드를 새로운 YouTube 노드로 교체
                            if (typeof getPos === 'function') {
                                try {
                                    const pos = getPos();
                                    if (pos !== undefined && editor && editor.view) {
                                        const newNode = editor.schema.nodes.youtube.create({
                                            src: embedUrl,
                                            width: '100%',
                                            height: '400'
                                        });
                                        const transaction = editor.view.state.tr.replaceWith(pos, pos + node.nodeSize, newNode);
                                        editor.view.dispatch(transaction);
                                    }
                                } catch (error) {
                                // Silent error handling
                                }
                            }
                        } else {
                            alert('올바른 YouTube URL을 입력해주세요.');
                        }
                    }
                });
                // Enter 키 지원
                input.addEventListener('keypress', (e)=>{
                    if (e.key === 'Enter') {
                        addBtn.click();
                    }
                });
                dom.appendChild(container);
                return {
                    dom,
                    contentDOM: null,
                    ignoreMutation: ()=>true
                };
            }
            const dom = document.createElement('div');
            dom.setAttribute('data-youtube-video', '');
            dom.style.cssText = 'margin: 1rem 0; text-align: center; border-radius: 8px; overflow: hidden; position: relative;';
            // 로딩 상태 표시
            dom.innerHTML = '<div style="padding: 2rem; background: #f3f4f6; border-radius: 8px;">YouTube 영상을 로드하는 중...</div>';
            // iframe 비동기 생성
            setTimeout(()=>{
                // src 속성이 비어있거나 잘못된 경우 방지
                if (srcUrl && srcUrl.match(/youtube\.com\/embed\//)) {
                    const iframe = document.createElement('iframe');
                    iframe.src = srcUrl;
                    iframe.width = '100%';
                    iframe.height = '400';
                    iframe.frameBorder = '0';
                    iframe.allowFullscreen = true;
                    iframe.loading = 'lazy';
                    iframe.style.cssText = 'width: 100%; max-width: 100%; aspect-ratio: 16/9; border: none; display: block;';
                    iframe.title = 'YouTube video';
                    // 로딩 메시지 제거하고 iframe 추가
                    dom.innerHTML = '';
                    dom.appendChild(iframe);
                } else {
                    // 잘못된 URL인 경우 에러 메시지 표시
                    dom.innerHTML = '<div style="padding: 2rem; background: #fee; border-radius: 8px; color: #c53030;">YouTube URL이 올바르지 않습니다: ' + (srcUrl || 'URL 없음') + '</div>';
                }
            }, 100);
            return {
                dom,
                contentDOM: null,
                ignoreMutation: ()=>true
            };
        };
    },
    addCommands () {
        return {
            setYouTubeVideo: (options)=>({ commands })=>{
                    // YouTube embed URL 검증 (www 포함)
                    const url = options.src;
                    if (!url) {
                        return false;
                    }
                    const embedRegex = /youtube\.com\/embed\//;
                    const isValidEmbed = url.match(embedRegex);
                    if (!isValidEmbed) {
                        return false;
                    }
                    const nodeData = {
                        type: this.name,
                        attrs: {
                            src: url,
                            width: options.width || '100%',
                            height: options.height || '400'
                        }
                    };
                    try {
                        const result = commands.insertContent(nodeData);
                        return result;
                    } catch (error) {
                        return false;
                    }
                }
        };
    }
});
const __TURBOPACK__default__export__ = YouTube;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/extensions/CustomImage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: 'image',
    addOptions () {
        return {
            inline: false,
            allowBase64: false,
            HTMLAttributes: {}
        };
    },
    inline () {
        return this.options.inline;
    },
    group () {
        return this.options.inline ? 'inline' : 'block';
    },
    draggable: true,
    addAttributes () {
        return {
            src: {
                default: null,
                parseHTML: (element)=>element.getAttribute('src'),
                renderHTML: (attributes)=>{
                    if (!attributes.src) {
                        return {};
                    }
                    return {
                        src: attributes.src
                    };
                }
            },
            alt: {
                default: null,
                parseHTML: (element)=>element.getAttribute('alt'),
                renderHTML: (attributes)=>{
                    if (!attributes.alt) {
                        return {};
                    }
                    return {
                        alt: attributes.alt
                    };
                }
            },
            title: {
                default: null,
                parseHTML: (element)=>element.getAttribute('title'),
                renderHTML: (attributes)=>{
                    if (!attributes.title) {
                        return {};
                    }
                    return {
                        title: attributes.title
                    };
                }
            },
            width: {
                default: null,
                parseHTML: (element)=>element.getAttribute('width'),
                renderHTML: (attributes)=>{
                    if (!attributes.width) {
                        return {};
                    }
                    return {
                        width: attributes.width
                    };
                }
            },
            height: {
                default: null,
                parseHTML: (element)=>element.getAttribute('height'),
                renderHTML: (attributes)=>{
                    if (!attributes.height) {
                        return {};
                    }
                    return {
                        height: attributes.height
                    };
                }
            },
            'data-key': {
                default: null,
                parseHTML: (element)=>element.getAttribute('data-key'),
                renderHTML: (attributes)=>{
                    if (!attributes['data-key']) {
                        return {};
                    }
                    return {
                        'data-key': attributes['data-key']
                    };
                }
            },
            'data-id': {
                default: null,
                parseHTML: (element)=>element.getAttribute('data-id'),
                renderHTML: (attributes)=>{
                    if (!attributes['data-id']) {
                        return {};
                    }
                    return {
                        'data-id': attributes['data-id']
                    };
                }
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: 'img[src]'
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        // width와 height 속성을 style로도 설정하여 확실하게 크기 적용
        const attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes);
        // width와 height가 있으면 style에도 추가
        if (attrs.width || attrs.height) {
            const styles = [];
            if (attrs.width) styles.push(`width: ${attrs.width}px`);
            if (attrs.height) styles.push(`height: ${attrs.height}px`);
            // 기존 style과 병합
            const existingStyle = attrs.style || '';
            attrs.style = existingStyle + (existingStyle ? '; ' : '') + styles.join('; ');
        }
        return [
            'img',
            attrs
        ];
    },
    addCommands () {
        return {
            setImage: (options)=>({ commands })=>{
                    return commands.insertContent({
                        type: this.name,
                        attrs: options
                    });
                }
        };
    },
    addNodeView () {
        return ({ node, HTMLAttributes, getPos, editor })=>{
            const container = document.createElement('div');
            container.classList.add('image-resizer');
            container.style.cssText = `
        position: relative;
        display: inline-block;
        line-height: 0;
        max-width: 100%;
      `;
            const img = document.createElement('img');
            const mergedAttrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes);
            Object.entries(mergedAttrs).forEach(([key, value])=>{
                img.setAttribute(key, value);
            });
            // 이미지 스타일 설정 - 저장된 크기가 있으면 적용
            let baseStyle = `
        max-width: 100%;
        display: block;
        cursor: pointer;
      `;
            // 저장된 width/height가 있으면 우선 적용
            if (node.attrs.width && node.attrs.height) {
                baseStyle += `width: ${node.attrs.width}px; height: ${node.attrs.height}px;`;
            } else {
                baseStyle += `height: auto;`;
            }
            img.style.cssText = baseStyle;
            let isResizing = false;
            let startX, startY, startWidth, startHeight;
            // 리사이즈 핸들 생성
            const createHandle = (position)=>{
                const handle = document.createElement('div');
                handle.classList.add('resize-handle', `resize-handle-${position}`);
                handle.style.cssText = `
          position: absolute;
          width: 8px;
          height: 8px;
          background: #3b82f6;
          border: 1px solid white;
          border-radius: 50%;
          cursor: ${position.includes('n') || position.includes('s') ? position.includes('e') || position.includes('w') ? 'nwse-resize' : 'ns-resize' : 'ew-resize'};
          z-index: 10;
          opacity: 1;
          transition: opacity 0.2s;
        `;
                // 핸들 위치 설정
                switch(position){
                    case 'nw':
                        handle.style.top = '-4px';
                        handle.style.left = '-4px';
                        handle.style.cursor = 'nw-resize';
                        break;
                    case 'ne':
                        handle.style.top = '-4px';
                        handle.style.right = '-4px';
                        handle.style.cursor = 'ne-resize';
                        break;
                    case 'sw':
                        handle.style.bottom = '-4px';
                        handle.style.left = '-4px';
                        handle.style.cursor = 'sw-resize';
                        break;
                    case 'se':
                        handle.style.bottom = '-4px';
                        handle.style.right = '-4px';
                        handle.style.cursor = 'se-resize';
                        break;
                    case 'n':
                        handle.style.top = '-4px';
                        handle.style.left = '50%';
                        handle.style.transform = 'translateX(-50%)';
                        handle.style.cursor = 'n-resize';
                        break;
                    case 's':
                        handle.style.bottom = '-4px';
                        handle.style.left = '50%';
                        handle.style.transform = 'translateX(-50%)';
                        handle.style.cursor = 's-resize';
                        break;
                    case 'w':
                        handle.style.top = '50%';
                        handle.style.left = '-4px';
                        handle.style.transform = 'translateY(-50%)';
                        handle.style.cursor = 'w-resize';
                        break;
                    case 'e':
                        handle.style.top = '50%';
                        handle.style.right = '-4px';
                        handle.style.transform = 'translateY(-50%)';
                        handle.style.cursor = 'e-resize';
                        break;
                }
                // 마우스 이벤트 핸들러
                handle.addEventListener('mousedown', (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    isResizing = true;
                    startX = e.clientX;
                    startY = e.clientY;
                    startWidth = img.offsetWidth;
                    startHeight = img.offsetHeight;
                    container.classList.add('resizing');
                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                });
                const handleMouseMove = (e)=>{
                    if (!isResizing) return;
                    const deltaX = e.clientX - startX;
                    const deltaY = e.clientY - startY;
                    let newWidth = startWidth;
                    let newHeight = startHeight;
                    // Shift 키를 누르면 비례 유지, 아니면 자유 리사이즈
                    const maintainAspectRatio = e.shiftKey;
                    const aspectRatio = startWidth / startHeight;
                    if (maintainAspectRatio) {
                        // 비례 유지 모드
                        if (position.includes('e') || position.includes('w')) {
                            newWidth = Math.max(50, position.includes('e') ? startWidth + deltaX : startWidth - deltaX);
                            newHeight = newWidth / aspectRatio;
                        } else if (position.includes('s') || position.includes('n')) {
                            newHeight = Math.max(50, position.includes('s') ? startHeight + deltaY : startHeight - deltaY);
                            newWidth = newHeight * aspectRatio;
                        }
                    } else {
                        // 자유 리사이즈 모드
                        if (position.includes('e')) {
                            newWidth = Math.max(50, startWidth + deltaX);
                        } else if (position.includes('w')) {
                            newWidth = Math.max(50, startWidth - deltaX);
                        }
                        if (position.includes('s')) {
                            newHeight = Math.max(50, startHeight + deltaY);
                        } else if (position.includes('n')) {
                            newHeight = Math.max(50, startHeight - deltaY);
                        }
                        // 단일 방향 핸들 (n, s, w, e)
                        if (position === 'e' || position === 'w') {
                            // 가로만 조절
                            newHeight = startHeight;
                        } else if (position === 'n' || position === 's') {
                            // 세로만 조절
                            newWidth = startWidth;
                        }
                    }
                    img.style.width = newWidth + 'px';
                    img.style.height = newHeight + 'px';
                };
                const handleMouseUp = ()=>{
                    if (isResizing) {
                        isResizing = false;
                        container.classList.remove('resizing');
                        // 속성 업데이트
                        const newWidth = img.offsetWidth;
                        const newHeight = img.offsetHeight;
                        if (typeof getPos === 'function') {
                            editor.commands.updateAttributes('image', {
                                width: newWidth.toString(),
                                height: newHeight.toString()
                            });
                        }
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                    }
                };
                return handle;
            };
            // 모든 리사이즈 핸들 추가
            const handles = [
                'nw',
                'ne',
                'sw',
                'se',
                'n',
                's',
                'w',
                'e'
            ].map(createHandle);
            handles.forEach((handle)=>container.appendChild(handle));
            // 더블클릭으로 title 편집
            img.addEventListener('dblclick', (e)=>{
                e.preventDefault();
                const currentTitle = node.attrs.title || node.attrs.alt || 'Untitled';
                const newTitle = prompt('이미지 제목을 입력하세요:', currentTitle);
                if (newTitle !== null && newTitle !== currentTitle) {
                    if (typeof getPos === 'function') {
                        editor.commands.updateAttributes('image', {
                            title: newTitle,
                            alt: newTitle // alt도 함께 업데이트
                        });
                    }
                }
            });
            // 컨테이너 호버 이벤트
            container.addEventListener('mouseenter', ()=>{
                handles.forEach((handle)=>handle.style.opacity = '1');
            });
            container.addEventListener('mouseleave', ()=>{
                if (!isResizing) {
                    handles.forEach((handle)=>handle.style.opacity = '0');
                }
            });
            // 툴팁 표시를 위한 title 설정
            if (node.attrs.title) {
                img.title = node.attrs.title;
            }
            container.appendChild(img);
            return {
                dom: container,
                update: (updatedNode)=>{
                    if (updatedNode.type.name !== this.name) {
                        return false;
                    }
                    // 속성 업데이트
                    Object.entries((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, updatedNode.attrs)).forEach(([key, value])=>{
                        img.setAttribute(key, value);
                    });
                    // 크기 속성이 변경되었으면 스타일도 업데이트
                    if (updatedNode.attrs.width && updatedNode.attrs.height) {
                        img.style.width = updatedNode.attrs.width + 'px';
                        img.style.height = updatedNode.attrs.height + 'px';
                    }
                    // title 속성이 변경되었으면 툴팁도 업데이트
                    if (updatedNode.attrs.title) {
                        img.title = updatedNode.attrs.title;
                    }
                    return true;
                }
            };
        };
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useEditorConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEditorConfig",
    ()=>useEditorConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$pm$2f$dist$2f$state$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tiptap/pm/dist/state/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tiptap/starter-kit/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tiptap/extension-link/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$align$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tiptap/extension-text-align/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$extension$2d$code$2d$block$2d$lowlight$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tiptap/extension-code-block-lowlight/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$lowlight$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/lowlight/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$utils$2f$sanitizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/utils/sanitizer.js [app-client] (ecmascript)");
// Table 확장들
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tiptap/extension-table/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$row$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tiptap/extension-table-row/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$header$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tiptap/extension-table-header/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$cell$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tiptap/extension-table-cell/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$extensions$2f$YouTube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/extensions/YouTube.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$extensions$2f$CustomImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/extensions/CustomImage.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
// 언어별 동적 import로 통일
const loadLanguage = async (langName)=>{
    const languageMap = {
        javascript: ()=>__turbopack_context__.A("[project]/Desktop/Project/CoDiYoung/node_modules/highlight.js/es/languages/javascript.js [app-client] (ecmascript, async loader)"),
        typescript: ()=>__turbopack_context__.A("[project]/Desktop/Project/CoDiYoung/node_modules/highlight.js/es/languages/typescript.js [app-client] (ecmascript, async loader)"),
        python: ()=>__turbopack_context__.A("[project]/Desktop/Project/CoDiYoung/node_modules/highlight.js/es/languages/python.js [app-client] (ecmascript, async loader)"),
        java: ()=>__turbopack_context__.A("[project]/Desktop/Project/CoDiYoung/node_modules/highlight.js/es/languages/java.js [app-client] (ecmascript, async loader)"),
        cpp: ()=>__turbopack_context__.A("[project]/Desktop/Project/CoDiYoung/node_modules/highlight.js/es/languages/cpp.js [app-client] (ecmascript, async loader)"),
        css: ()=>__turbopack_context__.A("[project]/Desktop/Project/CoDiYoung/node_modules/highlight.js/es/languages/css.js [app-client] (ecmascript, async loader)"),
        xml: ()=>__turbopack_context__.A("[project]/Desktop/Project/CoDiYoung/node_modules/highlight.js/es/languages/xml.js [app-client] (ecmascript, async loader)"),
        json: ()=>__turbopack_context__.A("[project]/Desktop/Project/CoDiYoung/node_modules/highlight.js/es/languages/json.js [app-client] (ecmascript, async loader)"),
        bash: ()=>__turbopack_context__.A("[project]/Desktop/Project/CoDiYoung/node_modules/highlight.js/es/languages/bash.js [app-client] (ecmascript, async loader)")
    };
    if (languageMap[langName]) {
        const module = await languageMap[langName]();
        return module.default;
    }
    return null;
};
const createLowlightInstance = async ()=>{
    const lowlight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$lowlight$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLowlight"])();
    // 기본 언어들을 동적으로 로드
    const languages = [
        'javascript',
        'typescript',
        'python',
        'java',
        'cpp',
        'css',
        'xml',
        'json',
        'bash'
    ];
    await Promise.all(languages.map(async (lang)=>{
        const langDef = await loadLanguage(lang);
        if (langDef) {
            lowlight.register(lang, langDef);
            // 별칭 등록
            if (lang === 'javascript') lowlight.register('js', langDef);
            if (lang === 'typescript') lowlight.register('ts', langDef);
            if (lang === 'python') lowlight.register('py', langDef);
            if (lang === 'cpp') {
                lowlight.register('c++', langDef);
            }
            if (lang === 'xml') lowlight.register('html', langDef);
            if (lang === 'bash') lowlight.register('sh', langDef);
        }
    }));
    return lowlight;
};
// 언어별 지연 로딩
const registerLanguageOnDemand = async (lowlight, langName)=>{
    const aliases = {
        js: 'javascript',
        ts: 'typescript',
        py: 'python',
        'c++': 'cpp',
        html: 'xml',
        sh: 'bash'
    };
    const actualLang = aliases[langName] || langName;
    if (!lowlight.registered(actualLang)) {
        const langDef = await loadLanguage(actualLang);
        if (langDef) {
            lowlight.register(actualLang, langDef);
            if (langName !== actualLang) {
                lowlight.register(langName, langDef);
            }
        }
    }
};
const useEditorConfig = (content, onChange, readOnly = false)=>{
    _s();
    const isUpdatingFromProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lowlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isLowlightReady, setIsLowlightReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Lowlight 인스턴스 비동기 초기화
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEditorConfig.useEffect": ()=>{
            const initializeLowlight = {
                "useEditorConfig.useEffect.initializeLowlight": async ()=>{
                    if (!lowlightRef.current) {
                        lowlightRef.current = await createLowlightInstance();
                        setIsLowlightReady(true);
                    }
                }
            }["useEditorConfig.useEffect.initializeLowlight"];
            initializeLowlight();
        }
    }["useEditorConfig.useEffect"], []);
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"])({
        extensions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                codeBlock: false,
                link: false,
                gapcursor: true,
                dropcursor: true
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$extension$2d$code$2d$block$2d$lowlight$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                lowlight: lowlightRef.current || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$lowlight$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLowlight"])()
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                openOnClick: true,
                HTMLAttributes: {
                    class: 'editor-link',
                    style: 'color: #3b82f6 !important; text-decoration: underline !important; cursor: pointer !important;',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$extensions$2f$CustomImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                HTMLAttributes: {
                    class: 'editor-image'
                },
                allowBase64: false,
                inline: false
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$align$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                types: [
                    'heading',
                    'paragraph'
                ]
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$extensions$2f$YouTube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"].configure({
                resizable: true,
                HTMLAttributes: {
                    class: 'editor-table'
                },
                allowTableNodeSelection: true
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"].configure({
                HTMLAttributes: {
                    class: 'editor-table-header'
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"].configure({
                HTMLAttributes: {
                    class: 'editor-table-cell'
                }
            })
        ],
        content: content && content.trim() !== '' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$utils$2f$sanitizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(content) : '<p></p>',
        editable: !readOnly,
        onUpdate: {
            "useEditorConfig.useEditor[editor]": ({ editor })=>{
                if (isUpdatingFromProps.current) {
                    return;
                }
                try {
                    const html = editor.getHTML();
                    const sanitizedHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$utils$2f$sanitizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(html);
                    onChange(sanitizedHtml);
                } catch (error) {
                // Silent error handling
                }
            }
        }["useEditorConfig.useEditor[editor]"],
        onSelectionUpdate: {
            "useEditorConfig.useEditor[editor]": ({ editor })=>{
                // 언어별 지연 로딩
                const { from } = editor.state.selection;
                const selectedNode = editor.state.doc.nodeAt(from);
                if (selectedNode && selectedNode.type.name === 'codeBlock') {
                    const language = selectedNode.attrs.language;
                    if (language && lowlightRef.current) {
                        registerLanguageOnDemand(lowlightRef.current, language);
                    }
                }
            }
        }["useEditorConfig.useEditor[editor]"],
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[400px] p-4',
                role: 'textbox',
                'aria-multiline': 'true',
                'aria-label': '텍스트 에디터',
                'data-testid': 'editor-content'
            },
            handleKeyDown: {
                "useEditorConfig.useEditor[editor]": (view, event)=>{
                    // Cmd+A (Mac) 또는 Ctrl+A (Windows/Linux) 전체 선택
                    if ((event.metaKey || event.ctrlKey) && event.key === 'a') {
                        // 전체 문서 선택 (표 포함)
                        const allSelection = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AllSelection"](view.state.doc);
                        view.dispatch(view.state.tr.setSelection(allSelection));
                        return true; // 기본 동작 방지
                    }
                    return false; // 다른 키는 기본 동작 허용
                }
            }["useEditorConfig.useEditor[editor]"],
            transformPastedHTML: {
                "useEditorConfig.useEditor[editor]": (html)=>{
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$utils$2f$sanitizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(html);
                }
            }["useEditorConfig.useEditor[editor]"],
            transformPastedText: {
                "useEditorConfig.useEditor[editor]": (text)=>{
                    return text;
                }
            }["useEditorConfig.useEditor[editor]"]
        }
    });
    // readOnly 상태가 변경될 때 에디터의 editable 속성을 동적으로 업데이트
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEditorConfig.useEffect": ()=>{
            if (editor) {
                editor.setEditable(!readOnly);
            }
        }
    }["useEditorConfig.useEffect"], [
        editor,
        readOnly
    ]);
    return {
        editor,
        isUpdatingFromProps,
        isLowlightReady
    };
};
_s(useEditorConfig, "01Id1jiisdkvD0xNqQFluquT+bw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useContentSync.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useContentSync",
    ()=>useContentSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useContentSync = (editor, content, isUpdatingFromProps)=>{
    _s();
    const normalizeHTML = (html)=>{
        return html?.replace(/<p><\/p>/g, '').replace(/^\s+|\s+$/g, '') || '';
    };
    const isEmptyContent = (content)=>{
        return !content || content.trim() === '' || content === '<p></p>';
    };
    const restoreCursorPosition = (selection)=>{
        if (!selection || selection.from > editor.state.doc.content.size) return;
        setTimeout(()=>{
            try {
                editor.commands.setTextSelection(selection.from);
            } catch (e) {
            // 커서 복원 실패시 무시
            }
        }, 0);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useContentSync.useEffect": ()=>{
            if (!editor) return;
            const currentHTML = editor.getHTML();
            const normalizedContent = normalizeHTML(content);
            const normalizedCurrent = normalizeHTML(currentHTML);
            if (normalizedContent === normalizedCurrent) return;
            if (editor.isFocused) return;
            isUpdatingFromProps.current = true;
            const currentSelection = editor.state.selection;
            if (isEmptyContent(content)) {
                editor.commands.clearContent();
            } else {
                editor.commands.setContent(content, false);
                restoreCursorPosition(currentSelection);
            }
            setTimeout({
                "useContentSync.useEffect": ()=>{
                    isUpdatingFromProps.current = false;
                }
            }["useContentSync.useEffect"], 0);
        }
    }["useContentSync.useEffect"], [
        content,
        editor,
        isUpdatingFromProps
    ]);
};
_s(useContentSync, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useLinkHandler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLinkHandler",
    ()=>useLinkHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$utils$2f$sanitizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/utils/sanitizer.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useLinkHandler = (editor)=>{
    _s();
    const [isLinkModalOpen, setIsLinkModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [linkData, setLinkData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        text: '',
        url: ''
    });
    const handleLinkClick = ()=>{
        if (!editor) {
            return;
        }
        const { from, to } = editor.state.selection;
        const text = editor.state.doc.textBetween(from, to, '');
        const currentLink = editor.getAttributes('link');
        setLinkData({
            text: text,
            url: currentLink.href || ''
        });
        setIsLinkModalOpen(true);
    };
    const handleLinkSubmit = (linkText, linkUrl)=>{
        if (!editor) {
            return;
        }
        if (!linkUrl) {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }
        let url = linkUrl.trim();
        if (!/^https?:\/\//i.test(url)) {
            url = `https://${url}`;
        }
        const sanitizedUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$utils$2f$sanitizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeUrl"])(url);
        if (!sanitizedUrl) {
            const notification = document.createElement('div');
            notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ff6b6b;
        color: white;
        padding: 12px 24px;
        border-radius: 6px;
        font-size: 14px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      `;
            notification.textContent = '유효하지 않은 URL입니다.';
            document.body.appendChild(notification);
            setTimeout(()=>{
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 3000);
            return;
        }
        const { from, to } = editor.state.selection;
        const hasTextSelection = from !== to;
        if (hasTextSelection) {
            editor.chain().focus().extendMarkRange('link').setLink({
                href: sanitizedUrl
            }).run();
        } else {
            const text = linkText || sanitizedUrl;
            const sanitizedText = text.replace(/[<>"'&]/g, (char)=>{
                const entities = {
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    "'": '&#39;',
                    '&': '&amp;'
                };
                return entities[char];
            });
            editor.chain().focus().insertContent(`<a href="${sanitizedUrl}">${sanitizedText}</a>`).run();
        }
    };
    const closeLinkModal = ()=>setIsLinkModalOpen(false);
    return {
        isLinkModalOpen,
        linkData,
        handleLinkClick,
        handleLinkSubmit,
        closeLinkModal
    };
};
_s(useLinkHandler, "t6aPcmPWe5mY88p75yFpU80T5zY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useImageUpload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useImageUpload",
    ()=>useImageUpload
]);
// import { ImageService } from "../../../services/imageService.js";
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$utils$2f$sanitizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/utils/sanitizer.js [app-client] (ecmascript)");
;
const useImageUpload = (editor)=>{
    const handleImageClick = async ()=>{
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = async (e)=>{
            const file = e.target.files?.[0];
            if (!file) return;
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$utils$2f$sanitizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateFileUpload"])(file);
                // Mock upload delay
                await new Promise((resolve)=>setTimeout(resolve, 500));
                // Mock image URL (using dicebear for random avatar as placeholder or just a placeholder image)
                const imageUrl = `https://placehold.co/600x400?text=${encodeURIComponent(file.name)}`;
                const imageKey = `mock-key-${Date.now()}`;
                const imageData = {
                    url: imageUrl,
                    key: imageKey
                };
                if (imageData.url) {
                    editor.chain().focus().setImage({
                        src: imageData.url,
                        "data-id": imageData.id || 0,
                        "data-key": imageData.key || imageData.url,
                        alt: file.name.replace(/\.[^/.]+$/, ""),
                        title: file.name
                    }).run();
                }
            } catch (error) {
                const errorMessage = error.message || "이미지 업로드에 실패했습니다";
                const notification = document.createElement("div");
                notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: #ff6b6b;
          color: white;
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 14px;
          z-index: 10000;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        `;
                notification.textContent = errorMessage;
                document.body.appendChild(notification);
                setTimeout(()=>{
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 5000);
            }
        };
        input.click();
    };
    return {
        handleImageClick
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useVideoHandler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVideoHandler",
    ()=>useVideoHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useVideoHandler = (editor)=>{
    _s();
    const [isVideoModalOpen, setIsVideoModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleVideoClick = ()=>{
        setIsVideoModalOpen(true);
    };
    const handleVideoSubmit = (videoUrl)=>{
        if (!videoUrl) {
            return;
        }
        // 더 포괄적인 YouTube URL 정규식
        const youtubeRegex = /(?:https?:\/\/)?(?:www\.|m\.|music\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
        const match = videoUrl.match(youtubeRegex);
        if (match) {
            const videoId = match[1];
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
            const result = editor.chain().focus().setYouTubeVideo({
                src: embedUrl,
                width: 560,
                height: 315
            }).run();
            if (!result) {
                alert('YouTube 영상 삽입에 실패했습니다. URL을 확인해주세요.');
            }
        } else {
            alert('올바른 YouTube URL을 입력해주세요. 예: https://www.youtube.com/watch?v=LmZD-TU96q4');
        }
        setIsVideoModalOpen(false);
    };
    const closeVideoModal = ()=>setIsVideoModalOpen(false);
    return {
        isVideoModalOpen,
        handleVideoClick,
        handleVideoSubmit,
        closeVideoModal
    };
};
_s(useVideoHandler, "tZ2VFBxQsSrs68t58nYJQ0oEBGg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useTableHandler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTableHandler",
    ()=>useTableHandler
]);
const useTableHandler = (editor)=>{
    const handleTableClick = ()=>{
        if (!editor) return;
        if (editor.isActive('table')) {
            alert('테이블 안에서는 새로운 테이블을 삽입할 수 없습니다.');
            return;
        }
        editor.chain().focus().insertTable({
            rows: 3,
            cols: 3,
            withHeaderRow: true
        }).run();
    };
    return {
        handleTableClick
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useFullscreen.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFullscreen",
    ()=>useFullscreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useFullscreen = ()=>{
    _s();
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleFullscreenToggle = ()=>{
        setIsFullscreen(!isFullscreen);
    };
    return {
        isFullscreen,
        handleFullscreenToggle
    };
};
_s(useFullscreen, "LI0KkFuciCdLvQ6T7dAtFOAXj0Y=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useToolbarDropdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useToolbarDropdown",
    ()=>useToolbarDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useToolbarDropdown = ()=>{
    _s();
    const [isAlignDropdownOpen, setIsAlignDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleAlignDropdown = ()=>{
        setIsAlignDropdownOpen(!isAlignDropdownOpen);
        setIsLanguageDropdownOpen(false);
    };
    const toggleLanguageDropdown = ()=>{
        setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
        setIsAlignDropdownOpen(false);
    };
    const closeDropdowns = ()=>{
        setIsAlignDropdownOpen(false);
        setIsLanguageDropdownOpen(false);
    };
    return {
        isAlignDropdownOpen,
        isLanguageDropdownOpen,
        toggleAlignDropdown,
        toggleLanguageDropdown,
        closeDropdowns,
        setIsAlignDropdownOpen,
        setIsLanguageDropdownOpen
    };
};
_s(useToolbarDropdown, "Spx9disEdro3dLtmFyUAT/m/KiY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useToolbarActions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useToolbarActions",
    ()=>useToolbarActions
]);
const useToolbarActions = (editor)=>{
    const handleTableAction = ()=>{
        if (editor.isActive('table')) {
            editor.chain().focus().deleteTable().run();
        } else {
            // 테이블 밖에 있으면 새 테이블 삽입을 위해 onTableClick 호출
            return 'insert';
        }
    };
    const handleAlignment = (align, closeDropdown)=>{
        editor.chain().focus().setTextAlign(align).run();
        closeDropdown();
    };
    const handleListToggle = (type)=>{
        if (type === 'bullet') {
            editor.chain().focus().toggleBulletList().run();
        } else if (type === 'ordered') {
            editor.chain().focus().toggleOrderedList().run();
        }
    };
    const handleCodeBlock = ()=>{
        editor.chain().focus().toggleCodeBlock().run();
    };
    return {
        handleTableAction,
        handleAlignment,
        handleListToggle,
        handleCodeBlock
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useToolbarStyle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useToolbarStyle",
    ()=>useToolbarStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
;
const useToolbarStyle = ()=>{
    const buttonHoverHandlers = {
        onMouseEnter: (e)=>e.target.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_200,
        onMouseLeave: (e)=>e.target.style.backgroundColor = 'transparent'
    };
    const getButtonClass = (isActive)=>{
        return `p-2 rounded transition-colors ${isActive ? 'bg-gray-300' : ''}`;
    };
    const getTableButtonStyle = (isActive)=>({
            backgroundColor: isActive ? '#fecaca' : 'transparent'
        });
    return {
        buttonHoverHandlers,
        getButtonClass,
        getTableButtonStyle
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/AlignmentDropdown.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AlignmentDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Bars3BottomLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3BottomLeftIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/Bars3BottomLeftIcon.js [app-client] (ecmascript) <export default as Bars3BottomLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Bars3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3Icon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js [app-client] (ecmascript) <export default as Bars3Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Bars3BottomRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3BottomRightIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/Bars3BottomRightIcon.js [app-client] (ecmascript) <export default as Bars3BottomRightIcon>");
;
;
function AlignmentDropdown({ isOpen, onToggle, onAlign, buttonHoverHandlers }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onToggle,
                className: "p-2 rounded transition-colors",
                ...buttonHoverHandlers,
                title: "정렬",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Bars3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3Icon$3e$__["Bars3Icon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/AlignmentDropdown.jsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/AlignmentDropdown.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onAlign('left'),
                        className: "w-full flex items-center px-3 py-2 hover:bg-gray-100 first:rounded-t-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Bars3BottomLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3BottomLeftIcon$3e$__["Bars3BottomLeftIcon"], {
                            className: "w-4 h-4 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/AlignmentDropdown.jsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/AlignmentDropdown.jsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onAlign('center'),
                        className: "w-full flex items-center px-3 py-2 hover:bg-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Bars3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3Icon$3e$__["Bars3Icon"], {
                            className: "w-4 h-4 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/AlignmentDropdown.jsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/AlignmentDropdown.jsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onAlign('right'),
                        className: "w-full flex items-center px-3 py-2 hover:bg-gray-100 last:rounded-b-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Bars3BottomRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3BottomRightIcon$3e$__["Bars3BottomRightIcon"], {
                            className: "w-4 h-4 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/AlignmentDropdown.jsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/AlignmentDropdown.jsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/AlignmentDropdown.jsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/AlignmentDropdown.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = AlignmentDropdown;
var _c;
__turbopack_context__.k.register(_c, "AlignmentDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/ToolbarButton.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToolbarButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ToolbarButton({ onClick, isActive, title, icon: Icon, buttonHoverHandlers, customClass = '', customStyle = {} }) {
    const baseClass = `p-2 rounded transition-colors ${isActive ? 'bg-gray-300' : ''} ${customClass}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: baseClass,
        ...buttonHoverHandlers,
        title: title,
        style: customStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/ToolbarButton.jsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/ToolbarButton.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = ToolbarButton;
var _c;
__turbopack_context__.k.register(_c, "ToolbarButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/ToolbarDivider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToolbarDivider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ToolbarDivider() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-px h-6 bg-gray-300 mx-1"
    }, void 0, false, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/ToolbarDivider.jsx",
        lineNumber: 2,
        columnNumber: 10
    }, this);
}
_c = ToolbarDivider;
var _c;
__turbopack_context__.k.register(_c, "ToolbarDivider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditorToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ListBulletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListBulletIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/ListBulletIcon.js [app-client] (ecmascript) <export default as ListBulletIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$NumberedListIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NumberedListIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/NumberedListIcon.js [app-client] (ecmascript) <export default as NumberedListIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TableCellsIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCellsIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/TableCellsIcon.js [app-client] (ecmascript) <export default as TableCellsIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LinkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinkIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/LinkIcon.js [app-client] (ecmascript) <export default as LinkIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhotoIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhotoIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/PhotoIcon.js [app-client] (ecmascript) <export default as PhotoIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/PlayIcon.js [app-client] (ecmascript) <export default as PlayIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowsPointingOutIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowsPointingOutIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/ArrowsPointingOutIcon.js [app-client] (ecmascript) <export default as ArrowsPointingOutIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CodeBracketIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeBracketIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/CodeBracketIcon.js [app-client] (ecmascript) <export default as CodeBracketIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$QuestionMarkCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QuestionMarkCircleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/QuestionMarkCircleIcon.js [app-client] (ecmascript) <export default as QuestionMarkCircleIcon>");
// 훅들 import
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useToolbarDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useToolbarDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useToolbarActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useToolbarActions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useToolbarStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useToolbarStyle.js [app-client] (ecmascript)");
// 컴포넌트들 import
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$AlignmentDropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/AlignmentDropdown.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$ToolbarButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/ToolbarButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$ToolbarDivider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/ToolbarDivider.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
// 접근성 라벨과 설명
const TOOLBAR_LABELS = {
    bulletList: {
        label: '글머리 기호 목록',
        description: '글머리 기호 목록을 추가하거나 제거합니다',
        shortcut: 'Ctrl+Shift+8'
    },
    orderedList: {
        label: '번호 매기기 목록',
        description: '번호 매기기 목록을 추가하거나 제거합니다',
        shortcut: 'Ctrl+Shift+7'
    },
    alignment: {
        label: '텍스트 정렬',
        description: '텍스트 정렬 방식을 선택합니다',
        shortcut: '없음'
    },
    table: {
        label: '표',
        description: '표를 삽입하거나 삭제합니다',
        shortcut: '없음'
    },
    link: {
        label: '링크',
        description: '링크를 삽입하거나 편집합니다',
        shortcut: 'Ctrl+K'
    },
    image: {
        label: '이미지',
        description: '이미지를 업로드하고 삽입합니다',
        shortcut: '없음'
    },
    video: {
        label: '동영상',
        description: '유튜브 동영상을 삽입합니다',
        shortcut: '없음'
    },
    fullscreen: {
        label: '전체화면',
        description: '에디터를 전체화면으로 전환합니다',
        shortcut: 'F11'
    },
    codeBlock: {
        label: '코드 블록',
        description: '코드 블록을 삽입합니다',
        shortcut: 'Ctrl+Shift+9'
    },
    help: {
        label: '도움말',
        description: '키보드 단축키 도움말을 표시합니다',
        shortcut: 'F1'
    }
};
;
;
;
;
;
;
;
function EditorToolbar({ editor, onLinkClick, onImageClick, onVideoClick, onTableClick, onFullscreenToggle }) {
    _s();
    // 훅들 사용
    const { isAlignDropdownOpen, toggleAlignDropdown, setIsAlignDropdownOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useToolbarDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToolbarDropdown"])();
    const { handleTableAction, handleAlignment, handleListToggle, handleCodeBlock } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useToolbarActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToolbarActions"])(editor);
    const { buttonHoverHandlers, getButtonClass, getTableButtonStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useToolbarStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToolbarStyle"])();
    if (!editor) {
        return null;
    }
    const onTableAction = ()=>{
        const action = handleTableAction();
        if (action === 'insert' && onTableClick) {
            onTableClick();
        }
    };
    const onAlign = (align)=>{
        handleAlignment(align, ()=>setIsAlignDropdownOpen(false));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1 p-2 flex-wrap",
        style: {
            borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_200}`,
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_50
        },
        role: "toolbar",
        "aria-label": "텍스트 편집 도구모음",
        "aria-orientation": "horizontal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$ToolbarButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: ()=>handleListToggle('bullet'),
                isActive: editor.isActive('bulletList'),
                title: TOOLBAR_LABELS.bulletList.label,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ListBulletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListBulletIcon$3e$__["ListBulletIcon"],
                buttonHoverHandlers: buttonHoverHandlers,
                "aria-label": TOOLBAR_LABELS.bulletList.label,
                "aria-describedby": "bulletList-desc",
                "aria-pressed": editor.isActive('bulletList'),
                "aria-keyshortcuts": TOOLBAR_LABELS.bulletList.shortcut,
                "data-action": "bulletList"
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "bulletList-desc",
                className: "sr-only",
                children: TOOLBAR_LABELS.bulletList.description
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$ToolbarButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: ()=>handleListToggle('ordered'),
                isActive: editor.isActive('orderedList'),
                title: TOOLBAR_LABELS.orderedList.label,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$NumberedListIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NumberedListIcon$3e$__["NumberedListIcon"],
                buttonHoverHandlers: buttonHoverHandlers,
                "aria-label": TOOLBAR_LABELS.orderedList.label,
                "aria-describedby": "orderedList-desc",
                "aria-pressed": editor.isActive('orderedList'),
                "aria-keyshortcuts": TOOLBAR_LABELS.orderedList.shortcut,
                "data-action": "orderedList"
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "orderedList-desc",
                className: "sr-only",
                children: TOOLBAR_LABELS.orderedList.description
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$ToolbarDivider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "group",
                "aria-labelledby": "alignment-group-label",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "alignment-group-label",
                        className: "sr-only",
                        children: "텍스트 정렬 옵션"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$AlignmentDropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: isAlignDropdownOpen,
                        onToggle: toggleAlignDropdown,
                        onAlign: onAlign,
                        buttonHoverHandlers: buttonHoverHandlers,
                        "aria-label": TOOLBAR_LABELS.alignment.label,
                        "aria-describedby": "alignment-desc",
                        "aria-expanded": isAlignDropdownOpen,
                        "aria-haspopup": "menu"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "alignment-desc",
                        className: "sr-only",
                        children: TOOLBAR_LABELS.alignment.description
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$ToolbarDivider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$ToolbarButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: onTableAction,
                isActive: editor.isActive('table'),
                title: editor.isActive('table') ? '표 삭제' : '표 삽입',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TableCellsIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCellsIcon$3e$__["TableCellsIcon"],
                buttonHoverHandlers: buttonHoverHandlers,
                customClass: editor.isActive('table') ? 'bg-red-200 hover:bg-red-300' : '',
                customStyle: getTableButtonStyle(editor.isActive('table')),
                "aria-label": editor.isActive('table') ? '표 삭제' : '표 삽입',
                "aria-describedby": "table-desc",
                "aria-pressed": editor.isActive('table'),
                "data-action": "table"
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "table-desc",
                className: "sr-only",
                children: TOOLBAR_LABELS.table.description
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$ToolbarButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: onLinkClick,
                isActive: false,
                title: TOOLBAR_LABELS.link.label,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LinkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LinkIcon$3e$__["LinkIcon"],
                buttonHoverHandlers: buttonHoverHandlers,
                "aria-label": TOOLBAR_LABELS.link.label,
                "aria-describedby": "link-desc",
                "aria-keyshortcuts": TOOLBAR_LABELS.link.shortcut,
                "data-action": "link"
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "link-desc",
                className: "sr-only",
                children: TOOLBAR_LABELS.link.description
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$ToolbarButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: onImageClick,
                isActive: false,
                title: TOOLBAR_LABELS.image.label,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhotoIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhotoIcon$3e$__["PhotoIcon"],
                buttonHoverHandlers: buttonHoverHandlers,
                "aria-label": TOOLBAR_LABELS.image.label,
                "aria-describedby": "image-desc",
                "data-action": "image"
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "image-desc",
                className: "sr-only",
                children: TOOLBAR_LABELS.image.description
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$ToolbarButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: onVideoClick,
                isActive: false,
                title: TOOLBAR_LABELS.video.label,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayIcon$3e$__["PlayIcon"],
                buttonHoverHandlers: buttonHoverHandlers,
                "aria-label": TOOLBAR_LABELS.video.label,
                "aria-describedby": "video-desc",
                "data-action": "video"
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "video-desc",
                className: "sr-only",
                children: TOOLBAR_LABELS.video.description
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$ToolbarDivider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$ToolbarButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: onFullscreenToggle,
                isActive: false,
                title: TOOLBAR_LABELS.fullscreen.label,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowsPointingOutIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowsPointingOutIcon$3e$__["ArrowsPointingOutIcon"],
                buttonHoverHandlers: buttonHoverHandlers,
                "aria-label": TOOLBAR_LABELS.fullscreen.label,
                "aria-describedby": "fullscreen-desc",
                "aria-keyshortcuts": TOOLBAR_LABELS.fullscreen.shortcut,
                "data-action": "fullscreen"
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "fullscreen-desc",
                className: "sr-only",
                children: TOOLBAR_LABELS.fullscreen.description
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$ToolbarButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: handleCodeBlock,
                isActive: editor.isActive('codeBlock'),
                title: TOOLBAR_LABELS.codeBlock.label,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CodeBracketIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeBracketIcon$3e$__["CodeBracketIcon"],
                buttonHoverHandlers: buttonHoverHandlers,
                "aria-label": TOOLBAR_LABELS.codeBlock.label,
                "aria-describedby": "codeBlock-desc",
                "aria-pressed": editor.isActive('codeBlock'),
                "aria-keyshortcuts": TOOLBAR_LABELS.codeBlock.shortcut,
                "data-action": "codeBlock"
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "codeBlock-desc",
                className: "sr-only",
                children: TOOLBAR_LABELS.codeBlock.description
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$ToolbarButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: ()=>{
                    // 단축키 도움말 표시
                    const helpMessage = Object.entries(TOOLBAR_LABELS).filter(([_, info])=>info.shortcut !== '없음').map(([key, info])=>`${info.label}: ${info.shortcut}`).join(', ');
                    const event = new CustomEvent('show-help', {
                        detail: helpMessage
                    });
                    document.dispatchEvent(event);
                },
                isActive: false,
                title: TOOLBAR_LABELS.help.label,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$QuestionMarkCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QuestionMarkCircleIcon$3e$__["QuestionMarkCircleIcon"],
                buttonHoverHandlers: buttonHoverHandlers,
                "aria-label": TOOLBAR_LABELS.help.label,
                "aria-describedby": "help-desc",
                "aria-keyshortcuts": TOOLBAR_LABELS.help.shortcut,
                "data-action": "help"
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "help-desc",
                className: "sr-only",
                children: TOOLBAR_LABELS.help.description
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
                lineNumber: 307,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(EditorToolbar, "JY7Cang+iBluoOgVs8/V7RGlGpA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useToolbarDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToolbarDropdown"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useToolbarActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToolbarActions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useToolbarStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToolbarStyle"]
    ];
});
_c = EditorToolbar;
var _c;
__turbopack_context__.k.register(_c, "EditorToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/ui/BaseModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BaseModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/ui/BaseModal.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/config.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function BaseModal({ isOpen, onClose, children, title, size = 'DEFAULT', showTitle = true, closeOnOverlayClick = true, className = '', style = {} }) {
    _s();
    const dialogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleId = showTitle && title ? 'base-modal-title' : undefined;
    // body 스크롤 잠금
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseModal.useEffect": ()=>{
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
            return ({
                "BaseModal.useEffect": ()=>{
                    document.body.style.overflow = 'unset';
                }
            })["BaseModal.useEffect"];
        }
    }["BaseModal.useEffect"], [
        isOpen
    ]);
    // ESC로 닫기 + 열릴 때 포커스
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseModal.useEffect": ()=>{
            if (!isOpen) return;
            const onKeyDown = {
                "BaseModal.useEffect.onKeyDown": (e)=>{
                    if (e.key === 'Escape') onClose?.();
                }
            }["BaseModal.useEffect.onKeyDown"];
            window.addEventListener('keydown', onKeyDown);
            // 모달 컨테이너에 포커스를 주는 대신 input에 autoFocus를 맡김
            // requestAnimationFrame(() => dialogRef.current?.focus());
            return ({
                "BaseModal.useEffect": ()=>window.removeEventListener('keydown', onKeyDown)
            })["BaseModal.useEffect"];
        }
    }["BaseModal.useEffect"], [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null; // 닫혀 있으면 완전 언마운트
    const modalSize = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].MODAL_SIZES[size] || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].MODAL_SIZES.DEFAULT;
    const handleOverlayClick = (e)=>{
        if (closeOnOverlayClick && e.target === e.currentTarget) {
            onClose?.();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showTitle && title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-10 left-1/2 -translate-x-1/2 pointer-events-none`,
                style: {
                    zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].Z_INDEX.MODAL_TITLE
                },
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    id: titleId,
                    className: "text-2xl font-bold select-none",
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_900
                    },
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/ui/BaseModal.jsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/ui/BaseModal.jsx",
                lineNumber: 58,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center",
                style: {
                    zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].Z_INDEX.MODAL_BACKDROP,
                    backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK}66`
                },
                onClick: handleOverlayClick,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: dialogRef,
                    tabIndex: -1,
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": titleId,
                    className: `relative rounded-lg shadow-lg outline-none ${className}`,
                    style: {
                        zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].Z_INDEX.MODAL_CONTENT,
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_VARIANTS"].modal.background,
                        width: size === 'DEFAULT' ? "68.5vw" : `${modalSize.width}px`,
                        height: size === 'DEFAULT' ? "min(939px, 70vh)" : `${modalSize.height}px`,
                        maxWidth: size === 'DEFAULT' ? "1316px" : `${modalSize.width}px`,
                        border: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_VARIANTS"].modal.border}`,
                        ...style
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/ui/BaseModal.jsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/ui/BaseModal.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(BaseModal, "U+/X/qeN55EDExe8kuNWsEWL/IA=");
_c = BaseModal;
var _c;
__turbopack_context__.k.register(_c, "BaseModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/LinkModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LinkModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$BaseModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/ui/BaseModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/ui/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function LinkModal({ isOpen, onClose, onSubmit, initialText = '', initialUrl = '' }) {
    _s();
    const [linkText, setLinkText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialText);
    const [linkUrl, setLinkUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialUrl);
    const handleSubmit = ()=>{
        onSubmit(linkText.trim(), linkUrl.trim());
        handleClose();
    };
    const handleClose = ()=>{
        setLinkText('');
        setLinkUrl('');
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$BaseModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isOpen: isOpen,
        onClose: handleClose,
        size: "CUSTOM",
        style: {
            width: '400px',
            height: '300px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold mb-4",
                    children: "링크 추가"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/LinkModal.jsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    children: "링크 텍스트"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/LinkModal.jsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: linkText,
                                    onChange: (e)=>setLinkText(e.target.value),
                                    placeholder: "표시될 텍스트를 입력하세요",
                                    className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2",
                                    style: {
                                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_300,
                                        focusRingColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY
                                    },
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/LinkModal.jsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/LinkModal.jsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    children: "URL"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/LinkModal.jsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "url",
                                    value: linkUrl,
                                    onChange: (e)=>setLinkUrl(e.target.value),
                                    placeholder: "https://example.com",
                                    className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2",
                                    style: {
                                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_300,
                                        focusRingColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/LinkModal.jsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/LinkModal.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/LinkModal.jsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end space-x-2 mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            variant: "outline",
                            onClick: handleClose,
                            children: "취소"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/LinkModal.jsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            variant: "primary",
                            onClick: handleSubmit,
                            disabled: !linkText.trim() && !linkUrl.trim(),
                            children: "적용"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/LinkModal.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/LinkModal.jsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/LinkModal.jsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/LinkModal.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(LinkModal, "fgBmhb8N44PtBvUpVPfixbLxf+M=");
_c = LinkModal;
var _c;
__turbopack_context__.k.register(_c, "LinkModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/VideoModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$BaseModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/ui/BaseModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/ui/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function VideoModal({ isOpen, onClose, onSubmit }) {
    _s();
    const [videoUrl, setVideoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = ()=>{
        onSubmit(videoUrl.trim());
        handleClose();
    };
    const handleClose = ()=>{
        setVideoUrl('');
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$BaseModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isOpen: isOpen,
        onClose: handleClose,
        size: "CUSTOM",
        style: {
            width: '400px',
            height: '250px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold mb-4",
                    children: "YouTube 비디오 추가"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/VideoModal.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-2",
                                children: "YouTube URL"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/VideoModal.jsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "url",
                                value: videoUrl,
                                onChange: (e)=>setVideoUrl(e.target.value),
                                placeholder: "https://www.youtube.com/watch?v=...",
                                className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2",
                                style: {
                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_300,
                                    focusRingColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY
                                },
                                autoFocus: true
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/VideoModal.jsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 mt-1",
                                children: "YouTube URL을 붙여넣으세요"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/VideoModal.jsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/VideoModal.jsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/VideoModal.jsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end space-x-2 mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            variant: "outline",
                            onClick: handleClose,
                            children: "취소"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/VideoModal.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            variant: "primary",
                            onClick: handleSubmit,
                            disabled: !videoUrl.trim(),
                            children: "추가"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/VideoModal.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/VideoModal.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/VideoModal.jsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/VideoModal.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(VideoModal, "AmbGXxoqnvYx5FWgBYYN0N7Cyp4=");
_c = VideoModal;
var _c;
__turbopack_context__.k.register(_c, "VideoModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorStyles.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditorStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function EditorStyles() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
        children: `
      /* 접근성을 위한 스크린 리더 전용 클래스 */
      .sr-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }

      /* 포커스 표시 개선 */
      .ProseMirror:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }

      /* 키보드 포커스용 고대비 아웃라인 */
      *:focus-visible {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }

      /* 고대비 모드 지원 */
      @media (prefers-contrast: high) {
        .ProseMirror {
          border-color: #000;
        }
        
        .ProseMirror *:focus {
          outline: 3px solid #000;
        }
      }

      /* 애니메이션 감소 모드 */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      /* 표 선택 및 드래그 기능 개선 */
      .tiptap-editor .ProseMirror .tableWrapper {
        margin: 1em 0;
        overflow-x: auto;
      }
      
      .tiptap-editor .ProseMirror table {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
        margin: 8px 0;
        overflow: hidden;
        user-select: text;
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        border: 2px solid transparent;
        padding: 4px;
      }

      /* 표 테두리 클릭 영역 확대 */
      .tiptap-editor .ProseMirror table::before {
        content: '';
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        pointer-events: auto;
        z-index: -1;
      }

      .tiptap-editor .ProseMirror td, 
      .tiptap-editor .ProseMirror th {
        min-width: 1em;
        border: 2px solid #ced4da;
        padding: 3px 5px;
        vertical-align: top;
        box-sizing: border-box;
        position: relative;
        background: white;
        user-select: text;
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        pointer-events: auto;
      }

      .tiptap-editor .ProseMirror th {
        font-weight: bold;
        text-align: left;
        background-color: #f1f3f4;
      }

      /* 표 선택 및 셀 선택 스타일 */
      .tiptap-editor .ProseMirror .selectedCell,
      .ProseMirror .selectedCell {
        background-color: rgba(0, 150, 255, 0.3);
        outline: 2px solid #0096ff;
        position: relative;
      }

      /* 표 전체 선택 시 커스텀 클래스 */
      .tiptap-editor .ProseMirror table.table-selected {
        outline: 3px solid #0096ff;
        background-color: rgba(0, 150, 255, 0.2);
        border-radius: 4px;
        box-shadow: 0 0 0 2px rgba(0, 150, 255, 0.3);
      }

      /* 셀 선택 가능하도록 */
      .tiptap-editor .ProseMirror table {
        cursor: text;
      }

      .tiptap-editor .ProseMirror td,
      .tiptap-editor .ProseMirror th {
        cursor: text;
        position: relative;
      }

      /* 셀 호버 효과 */
      .tiptap-editor .ProseMirror td:hover,
      .tiptap-editor .ProseMirror th:hover {
        background-color: rgba(0, 150, 255, 0.1);
      }

      .tiptap-editor .ProseMirror .column-resize-handle {
        position: absolute;
        right: -2px;
        top: 0;
        bottom: -2px;
        width: 4px;
        background-color: #3b82f6;
        pointer-events: none;
      }

      .tiptap-editor .ProseMirror table .column-resize-handle {
        pointer-events: all;
        cursor: col-resize;
      }

      /* 기본 선택 허용 */
      .tiptap-editor .ProseMirror {
        user-select: text;
      }

      .ProseMirror p {
        margin: 0;
      }

      /* 링크 스타일 - 강력한 특이성 */
      .tiptap-editor .ProseMirror a[href],
      .ProseMirror a[href],
      div[data-testid="editor-content"] a[href],
      .editor-link[href],
      .tiptap-editor a,
      .ProseMirror a {
        color: #3b82f6 !important;
        text-decoration: underline !important;
        cursor: pointer !important;
        transition: color 0.2s ease !important;
        border: none !important;
        background: transparent !important;
        font-weight: inherit !important;
      }

      .tiptap-editor .ProseMirror a[href]:hover,
      .ProseMirror a[href]:hover,
      div[data-testid="editor-content"] a[href]:hover,
      .editor-link[href]:hover,
      .tiptap-editor a:hover,
      .ProseMirror a:hover {
        color: #1d4ed8 !important;
        text-decoration: underline !important;
      }

      .tiptap-editor .ProseMirror a[href]:visited,
      .ProseMirror a[href]:visited,
      div[data-testid="editor-content"] a[href]:visited,
      .editor-link[href]:visited,
      .tiptap-editor a:visited,
      .ProseMirror a:visited {
        color: #7c3aed !important;
      }

      .tiptap-editor .ProseMirror a[href]:focus,
      .ProseMirror a[href]:focus,
      div[data-testid="editor-content"] a[href]:focus,
      .editor-link[href]:focus,
      .tiptap-editor a:focus,
      .ProseMirror a:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
        border-radius: 2px !important;
      }

      .ProseMirror pre {
        background: #f8f9fa;
        border-radius: 6px;
        color: #2d2d2d;
        font-family: 'SFMono-Regular', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', monospace;
        font-size: 14px;
        line-height: 1.4;
        margin: 16px 0;
        padding: 16px;
        border: 1px solid #e9ecef;
      }

      .ProseMirror pre code {
        background: transparent;
        padding: 0;
        border-radius: 0;
      }

      .ProseMirror code {
        background-color: #f8f9fa;
        border-radius: 0.25rem;
        color: #e83e8c;
        font-family: 'JetBrainsMono', 'SFMono-Regular', 'SF Mono', 'Consolas', 'Liberation Mono', 'Menlo', monospace;
        font-size: 0.85em;
        padding: 0.2rem 0.4rem;
      }

      .ProseMirror pre code {
        background: none;
        color: inherit;
        font-size: inherit;
        padding: 0;
        border-radius: 0;
      }

      /* 구문 하이라이팅 스타일 */
      .ProseMirror .hljs-comment,
      .ProseMirror .hljs-quote {
        color: #6c757d;
        font-style: italic;
      }

      .ProseMirror .hljs-keyword,
      .ProseMirror .hljs-selector-tag,
      .ProseMirror .hljs-subst {
        color: #d73a49;
        font-weight: bold;
      }

      .ProseMirror .hljs-number,
      .ProseMirror .hljs-literal,
      .ProseMirror .hljs-variable,
      .ProseMirror .hljs-template-variable {
        color: #005cc5;
      }

      .ProseMirror .hljs-string,
      .ProseMirror .hljs-doctag {
        color: #032f62;
      }

      .ProseMirror .hljs-title,
      .ProseMirror .hljs-section,
      .ProseMirror .hljs-selector-id {
        color: #6f42c1;
        font-weight: bold;
      }

      .ProseMirror .hljs-type,
      .ProseMirror .hljs-class .hljs-title {
        color: #d73a49;
      }

      .ProseMirror .hljs-tag,
      .ProseMirror .hljs-name,
      .ProseMirror .hljs-attribute {
        color: #22863a;
      }

      .ProseMirror .hljs-regexp,
      .ProseMirror .hljs-link {
        color: #032f62;
      }

      .ProseMirror .hljs-symbol,
      .ProseMirror .hljs-bullet {
        color: #e36209;
      }

      .ProseMirror .hljs-built_in,
      .ProseMirror .hljs-builtin-name {
        color: #005cc5;
      }

      .ProseMirror .hljs-meta {
        color: #6c757d;
      }

      .ProseMirror .hljs-deletion {
        background: #ffeef0;
      }

      .ProseMirror .hljs-addition {
        background: #f0fff4;
      }

      /* 이미지 리사이저 스타일 */
      .ProseMirror .image-resizer {
        position: relative;
        display: inline-block;
        line-height: 0;
        max-width: 100%;
      }

      .ProseMirror .image-resizer img {
        max-width: 100%;
        height: auto;
        display: block;
        cursor: pointer;
      }

      .ProseMirror .resize-handle {
        position: absolute;
        width: 8px;
        height: 8px;
        background: #3b82f6;
        border: 1px solid white;
        border-radius: 50%;
        z-index: 10;
        opacity: 0;
        transition: opacity 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      .ProseMirror .image-resizer:hover .resize-handle {
        opacity: 1;
      }

      .ProseMirror .resize-handle:hover {
        background: #2563eb;
        transform: scale(1.2);
      }

      /* 리사이즈 중일 때 이미지 선택 방지 */
      .ProseMirror .image-resizer.resizing img {
        user-select: none;
        pointer-events: none;
      }

      /* 이미지 선택 시 테두리 */
      .ProseMirror .image-resizer.ProseMirror-selectednode {
        outline: 2px solid #3b82f6;
        border-radius: 4px;
      }

      .ProseMirror .image-resizer.ProseMirror-selectednode .resize-handle {
        opacity: 1;
      }

      /* YouTube 영상 스타일 */
      .ProseMirror div[data-youtube-video] {
        margin: 1rem 0;
        text-align: center;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        background: #f8f9fa;
        border: 1px solid #e9ecef;
      }

      .ProseMirror div[data-youtube-video] iframe {
        width: 100% !important;
        max-width: 100% !important;
        aspect-ratio: 16/9 !important;
        border: none !important;
        display: block !important;
      }

      /* YouTube 로딩 상태 */
      .ProseMirror div[data-youtube-video] .loading {
        padding: 2rem;
        color: #6c757d;
        font-size: 14px;
      }

      /* YouTube 선택 시 테두리 */
      .ProseMirror div[data-youtube-video].ProseMirror-selectednode {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
    `
    }, void 0, false, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorStyles.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = EditorStyles;
var _c;
__turbopack_context__.k.register(_c, "EditorStyles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/TiptapEditor.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TiptapEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// 훅들 import
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useEditorConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useEditorConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useContentSync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useContentSync.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useLinkHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useLinkHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useImageUpload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useImageUpload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useVideoHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useVideoHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useTableHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useTableHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useFullscreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/hooks/useFullscreen.js [app-client] (ecmascript)");
// 컴포넌트들 import
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$EditorToolbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorToolbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$LinkModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/LinkModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$VideoModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/VideoModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$EditorStyles$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/components/EditorStyles.jsx [app-client] (ecmascript)");
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
;
;
;
;
function TiptapEditor({ content = '', onChange, showToolbar = true, readOnly = false }) {
    _s();
    // 훅들 사용
    const { editor, isUpdatingFromProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useEditorConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorConfig"])(content, onChange, readOnly);
    const { isFullscreen, handleFullscreenToggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useFullscreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFullscreen"])();
    const { isLinkModalOpen, linkData, handleLinkClick, handleLinkSubmit, closeLinkModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useLinkHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLinkHandler"])(editor);
    const { handleImageClick } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useImageUpload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImageUpload"])(editor);
    const { isVideoModalOpen, handleVideoClick, handleVideoSubmit, closeVideoModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useVideoHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVideoHandler"])(editor);
    const { handleTableClick } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useTableHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTableHandler"])(editor);
    // 컨텐츠 동기화
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useContentSync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContentSync"])(editor, content, isUpdatingFromProps);
    if (!editor) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[400px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "에디터를 로딩중..."
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/TiptapEditor.jsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/TiptapEditor.jsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    // 한 번만 로그 출력 (중복 방지)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TiptapEditor.useEffect": ()=>{
            if (editor) {
            // Editor initialized successfully
            }
        }
    }["TiptapEditor.useEffect"], [
        editor
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `border border-gray-300 rounded-lg bg-white transition-all duration-300 ${isFullscreen ? 'fixed inset-0 top-24 z-50 rounded-none overflow-auto' : 'overflow-hidden'}`,
        children: [
            showToolbar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: isFullscreen ? 'sticky top-0 z-10 bg-white' : '',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$EditorToolbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    editor: editor,
                    onLinkClick: handleLinkClick,
                    onImageClick: handleImageClick,
                    onVideoClick: handleVideoClick,
                    onTableClick: handleTableClick,
                    onFullscreenToggle: handleFullscreenToggle
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/TiptapEditor.jsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/TiptapEditor.jsx",
                lineNumber: 55,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "editor-content tiptap-editor",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$EditorStyles$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/TiptapEditor.jsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"], {
                        editor: editor,
                        className: `border border-gray-300 rounded-lg bg-white transition-all duration-300 ${isFullscreen ? 'fixed inset-0 top-24 z-50 rounded-none overflow-auto' : 'overflow-hidden h-[700px]' // 원하는 높이 값
                        }`
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/TiptapEditor.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/TiptapEditor.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$LinkModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isLinkModalOpen,
                onClose: closeLinkModal,
                onSubmit: handleLinkSubmit,
                initialText: linkData.text,
                initialUrl: linkData.url
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/TiptapEditor.jsx",
                lineNumber: 80,
                columnNumber: 9
            }, this),
            !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$components$2f$VideoModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isVideoModalOpen,
                onClose: closeVideoModal,
                onSubmit: handleVideoSubmit
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/TiptapEditor.jsx",
                lineNumber: 90,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/TiptapEditor.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(TiptapEditor, "iXRi0m9rDr8CHSkTiIuc2CRysgw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useEditorConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorConfig"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useFullscreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFullscreen"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useLinkHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLinkHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useImageUpload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImageUpload"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useVideoHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVideoHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useTableHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTableHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$hooks$2f$useContentSync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContentSync"]
    ];
});
_c = TiptapEditor;
var _c;
__turbopack_context__.k.register(_c, "TiptapEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCreateForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/ChevronLeftIcon.js [app-client] (ecmascript) <export default as ChevronLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhotoIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhotoIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/PhotoIcon.js [app-client] (ecmascript) <export default as PhotoIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/ui/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$TiptapEditor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/WritePage/TiptapEditor.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function ProjectCreateForm({ onBack }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        image: null,
        previewImage: null,
        capacity: '인원 미정 - 최대 8명',
        deadline: '',
        tech: '',
        position: '',
        question: '',
        slogan: '',
        openTalkLink: '',
        content: ''
    });
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleImageChange = (e)=>{
        const file = e.target.files[0];
        if (file) {
            setFormData((prev)=>({
                    ...prev,
                    image: file,
                    previewImage: URL.createObjectURL(file)
                }));
        }
    };
    const handleEditorChange = (content)=>{
        setFormData((prev)=>({
                ...prev,
                content
            }));
    };
    const handleSubmit = ()=>{
        // Mock Submit
        alert("프로젝트 생성 요청 (Mock): " + formData.title);
        onBack();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-3xl mx-auto py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center justify-center mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "absolute left-0 text-gray-500 hover:text-gray-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__["ChevronLeftIcon"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-gray-900",
                        children: "프로젝트 개설 정보를 입력해주세요"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold text-gray-700",
                                        children: "프로젝트 명"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "title",
                                        value: formData.title,
                                        onChange: handleInputChange,
                                        placeholder: "프로젝트 명을 입력해 주세요",
                                        className: "w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold text-gray-700",
                                        children: "프로젝트 이미지"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: "image/*",
                                                onChange: handleImageChange,
                                                className: "hidden",
                                                id: "project-image"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                                lineNumber: 80,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "project-image",
                                                className: "w-full p-3 border border-gray-200 rounded-lg text-sm text-gray-400 flex justify-between items-center cursor-pointer hover:bg-gray-50",
                                                children: [
                                                    formData.image ? formData.image.name : "프로젝트 이미지를 삽입해 주세요",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhotoIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhotoIcon$3e$__["PhotoIcon"], {
                                                        className: "w-5 h-5 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                                        lineNumber: 92,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                                lineNumber: 87,
                                                columnNumber: 21
                                            }, this),
                                            formData.previewImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 w-full h-32 rounded-lg overflow-hidden bg-gray-100",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: formData.previewImage,
                                                    alt: "Preview",
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                                    lineNumber: 96,
                                                    columnNumber: 30
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                                lineNumber: 95,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold text-gray-700",
                                        children: "모집 인원"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "capacity",
                                        value: formData.capacity,
                                        onChange: handleInputChange,
                                        className: "w-full p-3 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-purple-500 appearance-none bg-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "인원 미정 - 최대 8명"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                                lineNumber: 113,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "2명"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                                lineNumber: 114,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "3명"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                                lineNumber: 115,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "4명"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                                lineNumber: 116,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "5명"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                                lineNumber: 117,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "6명"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                                lineNumber: 118,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "7명"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                                lineNumber: 119,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "8명"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                                lineNumber: 120,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold text-gray-700",
                                        children: "모집 기간"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            name: "deadline",
                                            value: formData.deadline,
                                            onChange: handleInputChange,
                                            className: "w-full p-3 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-purple-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                            lineNumber: 126,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold text-gray-700",
                                        children: "기술"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "tech",
                                        value: formData.tech,
                                        onChange: handleInputChange,
                                        placeholder: "Vue, Java, Python 등",
                                        className: "w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold text-gray-700",
                                        children: "포지션"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "position",
                                        value: formData.position,
                                        onChange: handleInputChange,
                                        placeholder: "프론트엔드, 백엔드 등",
                                        className: "w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 153,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                        lineNumber: 139,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold text-gray-700",
                                        children: "질문"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "question",
                                        value: formData.question,
                                        onChange: handleInputChange,
                                        placeholder: `지원자에게 물어볼 질문을 입력해 주세요\n(예 : 지원동기가 어떻게 되나요?)`,
                                        className: "w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500 min-h-[100px] resize-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold text-gray-700",
                                        children: "프로젝트 슬로건"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "slogan",
                                        value: formData.slogan,
                                        onChange: handleInputChange,
                                        placeholder: "프로젝트 슬로건을 입력해 주세요",
                                        className: "w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                lineNumber: 176,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 w-1/2 pr-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-bold text-gray-700",
                                    children: "오픈톡 링크"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                    lineNumber: 192,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "openTalkLink",
                                    value: formData.openTalkLink,
                                    onChange: handleInputChange,
                                    placeholder: "오픈톡 링크를 입력해 주세요 (선택사항)",
                                    className: "w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                    lineNumber: 193,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400",
                                    children: "형식 : https://open.kakao.com/o/xxxxxxx"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                    lineNumber: 201,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                            lineNumber: 191,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 pt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-center font-bold text-gray-900",
                                children: "프로젝트에 대해 소개해 주세요."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold text-gray-700",
                                        children: "내용"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-gray-200 rounded-lg overflow-hidden min-h-[300px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$WritePage$2f$TiptapEditor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            content: formData.content,
                                            onChange: handleEditorChange,
                                            placeholder: "내용을 입력해 주세요"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                            lineNumber: 212,
                                            columnNumber: 22
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                        lineNumber: 211,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                        lineNumber: 206,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center pt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            className: "bg-[#7C4DFF] text-white px-20 py-3 rounded-full font-bold shadow-md hover:bg-[#6c42e0] transition-colors",
                            children: "개설하기"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(ProjectCreateForm, "hkg6/PNLbu3Bi+hmq7dCDORT6UY=");
_c = ProjectCreateForm;
var _c;
__turbopack_context__.k.register(_c, "ProjectCreateForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/mock/profile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$Project$2f$MyProjectCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/MyProjectCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$Project$2f$ProjectCreateForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectCreateForm.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function ProjectContent() {
    _s();
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCreateProject = ()=>{
        setIsCreating(true);
    };
    const handleBackFromCreate = ()=>{
        setIsCreating(false);
    };
    if (isCreating) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$Project$2f$ProjectCreateForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onBack: handleBackFromCreate
        }, void 0, false, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
            lineNumber: 19,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white min-h-screen py-8 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleCreateProject,
                    className: "bg-[#7C4DFF] text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-[#6c42e0] transition-colors text-sm",
                    children: "프로젝트 만들기"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-gray-900 mb-6",
                                children: "관심 프로젝트"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_MY_PROJECTS"].interested?.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$Project$2f$MyProjectCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        project: project,
                                        type: "interested"
                                    }, project.id, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-gray-900 mb-6",
                                children: "신청 프로젝트"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_MY_PROJECTS"].applied?.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$Project$2f$MyProjectCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        project: project,
                                        type: "applied"
                                    }, project.id, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-gray-900 mb-6",
                                children: "진행 프로젝트"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_MY_PROJECTS"].ongoing.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_MY_PROJECTS"].ongoing?.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$Project$2f$MyProjectCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        project: project,
                                        type: "ongoing"
                                    }, project.id, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                                        lineNumber: 62,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 rounded-lg p-8 text-center text-gray-400 text-sm",
                                children: "진행 중인 프로젝트가 없습니다."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-gray-900 mb-6",
                                children: "완료 프로젝트"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_MY_PROJECTS"].completed.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_MY_PROJECTS"].completed?.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$Project$2f$MyProjectCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        project: project,
                                        type: "completed"
                                    }, project.id, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                                        lineNumber: 78,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this) : // Layout to match empty space if needed, or just text
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-20"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                                lineNumber: 83,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(ProjectContent, "aodhKfF0+mgCWIpo7M6ELxBdlsg=");
_c = ProjectContent;
var _c;
__turbopack_context__.k.register(_c, "ProjectContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceCalendar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/ChevronLeftIcon.js [app-client] (ecmascript) <export default as ChevronLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
;
;
;
const AttendanceCalendar = ({ year, month, checkedDates, today })=>{
    // Get the number of days in the month
    const daysInMonth = new Date(year, month, 0).getDate();
    // Get the day of the week for the 1st of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
    // Generate calendar days
    const days = [];
    for(let i = 0; i < firstDayOfMonth; i++){
        days.push(null); // Padding for empty slots
    }
    for(let i = 1; i <= daysInMonth; i++){
        days.push(i);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-8 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-2 hover:bg-gray-100 rounded-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__["ChevronLeftIcon"], {
                            className: "w-5 h-5 text-gray-500"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceCalendar.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceCalendar.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold",
                        children: [
                            year,
                            ". ",
                            month
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceCalendar.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-2 hover:bg-gray-100 rounded-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                            className: "w-5 h-5 text-gray-500"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceCalendar.jsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceCalendar.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceCalendar.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7 mb-4",
                children: [
                    '일',
                    '월',
                    '화',
                    '수',
                    '목',
                    '금',
                    '토'
                ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-sm font-bold text-gray-400",
                        children: day
                    }, day, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceCalendar.jsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceCalendar.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7 gap-y-6",
                children: days.map((day, index)=>{
                    if (!day) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, `empty-${index}`, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceCalendar.jsx",
                        lineNumber: 47,
                        columnNumber: 28
                    }, ("TURBOPACK compile-time value", void 0));
                    const isToday = day === today;
                    const isChecked = checkedDates.includes(day);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium
                  ${isToday ? 'bg-[#FF4081] text-white' // Today (Hot Pink)
                             : isChecked ? 'bg-[#FF80AB] text-white' // Checked (Lighter Pink)
                             : 'text-gray-700'}
                `,
                            children: day
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceCalendar.jsx",
                            lineNumber: 54,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, day, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceCalendar.jsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceCalendar.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceCalendar.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AttendanceCalendar;
const __TURBOPACK__default__export__ = AttendanceCalendar;
var _c;
__turbopack_context__.k.register(_c, "AttendanceCalendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceContent.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AttendanceContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/mock/profile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$AttendanceCalendar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceCalendar.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function AttendanceContent() {
    _s();
    // Use Dec 2025 mock data
    const { checkedDates, today, month, year } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_ATTENDANCE"]["2025-12"];
    // Demo State for "Study Completed"
    const [isStudyCompleted, setIsStudyCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // If completed, increment count
    const attendedCount = isStudyCompleted ? checkedDates.length + 1 : checkedDates.length;
    // If completed, add today to checked dates for visualization
    const currentCheckedDates = isStudyCompleted ? [
        ...checkedDates,
        today
    ] : checkedDates;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white min-h-[500px] flex flex-col items-center pt-8 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 p-2 opacity-50 hover:opacity-100 transition-opacity",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsStudyCompleted(!isStudyCompleted),
                    className: "bg-gray-200 text-xs px-2 py-1 rounded",
                    children: isStudyCompleted ? "Reset Demo" : "Simulate Complete"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceContent.jsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceContent.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl text-gray-900 mb-6 font-medium",
                children: isStudyCompleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "오늘의 ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/write",
                            className: "font-bold underline decoration-pink-500 underline-offset-4 text-gray-900 cursor-pointer hover:text-pink-600 transition-colors",
                            children: "스터디"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceContent.jsx",
                            lineNumber: 34,
                            columnNumber: 21
                        }, this),
                        " 기록완료"
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "오늘의 ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/write",
                            className: "font-bold underline decoration-pink-500 underline-offset-4 text-gray-900 cursor-pointer hover:text-pink-600 transition-colors",
                            children: "스터디"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceContent.jsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this),
                        "를 기록해주세요."
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceContent.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-900 mb-12 font-medium",
                children: [
                    "이번달 출석횟수 : ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#FF4081] font-bold",
                        children: [
                            attendedCount,
                            "회"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceContent.jsx",
                        lineNumber: 44,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceContent.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$AttendanceCalendar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    year: year,
                    month: month,
                    checkedDates: currentCheckedDates,
                    today: today
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceContent.jsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceContent.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceContent.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(AttendanceContent, "31ZgQ6CODNzMH/LyEFwQS2uC5Z4=");
_c = AttendanceContent;
var _c;
__turbopack_context__.k.register(_c, "AttendanceContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyProfileLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/messages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/mock/profile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$Profile$2f$ProfileContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Profile/ProfileContent.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$Study$2f$StudyContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Study/StudyContent.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$Project$2f$ProjectContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/Project/ProjectContent.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$AttendanceContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/AttendanceContent.jsx [app-client] (ecmascript)");
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
// Define tab order and labels mapping
const TAB_CONFIG = [
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGES"].SECTIONS.PROFILE_INFO,
        label: '프로필'
    },
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGES"].SECTIONS.ATTENDANCE_CHECK,
        label: '출석체크'
    },
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGES"].SECTIONS.STUDY_LIST,
        label: '스터디 2'
    },
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGES"].SECTIONS.PROJECT_LIST,
        label: '프로젝트'
    }
];
function MyProfileLayout() {
    _s();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGES"].SECTIONS.PROFILE_INFO);
    const renderContent = ()=>{
        switch(activeSection){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGES"].SECTIONS.PROFILE_INFO:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$Profile$2f$ProfileContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                    lineNumber: 25,
                    columnNumber: 16
                }, this);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGES"].SECTIONS.STUDY_LIST:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$Study$2f$StudyContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                    lineNumber: 27,
                    columnNumber: 16
                }, this);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGES"].SECTIONS.PROJECT_LIST:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$Project$2f$ProjectContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                    lineNumber: 29,
                    columnNumber: 16
                }, this);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGES"].SECTIONS.ATTENDANCE_CHECK:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$AttendanceContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                    lineNumber: 31,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$Profile$2f$ProfileContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                    lineNumber: 33,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center pt-16 pb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-32 h-32 rounded-full overflow-hidden bg-gray-200",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PROFILE"].user.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PROFILE"].user.avatar,
                                    alt: "Profile",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                                    lineNumber: 45,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full flex items-center justify-center text-4xl",
                                    children: "👤"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                                    lineNumber: 47,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100 hover:bg-gray-50 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-4 w-4 text-gray-600",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-900",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PROFILE"].user.nickname
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                                lineNumber: 61,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PROFILE"].user.tags?.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 rounded-lg border border-purple-500 text-purple-600 text-xs font-medium",
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                                        lineNumber: 64,
                                        columnNumber: 22
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                                lineNumber: 62,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-sm",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PROFILE"].user.description
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-16",
                    children: TAB_CONFIG.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveSection(tab.id),
                            className: `pb-4 px-2 text-sm font-medium transition-colors relative ${activeSection === tab.id ? 'text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-700'}`,
                            children: [
                                tab.label,
                                activeSection === tab.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 w-full h-0.5 bg-gray-900"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, tab.id, true, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-3xl mx-auto px-4 py-12",
                children: renderContent()
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(MyProfileLayout, "WnSc2nHuyq0ml3sQ6Y8lTYN7c7E=");
_c = MyProfileLayout;
var _c;
__turbopack_context__.k.register(_c, "MyProfileLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/app/profile/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$MyProfileLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/MyProfile/MyProfileLayout.jsx [app-client] (ecmascript)");
"use client";
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$MyProfile$2f$MyProfileLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/app/profile/page.jsx",
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

//# sourceMappingURL=Desktop_Project_CoDiYoung_src_08e7dadf._.js.map