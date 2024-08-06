import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  function setCookie(name, value, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  const handleLoginClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("http://127.0.0.1:5000/Login", credentials);
      setCookie("JWT", "Bearer " + res.data.res.jwt_token, 5);
      console.log("res.data.details", res.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

      if (res.data.res.user_role === 1) {
        navigate("/");
      } else if (res.data.res.user_role === 2) {
        navigate("/adminhome");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="login">
      <div className="lContainer">
        <h3 className="headerl">LOGIN</h3>
        <span className="title">USERNAME</span>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleInputChange}
          className="lInput"
        />
        <span className="title">PASSWORD</span>
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleInputChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleLoginClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
      <button onClick={handleRegisterClick} className="lButtonSP">
        Sign Up
      </button>
    </div>
  );
};

export default LoginPage;
