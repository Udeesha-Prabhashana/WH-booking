import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const RegisterPage = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    email: undefined,
    name: undefined,
    contact_no: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    try {
      console.log("credentials", credentials);
      const res = await axios.post("http://127.0.0.1:5000/addCustomer", credentials);
      console.log("response", res.data.res);
      navigate("/login");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="regi">
      <div className="lContainerR">
        <h3 className="headerR">REGISTER</h3>
        <span>USERNAME</span>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleInputChange}
          className="lInputR"
        />
        <span>PASSWORD</span>
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleInputChange}
          className="lInputR"
        />
        <span>EMAIL</span>
        <input
          type="email"
          placeholder="Enter email"
          id="email"
          onChange={handleInputChange}
          className="lInputR"
        />
        <span>NAME</span>
        <input
          type="text"
          placeholder="Enter name"
          id="name"
          onChange={handleInputChange}
          className="lInputR"
        />
        <span>CONTACT NUMBER</span>
        <input
          type="tel"
          placeholder="Enter contact number"
          id="contact_no"
          onChange={handleInputChange}
          className="lInputR"
        />
        <button disabled={loading} onClick={handleRegisterClick} className="lButtonR">
          Register
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default RegisterPage;
