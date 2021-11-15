import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { name, time, space } = booking;
    return (<>
        <Grid sx={{ mb: 5 }} item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ py: 5 }}>
                <Typography sx={{ color: "info.main", fontWeight: 600 }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" gutterBottom display="block">
                    {space} SPACES AVAILABLE
                </Typography>
                <Button onClick={handleOpen} variant="contained">Book Appointment</Button>
            </Paper>
        </Grid>

        <BookingModal
            date={date}
            booking={booking}
            open={open}
            handleClose={handleClose}
        ></BookingModal>

    </>


    );
};

export default Booking;