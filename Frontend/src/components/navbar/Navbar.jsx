import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear the user key-value pair from local storage
        localStorage.removeItem("user");

        // Dispatch a logout action to update the AuthContext
        dispatch({ type: "LOGOUT" });

        // Redirect to the login page
        navigate("/login");
    };

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">WH Booking</span>
                </Link>
                {user ? (
                    <div className="newTtem">
                        <button className="mybooking" onClick={() => navigate("/appoinment")}>My Booking</button>
                        <button className="navButton" onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div className="newTtem">
                        <button className="navButton" onClick={() => navigate("/register")}>Register</button>
                        <button className="navButton" onClick={() => navigate("/login")}>Login</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
