import { useNavigate } from "react-router-dom";
import { SIGNIN_CONSTANTS } from "./constants";
import { authStyles } from "./styles/authStyles";
import Button from "../../ui/Button.jsx";

export default function SuccessResetPassword() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate(SIGNIN_CONSTANTS.ROUTES.SIGN_IN);
  };

  return (
    <div className={authStyles.layout.centerVertical} role="main" aria-labelledby="success-heading">
      <h2 id="success-heading" className={`${authStyles.typography.heading} text-gray-900`}>
        {SIGNIN_CONSTANTS.MESSAGES.PASSWORD_RESET_SUCCESS}
      </h2>
      
      <Button 
        variant="primary"
        onClick={handleConfirm}
        className={authStyles.button.fixedWidth}
      >
        {SIGNIN_CONSTANTS.MESSAGES.CONFIRM}
      </Button>
    </div>
  );
}