import { useNavigate } from "react-router-dom";
import { PencilIcon, CodeBracketIcon, PaintBrushIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { createAvatar } from '@dicebear/core';
import { pixelArt } from '@dicebear/collection';
import { useState, useEffect } from 'react';
import { ROUTES } from "../../constants/routes";
import { COLORS } from "../../utils/colors";
import { CONFIG } from "../../constants/config";

export default function StudyCategory({
  title = "스터디 채널",
  rows = [
    { label: "코딩", count: 5 },
    { label: "디자인", count: 5 },
    { label: "영상편집", count: 5 },
  ],
}) {
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState({});

  const handleCategoryClick = (category) => {
    navigate(`${ROUTES.STUDY_CATEGORY.replace(":category", category)}`);
  };

  const handleWriteClick = () => {
    navigate(ROUTES.WRITE);
  };

  // 모든 아바타를 미리 생성
  useEffect(() => {
    const generateAvatars = async () => {
      const newAvatars = {};
      
      try {
        for (const row of rows) {
          for (let i = 0; i < row.count; i++) {
            const seed = `${row.label}-${i}`;
            const avatar = createAvatar(pixelArt, {
              seed: seed,
              size: 96,
            });
            newAvatars[seed] = await avatar.toDataUri();
          }
        }
        setAvatars(newAvatars);
      } catch (error) {
        console.error('아바타 생성 실패:', error);
        // 실패 시 빈 상태로 설정하여 무한 로딩 방지
        setAvatars({});
      }
    };

    // 중복 실행 방지
    if (Object.keys(avatars).length === 0) {
      generateAvatars();
    }
  }, []); // 의존성 배열을 빈 배열로 변경하여 한 번만 실행

  const getCategoryConfig = (label) => {
    switch (label) {
      case "코딩":
        return { 
          color: "#ef4444", // red-500
          icon: CodeBracketIcon 
        };
      case "디자인":
        return { 
          color: "#eab308", // yellow-500
          icon: PaintBrushIcon 
        };
      case "영상편집":
        return { 
          color: "#8b5cf6", // violet-500
          icon: VideoCameraIcon 
        };
      default:
        return { 
          color: COLORS.GRAY_500, 
          icon: PencilIcon 
        };
    }
  };

  return (
    <section className="space-y-6 mb-21">
      <div className="flex items-center justify-between mb-7">
        <h2 className="font-bold text-2xl">{title}</h2>
        <button
          onClick={handleWriteClick}
          className="p-2 rounded-full transition-colors"
          style={{ backgroundColor: "transparent" }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = COLORS.GRAY_100)
          }
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <PencilIcon className="w-5 h-5" style={{ color: COLORS.GRAY_600 }} />
        </button>
      </div>

      {rows.map((r) => {
        const { color, icon: IconComponent } = getCategoryConfig(r.label);
        
        return (
          <div key={r.label} className="mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3 border-2"
              style={{ 
                borderColor: color,
                backgroundColor: 'transparent'
              }}
            >
              <IconComponent 
                className="w-5 h-5"
                style={{ color: color }}
              />
              <p
                className="font-bold text-1.5xl"
                style={{ color: color }}
              >
                {r.label}
              </p>
            </div>
            <div
              className="flex gap-4 justify-between"
            >
            {Array.from({ length: r.count }).map((_, i) => {
              const avatarSeed = `${r.label}-${i}`;
              const avatarSrc = avatars[avatarSeed];
              
              return (
                <button
                  key={i}
                  onClick={() => handleCategoryClick(r.label)}
                  className="w-24 h-24 rounded-full cursor-pointer focus:outline-none focus:ring-2 overflow-hidden border-2"
                  style={{
                    backgroundColor: COLORS.WHITE,
                    borderColor: COLORS.GRAY_300,
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow = `0 0 0 2px ${COLORS.BLUE_600}`)
                  }
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                  aria-label={`${r.label} 스터디 채널 ${i + 1}번`}
                >
                  {avatarSrc ? (
                    <img 
                      src={avatarSrc} 
                      alt={`${r.label} 아바타 ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                      Loading...
                    </div>
                  )}
                </button>
              );
            })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
