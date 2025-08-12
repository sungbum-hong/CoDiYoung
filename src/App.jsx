import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext.jsx"
import AppLayout from "./layout/AppLayout.jsx"
import Home from "./pages/Home.jsx"
import SignIn from "./pages/SignIn.jsx"
import MyProfile from "./pages/MyProfile.jsx"
import StudyChannel from "./pages/StudyChannel.jsx"

const router = createBrowserRouter([
  { path: "/", element: <AppLayout />, children: [
      { index: true, element: <Home /> },
      { path: "signin", element: <SignIn /> },
      { path: "profile", element: <MyProfile /> },
      { path: "study/:category", element: <StudyChannel /> },
  ]},
])

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
