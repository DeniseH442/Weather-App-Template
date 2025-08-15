import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
export const getCoordsFromLocation = async (location) => {
  const response = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`
  );

  if (response.data.length === 0) {
    throw new Error("Location not found");
  }

  const { lat, lon } = response.data[0];
  return { lat, lon };
};

export const getWeatherByCoords = async (lat, lon) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  );

  return response.data;
};
