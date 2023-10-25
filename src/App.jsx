import "./App.css";
import axios from "axios";
import WeatherApp from "./components/WeatherApp";
import apiKey from "../secret";
import { useState, useEffect } from "react";

const baseUrl = "https://api.openweathermap.org/data/2.5/";

function App() {
  const fetchApi = async () => {
    const response = await fetch(`${baseUrl}weather?q=london&appid=${apiKey}`);
    try {
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
      }
    } catch (error) {
      console.error(error);
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
