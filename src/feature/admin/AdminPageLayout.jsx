import { useState, Suspense, lazy } from "react";

// Lazy load all components
const AdminSidebar = lazy(() => import("./components/Adminsidebar"));
const AdminHome = lazy(() => import("./Home/AdminHome"));
const UserManagementLayout = lazy(() => import("./UserManagement/UserManagementLayout"));
const ContentManagement = lazy(() => import("./ContentManagement/ContentManagement"));
const NoticeBannerManagement = lazy(() => import("./NoticeBanner/NoticeBannerManagement"));
const SettingManagement = lazy(() => import("./settingManagement/SettingManagement"));


export default function AdminPageLayout() {
  const [activeMenu, setActiveMenu] = useState("홈");

  const renderContent = () => {
    switch (activeMenu) {
      case "홈":
        return <AdminHome />;
      case "사용자 관리":
        return <UserManagementLayout />;
      case "콘텐츠 관리":
        return <ContentManagement />;
      case "공지/배너":
        return <NoticeBannerManagement />;
      case "설정":
        return <SettingManagement />;
      default:
        return <AdminHome />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Suspense fallback={<div className="w-48 bg-gray-100 animate-pulse"></div>}>
        <AdminSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </Suspense>
      <main className="flex-1 ml-0 sm:ml-48 transition-all duration-300">
        <Suspense fallback={
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-500">로딩 중...</div>
          </div>
        }>
          {renderContent()}
        </Suspense>
      </main>
    </div>
  );
}
