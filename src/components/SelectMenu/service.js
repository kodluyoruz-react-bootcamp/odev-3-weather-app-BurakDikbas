import axios from "axios";

const apiKey = "988863a0e23340e4a2178bf1e447ed8f";
export const getWeather = async (cityName) => {
  const {
    data: { data },
  } = await axios.get(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName},TR&days=7&key=${apiKey}`
  );
  return data;
};
