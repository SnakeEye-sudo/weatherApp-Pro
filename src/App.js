import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";
import "./EnhancedWeather.css";
import WeatherAlerts from "./WeatherAlerts";
import HourlyForecast from "./HourlyForecast";
import SevenDayForecast from "./SevenDayForecast";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
                  <WeatherAlerts weatherData={this.state.data} />
              <HourlyForecast forecast={this.state.forecast} />
              <SevenDayForecast forecast={this.state.forecast} />
      </div>
      <div className="footer-info">
        <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.gauravghai.dev/">
          Gaurav Ghai
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.htmlhints.com/">
          HTML HINTS
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
