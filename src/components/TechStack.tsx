import React from 'react';
import { formatTechStack } from '../shared/utils/techIcons';

/**
 * 기술 스택을 아이콘과 함께 표시하는 컴포넌트
 */

interface TechStackProps {
  techs: string | string[];
  displayMode?: 'icons' | 'text' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  maxItems?: number;
  className?: string;
}

export const TechStack = ({ 
  techs,
  displayMode = 'icons',
  size = 'md',
  maxItems,
  className = ''
}: TechStackProps) => {
  const techItems = formatTechStack(techs);
  
  if (!techItems.length) {
    return null;
  }

  // 사이즈별 스타일 설정
  const sizeClasses = {
    sm: {
      icon: 'w-3 h-3',
      text: 'text-xs',
      padding: 'px-2 py-1',
      gap: 'gap-1'
    },
    md: {
      icon: 'w-4 h-4',
      text: 'text-sm',
      padding: 'px-2 py-1',
      gap: 'gap-1'
    },
    lg: {
      icon: 'w-5 h-5',
      text: 'text-base',
      padding: 'px-3 py-2',
      gap: 'gap-2'
    }
  };

  const sizeStyle = sizeClasses[size] || sizeClasses.md;

  // 텍스트만 표시 모드
  if (displayMode === 'text') {
    return (
      <span className={`${sizeStyle.text} text-gray-600 ${className}`}>
        {techs}
      </span>
    );
  }

  // 표시할 항목과 숨겨진 항목 분리
  const displayItems = maxItems ? techItems.slice(0, maxItems) : techItems;
  const hiddenCount = maxItems && techItems.length > maxItems ? techItems.length - maxItems : 0;

  // 미니멀 모드 (아이콘만, 라벨 없음)
  if (displayMode === 'minimal') {
    return (
      <div className={`flex flex-wrap ${sizeStyle.gap} ${className}`}>
        {displayItems.map((tech, index) => {
          if (tech.hasIcon && tech.icon) {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className={`flex items-center justify-center ${sizeStyle.padding} ${tech.bgColor} ${tech.borderColor} border rounded-md hover:scale-105 transition-transform`}
                title={tech.name}
              >
                <IconComponent className={`${sizeStyle.icon} ${tech.color}`} />
              </div>
            );
          }
          
          // 아이콘이 없는 경우 텍스트로 표시
          return (
            <div
              key={index}
              className={`flex items-center justify-center ${sizeStyle.padding} bg-gray-50 border border-gray-200 rounded-md`}
              title={tech.name}
            >
              <span className={`${sizeStyle.text} font-medium text-gray-600`}>
                {tech.name.substring(0, 3).toUpperCase()}
              </span>
            </div>
          );
        })}
        
        {hiddenCount > 0 && (
          <div
            className={`flex items-center justify-center ${sizeStyle.padding} bg-gray-100 border border-gray-300 rounded-md`}
            title={`${hiddenCount}개 더`}
          >
            <span className={`${sizeStyle.text} font-medium text-gray-500`}>
              +{hiddenCount}
            </span>
          </div>
        )}
      </div>
    );
  }

  // 아이콘만 원형 모드 (팀원 동그라미와 같은 크기)
  if (displayMode === 'icons') {
    const circleSize = size === 'lg' ? 'w-12 h-12' : size === 'md' ? 'w-10 h-10' : 'w-8 h-8';
    const iconSize = size === 'lg' ? 'w-6 h-6' : size === 'md' ? 'w-5 h-5' : 'w-4 h-4';
    
    return (
      <div className={`flex flex-wrap ${sizeStyle.gap} ${className}`}>
        {displayItems.map((tech, index) => {
          if (tech.hasIcon && tech.icon) {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className={`${circleSize} rounded-full flex items-center justify-center ${tech.bgColor} ${tech.borderColor} border hover:scale-105 transition-transform`}
                title={tech.name}
              >
                <IconComponent className={`${iconSize} ${tech.color}`} />
              </div>
            );
          }
          
          // 아이콘이 없는 경우 텍스트로 표시
          return (
            <div
              key={index}
              className={`${circleSize} rounded-full flex items-center justify-center bg-gray-200 border border-gray-300`}
              title={tech.name}
            >
              <span className={`${sizeStyle.text} font-bold text-gray-600`}>
                {tech.name.substring(0, 2).toUpperCase()}
              </span>
            </div>
          );
        })}
        
        {hiddenCount > 0 && (
          <div
            className={`${circleSize} rounded-full flex items-center justify-center bg-gray-100 border border-gray-300`}
            title={`${hiddenCount}개 더: ${techItems.slice(maxItems).map(t => t.name).join(', ')}`}
          >
            <span className={`${sizeStyle.text} font-bold text-gray-500`}>
              +{hiddenCount}
            </span>
          </div>
        )}
      </div>
    );
  }

  // 기본 아이콘 + 텍스트 모드
  return (
    <div className={`flex flex-wrap ${sizeStyle.gap} ${className}`}>
      {displayItems.map((tech, index) => {
        if (tech.hasIcon && tech.icon) {
          const IconComponent = tech.icon;
          return (
            <div
              key={index}
              className={`flex items-center ${sizeStyle.gap} ${sizeStyle.padding} ${tech.bgColor} ${tech.borderColor} border rounded-md hover:shadow-sm transition-shadow`}
              title={tech.name}
            >
              <IconComponent className={`${sizeStyle.icon} ${tech.color}`} />
              <span className={`${sizeStyle.text} font-medium text-gray-700`}>
                {tech.name}
              </span>
            </div>
          );
        }
        
        // 아이콘이 없는 경우 텍스트만 표시
        return (
          <div
            key={index}
            className={`flex items-center ${sizeStyle.gap} ${sizeStyle.padding} bg-gray-50 border border-gray-200 rounded-md`}
            title={tech.name}
          >
            <span className={`${sizeStyle.text} text-gray-500`}>💻</span>
            <span className={`${sizeStyle.text} font-medium text-gray-700`}>
              {tech.name}
            </span>
          </div>
        );
      })}
      
      {hiddenCount > 0 && (
        <div
          className={`flex items-center ${sizeStyle.gap} ${sizeStyle.padding} bg-gray-100 border border-gray-300 rounded-md`}
          title={`${hiddenCount}개 더: ${techItems.slice(maxItems).map(t => t.name).join(', ')}`}
        >
          <span className={`${sizeStyle.text} font-medium text-gray-500`}>
            +{hiddenCount}
          </span>
        </div>
      )}
    </div>
  );
};

export default TechStack;