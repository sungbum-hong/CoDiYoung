module.exports = [
"[project]/Desktop/프로젝트/CoDiYoung/src/hooks/useButtonStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useButtonStyles",
    ()=>useButtonStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/colors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/config.js [app-ssr] (ecmascript)");
;
;
;
const useButtonStyles = (variant, size, style = {})=>{
    // Variant별 스타일을 메모이제이션
    const variantStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const styles = {
            primary: {
                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_VARIANTS"].button.primary.background,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_VARIANTS"].button.primary.text,
                borderColor: 'transparent'
            },
            secondary: {
                backgroundColor: 'transparent',
                color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].SECONDARY,
                borderWidth: '2px',
                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY
            },
            outline: {
                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_VARIANTS"].button.secondary.background,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_VARIANTS"].button.secondary.text,
                borderWidth: '2px',
                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_VARIANTS"].button.secondary.border
            }
        };
        return styles[variant] || {};
    }, [
        variant
    ]);
    // Size별 스타일을 메모이제이션
    const sizeStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const sizeConfig = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].BUTTON_SIZES[size];
        return {
            padding: sizeConfig.padding,
            fontSize: sizeConfig.fontSize,
            height: sizeConfig.height
        };
    }, [
        size
    ]);
    // 최종 버튼 스타일
    const buttonStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...variantStyle,
            ...sizeStyle,
            borderRadius: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].BORDER_RADIUS.MEDIUM}px`,
            transitionDuration: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].ANIMATION.TRANSITION_DURATION}ms`,
            ...style
        }), [
        variantStyle,
        sizeStyle,
        style
    ]);
    // CSS 클래스명 생성
    const buttonClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const baseClasses = [
            'inline-flex',
            'items-center',
            'justify-center',
            'font-medium',
            'transition-all',
            'shadow-sm',
            'focus:outline-none',
            'disabled:opacity-50',
            'disabled:cursor-not-allowed'
        ];
        // variant별 추가 클래스
        const variantClasses = {
            primary: [
                'hover:brightness-90'
            ],
            secondary: [
                'hover:bg-[var(--color-primary)]',
                'hover:text-white'
            ],
            outline: [
                'hover:bg-opacity-10'
            ]
        };
        return [
            ...baseClasses,
            ...variantClasses[variant] || []
        ].join(' ');
    }, [
        variant
    ]);
    return {
        buttonStyle,
        buttonClassName
    };
};
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/hooks/useButtonEvents.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useButtonEvents",
    ()=>useButtonEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/colors.js [app-ssr] (ecmascript)");
