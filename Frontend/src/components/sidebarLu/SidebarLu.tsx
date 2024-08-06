import React, { useContext } from "react";
import "./sidebarLu.scss";
import DashboardIcon from "@mui/icons-material/Dashboard"; // SvgIcon components. It depends on @mui/material, which requires Emotion packages
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";

const SidebarLu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="SidebarLu">
      <div className="topLu">
        <Link to="/userloginhome" style={{ textDecoration: "none" }}>
          <span className="logoLu">Care Flow</span>
        </Link>
      </div>
      <hr /> {/* hr use to get line */}
      <div className="centerLu">
        <ul>
          <p className="titleLu">MAIN</p>
          <Link to="/userloginhome" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="iconLu" />
              <span> Home</span>
            </li>
          </Link>
          <p className="titleLu">LIST</p>
          <Link to="/channeling" style={{ textDecoration: "none" }}>
            <li>
              <Person2OutlinedIcon className="iconLu" />
              <span> New Booking </span>
            </li>
          </Link>
          <Link to="/appointments/" style={{ textDecoration: "none" }}>
            <li>
              <Person2OutlinedIcon className="iconLu" />
              <span> Appointment </span>
            </li>
          </Link>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <Person2OutlinedIcon className="iconLu" />
              <span> Doctors </span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="iconLu" />
              <span> Chat with Cura </span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="iconLu" />
              <span> Medical History</span>
            </li>
          </Link>
          <p className="titleLu">USEFUL</p>
          <li>
            <NotificationsNoneIcon className="iconLu" />
            <span> Notification</span>
          </li>
          <li>
            <InsertChartIcon className="iconLu" />
            <span> Stats</span>
          </li>
          <p className="titleLu">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="iconLu" />
            <span> System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="iconLu" />
            <span> Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="iconLu" />
            <span> Setting</span>
          </li>
          <p className="titleLu">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="iconLu" />
            <span> Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="iconLu" />
            <span onClick={() => navigate("/login")}> Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarLu;
