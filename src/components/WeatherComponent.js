import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const WeatherComponent = ({ weatherData }) => {
  const { name, main, weather, wind } = weatherData;
  const date = new Date().toLocaleString();

  return (
    <Box sx={{ width: '100%', maxWidth: "100%", marginTop: 4}}>
      <Card sx={{ width: '100%' }}>
        <CardContent sx={{ textAlign: 'center',padding:4 }}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="h6">Temperature: {main.temp} °C</Typography>
          <Typography variant="subtitle1">Date & Time: {date}</Typography>
          <Typography variant="body1">Humidity: {main.humidity}%</Typography>
          <Typography variant="body1">Wind Speed: {wind.speed} m/s</Typography>
          <Typography variant="body1">Description: {weather[0].description}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherComponent;