;
;
const useButtonEvents = (variant, disabled, userEvents = {})=>{
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        // secondary 버튼의 특별한 hover 효과 (CSS로 대체 권장)
        if (variant === 'secondary' && !disabled) {
            e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY;
            e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].WHITE;
        }
        // 사용자 정의 이벤트 호출
        userEvents.onMouseEnter?.(e);
    }, [
        variant,
        disabled,
        userEvents.onMouseEnter
    ]);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (variant === 'secondary' && !disabled) {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].SECONDARY;
        }
        // 사용자 정의 이벤트 호출
        userEvents.onMouseLeave?.(e);
    }, [
        variant,
        disabled,
        userEvents.onMouseLeave
    ]);
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (disabled) {
            e.preventDefault();
            return;
        }
        userEvents.onClick?.(e);
    }, [
        disabled,
        userEvents.onClick
    ]);
    return {
        handleMouseEnter,
        handleMouseLeave,
        handleClick
    };
};
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/ui/Button.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$hooks$2f$useButtonStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/hooks/useButtonStyles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$hooks$2f$useButtonEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/hooks/useButtonEvents.js [app-ssr] (ecmascript)");
;
;
;
;
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(({ children, onClick, type = "button", variant = "primary", size = "md", className = "", style = {}, disabled = false, onMouseEnter, onMouseLeave, ...props })=>{
    const { buttonStyle, buttonClassName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$hooks$2f$useButtonStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useButtonStyles"])(variant, size, style);
    const { handleMouseEnter, handleMouseLeave, handleClick } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$hooks$2f$useButtonEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useButtonEvents"])(variant, disabled, {
        onClick,
        onMouseEnter,
        onMouseLeave
    });
    const finalClassName = `${buttonClassName} ${className}`.trim();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: handleClick,
        disabled: disabled,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        className: finalClassName,
        style: buttonStyle,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/ui/Button.jsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = 'Button';
const __TURBOPACK__default__export__ = Button;
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/ui/FormInput.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/colors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/config.js [app-ssr] (ecmascript)");
;
;
;
function FormInput({ type = "text", placeholder, value, onChange, error, disabled = false, required = false, className = "", variant = "default", size = "md" }) {
    // 크기 프리셋
    const sizeStyles = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].INPUT_SIZES;
    // 공통 베이스 (세로패딩은 size 프리셋으로 통일하므로 p-* 제거)
    const baseStyles = "w-full focus:outline-none transition-colors";
    const getVariantStyles = ()=>{
        if (variant === 'signin') {
            return {
                className: "bg-white border-[2px] focus:ring-2",
                focusRingColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY,
                style: {
                    borderRadius: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].BORDER_RADIUS.MEDIUM}px`,
                    borderColor: error ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].ERROR : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY,
                    focusBorderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY
                }
            };
        }
        // 기본(언더라인형)
        return {
            className: `border-0 border-b-2 bg-transparent`,
            placeholderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].GRAY_500,
            style: {
                borderBottomColor: error ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].ERROR : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].GRAY_300,
                focusBorderBottomColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY
            }
        };
    };
    const variantConfig = getVariantStyles();
    const inputStyle = {
        ...variantConfig.style
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                placeholder: placeholder,
                value: value,
                onChange: onChange,
                disabled: disabled,
                required: required,
                className: [
                    baseStyles,
                    sizeStyles[size] || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].INPUT_SIZES.md,
                    variantConfig.className,
                    disabled ? "" : "",
                    className
                ].join(" "),
                style: {
                    ...inputStyle,
                    color: disabled ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].GRAY_500 : 'inherit'
                },
                onFocus: (e)=>{
                    if (variant === 'signin') {
                        e.target.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY;
                    } else {
                        e.target.style.borderBottomColor = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY;
                    }
                },
                onBlur: (e)=>{
                    if (variant === 'signin') {
                        e.target.style.borderColor = error ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].ERROR : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY;
                    } else {
                        e.target.style.borderBottomColor = error ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].ERROR : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].GRAY_300;
                    }
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/ui/FormInput.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].ERROR
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/ui/FormInput.jsx",
                lineNumber: 87,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/ui/FormInput.jsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/components/ErrorModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ErrorModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
;
;
function ErrorModal({ open, message, onClose, onFindPassword, primary }) {
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40 backdrop-blur-[1px]",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/components/ErrorModal.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "alertdialog",
                "aria-labelledby": "signin-error-title",
                "aria-describedby": "signin-error-desc",
                className: "absolute left-1/2 top-[40%] -translate-x-1/2 w-[90%] max-w-[420px] rounded-2xl bg-white shadow-2xl border border-red-200 p-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid place-items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "signin-error-desc",
                        className: "text-center text-sm text-red-700",
                        children: typeof message === 'string' ? message : message?.message || '알 수 없는 오류가 발생했습니다.'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/components/ErrorModal.jsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/components/ErrorModal.jsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/components/ErrorModal.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/components/ErrorModal.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this), document.body);
}
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/utils/validation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateEmail",
    ()=>validateEmail,
    "validatePassword",
    ()=>validatePassword,
    "validatePasswordConfirmation",
    ()=>validatePasswordConfirmation,
    "validateVerificationCode",
    ()=>validateVerificationCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/messages.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/config.js [app-ssr] (ecmascript)");
;
;
const validateEmail = (email)=>{
    if (!email) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].VALIDATION.EMAIL_REQUIRED;
    }
    const emailRegex = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].VALIDATION.EMAIL_REGEX;
    if (!emailRegex.test(email)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].VALIDATION.EMAIL_INVALID;
    }
    return "";
};
const validatePassword = (password)=>{
    if (!password) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].VALIDATION.PASSWORD_REQUIRED;
    }
    if (password.length < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].VALIDATION.PASSWORD_MIN_LENGTH) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].VALIDATION.PASSWORD_MIN_LENGTH;
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].VALIDATION.PASSWORD_PATTERNS.LOWERCASE.test(password)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].VALIDATION.PASSWORD_NEED_LOWERCASE;
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].VALIDATION.PASSWORD_PATTERNS.UPPERCASE.test(password)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].VALIDATION.PASSWORD_NEED_UPPERCASE;
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].VALIDATION.PASSWORD_PATTERNS.NUMBER.test(password)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].VALIDATION.PASSWORD_NEED_NUMBER;
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].VALIDATION.PASSWORD_PATTERNS.SPECIAL.test(password)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].VALIDATION.PASSWORD_NEED_SPECIAL;
    }
    return "";
};
const validatePasswordConfirmation = (password, confirmPassword)=>{
    if (!confirmPassword) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].VALIDATION.PASSWORD_CONFIRM_REQUIRED;
    }
    if (password !== confirmPassword) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].VALIDATION.PASSWORD_NOT_MATCH;
    }
    return "";
};
const validateVerificationCode = (code)=>{
    if (!code) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].VALIDATION.VERIFICATION_CODE_REQUIRED;
    }
    // 개발 단계에서는 임의 길이 허용 (최소 1자리 이상)
    if (code.length < 1) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].VALIDATION.VERIFICATION_CODE_REQUIRED;
    }
    return "";
};
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/hooks/useSignInForm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSignInForm",
    ()=>useSignInForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/stores/authStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$utils$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/utils/validation.js [app-ssr] (ecmascript)");
;
;
function useSignInForm() {
    const email = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.email);
    const password = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.password);
    const emailError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.emailError);
    const passwordError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.passwordError);
    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.error);
    const setEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.setEmail);
    const setPassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.setPassword);
    const setEmailError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.setEmailError);
    const setPasswordError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.setPasswordError);
    const resetErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.resetErrors);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.clearError);
    const handleEmailChange = (e)=>{
        const v = e.target.value;
        setEmail(v);
        if (v) setEmailError((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$utils$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateEmail"])(v));
        if (error) clearError();
    };
    const handlePasswordChange = (e)=>{
        const v = e.target.value;
        setPassword(v);
        if (v) setPasswordError((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$utils$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePassword"])(v));
        if (error) clearError();
    };
    const validateForm = ()=>{
        const eErr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$utils$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateEmail"])(email);
        const pErr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$utils$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePassword"])(password);
        setEmailError(eErr);
        setPasswordError(pErr);
        return !eErr && !pErr;
    };
    return {
        // Form state
        email,
        password,
        emailError,
        passwordError,
        // Form handlers
        handleEmailChange,
        handlePasswordChange,
        validateForm,
        resetErrors,
        // Error handling
        error,
        clearError
    };
}
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/hooks/useSignInAuth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSignInAuth",
    ()=>useSignInAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/stores/authStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/routes.js [app-ssr] (ecmascript)");
;
;
;
function useSignInAuth() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.login);
    const isLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.isLoading);
    const handleLogin = async (email, password, onClose)=>{
        try {
            const result = await login(email, password);
            if (result.success) {
                router.push(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROUTES"].HOME);
                onClose?.();
            }
        } catch (error) {
        // Error is handled in auth store
        }
    };
    const handleFindPassword = (resetErrors)=>{
        resetErrors();
        router.push(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROUTES"].FIND_PASSWORD);
    };
    return {
        isLoading,
        handleLogin,
        handleFindPassword
    };
}
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignInPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$ui$2f$Button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/ui/Button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$ui$2f$FormInput$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/ui/FormInput.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/colors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/messages.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$feature$2f$SignIn$2f$components$2f$ErrorModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/components/ErrorModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$feature$2f$SignIn$2f$hooks$2f$useSignInForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/hooks/useSignInForm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$feature$2f$SignIn$2f$hooks$2f$useSignInAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/hooks/useSignInAuth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
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
function SignInPage({ onClose }) {
    const { email, password, emailError, passwordError, handleEmailChange, handlePasswordChange, validateForm, resetErrors, error, clearError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$feature$2f$SignIn$2f$hooks$2f$useSignInForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSignInForm"])();
    const { isLoading, handleLogin, handleFindPassword } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$feature$2f$SignIn$2f$hooks$2f$useSignInAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSignInAuth"])();
    const onSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) return;
        await handleLogin(email, password, onClose);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full min-h-[calc(100dvh-${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].LAYOUT.HEADER_TOTAL_HEIGHT}px)] flex flex-col items-center justify-center`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-4 flex flex-col items-center",
                style: {
                    maxWidth: '600px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/cdylogo.png",
                                        alt: "CoDiYoung Logo",
                                        className: "h-12 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-900 mb-2",
                                children: "코디영 로그인하기"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "💡"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    "코디영에서 스터디를 시작해보세요!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: onSubmit,
                        className: "flex flex-col gap-6 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-bold text-gray-900",
                                        children: "이메일"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        placeholder: "이메일을 입력해주세요",
                                        value: email,
                                        onChange: handleEmailChange,
                                        className: "w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-400",
                                        disabled: isLoading
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    emailError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-red-500",
                                        children: emailError
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                        lineNumber: 74,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-bold text-gray-900",
                                        children: "비밀번호"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        placeholder: "비밀번호를 입력해주세요",
                                        value: password,
                                        onChange: handlePasswordChange,
                                        className: "w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-400",
                                        disabled: isLoading
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    passwordError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-red-500",
                                        children: passwordError
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                        lineNumber: 88,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        id: "keepLogin",
                                        className: "w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "keepLogin",
                                        className: "text-sm text-gray-600 select-none cursor-pointer",
                                        children: "로그인 상태 유지"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isLoading,
                                className: "w-full py-3.5 rounded-lg font-bold text-white transition-colors mt-2",
                                style: {
                                    backgroundColor: '#D9D9D9',
                                    color: '#717171'
                                },
                                onMouseOver: (e)=>{
                                    if (!isLoading) {
                                        e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY;
                                        e.currentTarget.style.color = 'white';
                                    }
                                },
                                onMouseOut: (e)=>{
                                    if (!isLoading) {
                                        e.currentTarget.style.backgroundColor = '#D9D9D9';
                                        e.currentTarget.style.color = '#717171';
                                    }
                                },
                                children: isLoading ? "로그인 중..." : "로그인"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$feature$2f$SignIn$2f$components$2f$ErrorModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: !!error,
                message: error,
                primary: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY,
                onClose: clearError,
                onFindPassword: ()=>{
                    clearError();
                    handleFindPassword(resetErrors);
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/app/signin/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$feature$2f$SignIn$2f$SignInPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/feature/SignIn/SignInPage.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Page() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$feature$2f$SignIn$2f$SignInPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        onClose: ()=>router.push('/')
    }, void 0, false, {
        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/app/signin/page.jsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3_CoDiYoung_src_aa6aec99._.js.map