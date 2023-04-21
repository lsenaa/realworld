import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useGetUser } from "../../hooks/useGetUser";

const Header = () => {
  const { isLogin } = useContext(UserContext);
  const { userData } = useGetUser();
  console.log(userData);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/editor">New Article</Link>
          </li>
          <li className="nav-item">
            <Link to="/settings">Settings</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Sign in</Link>
          </li>
          <li className="nav-item">
            <Link to="/register">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
