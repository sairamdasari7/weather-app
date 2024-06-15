import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const SearchComponent = ({ onWeatherData }) => {
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!location) {
      setError('Please enter a location.');
      return;
    }
    try {
        const apiKey = "0525994b0f1e8ca8ff20af00ab5722a4";
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
        );
      onWeatherData(response.data);
      setError('');
    } catch (error) {
      setError('Invalid location or connection issue.');
    }
  };


  return (
    <Box sx={{ my: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <TextField
        label="Enter Location"
        variant="outlined"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        error={!!error}
        helperText={error}
        sx={{ mb: 2, width: { xs: '250px', sm: '300px', md: '400px' } }}
      />
      <Button variant="contained" onClick={fetchWeather}>Search</Button>
    </Box>
  );
};

export default SearchComponent;
