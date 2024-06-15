# Weather App

This project is a weather application built using React. It fetches weather data from the Open Weather API and displays the current weather information based on user input. It also includes a dark mode toggle feature.

## Features

- Fetch and display current weather information based on user input (city name or zip code).
- Display the following weather information:
  - Current location
  - Temperature
  - Date and time
  - Humidity
  - Wind speed
  - Weather description
- Dark mode and light mode toggle functionality.
- Responsive design for various screen sizes (desktop, tablet, mobile).

## Technologies Used

- React
- Material-UI for UI components
- Axios for API calls
- Open Weather API
- Styled-components for global styles and theming

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add your Open Weather API key:
    ```env
    REACT_APP_WEATHER_API_KEY=your_openweather_api_key
    ```

4. Start the application:
    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

weather-app/
├── public/
│ ├── index.html
├── src/
│ ├── components/
│ │ ├── SearchComponent.js
│ │ ├── ToggleComponent.js
│ │ ├── WeatherComponent.js
│ ├── styles/
│ │ ├── GlobalStyles.js
│ │ ├── theme.js
│ ├── App.js
│ ├── index.js
│ ├── App.css
├── .env
├── package.json

## Components

### SearchComponent

This component provides an input field for users to enter a location (city name or zip code) and a button to fetch weather data.

### ToggleComponent

This component provides a switch to toggle between dark mode and light mode.

### WeatherComponent

This component displays the weather information fetched from the Open Weather API.

## Styling

- **GlobalStyles**: Contains global CSS reset and base styles using `styled-components`.
- **theme.js**: Defines light and dark themes for the application.

## API Integration

The application uses Axios to fetch weather data from the Open Weather API. Ensure you have a valid API key in the `.env` file.

## Responsive Design

The application uses Flexbox for layout and Material-UI components to ensure it is responsive and looks good on various devices.

## Troubleshooting

### Common Errors

- **401 Unauthorized**: Ensure your Open Weather API key is correct and placed in the `.env` file.
- **Network Errors**: Check your internet connection and ensure the Open Weather API is accessible.

## Contributing

Feel free to fork this repository and contribute by submitting a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
