import React from 'react';

const HourlyForecast = ({ weatherData, forecast }) => {
  if (!forecast || !forecast.list) {
    return <div className="hourly-forecast"><p>No hourly forecast available</p></div>;
  }

  // Get next 8 hours
  const next8Hours = forecast.list.slice(0, 8);

  return (
    <div className="hourly-forecast">
      <h3>📅 Hourly Forecast</h3>
      <div className="hours-container">
        {next8Hours.map((hour, index) => {
          const date = new Date(hour.dt * 1000);
          const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
          const icon = `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`;
          const temp = Math.round(hour.main.temp);
          const feelsLike = Math.round(hour.main.feels_like);
          const humidity = hour.main.humidity;
          const windSpeed = Math.round(hour.wind.speed * 3.6); // Convert m/s to km/h

          return (
            <div key={index} className="hour-card">
              <div className="hour-time">{time}</div>
              <img src={icon} alt="weather" className="hour-icon" />
              <div className="hour-temp">{temp}°C</div>
              <div className="hour-feels">Feels: {feelsLike}°C</div>
              <div className="hour-humidity">💧 {humidity}%</div>
              <div className="hour-wind">💨 {windSpeed} km/h</div>
              <div className="hour-condition">{hour.weather[0].main}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
