import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export const UserLogin = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setUser((currentUser) => {
      return {
        ...currentUser,
        username: "grumpy19",
        name: "Paul Grump",
        avatar_url:
          "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
      };
    });
    navigate("/articles");
  };
  return (
    <div className="user-login-container">
      <h2>Please choose a user</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
