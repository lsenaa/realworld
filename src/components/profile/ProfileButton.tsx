import { useNavigate } from "react-router-dom";
import { useUserQuery } from "../../hooks/queries/useQueryUser";

interface IProfileButtonProps {
  username: string;
}

const ProfileButton = (username: IProfileButtonProps) => {
  const navigate = useNavigate();
  const { userData } = useUserQuery();

  return (
    <button
      className="btn btn-sm btn-outline-secondary action-btn"
      onClick={async () => navigate(`/settings`)}
    >
      {/* <i
        className={
          username === userData?.data.user.username
            ? "ion-gear-a"
            : "ion-plus-round"
        }
      ></i>
      &nbsp;
      {username === userData?.data.user.username
        ? " Edit Profile Settings"
        : `Follow ${userData?.data.user.username}`} */}
    </button>
  );
};

export default ProfileButton;
