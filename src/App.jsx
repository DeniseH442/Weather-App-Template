import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import { getCoordsFromLocation, getWeatherByCoords } from "./api/weatherApi";
import weatherimage from "./assets/weather element.jpeg"
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const DEFAULT_LOCATION = "Georgia";

function App() {
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (loc) => {
    try {
      const coords = await getCoordsFromLocation(loc);
      const data = await getWeatherByCoords(coords.lat, coords.lon);
      setWeatherData(data);
    } catch (error) {
      alert("Couldn't get weather. Try again.");
    }
  };

  useEffect(() => {
    fetchWeather(location);
  }, []);

  const handleSearch = (searchTerm) => {
    setLocation(searchTerm);
    fetchWeather(searchTerm);
  };

  return (
    <div className="app">
      <h2>Path2Tech Weather App</h2>
      <img
        src={weatherimage}
        alt="Weather icons"
        className="weather-image"
      />
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay data={weatherData} />
    </div>
  );
}

export default App;
