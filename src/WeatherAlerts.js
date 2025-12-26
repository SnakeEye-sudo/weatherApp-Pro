import React, { useState, useEffect } from 'react';

const WeatherAlerts = ({ weatherData }) => {
  const [alerts, setAlerts] = useState([]);
  const [showAlerts, setShowAlerts] = useState(false);

  useEffect(() => {
    if (weatherData) {
      checkWeatherConditions();
    }
  }, [weatherData]);

  const checkWeatherConditions = () => {
    const newAlerts = [];
    
    if (weatherData.main && weatherData.main.temp > 40) {
      newAlerts.push({
        type: 'extreme-heat',
        message: `⚠️ Extreme Heat: ${weatherData.main.temp}°C - Stay hydrated!`,
        severity: 'high'
      });
    }
    
    if (weatherData.main && weatherData.main.temp < 0) {
      newAlerts.push({
        type: 'freeze-warning',
        message: `❄️ Freezing Temperature: ${weatherData.main.temp}°C - Caution!`,
        severity: 'high'
      });
    }
    
    if (weatherData.weather && weatherData.weather[0]) {
      const condition = weatherData.weather[0].main;
      if (condition === 'Thunderstorm') {
        newAlerts.push({
          type: 'thunderstorm',
          message: '⛈️ Thunderstorm Warning - Stay Indoors',
          severity: 'critical'
        });
      }
      if (condition === 'Tornado') {
        newAlerts.push({
          type: 'tornado',
          message: '🌪️ TORNADO WARNING - Take Shelter!',
          severity: 'critical'
        });
      }
      if (weatherData.wind && weatherData.wind.speed > 40) {
        newAlerts.push({
          type: 'high-wind',
          message: `💨 High Wind Speed: ${weatherData.wind.speed} km/h`,
          severity: 'high'
        });
      }
    }
    
    setAlerts(newAlerts);
  };

  if (alerts.length === 0) return null;

  return (
    <div className="weather-alerts-container">
      <button 
        className="alerts-toggle-btn"
        onClick={() => setShowAlerts(!showAlerts)}
      >
        🚨 {alerts.length} Alert{alerts.length > 1 ? 's' : ''}
      </button>
      {showAlerts && (
        <div className="alerts-panel">
          {alerts.map((alert, index) => (
            <div key={index} className={`alert alert-${alert.severity}`}>
              <p>{alert.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherAlerts;
