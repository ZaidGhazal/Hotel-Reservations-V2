import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const history = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const selectedHotel = JSON.parse(localStorage.getItem("selectedHotel"));

  const handleBackButtonClick = () => {
    history("/home");
  };

  const handlePaymentButtonClick = () => {
    // Implement your payment logic here
    // You can access payment details from cardNumber, expiryDate, cvv
    history("/mybookings");
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Payment Page
      </Typography>
      {selectedHotel && (
        <div>
          <Typography variant="h6">Selected Hotel:</Typography>
          <Typography variant="body1">Name: {selectedHotel.name}</Typography>
          <Typography variant="body1">Location: {selectedHotel.location}</Typography>
          <Typography variant="body1">Rating: {selectedHotel.rating}/5</Typography>
          <Typography variant="body1">Price: ${selectedHotel.price}</Typography>
          <TextField label="Card Number" variant="outlined" value={cardNumber} onChange={handleCardNumberChange} fullWidth />
          <TextField label="Expiry Date" variant="outlined" value={expiryDate} onChange={handleExpiryDateChange} fullWidth />
          <TextField label="CVV" variant="outlined" value={cvv} onChange={handleCvvChange} fullWidth />
          <Button variant="contained" onClick={handleBackButtonClick}>
            Back
          </Button>
          <Button variant="contained" onClick={handlePaymentButtonClick}>
            Proceed to Payment
          </Button>
        </div>
      )}
    </div>
  );
};

export default Payment;
