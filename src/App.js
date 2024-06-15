import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';
import WeatherComponent from './components/WeatherComponent';
import SearchComponent from './components/SearchComponent';
import ToggleComponent from './components/ToggleComponent';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [weatherData, setWeatherData] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <GlobalStyles />
      <h1 className="main-heading">Weather Report</h1>
      <Container className="app-container">
        <ToggleComponent toggleTheme={toggleTheme} />
        <SearchComponent onWeatherData={handleWeatherData} />
        {weatherData && (
          <div className="weather-box">
            <WeatherComponent weatherData={weatherData} />
          </div>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
