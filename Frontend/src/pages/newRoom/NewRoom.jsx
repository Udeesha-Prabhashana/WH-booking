import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbarA/NavbarA";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewRoom = ({ inputs, title }) => {
    const [info, setInfo] = useState({});
    const [hotelId, setHotelId] = useState(undefined);
    const navigate = useNavigate();

    const { data, loading, error } = useFetch("/hotels");

    const handleChange = (e) => {
        setInfo(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        const dataToSend = {
            hotel_id: hotelId,
            ...info,
        };

        console.log("dataToSend", dataToSend);
        try {
            const response = await axios.post(`http://127.0.0.1:5000/addroom`, dataToSend);
            console.log('Response:', response.data);
            navigate("/rooms");
        } catch (err) {
            console.log('Error:', err.response ? err.response.data : err.message);
        }
    };

    const handleHotelChange = (e) => {
        const selectedHotelId = e.target.value;
        setHotelId(selectedHotelId);
        console.log('Selected Hotel ID:', selectedHotelId);
    };
    

    return (
        <div className="new"> 
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form>
                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input 
                                        onChange={handleChange} 
                                        id={input.id} 
                                        type={input.type} 
                                        placeholder={input.placeholder} 
                                    />
                                </div>
                            ))}
                            <div className="formInput">
                                <div className="hotelselect">
                                <label>Choose a hotel</label>
                                <select className="hotelId" onChange={handleHotelChange}>
                                    {loading ? "loading" : data && data.map(hotel => (
                                        <option className="optionht" key={hotel.hotel_id} value={hotel.hotel_id}>
                                            {hotel.title}
                                        </option>
                                    ))}
                                    </select>
                                    </div>
                            </div>
                            <button onClick={handleClick}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewRoom;
