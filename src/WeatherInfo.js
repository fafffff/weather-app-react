import React from "react";
import FormatDate from "./FormatDate";
import TempratureConversion from "./TemperatureConversion";
export default function WeatherInfo(props) {
  return (
    <div className="Weather-Info">
      <h1 className="capitaliz-text">{props.info.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.info.time} />
        </li>
        <li>{props.info.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 pt-2">
          <img
            src={props.info.icon}
            alt={props.info.alt}
            className="float-left weather-image "
          />
          <TempratureConversion
            celicious={Math.round(props.info.temperature)}
          />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
