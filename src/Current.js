import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import CurrentTime from "./CurrentTime";
import FullDays from "./FullDays";

export default function Current(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      pressure: response.data.main.pressure,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Current">
        <h2>{props.defaultCity}</h2>
        <p className="status">{weatherData.description}</p>
        <div className="row">
          <div className="col-4">
            <div className="row">
              <div className="col-6 pr-0">
                <img src={weatherData.icon} alt="" />
              </div>
              <div className="col-6 pl-0">
                <p className="big-text">
                  {Math.round(weatherData.temperature)}°C
                </p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <p>
              <FullDays date={weatherData.date} />
            </p>
            <p>
              <CurrentDate date={weatherData.date} />
            </p>
            <p>
              <CurrentTime date={weatherData.date} />
            </p>
          </div>
          <div className="col-5">
            <p>Precipitation : {Math.round(weatherData.humidity)}%</p>
            <p>Wind: {Math.round(weatherData.wind)} km/h</p>
            <p>Pressure: {Math.round(weatherData.pressure)} mm</p>
          </div>
        </div>
        <br />
      </div>
    );
  } else {
    const apiKey = "094780c710fa4efd669f0df8c3991927";
    const unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayWeather);
    return "Loading.....";
  }
}
