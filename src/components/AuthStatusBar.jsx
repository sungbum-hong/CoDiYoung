"use client";

import { useAuthState } from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import UserProfile from "./UserProfile";
import LoginButton from "./LoginButton";

export default function AuthStatusBar() {
  const { isAuthenticated } = useAuthState();
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/signin");
  };

  return (
      <nav className="flex items-center">
        {isAuthenticated ? (
          <UserProfile />
        ) : (
          <LoginButton onLoginClick={handleLoginClick} />
        )}
      </nav>
  );
}
