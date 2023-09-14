import { createContext, useState } from "react";
import { CitiesList } from "../CitiesList/CitiesList";
import axios from "axios";

export const CityContext = createContext("Spb");
const apiKey = import.meta.env.WEATHER_APY_KEY;
console.log("apiKey:", apiKey);

const headers = {
  "X-Yandex-API-Key": "73ad672d-f945-4497-86cd-242147d63a28",
};

const URL = "https://api.weather.yandex.ru/v2/forecast";
const lanLonSPB = "&lan=59%C2%B056.3178&lon=30%C2%B018.8478";

export const Weather = () => {
  const [city, setCity] = useState("Spb");

  axios
    .get("https://api.weather.yandex.ru/v2/forecast", { headers })
    .then((response) => {
      console.log("response:", response);
    });

  return (
    <>
      <CityContext.Provider value={{ city, setCity }} />
      <CitiesList />
      <CityContext.Provider />
    </>
  );
};
