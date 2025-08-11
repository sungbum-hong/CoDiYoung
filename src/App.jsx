import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layout/AppLayout.jsx"
import Home from "./pages/Home.jsx"
import SignIn from "./pages/SignIn.jsx"
import MyProfile from "./pages/MyProfile.jsx"

const router = createBrowserRouter([
  { path: "/", element: <AppLayout />, children: [
      { index: true, element: <Home /> },
      { path: "signin", element: <SignIn /> },
      { path: "profile", element: <MyProfile /> },
  ]},
])

export default function App() {
  return <RouterProvider router={router} />
}
