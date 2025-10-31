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
const AdminPageLayout = lazy(()=> import("./feature/admin/AdminPageLayout.jsx"))

// Admin 페이지 컴포넌트들
const AdminHome = lazy(() => import("./feature/admin/Home/AdminHome.jsx"))
const ContentManagement = lazy(() => import("./feature/admin/ContentManagement/ContentManagement.jsx"))
const UserManagementLayout = lazy(() => import("./feature/admin/UserManagement/UserManagementLayout.jsx"))
const NoticeBannerManagement = lazy(() => import("./feature/admin/NoticeBanner/NoticeBannerManagement.jsx"))
const SettingManagement = lazy(() => import("./feature/admin/settingManagement/SettingManagement.jsx"))
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
      { path: "/projects", element: <Suspense fallback={<LoadingFallback />}><ProjectsPage /></Suspense> },
      { path: "/project/:projectId", element: <Suspense fallback={<LoadingFallback />}><ProjectPageLayout /></Suspense> },
      { path: "/write", element: <Suspense fallback={<LoadingFallback />}><WritePageLayout /></Suspense> },
      { path: "/write/:id", element: <Suspense fallback={<LoadingFallback />}><WritePageLayout /></Suspense> },
      { path: "/edit/:id", element: <Suspense fallback={<LoadingFallback />}><WritePageLayout /></Suspense> },
      { path: "/profile", element: <Suspense fallback={<LoadingFallback />}><MyProfileLayout /></Suspense> },
      {
        path: "/admin",
        element: <Suspense fallback={<LoadingFallback />}><AdminPageLayout /></Suspense>,
        errorElement: <ErrorBoundary />,
        children: [
          { index: true, element: <Navigate to="/admin/home" replace /> },
          { path: "home", element: <Suspense fallback={<LoadingFallback />}><AdminHome /></Suspense> },
          { path: "content", element: <Suspense fallback={<LoadingFallback />}><ContentManagement /></Suspense> },
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
