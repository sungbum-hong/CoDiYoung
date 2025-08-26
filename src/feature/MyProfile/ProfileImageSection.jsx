import { useState } from "react";
import Button from "../../ui/Button.jsx";

export default function ProfileImageSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("u1");

  const handleToggle = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div
      className={`border border-purple-400 rounded-lg transition-all duration-300 flex items-center p-6 ${
        isEditing ? "h-21" : "h-12"
      }`}
    >
      {isEditing ? (
        <div className="flex items-center gap-3 w-full">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 flex-1"
          />
          <Button variant="secondary" onClick={() => {}} className="h-8 text-xs">
            이미지 찾기
          </Button>
          <Button variant="secondary" onClick={handleToggle} className="h-8 text-xs">
            변경 완료
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          </div>
          <Button  variant="secondary"
                  onClick={handleToggle}
                  className="!h-8 !text-xs">
            수정
          </Button>
        </div>
      )}
    </div>
  );
}
0