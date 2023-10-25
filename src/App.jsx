import "./App.css";
import axios from "axios";
import WeatherApp from "./components/WeatherApp";
import apiKey from "../secret";

const baseUrl = "https://api.openweathermap.org/data/2.5/";

function App() {
  return (
    <div>
      <h1>Hello All</h1>
      <WeatherApp />
    </div>
  );
}

export default App;
