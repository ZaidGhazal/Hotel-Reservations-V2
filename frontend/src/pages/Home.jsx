import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory hook for navigation

const hotelsData = [
  {
    name: "Hotel A",
    location: "City A",
    rating: 4.5,
    price: 100,
  },
  {
    name: "Hotel B",
    location: "City B",
    rating: 4.0,
    price: 120,
  },
  {
    name: "Hotel C",
    location: "City C",
    rating: 4.2,
    price: 90,
  },
];

const Home = () => {
  const [maxPrice, setMaxPrice] = useState("");
  const [hotelType, setHotelType] = useState("");
  const [location, setLocation] = useState("");
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useHistory hook

  const filteredHotels = hotelsData.filter((hotel) => {
    return (
      (maxPrice === "" || hotel.price <= parseInt(maxPrice)) &&
      (hotelType === "" || hotel.type === hotelType) &&
      (location === "" || hotel.location.toLowerCase().includes(location.toLowerCase()))
    );
  });

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
    console.log(maxPrice);
  };

  const handleHotelTypeChange = (event) => {
    setHotelType(event.target.value);
    console.log(hotelType);
  };

  const handleLocationChange = (event) => {
    console.log(event.target.value);
    setLocation(event.target.value);
  };

  const handleDetailsClick = (hotel) => {
    setSelectedHotel(hotel);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectClick = (hotel) => {
    // Navigate to Payment page with selected hotel data
    setSelectedHotel(hotel);
    localStorage.setItem("selectedHotel", JSON.stringify(hotel));
    navigate("/book"); // Navigate to Payment page
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Hotel List
      </Typography>
      <div>
        <TextField label="Max Price" variant="outlined" value={maxPrice} onChange={handleMaxPriceChange} />
        <TextField label="Hotel Type" variant="outlined" value={hotelType} onChange={handleHotelTypeChange} />
        <TextField label="Location" variant="outlined" value={location} onChange={handleLocationChange} />
      </div>
      <List>
        {filteredHotels.map((hotel, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={hotel.name} src={hotel.image} />
              </ListItemAvatar>
              <ListItemText
                primary={hotel.name}
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="body2" color="textPrimary">
                      Location: {hotel.location}
                    </Typography>
                    <br />
                    <Typography component="span" variant="body2" color="textPrimary">
                      Rating: {hotel.rating}/5
                    </Typography>
                    <br />
                    <Typography component="span" variant="body2" color="textPrimary">
                      Price: ${hotel.price}
                    </Typography>
                  </React.Fragment>
                }
              />
              <Button variant="outlined" onClick={() => handleDetailsClick(hotel)}>
                Details
              </Button>
              <Button variant="outlined" onClick={() => handleSelectClick(hotel)}>
                Select
              </Button>
            </ListItem>
            {index !== filteredHotels.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedHotel && selectedHotel.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{selectedHotel && selectedHotel.description}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
