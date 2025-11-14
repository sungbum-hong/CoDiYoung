import { Suspense, lazy } from "react";
import { Outlet, useLocation } from "react-router-dom";
import LoadingFallback from "../../components/LoadingFallback.jsx";
import AdminProtectedRoute from "./components/AdminProtectedRoute.jsx";

// Lazy load sidebar component
const AdminSidebar = lazy(() => import("./components/AdminSidebar"));

export default function AdminPageLayout() {
  const location = useLocation();

  return (
    <AdminProtectedRoute>
      <div className="flex min-h-screen">
        <Suspense fallback={<div className="w-48 bg-gray-100 animate-pulse"></div>}>
          <AdminSidebar currentPath={location.pathname} />
        </Suspense>
        <main className="flex-1 ml-0 sm:ml-48 transition-all duration-300">
          <Suspense fallback={<LoadingFallback />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </AdminProtectedRoute>
  );
}
