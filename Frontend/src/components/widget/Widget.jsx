import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
    let data;

    //temporary
    const diff = 20;

    switch (type) {
        case "hotels":
            data = {
                title: "Hotels",
                isMoney: false,
                icon: <PersonOutlinedIcon className="icon"
                    style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }}
                />,
                amount: 35,
            };
            break;
        case "order":
            data = {
                title: "BOOKINGS",
                isMoney: false,
                icon: <ShoppingCartOutlinedIcon className="icon"
                style={{
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                    color: "goldenrod",
                    }}
                />,
                amount: 16,
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: false,
                icon: <MonetizationOnOutlinedIcon className="icon"
                    style={{
                        backgroundColor: "rgba(0, 128, 0, 0.2)",
                        color: "green"
                    }}
                />,
                amount: " 3520 $" ,
            };
            break;
        case "balance":
            data = {
                title: "Rooms",
                isMoney: false,
                icon: <AccountBalanceWalletOutlinedIcon className="icon"
                    style={{
                        backgroundColor: "rgba(128, 0, 128, 0.2)",
                        color: "purple",
                    }}
                />,
                amount: 1240,
            };
            break;
        default:
            break;
        
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title"> {data.title} </span>
                <span className="counter">{data.isMoney && "$"} { data.amount}</span>
                <span className="link">{data.link} </span>
            </div>
            <div className="right">
                <div className="percentage positive">

                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget