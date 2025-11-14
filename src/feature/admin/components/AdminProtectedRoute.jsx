import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../stores/authStore.js";

/**
 * Admin 권한 보호 컴포넌트
 * 관리자가 아닌 경우 로그인 페이지로 리다이렉트
 */
export default function AdminProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    console.log("AdminProtectedRoute - Auth check:", {
      isAuthenticated,
      user,
      isAdmin: user ? isAdminUser(user) : false
    });

    // 로그인되지 않은 경우 admin 로그인 페이지로 이동
    if (!isAuthenticated) {
      console.log("Admin access denied: Not authenticated");
      navigate("/admin/login", { replace: true });
      return;
    }

    // 로그인은 되어있지만 admin 권한이 없는 경우
    if (user && !isAdminUser(user)) {
      console.log("Admin access denied: Not admin user", user);
      alert("관리자 권한이 필요합니다.");
      navigate("/admin/login", { replace: true });
      return;
    }
  }, [isAuthenticated, user, navigate]);

  // 로그아웃 시 즉시 리다이렉트 (추가 보안)
  useEffect(() => {
    if (!isAuthenticated || (user && !isAdminUser(user))) {
      const timer = setTimeout(() => {
        navigate("/admin/login", { replace: true });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, user, navigate]);

  // 관리자 권한 확인 함수
  const isAdminUser = (user) => {
    return (
      user?.role === 'ADMIN' ||
      user?.isAdmin === true ||
      user?.userRole === 'ADMIN' ||
      user?.authority === 'ADMIN'
    );
  };

  // 로딩 중이거나 인증되지 않은 경우 로딩 표시
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-500">인증 확인 중...</div>
      </div>
    );
  }

  // 사용자 정보가 없거나 관리자가 아닌 경우
  if (!user || !isAdminUser(user)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-red-500">관리자 권한이 필요합니다.</div>
      </div>
    );
  }

  // 모든 검증을 통과한 경우 children 렌더링
  return children;
}