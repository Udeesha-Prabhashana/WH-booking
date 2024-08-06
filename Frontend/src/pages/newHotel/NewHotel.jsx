import "./newHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbarA/NavbarA";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const NewHotel = ({ inputs, title }) => {
    const [files, setFiles] = useState("");
    const [info, setInfo] = useState({});
    const [rooms, setRooms] = useState([]);

    const navigate = useNavigate();

    const predefinedRooms = [
        { _id: 1, title: "Standard room" },
        { _id: 2, title: "Double room" },
        { _id: 3, title: "Family room" },
        { _id: 4, title: "Executive suite" }
    ];

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSelect = (e) => {
        const value = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        setRooms(value);
    };

    const handleClick = async (e) => {
        console.log("handleclick run")
        e.preventDefault();
        try {
            const list = await Promise.all(
                Object.values(files).map(async (file) => {
                    const data = new FormData();
                    data.append("file", file);
                    data.append("upload_preset", "upload");
                    const uploadRes = await axios.post(
                        "https://api.cloudinary.com/v1_1/dromuhnud/image/upload",
                        data
                    );

                    const { url } = uploadRes.data;
                    return url;
                })
            );

            const newHotel = {
                ...info,
                rooms,
                photo: list,
            };

            const response = await fetch("http://127.0.0.1:5000/addhotel", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newHotel)
            });

            if (response.ok) {
                navigate("/hotels");
            } else {
                console.error("Failed to add the new Hotel");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="newH">
            <Sidebar />
            <div className="newContainerH">
                <Navbar />
                <div className="topH">
                    <h1>{title}</h1>
                </div>
                <div className="bottomH">
                    <div className="leftH">
                        <img
                            src={files
                                ? URL.createObjectURL(files[0])
                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                            alt=""
                        />
                    </div>
                    <div className="rightH">
                        <form>
                            <div className="formInputH">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    multiple
                                    onChange={(e) => setFiles(e.target.files)}
                                    style={{ display: "none" }}
                                />
                            </div>

                            {inputs.map((input) => (
                                <div className="formInputH" key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                        id={input.id}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        onChange={handleChange}
                                    />
                                </div>
                            ))}
                            <div className="formInputH">
                                <label>Featured</label>
                                <select id="featured" onChange={handleChange}>
                                    <option value={false}>No</option>
                                    <option value={true}>Yes</option>
                                </select>
                            </div>
                            <div className="selectRoomsH">
                                <label>Rooms</label>
                                <select id="rooms" multiple onChange={handleSelect}>
                                    {predefinedRooms.map((room) => (
                                        <option key={room._id} value={room._id}>
                                            {room.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button onClick={handleClick}>Add New Hotel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewHotel;
