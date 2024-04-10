import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Box, Button, Card, CardContent, Chip, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const HotelBooking = () => {
  const bookingDetails = JSON.parse(localStorage.getItem("selectedHotel"));
  const navigate = useNavigate();
  const handleBookingCancel = () => {
    alert("Booking Cancelled!");
    navigate("/home");
  };
  return (
    <Container maxWidth="sm" sx={{ marginTop: "2rem" }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom sx={{ textAlign: "center" }}>
            Booking Details
          </Typography>
          <Divider sx={{ marginY: "1rem" }} />

          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "1rem" }}>
            <Typography variant="h5" component="div">
              {bookingDetails.name}
            </Typography>
            <Chip icon={<LocationOnIcon />} label={bookingDetails.location} sx={{ marginY: "0.5rem" }} />
            <Chip icon={<StarRateIcon />} label={`${bookingDetails.rating} / 5`} color="warning" sx={{ marginBottom: "0.5rem" }} />
            <Chip icon={<AttachMoneyIcon />} label={`$${bookingDetails.price}`} color="success" />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <Button variant="contained" color="primary" onClick={handleBookingCancel}>
              Cancel
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default HotelBooking;
