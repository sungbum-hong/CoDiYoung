import { useAuthState } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";
import LoginButton from "./LoginButton";

export default function AuthStatusBar() {
  const { isAuthenticated } = useAuthState();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/signin");
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
