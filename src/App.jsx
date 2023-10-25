import "./App.css";
import axios from "axios";
import apiKey from "../secret";
import { useState, useEffect } from "react";

const baseUrl = "https://api.openweathermap.org/data/2.5/";

function App() {
  const fetchApi = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}weather?q=london&appid=${apiKey}`
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
    <div className="main-container">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search for a city..."
          style={{ fontStyle: "italic" }}
        />
        <button onClick={fetchApi}>Search</button>
      </div>
      <div className="city">
        <h1>London</h1>
      </div>
      <div className="temp">
        <h1>21 C</h1>
      </div>
      <div className="second-container">
        <div className="humidity">
          <h1>Humidity</h1>
          <h2>21 %</h2>
        </div>
        <div className="wind">
          <h1>Wind</h1>
          <h2>24 km/h</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
