(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/Avatar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Avatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
;
;
;
function Avatar({ size = 'md', src, alt }) {
    const cls = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].AVATAR_SIZES[size] || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].AVATAR_SIZES.md;
    // 이미지 URL 처리 (다른 컴포넌트와 동일한 방식)
    const imageUrl = src && !src.startsWith('http') ? `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].API.BASE_URL}/storage/${src}` : src;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${cls} rounded-full flex items-center justify-center overflow-hidden`,
        style: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_200
        },
        children: imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: imageUrl,
            alt: alt || '',
            className: "w-full h-full object-cover"
        }, void 0, false, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/Avatar.jsx",
            lineNumber: 17,
            columnNumber: 19
        }, this) : null
    }, void 0, false, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/Avatar.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Avatar;
var _c;
__turbopack_context__.k.register(_c, "Avatar");
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
"[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/Dropdown.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function Dropdown({ options, value, onChange, placeholder, className = "" }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const selectedOption = options.find((option)=>option.value === value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-full border-2 rounded-md p-2 text-left bg-white flex items-center justify-between",
                style: {
                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY,
                    color: selectedOption ? 'black' : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_400
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex-1",
                        children: selectedOption ? selectedOption.label : placeholder
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/Dropdown.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY
                        },
                        children: isOpen ? '▲' : '▼'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/Dropdown.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/Dropdown.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-10 w-full mt-1 bg-white border-2 rounded-md shadow-lg max-h-48 overflow-y-auto",
                style: {
                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY
                },
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            onChange(option.value);
                            setIsOpen(false);
                        },
                        className: "w-full text-left px-3 py-2 hover:bg-gray-50 transition-colors duration-150",
                        style: {
                            backgroundColor: value === option.value ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY : 'transparent',
                            color: value === option.value ? 'white' : 'black'
                        },
                        children: option.label
                    }, option.value, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/Dropdown.jsx",
                        lineNumber: 31,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/Dropdown.jsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/Dropdown.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(Dropdown, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = Dropdown;
var _c;
__turbopack_context__.k.register(_c, "Dropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/constants/techIcons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TECH_ICON_MAP",
    ()=>TECH_ICON_MAP
]);
/**
 * 기술 스택 아이콘 매핑 상수
 * react-icons의 Simple Icons를 사용
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/react-icons/si/index.mjs [app-client] (ecmascript)");
;
const TECH_ICON_MAP = {
    // Frontend Frameworks
    'react': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiReact"],
        color: 'text-blue-500',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
    },
    'React': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiReact"],
        color: 'text-blue-500',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
    },
    'vue.js': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiVuedotjs"],
        color: 'text-green-500',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
    },
    'vue': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiVuedotjs"],
        color: 'text-green-500',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
    },
    'Vue.js': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiVuedotjs"],
        color: 'text-green-500',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
    },
    'angular': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiAngular"],
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200'
    },
    'Angular': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiAngular"],
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200'
    },
    // Backend & Runtime
    'node.js': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNodedotjs"],
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
    },
    'nodejs': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNodedotjs"],
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
    },
    'Node.js': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNodedotjs"],
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
    },
    'python': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiPython"],
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
    },
    'Python': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiPython"],
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
    },
    'java': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiOracle"],
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200'
    },
    'Java': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiOracle"],
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200'
    },
    'spring': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiSpring"],
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
    },
    'Spring Boot': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiSpring"],
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
    },
    'spring boot': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiSpring"],
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
    },
    // Languages
    'javascript': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiJavascript"],
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200'
    },
    'JavaScript': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiJavascript"],
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200'
    },
    'typescript': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiTypescript"],
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
    },
    'TypeScript': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiTypescript"],
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
    },
    // Mobile
    'flutter': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiFlutter"],
        color: 'text-blue-500',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
    },
    'Flutter': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiFlutter"],
        color: 'text-blue-500',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
    },
    'react native': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiReact"],
        color: 'text-blue-500',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
    },
    'reactnative': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiReact"],
        color: 'text-blue-500',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
    },
    'React Native': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiReact"],
        color: 'text-blue-500',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
    },
    // Design & Tools
    'figma': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiFigma"],
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200'
    },
    'Figma': {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiFigma"],
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/utils/techIcons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "formatTechStack",
    ()=>formatTechStack,
    "getTechIcon",
    ()=>getTechIcon,
    "normalizeTechName",
    ()=>normalizeTechName,
    "parseTechArray",
    ()=>parseTechArray
]);
/**
 * 기술 스택 관련 유틸리티 함수들
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$techIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/techIcons.js [app-client] (ecmascript)");
;
const normalizeTechName = (techName)=>{
    if (!techName) return '';
    return techName.toLowerCase().trim().replace(/[^a-z0-9\s.]/g, '') // 특수문자 제거 (점은 vue.js 때문에 유지)
    .replace(/\s+/g, ' '); // 연속 공백을 하나로
};
const getTechIcon = (techName)=>{
    const normalizedName = normalizeTechName(techName);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$techIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_ICON_MAP"][normalizedName] || null;
};
const parseTechArray = (techs)=>{
    if (!techs) return [];
    if (Array.isArray(techs)) {
        return techs.map((tech)=>tech.trim()).filter(Boolean);
    }
    if (typeof techs === 'string') {
        return techs.split(/[,;]/) // 쉼표 또는 세미콜론으로 분리
        .map((tech)=>tech.trim()).filter(Boolean);
    }
    return [];
};
const formatTechStack = (techs)=>{
    const techArray = parseTechArray(techs);
    return techArray.map((techName)=>{
        const iconInfo = getTechIcon(techName);
        return {
            name: techName,
            normalizedName: normalizeTechName(techName),
            hasIcon: !!iconInfo && !!iconInfo.icon,
            ...iconInfo || {}
        };
    });
};
const __TURBOPACK__default__export__ = {
    TECH_ICON_MAP: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$techIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_ICON_MAP"],
    normalizeTechName,
    getTechIcon,
    parseTechArray,
    formatTechStack
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/MultiSelectDropdown.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MultiSelectDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$utils$2f$techIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/utils/techIcons.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function MultiSelectDropdown({ options, value = [], onChange, placeholder, className = "" }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const selectedLabels = value.map((val)=>options.find((option)=>option.value === val)?.label).filter(Boolean);
    const toggleOption = (optionValue)=>{
        const newValue = value.includes(optionValue) ? value.filter((v)=>v !== optionValue) : [
            ...value,
            optionValue
        ];
        onChange(newValue);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-full border-2 rounded-md p-2 bg-white flex items-center justify-between min-h-[40px]",
                style: {
                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY,
                    color: selectedLabels.length > 0 ? 'black' : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_400
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-left",
                        children: selectedLabels.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-1",
                            children: value.map((val)=>{
                                const option = options.find((opt)=>opt.value === val);
                                const techIconInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$utils$2f$techIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTechIcon"])(val);
                                const IconComponent = techIconInfo?.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center px-2 py-1 text-xs rounded cursor-pointer group",
                                    style: {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY,
                                        color: 'white'
                                    },
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        toggleOption(val);
                                    },
                                    children: [
                                        IconComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                            size: 14,
                                            className: "mr-1",
                                            style: {
                                                color: 'white'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/MultiSelectDropdown.jsx",
                                            lineNumber: 45,
                                            columnNumber: 23
                                        }, this),
                                        option?.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1 text-xs opacity-70 group-hover:opacity-100",
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/MultiSelectDropdown.jsx",
                                            lineNumber: 52,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, val, true, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/MultiSelectDropdown.jsx",
                                    lineNumber: 35,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/MultiSelectDropdown.jsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: placeholder
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/MultiSelectDropdown.jsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/MultiSelectDropdown.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY
                        },
                        children: isOpen ? '▲' : '▼'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/MultiSelectDropdown.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/MultiSelectDropdown.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-10 w-full mt-1 bg-white border-2 rounded-md shadow-lg max-h-48 overflow-y-auto",
                style: {
                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY
                },
                children: options.map((option)=>{
                    const techIconInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$utils$2f$techIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTechIcon"])(option.value);
                    const IconComponent = techIconInfo?.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>toggleOption(option.value),
                        className: "w-full text-left px-3 py-2 hover:bg-gray-50 transition-colors duration-150 flex items-center",
                        style: {
                            backgroundColor: value.includes(option.value) ? `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY}20` : 'transparent',
                            color: 'black'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-2",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY
                                },
                                children: value.includes(option.value) ? '✓' : '○'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/MultiSelectDropdown.jsx",
                                lineNumber: 87,
                                columnNumber: 17
                            }, this),
                            IconComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                size: 16,
                                className: "mr-2",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/MultiSelectDropdown.jsx",
                                lineNumber: 91,
                                columnNumber: 19
                            }, this),
                            option.label
                        ]
                    }, option.value, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/MultiSelectDropdown.jsx",
                        lineNumber: 77,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/MultiSelectDropdown.jsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/MultiSelectDropdown.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(MultiSelectDropdown, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = MultiSelectDropdown;
var _c;
__turbopack_context__.k.register(_c, "MultiSelectDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/constants/applicationOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POSITION_OPTIONS",
    ()=>POSITION_OPTIONS,
    "TECH_OPTIONS",
    ()=>TECH_OPTIONS
]);
const POSITION_OPTIONS = [
    {
        value: "frontend",
        label: "프론트엔드"
    },
    {
        value: "backend",
        label: "백엔드"
    },
    {
        value: "fullstack",
        label: "풀스택"
    },
    {
        value: "design",
        label: "디자인"
    },
    {
        value: "mobile",
        label: "모바일"
    },
    {
        value: "data",
        label: "데이터분석"
    }
];
const TECH_OPTIONS = [
    {
        value: "React",
        label: "React"
    },
    {
        value: "Vue.js",
        label: "Vue.js"
    },
    {
        value: "Angular",
        label: "Angular"
    },
    {
        value: "Node.js",
        label: "Node.js"
    },
    {
        value: "Python",
        label: "Python"
    },
    {
        value: "Java",
        label: "Java"
    },
    {
        value: "Spring Boot",
        label: "Spring Boot"
    },
    {
        value: "JavaScript",
        label: "JavaScript"
    },
    {
        value: "TypeScript",
        label: "TypeScript"
    },
    {
        value: "Flutter",
        label: "Flutter"
    },
    {
        value: "React Native",
        label: "React Native"
    },
    {
        value: "Figma",
        label: "Figma"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/hooks/useApplicationForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useApplicationForm",
    ()=>useApplicationForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useApplicationForm() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        question: "",
        answers: {},
        position: "",
        tech: []
    });
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const validateForm = ()=>{
        const errors = [];
        // answers가 객체 형태로 있으면 각 답변 검증, 없으면 기본 question 검증
        if (formData.answers && typeof formData.answers === 'object' && Object.keys(formData.answers).length > 0) {
            const emptyAnswers = Object.values(formData.answers).some((answer)=>!answer?.trim());
            if (emptyAnswers) {
                errors.push("모든 질문에 답변을 입력해주세요");
            }
        } else {
            if (!formData.question.trim()) errors.push("지원 동기를 입력해주세요");
        }
        if (!formData.position) errors.push("포지션을 선택해주세요");
        if (formData.tech.length === 0) errors.push("기술을 선택해주세요");
        if (errors.length > 0) {
            alert(errors.join("\n"));
            return false;
        }
        return true;
    };
    const resetForm = ()=>{
        setFormData({
            question: "",
            answers: {},
            position: "",
            tech: []
        });
    };
    return {
        formData,
        handleInputChange,
        validateForm,
        resetForm
    };
}
_s(useApplicationForm, "K+sYx2ztxMzLbtUs7XZvH7qIseo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/hooks/useTextareaResize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTextareaResize",
    ()=>useTextareaResize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useTextareaResize() {
    _s();
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleTextareaChange = (e, onChange)=>{
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
        onChange(e.target.value);
    };
    const handleFocus = (e)=>{
        setIsFocused(true);
        setTimeout(()=>{
            const textarea = e.target;
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        }, 0);
    };
    const handleBlur = ()=>{
        setIsFocused(false);
        setTimeout(()=>{
            const textarea = document.querySelector('.question-textarea');
            if (textarea) {
                textarea.style.height = '44px';
            }
        }, 0);
    };
    return {
        isFocused,
        handleTextareaChange,
        handleFocus,
        handleBlur
    };
}
_s(useTextareaResize, "taoS6m9NZex5dx3pinefKTdpShE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/mock/projects.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_PROJECTS",
    ()=>MOCK_PROJECTS,
    "PROJECTS",
    ()=>PROJECTS
]);
const PROJECTS = [
    {
        id: 1,
        title: "CoDiYoung 리뉴얼 프로젝트",
        description: "CoDiYoung 플랫폼을 리뉴얼하는 프로젝트입니다.\n함께 성장할 팀원을 모집합니다.",
        currentParticipants: 2,
        totalParticipants: 5,
        deadline: "2024-12-31",
        techStack: [
            "React",
            "TailwindCSS",
            "Zustand"
        ],
        tags: [
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
        description: "새로운 아이디어로 사이드 프로젝트를 시작합니다.\n백엔드 개발자를 찾고 있습니다.",
        currentParticipants: 1,
        totalParticipants: "미정",
        deadline: "-",
        techStack: [
            "Next.js",
            "TypeScript"
        ],
        tags: [
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
        description: "영상 편집 기술을 함께 공부할 스터디원을 모집합니다.\n초보자 환영합니다.",
        currentParticipants: 3,
        totalParticipants: 4,
        deadline: "2024-11-30",
        techStack: [
            "Premiere Pro",
            "After Effects"
        ],
        tags: [
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
        description: "디자이너와 개발자를 위한 포트폴리오 공유 플랫폼을 만듭니다.\n많은 관심 부탁드립니다.",
        currentParticipants: 4,
        totalParticipants: 6,
        deadline: "2025-01-15",
        techStack: [
            "Vue.js",
            "Firebase"
        ],
        tags: [
            "Vue.js",
            "Firebase"
        ],
        position: "Designer",
        nickname: "디자이너B",
        isInterested: true
    }
];
const MOCK_PROJECTS = PROJECTS;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/hooks/useProjectPageQueries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useApplicantDecision",
    ()=>useApplicantDecision,
    "useProjectApplicants",
    ()=>useProjectApplicants,
    "useProjectApplication",
    ()=>useProjectApplication,
    "useProjectApplicationCancel",
    ()=>useProjectApplicationCancel,
    "useProjectApplicationStatus",
    ()=>useProjectApplicationStatus,
    "useProjectDetail",
    ()=>useProjectDetail,
    "useProjectPageActions",
    ()=>useProjectPageActions,
    "useProjectPageData",
    ()=>useProjectPageData,
    "useProjectQuestions",
    ()=>useProjectQuestions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$projects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/mock/projects.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
;
;
const useProjectQuestions = (projectId, options = {})=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "projectPage",
            "project",
            projectId,
            "questions"
        ],
        queryFn: {
            "useProjectQuestions.useQuery": async ()=>[]
        }["useProjectQuestions.useQuery"],
        enabled: !!projectId,
        staleTime: Infinity,
        ...options
    });
};
_s(useProjectQuestions, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useProjectDetail = (projectId, options = {})=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "projectPage",
            "project",
            projectId
        ],
        queryFn: {
            "useProjectDetail.useQuery": async ()=>{
                if (!projectId) return null;
                // Mock data find
                const project = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$projects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PROJECTS"].find({
                    "useProjectDetail.useQuery.project": (p)=>p.id === Number(projectId)
                }["useProjectDetail.useQuery.project"]);
                return project || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$mock$2f$projects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PROJECTS"][0]; // Fallback to first mock project if ID not found
            }
        }["useProjectDetail.useQuery"],
        enabled: !!projectId,
        staleTime: Infinity,
        ...options
    });
};
_s1(useProjectDetail, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useProjectApplicants = (projectId, options = {})=>{
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "projectPage",
            "project",
            projectId,
            "applicants"
        ],
        queryFn: {
            "useProjectApplicants.useQuery": async ()=>[
                    {
                        id: 101,
                        nickname: "Applicant 1",
                        position: "Frontend",
                        status: "pending"
                    },
                    {
                        id: 102,
                        nickname: "Applicant 2",
                        position: "Backend",
                        status: "pending"
                    }
                ]
        }["useProjectApplicants.useQuery"],
        enabled: !!projectId,
        staleTime: Infinity,
        ...options
    });
};
_s2(useProjectApplicants, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useProjectApplicationStatus = (projectId, options = {})=>{
    _s3();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "projectPage",
            "project",
            projectId,
            "applicationStatus"
        ],
        queryFn: {
            "useProjectApplicationStatus.useQuery": async ()=>({
                    canApply: true,
                    isAlreadyApplied: false,
                    isFull: false,
                    isExpired: false,
                    isOwner: false
                })
        }["useProjectApplicationStatus.useQuery"],
        enabled: !!projectId,
        staleTime: Infinity,
        ...options
    });
};
_s3(useProjectApplicationStatus, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useProjectApplication = ()=>{
    _s4();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useProjectApplication.useMutation": async ({ projectId, applicationData })=>{
                await new Promise({
                    "useProjectApplication.useMutation": (r)=>setTimeout(r, 500)
                }["useProjectApplication.useMutation"]); // Simulate delay
                return {
                    success: true
                };
            }
        }["useProjectApplication.useMutation"],
        onSuccess: {
            "useProjectApplication.useMutation": (result, { projectId })=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "projectPage",
                        "project",
                        projectId
                    ]
                });
            }
        }["useProjectApplication.useMutation"]
    });
};
_s4(useProjectApplication, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const useProjectApplicationCancel = ()=>{
    _s5();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useProjectApplicationCancel.useMutation": async (projectId)=>{
                await new Promise({
                    "useProjectApplicationCancel.useMutation": (r)=>setTimeout(r, 500)
                }["useProjectApplicationCancel.useMutation"]);
                return {
                    success: true
                };
            }
        }["useProjectApplicationCancel.useMutation"],
        onSuccess: {
            "useProjectApplicationCancel.useMutation": (result, projectId)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "projectPage",
                        "project",
                        projectId
                    ]
                });
            }
        }["useProjectApplicationCancel.useMutation"]
    });
};
_s5(useProjectApplicationCancel, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const useApplicantDecision = ()=>{
    _s6();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useApplicantDecision.useMutation": async ({ projectId, applicantId, decision })=>{
                await new Promise({
                    "useApplicantDecision.useMutation": (r)=>setTimeout(r, 500)
                }["useApplicantDecision.useMutation"]);
                return {
                    success: true
                };
            }
        }["useApplicantDecision.useMutation"],
        onSuccess: {
            "useApplicantDecision.useMutation": (result, { projectId })=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "projectPage",
                        "project",
                        projectId
                    ]
                });
            }
        }["useApplicantDecision.useMutation"]
    });
};
_s6(useApplicantDecision, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const useProjectPageData = (projectId)=>{
    _s7();
    const projectQuery = useProjectDetail(projectId);
    const applicationStatusQuery = useProjectApplicationStatus(projectId);
    const applicantsQuery = useProjectApplicants(projectId, {
        enabled: !!projectId
    });
    const isLoading = projectQuery.isLoading || applicationStatusQuery.isLoading;
    return {
        project: projectQuery.data,
        applicationStatus: applicationStatusQuery.data,
        applicants: applicantsQuery.data || [],
        isLoading,
        isProjectLoading: projectQuery.isLoading,
        isApplicationStatusLoading: applicationStatusQuery.isLoading,
        isApplicantsLoading: applicantsQuery.isLoading,
        error: projectQuery.error,
        refetchProject: projectQuery.refetch,
        refetchApplicationStatus: applicationStatusQuery.refetch,
        refetchApplicants: applicantsQuery.refetch,
        refetchAll: ()=>{
            projectQuery.refetch();
            applicationStatusQuery.refetch();
            applicantsQuery.refetch();
        }
    };
};
_s7(useProjectPageData, "VifU4nvBkMoy1Q+TUzoQgkXgOGg=", false, function() {
    return [
        useProjectDetail,
        useProjectApplicationStatus,
        useProjectApplicants
    ];
});
const useProjectPageActions = ()=>{
    _s8();
    const applicationMutation = useProjectApplication();
    const cancelMutation = useProjectApplicationCancel();
    const decisionMutation = useApplicantDecision();
    const isLoading = applicationMutation.isPending || cancelMutation.isPending || decisionMutation.isPending;
    return {
        applyToProject: applicationMutation.mutate,
        cancelApplication: cancelMutation.mutate,
        handleApplicantDecision: decisionMutation.mutate,
        applyToProjectAsync: applicationMutation.mutateAsync,
        cancelApplicationAsync: cancelMutation.mutateAsync,
        handleApplicantDecisionAsync: decisionMutation.mutateAsync,
        isLoading,
        isApplying: applicationMutation.isPending,
        isCancelling: cancelMutation.isPending,
        isProcessingDecision: decisionMutation.isPending,
        applicationError: applicationMutation.error,
        cancelError: cancelMutation.error,
        decisionError: decisionMutation.error,
        resetApplication: applicationMutation.reset,
        resetCancel: cancelMutation.reset,
        resetDecision: decisionMutation.reset,
        resetAll: ()=>{
            applicationMutation.reset();
            cancelMutation.reset();
            decisionMutation.reset();
        }
    };
};
_s8(useProjectPageActions, "RoqTRQRWLAKdP77ruhcYV0NTBV8=", false, function() {
    return [
        useProjectApplication,
        useProjectApplicationCancel,
        useApplicantDecision
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/hooks/useApplicationSubmit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useApplicationSubmit",
    ()=>useApplicationSubmit
]);
// 이 파일은 useProjectPageQueries.js의 useProjectApplication으로 대체되었습니다.
// 하위 호환성을 위해 새로운 훅을 래핑하여 기존 API를 유지합니다.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useProjectPageQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/hooks/useProjectPageQueries.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useApplicationSubmit() {
    _s();
    const [isCompleted, setIsCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { mutateAsync: applyToProject, isPending: isSubmitting, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useProjectPageQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectApplication"])();
    const submitApplication = async (projectId, formData)=>{
        if (!projectId) {
            alert("프로젝트 ID가 없습니다.");
            return false;
        }
        try {
            // formData.answers가 객체 형태 {questionId: answer}인지 확인
            let answers = [];
            if (formData.answers) {
                if (typeof formData.answers === 'object' && !Array.isArray(formData.answers)) {
                    // 객체 형태: {questionId: answer}
                    answers = Object.entries(formData.answers).filter(([questionId, answer])=>answer && answer.trim()) // 빈 답변 필터링
                    .map(([questionId, answer])=>({
                            questionId: parseInt(questionId),
                            answer: answer.trim()
                        }));
                } else if (Array.isArray(formData.answers)) {
                    // 배열 형태: ["answer1", "answer2"]
                    answers = formData.answers.filter((answer)=>answer && answer.trim()) // 빈 답변 필터링
                    .map((answer, index)=>({
                            questionId: index + 1,
                            answer: answer.trim()
                        }));
                }
            } else if (formData.question && formData.question.trim()) {
                // 기존 단일 질문 형태
                answers = [
                    {
                        questionId: 1,
                        answer: formData.question.trim()
                    }
                ];
            }
            // 답변이 없는 경우 에러
            if (answers.length === 0) {
                alert("모든 질문에 답변을 입력해주세요.");
                return false;
            }
            const applicationData = {
                projectId: parseInt(projectId),
                position: formData.position,
                techs: formData.tech,
                answers: answers
            };
            await applyToProject({
                projectId,
                applicationData
            });
            setIsCompleted(true);
            return true;
        } catch (error) {
            alert("신청 중 오류가 발생했습니다: " + error.message);
            return false;
        }
    };
    const closeSuccess = ()=>{
        setIsCompleted(false);
        reset(); // React Query mutation 상태 리셋
    };
    return {
        isSubmitting,
        isCompleted,
        submitApplication,
        closeSuccess
    };
}
_s(useApplicationSubmit, "e1lEwaWnEjy9fP/dm6R77f2snng=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useProjectPageQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectApplication"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/hooks/useProjectQuestions.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// 이 파일은 useProjectPageQueries.js의 useProjectQuestions로 대체되었습니다.
// 하위 호환성을 위해 새로운 훅을 re-export 합니다.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useProjectPageQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/hooks/useProjectPageQueries.js [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ApplicationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$BaseModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/ui/BaseModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/ui/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$components$2f$Dropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/Dropdown.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$components$2f$MultiSelectDropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/MultiSelectDropdown.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$constants$2f$applicationOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/constants/applicationOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useApplicationForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/hooks/useApplicationForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useTextareaResize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/hooks/useTextareaResize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useApplicationSubmit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/hooks/useApplicationSubmit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useProjectQuestions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/hooks/useProjectQuestions.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useProjectPageQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/hooks/useProjectPageQueries.js [app-client] (ecmascript)");
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
function ApplicationModal({ onClose, project, projectName = "프로젝트", projectId, description }) {
    _s();
    const { formData, handleInputChange, validateForm, resetForm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useApplicationForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicationForm"])();
    const { handleTextareaChange, handleFocus, handleBlur } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useTextareaResize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTextareaResize"])();
    const { isSubmitting, isCompleted, submitApplication, closeSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useApplicationSubmit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicationSubmit"])();
    // 실제 프로젝트 질문 API 사용
    const { data: questions, isLoading: questionsLoading, error: questionsError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useProjectPageQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectQuestions"])(projectId);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        const success = await submitApplication(projectId, formData);
        if (success) {
            resetForm();
        } else {}
    };
    const handleCloseSuccess = ()=>{
        closeSuccess();
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$BaseModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: !isCompleted,
                onClose: onClose,
                className: "max-w-md w-full",
                style: {
                    width: "480px",
                    height: "auto",
                    maxWidth: "90vw"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl p-8 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-center mb-2",
                                    children: "프로젝트 신청"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                    lineNumber: 65,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-center text-sm",
                                    children: [
                                        projectName,
                                        "에 참여 신청을 위한 정보를 입력해주세요."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                    lineNumber: 68,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                            lineNumber: 64,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-6",
                            children: [
                                questionsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_500
                                        },
                                        children: "질문을 불러오는 중..."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this) : questionsError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].ERROR || '#EF4444'
                                        },
                                        children: "질문을 불러오는데 실패했습니다."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this) : questions && questions.length > 0 ? questions.map((question, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-2",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_700
                                                },
                                                children: question.content || question
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                className: "question-textarea w-full border-2 rounded-md p-3 resize-none transition-all duration-200 focus:outline-none min-h-[44px] overflow-hidden",
                                                style: {
                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY,
                                                    color: 'black'
                                                },
                                                value: formData.answers?.[question.id] || '',
                                                onChange: (e)=>handleTextareaChange(e, (value)=>{
                                                        const newAnswers = {
                                                            ...formData.answers || {}
                                                        };
                                                        newAnswers[question.id] = value;
                                                        handleInputChange('answers', newAnswers);
                                                    }),
                                                onFocus: handleFocus,
                                                onBlur: handleBlur,
                                                placeholder: "답변을 입력해주세요",
                                                disabled: isSubmitting || questionsLoading,
                                                rows: 1
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, question.id || index, true, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)) : // 질문이 없는 경우 기본 질문
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_500
                                        },
                                        children: "등록된 질문이 없습니다."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-2",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_700
                                            },
                                            children: "포지션"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                            lineNumber: 125,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$components$2f$Dropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$constants$2f$applicationOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POSITION_OPTIONS"],
                                            value: formData.position,
                                            onChange: (value)=>handleInputChange("position", value),
                                            placeholder: "포지션을 선택해주세요",
                                            className: "w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                            lineNumber: 128,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                    lineNumber: 124,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-2",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_700
                                            },
                                            children: "기술"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                            lineNumber: 139,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$components$2f$MultiSelectDropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$constants$2f$applicationOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_OPTIONS"],
                                            value: formData.tech,
                                            onChange: (value)=>handleInputChange("tech", value),
                                            placeholder: "기술을 선택해주세요 (다중선택 가능)",
                                            className: "w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                            lineNumber: 142,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                    lineNumber: 138,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            type: "submit",
                                            variant: "secondary",
                                            disabled: isSubmitting || questionsLoading || questionsError,
                                            className: "flex-1 py-3",
                                            children: isSubmitting ? "신청 중..." : questionsLoading ? "로딩 중..." : "신청하기"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                            lineNumber: 153,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            type: "button",
                                            variant: "outline",
                                            onClick: onClose,
                                            disabled: isSubmitting,
                                            className: "flex-1 py-3",
                                            children: "닫기"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                            lineNumber: 162,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                                    lineNumber: 152,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                            lineNumber: 74,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$BaseModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isCompleted,
                onClose: handleCloseSuccess,
                style: {
                    width: "400px",
                    height: "280px",
                    maxWidth: "90vw"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl p-8 relative h-full flex flex-col justify-center items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-center mb-4",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY
                            },
                            children: "신청완료"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            variant: "secondary",
                            onClick: handleCloseSuccess,
                            className: "px-8",
                            children: "확인"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx",
                lineNumber: 177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ApplicationModal, "Fo4juenfkeSe5wH6dGq/e+8WADk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useApplicationForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicationForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useTextareaResize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTextareaResize"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useApplicationSubmit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicationSubmit"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useProjectPageQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectQuestions"]
    ];
});
_c = ApplicationModal;
var _c;
__turbopack_context__.k.register(_c, "ApplicationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/LoginModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$BaseModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/ui/BaseModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/ui/Button.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function LoginModal({ onClose, onProviderLogin }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const goLogin = ()=>{
        onClose?.();
        router.push('/signin'); // 로그인 페이지 경로
    };
    const handleProvider = (provider)=>{
        // 필요 시 상위에서 처리할 수 있게 콜백 제공
        onProviderLogin?.(provider);
    // 또는 바로 이동/요청하도록 바꿔도 됩니다.
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$BaseModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isOpen: true,
        onClose: onClose,
        size: "SMALL",
        showTitle: false,
        className: "w-96 max-w-[90vw] p-13 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold text-gray-900 mb-24",
                children: "로그인 후 사용 가능한 서비스입니다."
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/LoginModal.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "secondary",
                        onClick: goLogin,
                        className: "px-5 border transition-colors hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 active:bg-[color-mix(in_srgb,var(--color-primary)_90%,black)]",
                        style: {
                            height: '2.75rem',
                            borderRadius: '15px'
                        },
                        children: "로그인"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/LoginModal.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "outline",
                        onClick: onClose,
                        className: "px-4",
                        style: {
                            height: '2.75rem',
                            borderRadius: '15px'
                        },
                        children: "닫기"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/LoginModal.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/LoginModal.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/LoginModal.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(LoginModal, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginModal;
var _c;
__turbopack_context__.k.register(_c, "LoginModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$Avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/Avatar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$components$2f$ApplicationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/ApplicationModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$components$2f$LoginModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/components/LoginModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/ui/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/hooks/useAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
function ProjectCard({ project }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isApplicationModalOpen, setIsApplicationModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthState"])();
    // Use values directly from project or fallbacks
    const title = project?.title || "";
    const createdAt = project?.createdAt || "2025-12-22"; // default date
    const userName = project?.user?.name || "사용자";
    const userAvatar = project?.user?.avatar;
    // Left Column Data
    const recruitmentCount = project?.recruitmentCount || "인원 미정";
    const deadline = project?.deadline || "2026-01-01";
    const positions = project?.positions || [];
    const techStack = project?.techStack || [];
    const slogan = project?.slogan || "슬로건이 없습니다.";
    const questions = project?.questions || [];
    const openTalkLink = project?.openTalkLink || "";
    // Right Column Data
    const description = project?.description || "";
    const detailedDescription = project?.detailedDescription || description;
    const imageKey = project?.imageKey;
    const thumbnail = project?.thumbnail;
    const handleApply = ()=>{
        if (!isAuthenticated) {
            setIsLoginModalOpen(true);
            return;
        }
        setIsApplicationModalOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-6 py-12 mb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.back(),
                        className: "mb-8 text-gray-500 hover:text-gray-900 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M15 18L9 12L15 6",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-900 mb-4 leading-tight max-w-4xl",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-6 rounded-full overflow-hidden bg-gray-100 items-center justify-center flex",
                                children: userAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: userAvatar,
                                    alt: userName,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs",
                                    children: "👤"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-sm text-gray-900",
                                children: userName
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-400",
                                children: createdAt
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-4 space-y-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-[100px_1fr] gap-x-4 gap-y-6 items-baseline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-500 font-medium",
                                            children: "모집 인원"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-900 font-medium",
                                            children: recruitmentCount
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-500 font-medium",
                                            children: "마감일"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-900 font-medium",
                                            children: deadline
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-500 font-medium self-center",
                                            children: "포지션"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: positions.map((pos)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-700",
                                                    children: pos
                                                }, pos, false, {
                                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-500 font-medium self-center",
                                            children: "기술"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: techStack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-700",
                                                    children: tech
                                                }, tech, false, {
                                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-gray-500 font-medium mb-2",
                                        children: "슬로건"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-lg text-gray-900 leading-snug",
                                        children: slogan
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            questions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-gray-500 font-medium",
                                        children: "질문"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                        lineNumber: 120,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: questions.map((q, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-gray-50 rounded-xl text-gray-800 text-sm font-medium leading-relaxed",
                                                children: q
                                            }, idx, false, {
                                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                                lineNumber: 123,
                                                columnNumber: 20
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                        lineNumber: 121,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                lineNumber: 119,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-gray-500 font-medium",
                                        children: "오픈톡 링크"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://${openTalkLink}`,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-gray-900 font-medium hover:underline block truncate",
                                        children: openTalkLink
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-8 space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-[400px] bg-gray-200 rounded-none overflow-hidden flex items-center justify-center",
                                children: imageKey || thumbnail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imageKey ? imageKey.startsWith('http') ? imageKey : `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].API.BASE_URL}/storage/${imageKey}` : thumbnail,
                                    alt: title,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                    lineNumber: 146,
                                    columnNumber: 22
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-400",
                                    children: "이미지 없음"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                    lineNumber: 152,
                                    columnNumber: 22
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "whitespace-pre-wrap text-gray-800 leading-relaxed text-sm",
                                children: detailedDescription
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            isApplicationModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$components$2f$ApplicationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setIsApplicationModalOpen(false),
                project: project,
                projectName: title,
                projectId: project?.id,
                description: description
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                lineNumber: 165,
                columnNumber: 9
            }, this),
            isLoginModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$components$2f$LoginModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setIsLoginModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
                lineNumber: 174,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(ProjectCard, "Tj/bcuI3X7poY/ZpBwyWQBW1x7k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthState"]
    ];
});
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/hooks/useProjectDetail.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// 이 파일은 useProjectPageQueries.js의 useProjectDetail로 대체되었습니다.
// 하위 호환성을 위해 새로운 훅을 re-export 합니다.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useProjectPageQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/hooks/useProjectPageQueries.js [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectPageLayout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPageLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$ProjectCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useProjectDetail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/hooks/useProjectDetail.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useProjectPageQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/hooks/useProjectPageQueries.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ProjectPageLayout() {
    _s();
    const { projectId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const numericProjectId = projectId ? parseInt(projectId, 10) : null;
    const { data: projectData, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useProjectPageQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectDetail"])(numericProjectId);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-lg",
                children: "로딩 중..."
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectPageLayout.jsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectPageLayout.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-lg text-red-600",
                children: [
                    "오류: ",
                    error?.message || '알 수 없는 오류가 발생했습니다.'
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectPageLayout.jsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectPageLayout.jsx",
            lineNumber: 23,
            columnNumber: 7
        }, this);
    }
    if (!projectData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-lg",
                children: "프로젝트를 찾을 수 없습니다."
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectPageLayout.jsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectPageLayout.jsx",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$ProjectCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            project: projectData
        }, void 0, false, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectPageLayout.jsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/feature/ProjectPage/ProjectPageLayout.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(ProjectPageLayout, "+WIjS1Ps+Pb8SLScepzUgVuXClM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$feature$2f$ProjectPage$2f$hooks$2f$useProjectPageQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectDetail"]
    ];
});
_c = ProjectPageLayout;
var _c;
__turbopack_context__.k.register(_c, "ProjectPageLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Project_CoDiYoung_src_13f52756._.js.map