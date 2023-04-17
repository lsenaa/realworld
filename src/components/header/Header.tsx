import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          conduit
        </a>
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
