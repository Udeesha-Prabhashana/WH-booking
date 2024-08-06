import "./payment.scss"
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {format} from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { Calendar } from 'react-date-range';
import { addDays } from 'date-fns';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Payment = () => {
 
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [openDate, setOpenDate] = useState(false);
    const location = useLocation();
    const { hotel_id, room_ids } = location.state || {};

    console.log("Hotel ID", hotel_id);
    console.log("Room IDs", room_ids);

    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const token = JSON.parse(localStorage.getItem("user")).res.jwt_token;
            const roomData = { hotel_id, room_id: room_ids[0] }; // Assuming room_ids is an array and you want the first room

            const res = await axios.post("http://127.0.0.1:5000/addRoomBooking", roomData, {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            });


            console.log(res.data);

            navigate("/");
        } catch (err) {
      console.error("Error booking the room:", err);
    }
    };

    const handleSelect = (date) => {
    setSelectedDate(date);
    console.log(date); // This will log the selected date
  };
    
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="pay">  
                <h2 className="lsTitleP">Payment</h2>
            </div>
            <div className="listContainerP">
                <div className="listWrapperP">
                    <div className="listSearchP">
                        <div className="lsItemP">
                            <label> Pay with </label>
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Card" />
                                    <FormControlLabel value="male" control={<Radio />} label="Bank Transfer" />
                                    <FormControlLabel value="other" control={<Radio />} label="Cryptocurrency" />
                                </RadioGroup>
                                </FormControl>
                        </div>
                        <div className="lsItemP">
                            <label> Cade number </label>
                            <input type="text" />
                        </div>
                        <div className="lsItemP">
                            <label> Add date </label>
                            <span onClick={() => setOpenDate(!openDate)}>
                                {format(selectedDate, "MM/dd/yyyy")}
                            </span>
                            {openDate && (
                                <Calendar
                                date={selectedDate}
                                onChange={handleSelect}
                                />
                            )}
                        </div>
                        <div className="lsItemP">
                            <label> CVV </label>
                            <input type="text" />
                            
                        </div>
                        <button onClick={handleClick}> Pay </button>  {/* reafetch again */}
                    </div>
                    <div className="listResultP">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment