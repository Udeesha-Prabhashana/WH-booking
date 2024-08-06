import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useContext } from "react";

const Navbar = () => {


    return (
        <div className="navbar2">
            <div className="wrapper2">
                <div className="items2">
                    <div className="item2">
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className="counter">6</div>
                    </div>
                    <div className="item2">
                        <ChatBubbleOutlineOutlinedIcon className="icon" />
                        <div className="counter">3</div>
                    </div>                    
                    <div className="item2">
                       <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s"
                        alt=""
                        className="avatar"
                       /> 
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar