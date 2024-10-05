import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather() {
  let [result, setResult] = useState(false);
  let [temperature, setTemperature] = useState("");

  function showTemperature(response) {
    console.log(response);
    setTemperature({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,

      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      alt: response.data.icon,
      city: response.data.city,
    });
    setResult(true);
  }

  if (result) {
    return (
      <div className="weather mb-1">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city...."
                className="form-control"
                autoFocus="on"
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
        </form>
        <h1 className="capitaliz-text">{temperature.city}</h1>
        <ul>
          <li>Saturday 12:00</li>
          <li>{temperature.description}</li>
        </ul>
        <div className="row">
          <div className="col-6 pt-2">
            <img
              src={temperature.icon}
              alt={temperature.alt}
              className="float-left weather-image "
            />
            <span className="mt-5 pt-5">
              <b className="temp">{Math.round(temperature.temperature)}</b>
              <span className="unit">
                <b>°</b> <a href="">C</a>|<a href="">F</a>
              </span>
            </span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {temperature.humidity}%</li>
              <li>Wind: {temperature.wind}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "New york";
    let url = `https://api.shecodes.io/weather/v1/current?query=london&key=90c47000f520956f67b7e0t1do4a3be3&units=metric`;
    axios.get(url).then(showTemperature);
    return "Loading...";
  }
}
