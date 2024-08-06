import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from "dayjs";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./appointments.scss";

const Appointments = () => {
    const [alignment, setAlignment] = useState('upcoming');
    const [appointments, setAppointments] = useState([]);
    const [selectedDate, setSelectedDate] = useState(dayjs());

    const theme = createTheme({
        palette: {
            primary: {
                main: '#855CDD',
            },
            secondary: {
                main: '#FFA07A',
            },
        },
    });

    const fetchAppointments = async () => {
        
        const token = JSON.parse(localStorage.getItem("user")).res.jwt_token;

        try {
            const response = await fetch("http://127.0.0.1:5000/getBookingsByCustomer", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();
            console.log("Appointments:", data);
            setAppointments(data);
        } catch (error) {
            console.error("Error fetching appointments:", error);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);


    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    const handleDelete = async (bookingId, roomId) => {
    try {

        const response = await fetch("http://127.0.0.1:5000/deleteBooking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ booking_id: bookingId, room_id: roomId })
        });

        if (response.ok) {
            // If the deletion was successful, fetch the appointments again to update the state
            fetchAppointments();
        } else {
            console.error("Failed to delete the booking");
        }
    } catch (error) {
        console.error("Error deleting booking:", error);
    }
};


    const getCards = () => {
    return appointments.map((appointment, index) => (
        <Box key={index} sx={{ mb: 2 }}>
            <Card variant="outlined" sx={{ display: 'flex', border: '1px solid #855CDD' }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            color: 'var(--Normal, var(--Normal-Normal, #855CDD))',
                            fontSize: '25px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: '20px',
                        }}
                    >
                        {appointment.hotel_title}
                    </Typography>
                    <Typography
                        sx={{
                            mb: 1.5,
                            color: '#000',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: '20px',
                            paddingTop: '8px',
                        }}
                    >
                        {appointment.hotel_city}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '300',
                            lineHeight: '20px',
                        }}
                    >
                        Room Number: {appointment.room_number}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mr: 2 }}>
                    <Button
                        variant="outlined"
                        sx={{
                            width: '138px',
                            height: '38px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '11px',
                            border: '1px solid var(--normal-hover, #5F2BCF)',
                            whiteSpace: 'nowrap',
                            color: '#855CDD',
                            textTransform: 'none',
                        }}
                        onClick={() => handleDelete(appointment.booking_id, appointment.room_id)}
                    >
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Box>
    ));
};


    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="appointments">
                <div className="appointmentsContainer">
                    <div className="mainContent">
                        View Booking
                        <div className="subContent">
                            View Details of your Bookings
                        </div>
                        <ThemeProvider theme={theme}>
                            <Grid container spacing={3} alignItems="center" sx={{ mb: 2 }}>
                                <Grid item>
                                    <ToggleButtonGroup
                                        color="primary"
                                        value={alignment}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label="Appointments"
                                        sx={{
                                            '& .MuiToggleButton-root': {
                                                width: '153px',
                                                height: '42px',
                                                borderRadius: '9px',
                                                border: '1px solid #855CDD',
                                                fontSize: '18px',
                                                mr: 2,
                                                textTransform: 'none',
                                                '&:hover': {
                                                    background: '#855CDD',
                                                    color: 'white',
                                                },
                                                '&.Mui-selected': {
                                                    background: '#855CDD',
                                                    color: 'white',
                                                    border: '1px solid #855CDD',
                                                },
                                            }
                                        }}
                                    >
                                        <ToggleButton value="upcoming">Ongoing</ToggleButton>
                                        <ToggleButton value="completed">Completed</ToggleButton>
                                    </ToggleButtonGroup>
                                </Grid>
                                <Grid item xs />
                                <Grid item>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DesktopDatePicker
                                            value={selectedDate}
                                            onChange={(newDate) => setSelectedDate(newDate)}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                            </Grid>
                        </ThemeProvider>

                        <div className="cardsContainer">
                            {getCards()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointments;
