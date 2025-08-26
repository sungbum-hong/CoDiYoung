import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Suspense, lazy } from "react"
import { AuthProvider } from "./contexts/AuthContext.jsx"
import AppLayout from "./layout/AppLayout.jsx"
import HomePage from "./feature/MainHome/HomePage.jsx"
import LoadingFallback from "./components/LoadingFallback.jsx"

// Lazy loaded components
const SignInPage = lazy(() => import("./feature/Auth/SignInPage.jsx"))
const FindPassword = lazy(() => import("./feature/SignIn/FindPassword.jsx"))
const ResetPassword = lazy(() => import("./feature/SignIn/ResetPassword.jsx"))
const SuccessResetPassword = lazy(() => import("./feature/SignIn/SuccessResetPassword.jsx"))
const StudyChannelPage = lazy(() => import("./feature/StudyChannel/StudyChannelPage.jsx"))
const ProjectPageLayout = lazy(() => import("./feature/ProjectPage/ProjectPageLayout.jsx"))
const WritePageLayout = lazy(() => import("./feature/WritePage/WritePageLayout.jsx"))
const WriteForm = lazy(() => import("./feature/WritePage/WriteForm.jsx"))
const MyProfileLayout = lazy(() => import("./feature/MyProfile/MyProfileLayout.jsx"))

const router = createBrowserRouter([
  { path: "/", element: <AppLayout />, children: [
      { index: true, element: <HomePage /> },
      { path: "/signin", element: <Suspense fallback={<LoadingFallback />}><SignInPage /></Suspense> },
      { path: "/findpassword", element: <Suspense fallback={<LoadingFallback />}><FindPassword /></Suspense> },
      { path: "/resetpassword", element: <Suspense fallback={<LoadingFallback />}><ResetPassword /></Suspense> },
      { path: "/successresetpassword", element: <Suspense fallback={<LoadingFallback />}><SuccessResetPassword /></Suspense> },
      { path: "/study/:category", element: <Suspense fallback={<LoadingFallback />}><StudyChannelPage /></Suspense> },
      { path: "/project/:projectId", element: <Suspense fallback={<LoadingFallback />}><ProjectPageLayout /></Suspense> },
      { path: "/write", element: <Suspense fallback={<LoadingFallback />}><WritePageLayout><WriteForm /></WritePageLayout></Suspense> },
      { path: "/write/:id", element: <Suspense fallback={<LoadingFallback />}><WritePageLayout><WriteForm /></WritePageLayout></Suspense> },
      { path: "/profile", element: <Suspense fallback={<LoadingFallback />}><MyProfileLayout /></Suspense> },
  ]},
])

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
