import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"; // Import AuthContext

const Sidebar = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext); // Get dispatch function from AuthContext

    const handleLogout = () => {
        // Clear token from local storage
        localStorage.removeItem("user");

        // Dispatch logout action to clear user state
        dispatch({ type: "LOGOUT" });

        // Navigate to login page
        navigate("/login");
    };

    return (
        <div className="Sidebar">
            <div className="top">
                <Link to="/adminhome" style={{ textDecoration: "none" }}>
                    <span className="logo">WH booking</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <Link to="/adminhome" style={{ textDecoration: "none"}}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span> Home</span>
                        </li>
                    </Link>    
                    <Link to="/Bookings" style={{ textDecoration: "none"}}>
                        <li>
                            <Person2OutlinedIcon className="icon" />
                            <span> Bookings </span>
                        </li>
                    </Link>
                    <Link to="/hotels" style={{ textDecoration: "none" }}>    
                        <li>
                            <StoreIcon className="icon" />
                            <span> Hotels</span>
                        </li>                
                    </Link>
                    <Link to="/rooms" style={{ textDecoration: "none" }}>
                        <li>
                            <CreditCardIcon className="icon" />
                            <span> Rooms</span>
                        </li>
                    </Link>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span> Notification</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span> Setting</span>
                    </li>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span> Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span onClick={handleLogout}> Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
