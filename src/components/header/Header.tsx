import { Link } from "react-router-dom";
import { useGetUser } from "../../hooks/useGetUser";

const Header = () => {
  const { userData } = useGetUser();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          {userData ? (
            <>
              <li className="nav-item">
                <Link to="/editor" className="nav-link">
                  New Article
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/settings" className="nav-link">
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={`/profile/${userData.data.user.username}`}
                  className="nav-link"
                  // state={userData.username}
                >
                  <img
                    className="user-pic"
                    src={userData.data.user.image}
                    alt="profile"
                  />
                  {userData.data.user.username}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
