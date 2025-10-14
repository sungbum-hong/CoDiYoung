import { useState } from "react";
import AdminSidebar from "./components/Adminsidebar";
import AdminHome from "./Home/AdminHome";
import UserManagementLayout from "./UserManagement/UserManagementLayout";
import ContentManagement from "./ContentManagement/ContentManagement";
import NoticeBannerManagement from "./NoticeBanner/NoticeBannerManagement";
import SettingManagement from "./settingManagement/SettingManagement";

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
      <AdminSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <main className="flex-1 ml-0 sm:ml-48 transition-all duration-300">
        {renderContent()}
      </main>
    </div>
  );
}
