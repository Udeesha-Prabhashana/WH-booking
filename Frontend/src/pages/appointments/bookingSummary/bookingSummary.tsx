import React from 'react';
import SidebarLu from "../../../components/sidebarLu/SidebarLu";
import NavbarLu from "../../../components/navbarA/NavbarA";
import "../bookingSummary/bookingSummary.scss";
import { useParams } from 'react-router-dom';
import { Grid, Box } from '@mui/material';

const BookingSummary: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="appointments">
            <SidebarLu />
            <div className="appointmentsContainer">
                <NavbarLu />
                <div className="main">
                    Booking Summary
                    <div className="sub">
                        View and Confirm The Booking Details
                        <Box className="content">
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <div className="line">Doctor Name :</div>
                                    <div className="line">Date :</div>
                                    <div className="line">Appointment Number :</div>
                                    <div className="line">Time :</div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="line"><b>Dr. Ravindra Alahakoon</b></div>
                                    <div className="line"><b>2022/04/04</b></div>
                                    <div className="line"><b>23</b></div>
                                    <div className="line"><b>06:50</b></div>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingSummary;
