import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormatDate from "./FormatDate";
import WeatherInfo from "./WeatherInfo";
export default function Weather() {
  let [result, setResult] = useState(false);
  let [temperature, setTemperature] = useState("");
  let defaultcity = "London";
  let [city, setCity] = useState(defaultcity);

  function showTemperature(response) {
    console.log(response.data.time);
    setTemperature({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      time: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      alt: response.data.icon,
      city: response.data.city,
    });

    setResult(true);
  }
  function search() {
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=90c47000f520956f67b7e0t1do4a3be3&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleChange(event) {
    setCity(event.target.value);
  }

  if (result) {
    return (
      <div className="weather mb-1">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city...."
                className="form-control"
                autoFocus="on"
                onChange={handleChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
          <WeatherInfo info={temperature} />
        </form>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
