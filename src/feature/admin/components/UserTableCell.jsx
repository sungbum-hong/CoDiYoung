/**
 * 사용자 테이블 셀 컴포넌트
 */
export default function UserTableCell({ user, columnIndex }) {
  const renderCellContent = () => {
    switch (columnIndex) {
      case 0: // 프로필 이미지
        return user.profileImage ? (
          <img
            src={user.profileImage}
            alt={user.name}
            className="w-8 h-8 rounded-full mx-auto object-cover"
          />
        ) : (
          <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto flex items-center justify-center">
            <span className="text-xs font-semibold text-gray-600">
              {user.name?.charAt(0) || '?'}
            </span>
          </div>
        );

      case 1: // 이름
        return (
          <span className="font-medium text-gray-900 text-sm">{user.name}</span>
        );

      case 2: // 스터디 참여 수
        return <span className="text-sm">{user.studyCount || 0}</span>;

      case 3: // 프로젝트 참여 수
        return <span className="text-sm">{user.projectCount || 0}</span>;

      case 4: // 오프라인 참여 수
        return <span className="text-sm">{user.offlineCount || 0}</span>;

      default:
        return null;
    }
  };

  return (
    <div className="h-12 px-2 text-center text-sm text-gray-500 flex items-center justify-center border-b border-gray-100 last:border-b-0">
      {renderCellContent()}
    </div>
  );
}