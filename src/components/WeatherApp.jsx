import { useState } from "react";

const apiUrl = "https://api.openweathermap.org/data/2.5/";
const apiKey = "91f19624e48ea3da844634c3bb863ea3";

function WeatherApp() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const searchBar = async () => {
    const response = await fetch(
      `${apiUrl}weather?q=${search}&appid=${apiKey}&units=metric`
    );

    try {
      if (response.ok) {
        const jsonResponse = await response.json();
        setData(jsonResponse);
        setSearch("");
        // console.log(jsonResponse);
      }
    } catch (error) {
      console.error("This is a ReactJS error:", error);
    }
  };

  return (
    <div className="container searchbar">
      {/* Header */}
      <input
        type="text"
        placeholder="Write a city"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchBar}>Search</button>
      {/* City */}
      <div className="container city">
        <h1>{data.name}</h1>
      </div>
      {/* Temp */}
      <div className="temp">
        <h1>{Math.floor(data.main.temp)} C</h1>
      </div>
      {/* Wind and Humidity*/}
      <div className="humcontainer">
        <div className="wind">
          <h1>Wind</h1>
          <h2>{Math.floor(data.wind.speed)} km/h</h2>
        </div>
        <div className="humidity">
          <h1>Humidity</h1>
          <h2>{Math.floor(data.main.humidity)}%</h2>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
