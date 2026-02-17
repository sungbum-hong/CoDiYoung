import { useRouter } from "next/navigation";
import { SIGNIN_CONSTANTS } from "./constants";
import { authStyles } from "./styles/authStyles";
import Button from "../../shared/ui/Button";

export default function SuccessResetPassword() {
  const router = useRouter();

  const handleLogin = () => {
    router.push(SIGNIN_CONSTANTS.ROUTES.SIGN_IN);
  };

  return (
    <div className={authStyles.layout.centerVertical} role="main" aria-labelledby="success-heading">
      <h2 id="success-heading" className={`${authStyles.typography.heading} text-gray-900`}>
        {SIGNIN_CONSTANTS.MESSAGES.PASSWORD_RESET_SUCCESS}
      </h2>
      
      <Button 
        variant="primary"
        onClick={handleLogin}
        className={authStyles.button.fixedWidth}
      >
        {SIGNIN_CONSTANTS.MESSAGES.CONFIRM}
      </Button>
    </div>
  );
}