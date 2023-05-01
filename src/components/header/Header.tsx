import { Link } from "react-router-dom";
import { useIsLogin } from "../../hooks/useIsLogin";
import LoginHeader from "./LoginHeader";
import LogoutHeader from "./LogoutHeader";

const Header = () => {
  const { isLogin } = useIsLogin();

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

          {isLogin ? <LoginHeader /> : <LogoutHeader />}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
