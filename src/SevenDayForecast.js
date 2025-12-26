import React from 'react';

const SevenDayForecast = ({ forecast }) => {
  if (!forecast || !forecast.list) {
    return <div className="seven-day-forecast"><p>No 7-day forecast available</p></div>;
  }

  // Group forecast data by day (each item is 3-hour interval)
  const dailyForecasts = {};
  
  forecast.list.forEach(item => {
    const date = new Date(item.dt * 1000);
    const day = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    
    if (!dailyForecasts[day]) {
      dailyForecasts[day] = {
        temps: [],
        icon: item.weather[0].icon,
        main: item.weather[0].main,
        humidity: [],
        windSpeed: []
      };
    }
    
    dailyForecasts[day].temps.push(item.main.temp);
    dailyForecasts[day].humidity.push(item.main.humidity);
    dailyForecasts[day].windSpeed.push(item.wind.speed * 3.6); // Convert to km/h
  });

  const days = Object.keys(dailyForecasts).slice(0, 7);

  return (
    <div className="seven-day-forecast">
      <h3>🗑️ 7-Day Forecast</h3>
      <div className="days-container">
        {days.map((day, index) => {
          const forecast = dailyForecasts[day];
          const avgTemp = Math.round(forecast.temps.reduce((a, b) => a + b, 0) / forecast.temps.length);
          const minTemp = Math.round(Math.min(...forecast.temps));
          const maxTemp = Math.round(Math.max(...forecast.temps));
          const avgHumidity = Math.round(forecast.humidity.reduce((a, b) => a + b, 0) / forecast.humidity.length);
          const avgWind = Math.round(forecast.windSpeed.reduce((a, b) => a + b, 0) / forecast.windSpeed.length);
          const icon = `http://openweathermap.org/img/wn/${forecast.icon}@2x.png`;

          return (
            <div key={index} className="day-card">
              <div className="day-date">{day}</div>
              <img src={icon} alt="weather" className="day-icon" />
              <div className="day-condition">{forecast.main}</div>
              <div className="day-temps">
                <span className="temp-max">🔥 {maxTemp}°</span>
                <span className="temp-min">📋 {minTemp}°</span>
              </div>
              <div className="day-humidity">💧 {avgHumidity}%</div>
              <div className="day-wind">💨 {avgWind} km/h</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SevenDayForecast;
