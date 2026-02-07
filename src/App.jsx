import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { Suspense, lazy, useEffect } from "react"
import useAuthStore from "./stores/authStore.js"
import QueryProvider from "./providers/QueryProvider.jsx"
import AppLayout from "./layout/AppLayout.jsx"
import HomePage from "./feature/MainHome/HomePage.jsx"
import LoadingFallback from "./components/LoadingFallback.jsx"
import TokenExpirationHandler from "./components/TokenExpirationHandler.jsx"
import ErrorBoundary from "./components/ErrorBoundary.jsx"
//메인
// Lazy loaded components
const SignInPage = lazy(() => import("./feature/SignIn/SignInPage.jsx"))
const FindPassword = lazy(() => import("./feature/SignIn/FindPassword.jsx"))
const ResetPassword = lazy(() => import("./feature/SignIn/ResetPassword.jsx"))
const SuccessResetPassword = lazy(() => import("./feature/SignIn/SuccessResetPassword.jsx"))
const StudyChannelPage = lazy(() => import("./feature/StudyChannel/StudyChannelPage.jsx"))
const ProjectPageLayout = lazy(() => import("./feature/ProjectPage/ProjectPageLayout.jsx"))
const ProjectsPage = lazy(() => import("./feature/ProjectsPage/ProjectsPage.jsx"))
const WritePageLayout = lazy(() => import("./feature/WritePage/WritePageLayout.jsx"))
const MyProfileLayout = lazy(() => import("./feature/MyProfile/MyProfileLayout.jsx"))
const StudyMembersPage = lazy(() => import("./feature/MainHome/StudyMembersPage.jsx"))
const AdminPageLayout = lazy(() => import("./feature/admin/AdminPageLayout.jsx"))

// Admin 페이지 컴포넌트들
const AdminLoginPage = lazy(() => import("./feature/admin/Auth/AdminLoginPage.jsx"))
const AdminHome = lazy(() => import("./feature/admin/Home/AdminHome.jsx"))
const ContentManagement = lazy(() => import("./feature/admin/ContentManagement/ContentManagement.jsx"))
const ProjectListPage = lazy(() => import("./feature/admin/ContentManagement/ProjectListPage.jsx"))
const StudyListPage = lazy(() => import("./feature/admin/ContentManagement/StudyListPage.jsx"))
const UserManagementLayout = lazy(() => import("./feature/admin/UserManagement/UserManagementLayout.jsx"))
const NoticeBannerManagement = lazy(() => import("./feature/admin/NoticeBanner/NoticeBannerManagement.jsx"))
const SettingManagement = lazy(() => import("./feature/admin/settingManagement/SettingManagement.jsx"))

// AboutPages 컴포넌트들
const TermsPage = lazy(() => import("./feature/AboutPages/TermsPage.jsx"))
const PrivacyPage = lazy(() => import("./feature/AboutPages/PrivacyPage.jsx"))
const ApplyPage = lazy(() => import("./feature/AboutPages/ApplyPage.jsx"))
const AdsPage = lazy(() => import("./feature/AboutPages/AdsPage.jsx"))
const MadeUsPage = lazy(() => import("./feature/AboutPages/MadeUsPage.jsx"))
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/signin", element: <Suspense fallback={<LoadingFallback />}><SignInPage /></Suspense> },
      { path: "/findpassword", element: <Suspense fallback={<LoadingFallback />}><FindPassword /></Suspense> },
      { path: "/resetpassword", element: <Suspense fallback={<LoadingFallback />}><ResetPassword /></Suspense> },
      { path: "/successresetpassword", element: <Suspense fallback={<LoadingFallback />}><SuccessResetPassword /></Suspense> },
      { path: "/study/:userId", element: <Suspense fallback={<LoadingFallback />}><StudyChannelPage /></Suspense> },
      { path: "/studies", element: <Suspense fallback={<LoadingFallback />}><StudyMembersPage /></Suspense> },
      { path: "/projects", element: <Suspense fallback={<LoadingFallback />}><ProjectsPage /></Suspense> },
      { path: "/project/:projectId", element: <Suspense fallback={<LoadingFallback />}><ProjectPageLayout /></Suspense> },
      { path: "/write", element: <Suspense fallback={<LoadingFallback />}><WritePageLayout /></Suspense> },
      { path: "/write/:id", element: <Suspense fallback={<LoadingFallback />}><WritePageLayout /></Suspense> },
      { path: "/edit/:id", element: <Suspense fallback={<LoadingFallback />}><WritePageLayout /></Suspense> },
      { path: "/profile", element: <Suspense fallback={<LoadingFallback />}><MyProfileLayout /></Suspense> },
      { path: "/terms", element: <Suspense fallback={<LoadingFallback />}><TermsPage /></Suspense> },
      { path: "/privacy", element: <Suspense fallback={<LoadingFallback />}><PrivacyPage /></Suspense> },
      { path: "/apply", element: <Suspense fallback={<LoadingFallback />}><ApplyPage /></Suspense> },
      { path: "/ads", element: <Suspense fallback={<LoadingFallback />}><AdsPage /></Suspense> },
      { path: "/about/made-us", element: <Suspense fallback={<LoadingFallback />}><MadeUsPage /></Suspense> },
      // Admin 로그인 페이지
      { path: "/admin/login", element: <Suspense fallback={<LoadingFallback />}><AdminLoginPage /></Suspense> },
      // Admin 대시보드
      {
        path: "/admin",
        element: <Suspense fallback={<LoadingFallback />}><AdminPageLayout /></Suspense>,
        errorElement: <ErrorBoundary />,
        children: [
          { index: true, element: <Navigate to="/admin/login" replace /> },
          { path: "home", element: <Suspense fallback={<LoadingFallback />}><AdminHome /></Suspense> },
          { path: "content", element: <Suspense fallback={<LoadingFallback />}><ContentManagement /></Suspense> },
          { path: "content/projects", element: <Suspense fallback={<LoadingFallback />}><ProjectListPage /></Suspense> },
          { path: "content/studies", element: <Suspense fallback={<LoadingFallback />}><StudyListPage /></Suspense> },
          { path: "users", element: <Suspense fallback={<LoadingFallback />}><UserManagementLayout /></Suspense> },
          { path: "banner", element: <Suspense fallback={<LoadingFallback />}><NoticeBannerManagement /></Suspense> },
          { path: "settings", element: <Suspense fallback={<LoadingFallback />}><SettingManagement /></Suspense> },
        ]
      },
      // Catch-all route for 404s
      { path: "*", element: <ErrorBoundary /> }
    ]
  },
])

function AuthInitializer() {
  const initialize = useAuthStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return null;
}

export default function App() {
  return (
    <QueryProvider>
      <AuthInitializer />
      <TokenExpirationHandler />
      <RouterProvider router={router} />
    </QueryProvider>
  )
}
