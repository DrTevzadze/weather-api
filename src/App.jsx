import "./App.css";
import axios from "axios";
import apiKey from "../secret";
import { useState, useEffect } from "react";

const baseUrl = "https://api.openweathermap.org/data/2.5/";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});

  const fetchApi = async () => {
    console.log("Fetching data...");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`
      );
      if (response.status === 200) {
        const jsonResponse = await response.data;
        setData(jsonResponse);
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
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={fetchApi}>Search</button>
      </div>

      {data.name ? (
        <>
          <div className="city">
            <h1>{data.name}</h1>
          </div>
          <div className="temp">
            <h1>{Math.floor(data.main.temp)} C</h1>
          </div>
          <div className="second-container">
            <div className="humidity">
              <h1>Humidity</h1>
              <h2>{Math.floor(data.main.humidity)} %</h2>
            </div>
            <div className="wind">
              <h1>Wind</h1>
              <h2>{Math.floor(data.wind.speed)} km/h</h2>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default App;
