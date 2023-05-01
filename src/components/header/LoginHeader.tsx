import { Link } from "react-router-dom";
import { useUserQuery } from "../../hooks/queries/useQueryUser";

const LoginHeader = () => {
  const { userData } = useUserQuery();

  return (
    <>
      <li className="nav-item">
        <Link to="/editor" className="nav-link">
          <i className="ion-compose">&nbsp;</i> New Article
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/settings" className="nav-link">
          <i className="ion-gear-a">&nbsp;</i>
          Settings
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={`/profile/${userData?.data.user.username}`}
          className="nav-link"
          state={userData?.data.username}
        >
          <img
            className="user-pic"
            src={userData?.data.user.image}
            alt="profile"
          />
          {userData?.data.user.username}
        </Link>
      </li>
    </>
  );
};

export default LoginHeader;
