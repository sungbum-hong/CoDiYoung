import { renderHook } from '@testing-library/react';
import { useCategoryConfig } from '../useCategoryConfig';
import { CodeBracketIcon, PaintBrushIcon, VideoCameraIcon, PencilIcon } from "@heroicons/react/24/outline";

// 상수 모킹
jest.mock('../../../constants/studyCategories', () => ({
  STUDY_CATEGORY_CONFIG: {
    "코딩": {
      color: "#ef4444",
      icon: require("@heroicons/react/24/outline").CodeBracketIcon
    },
    "디자인": {
      color: "#eab308",
      icon: require("@heroicons/react/24/outline").PaintBrushIcon
    },
    "영상편집": {
      color: "#8b5cf6",
      icon: require("@heroicons/react/24/outline").VideoCameraIcon
    }
  },
  DEFAULT_CATEGORY_CONFIG: {
    color: "#6b7280",
    icon: require("@heroicons/react/24/outline").PencilIcon
  }
}));

describe('useCategoryConfig', () => {
  it('코딩 카테고리 설정을 올바르게 반환한다', () => {
    const { result } = renderHook(() => useCategoryConfig());
    
    const codingConfig = result.current.getCategoryConfig('코딩');
    
    expect(codingConfig).toBeDefined();
    expect(codingConfig.color).toBe('#ef4444');
    expect(codingConfig.icon).toBe(CodeBracketIcon);
  });

  it('디자인 카테고리 설정을 올바르게 반환한다', () => {
    const { result } = renderHook(() => useCategoryConfig());
    
    const designConfig = result.current.getCategoryConfig('디자인');
    
    expect(designConfig).toBeDefined();
    expect(designConfig.color).toBe('#eab308');
    expect(designConfig.icon).toBe(PaintBrushIcon);
  });

  it('영상편집 카테고리 설정을 올바르게 반환한다', () => {
    const { result } = renderHook(() => useCategoryConfig());
    
    const videoConfig = result.current.getCategoryConfig('영상편집');
    
    expect(videoConfig).toBeDefined();
    expect(videoConfig.color).toBe('#8b5cf6');
    expect(videoConfig.icon).toBe(VideoCameraIcon);
  });

  it('알 수 없는 카테고리에 대해 기본값을 반환한다', () => {
    const { result } = renderHook(() => useCategoryConfig());
    
    const unknownConfig = result.current.getCategoryConfig('unknown');
    
    expect(unknownConfig).toBeDefined();
    expect(unknownConfig.color).toBe('#6b7280');
    expect(unknownConfig.icon).toBe(PencilIcon);
  });

  it('빈 문자열 카테고리에 대해 기본값을 반환한다', () => {
    const { result } = renderHook(() => useCategoryConfig());
    
    const emptyConfig = result.current.getCategoryConfig('');
    
    expect(emptyConfig).toBeDefined();
    expect(emptyConfig.color).toBe('#6b7280');
    expect(emptyConfig.icon).toBe(PencilIcon);
  });

  it('null/undefined 카테고리에 대해 기본값을 반환한다', () => {
    const { result } = renderHook(() => useCategoryConfig());
    
    const nullConfig = result.current.getCategoryConfig(null);
    const undefinedConfig = result.current.getCategoryConfig(undefined);
    
    expect(nullConfig).toBeDefined();
    expect(undefinedConfig).toBeDefined();
    expect(nullConfig.color).toBe('#6b7280');
    expect(undefinedConfig.color).toBe('#6b7280');
  });
});