import { useNavigate } from "react-router-dom";
import { useIsLogin } from "../../hooks/useIsLogin";

interface IProfileButtonProps {
  username: string;
}

const ProfileButton = ({ username }: IProfileButtonProps) => {
  const navigate = useNavigate();
  const { isLogin } = useIsLogin();

  return (
    <button
      className="btn btn-sm btn-outline-secondary action-btn"
      onClick={async () => navigate(isLogin ? `/settings` : `/register`)}
    >
      <i className={isLogin ? "ion-gear-a" : "ion-plus-round"}></i>
      &nbsp;
      {isLogin ? " Edit Profile Settings" : `Follow ${username}`}
    </button>
  );
};

export default ProfileButton;
