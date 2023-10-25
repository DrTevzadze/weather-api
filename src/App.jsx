import "./App.css";
import axios from "axios";
import WeatherApp from "./components/WeatherApp";
import apiKey from "../secret";
import { useState, useEffect } from "react";

const baseUrl = "https://api.openweathermap.org/data/2.5/";

function App() {
  const fetchApi = async () => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=london&appid=3720679616f1bfccdf200adb5db3dca7"
      );
      if (response.status === 200) {
        const jsonResponse = await response.data;
        console.log(jsonResponse);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Hello All</h1>
      <button onClick={fetchApi}>Check API</button>
      <WeatherApp />
    </div>
  );
}

export default App;
