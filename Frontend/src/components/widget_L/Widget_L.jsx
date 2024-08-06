import React, { useState } from "react";
import "./widget_l.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Rating from '@mui/material/Rating';

const Widget_L = ({ type }) => {
  const [value, setValue] = useState(2);
  let data;

  switch (type) {
    case "user":
      data = {
        title: "Hotel Sunshine",
        isMoney: false,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpODSSTfvu45C5519rXFwUUz4Jc7JH6zngyQ&s",
        link: "Book Now",
        description: "A luxurious hotel with sea view.",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Mountain Retreat",
        isMoney: false,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpODSSTfvu45C5519rXFwUUz4Jc7JH6zngyQ&s",
        link: "Book Now",
        description: "A serene retreat in the mountains.",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "City Inn",
        isMoney: false,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpODSSTfvu45C5519rXFwUUz4Jc7JH6zngyQ&s",
        link: "Book Now",
        description: "A modern hotel in the city center.",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(0, 128, 0, 0.2)",
              color: "green",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "Beach Resort",
        isMoney: false,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpODSSTfvu45C5519rXFwUUz4Jc7JH6zngyQ&s",
        link: "Book Now",
        description: "A beautiful resort by the beach.",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="widgetL">
      <div className="leftL">
        <span className="titleL">{data.title}</span>
        <span className="counterL">
          <img src={data.photo} alt="" className="siImg" />
        </span>
        <Rating className="rating" name="read-only" value={value} readOnly />
        <span className="descriptionL">{data.description}</span>
      </div>
      <div className="rightL">
        <div className="percentage positive">
          {/* <KeyboardArrowUpIcon /> */}
          {/* {diff} % */}
        </div>
        {/* {data.icon} */}
        <span className="linkL">{data.link}</span>
      </div>
    </div>
  );
};

export default Widget_L;
