import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>

            <Grid item xs={12} sm={6} md={4}>

                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h4" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button variant="contained" onClick={handleBookingOpen} href="#contained-buttons"
                        sx={{ backgroundecolor: 'info.main', fontWeight: 600 }}>BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
            ></BookingModal>

        </>
    );
};

export default Booking;