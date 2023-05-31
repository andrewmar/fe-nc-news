import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

export const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="navigation">
      <Link to="/articles" className="nav-link">
        Articles
      </Link>
      <Link to="/topics" className="nav-link">
        Topics
      </Link>
      <p className="user-info">
        Logged in: {user.username ? user.username : "Guest"}
      </p>
    </nav>
  );
};
