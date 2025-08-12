import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext.jsx"
import AppLayout from "./layout/AppLayout.jsx"
import Home from "./pages/Home.jsx"
import SignIn from "./pages/SignIn.jsx"
import FindPassword from "./feature/SignIn/FindPassword.jsx"
import ResetPassword from "./feature/SignIn/ResetPassword.jsx"
import SuccessResetPassword from "./feature/SignIn/SuccessResetPassword.jsx"
import StudyChannel from "./pages/StudyChannel.jsx"
import ProjectPage from "./pages/ProjectPage.jsx"

const router = createBrowserRouter([
  { path: "/", element: <AppLayout />, children: [
      { index: true, element: <Home /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/findpassword", element: <FindPassword /> },
      { path: "/resetpassword", element: <ResetPassword /> },
      { path: "/successresetpassword", element: <SuccessResetPassword /> },
      { path: "/study/:category", element: <StudyChannel /> },
      { path: "/project/:projectId", element: <ProjectPage /> },
  ]},
])

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
