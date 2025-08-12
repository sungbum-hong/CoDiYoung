import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Suspense, lazy } from "react"
import { AuthProvider } from "./contexts/AuthContext.jsx"
import AppLayout from "./layout/AppLayout.jsx"
import Home from "./pages/Home.jsx"

// Lazy loaded components
const SignIn = lazy(() => import("./pages/SignIn.jsx"))
const FindPassword = lazy(() => import("./feature/SignIn/FindPassword.jsx"))
const ResetPassword = lazy(() => import("./feature/SignIn/ResetPassword.jsx"))
const SuccessResetPassword = lazy(() => import("./feature/SignIn/SuccessResetPassword.jsx"))
const StudyChannel = lazy(() => import("./pages/StudyChannel.jsx"))
const ProjectPage = lazy(() => import("./pages/ProjectPage.jsx"))

const router = createBrowserRouter([
  { path: "/", element: <AppLayout />, children: [
      { index: true, element: <Home /> },
      { path: "/signin", element: <Suspense fallback={<div className="flex justify-center items-center h-32">로딩 중...</div>}><SignIn /></Suspense> },
      { path: "/findpassword", element: <Suspense fallback={<div className="flex justify-center items-center h-32">로딩 중...</div>}><FindPassword /></Suspense> },
      { path: "/resetpassword", element: <Suspense fallback={<div className="flex justify-center items-center h-32">로딩 중...</div>}><ResetPassword /></Suspense> },
      { path: "/successresetpassword", element: <Suspense fallback={<div className="flex justify-center items-center h-32">로딩 중...</div>}><SuccessResetPassword /></Suspense> },
      { path: "/study/:category", element: <Suspense fallback={<div className="flex justify-center items-center h-32">로딩 중...</div>}><StudyChannel /></Suspense> },
      { path: "/project/:projectId", element: <Suspense fallback={<div className="flex justify-center items-center h-32">로딩 중...</div>}><ProjectPage /></Suspense> },
  ]},
])

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
