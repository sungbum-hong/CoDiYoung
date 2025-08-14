import { useState } from "react";
import Button from "../../ui/Button.jsx";

export default function ProfileImageSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("u1");

  const handleToggle = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className={`border border-purple-400 rounded-lg transition-all duration-300 ${
      isEditing ? 'p-4' : 'p-3'
    }`}>
      {isEditing ? (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 flex-1"
          />
          <Button variant="secondary" onClick={() => {}} className="h-8 text-xs">
            이미지 찾기
          </Button>
          <Button variant="secondary" onClick={handleToggle} className="h-8 text-xs">
            변경 완료
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            <span className="text-sm">{username}</span>
          </div>
          <Button variant="secondary" onClick={handleToggle} className="h-8 text-xs">
            수정
          </Button>
        </div>
      )}
    </div>
  );
}