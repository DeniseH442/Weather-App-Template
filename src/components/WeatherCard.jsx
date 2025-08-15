import React from "react";
import "../App.css"
const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <div className="weather-card">
      <h3>{name}</h3>
      <p>{weather[0].description}</p>
      <p>🌡️ Temp: {main.temp} °C</p>
      <p>💨 Wind: {wind.speed} m/s</p>
      <p>💧 Humidity: {main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
