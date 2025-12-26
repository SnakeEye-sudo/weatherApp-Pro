# Weather App Pro
## Advanced Weather Application with Enhanced Features

[![React](https://img.shields.io/badge/React-16.13.1-blue.svg)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Weather App](https://www.htmlhints.com/image/react/reactWeatherApp.png)

## 🌟 New Enhanced Features (v2.0)

This enhanced version includes powerful new features:

### ⚡ Core Features
- **🚨 Real-Time Weather Alerts**: Instant notifications for extreme weather conditions
- **📅 Hourly Forecast**: Detailed 8-hour weather predictions
- **🗓️ 7-Day Forecast**: Daily weather outlook with temperature ranges
- **🌍 Auto-Geolocation**: Automatic location detection using browser API
- **🔄 Multiple Weather Providers**: Support for OpenWeatherMap and other APIs
- **🌙 Dark Mode**: Automatic dark theme support
- **📱 Offline Support**: Progressive Web App capabilities
- **🎨 Beautiful UI**: Modern design with smooth animations

### 🆕 New Components Added

#### 1. **WeatherAlerts.js**
Provides real-time weather warnings including:
- Extreme heat warnings (>40°C)
- Freezing temperature alerts (<0°C)
- Thunderstorm notifications
- High wind speed warnings
- Customizable severity levels

#### 2. **HourlyForecast.js**
Shows next 8 hours of detailed weather:
- Temperature and "feels like" temperature
- Humidity levels
- Wind speed
- Weather condition icons
- Responsive grid layout

#### 3. **SevenDayForecast.js**
Displays comprehensive 7-day outlook:
- High/low temperature ranges
- Average humidity
- Wind speed predictions
- Weather condition for each day
- Interactive card design

#### 4. **EnhancedWeather.css**
Advanced styling features:
- Gradient backgrounds
- Smooth animations and transitions
- Glass morphism effects
- Dark mode support
- Responsive design for mobile

## 🚀 Installation

### Prerequisites
- Node.js (v12 or higher)
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📦 Dependencies

- **react** - UI library
- **react-dom** - DOM rendering
- **axios** - HTTP client for API calls
- **react-geolocation** - Geolocation functionality
- **react-animated-weather** - Weather animations
- **react-live-clock** - Real-time clock display

## 🔌 API Configuration

The app uses OpenWeatherMap API. To use it:

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Add your API key to `src/apiKeys.js`

```javascript
export const apiKeys = {
  openweathermap: "YOUR_API_KEY_HERE"
};
```

## 🎯 Usage

1. **Allow Location Access**: Grant browser permission for geolocation
2. **View Current Weather**: Displays temperature, conditions, and weather alerts
3. **Check Hourly Forecast**: Scroll to see next 8 hours
4. **Plan Ahead**: View 7-day forecast for trip planning
5. **Search City**: Use search functionality to check other locations

## 📱 Responsive Design

- ✅ Desktop (1920px and up)
- ✅ Tablet (768px to 1024px)
- ✅ Mobile (320px to 767px)

## 🎨 Styling Highlights

- Linear gradients for visual appeal
- Smooth hover animations
- Backdrop filters for glassmorphism effect
- CSS Grid for responsive layouts
- Media queries for mobile optimization

## 🌙 Dark Mode

Automatically detects system preference (`prefers-color-scheme`)

## 🔒 Features Summary

| Feature | Status | Notes |
|---------|--------|-------|
| Real-time Weather | ✅ | Live API integration |
| Weather Alerts | ✅ | 5+ alert types |
| Hourly Forecast | ✅ | Next 8 hours |
| 7-Day Forecast | ✅ | Full week outlook |
| Geolocation | ✅ | Auto-detect location |
| Dark Mode | ✅ | System preference |
| Offline Support | ✅ | Service worker |
| Mobile Responsive | ✅ | All screen sizes |

## 📄 File Structure

```
src/
├── App.js                 # Main component
├── App.css               # Base styles
├── EnhancedWeather.css   # Enhanced styles
├── WeatherAlerts.js      # Alert component
├── HourlyForecast.js     # Hourly component
├── SevenDayForecast.js   # 7-day component
├── currentLocation.js    # Location logic
├── forcast.js            # Forecast logic
├── apiKeys.js            # API configuration
└── index.js              # Entry point
```

## 🚀 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to GitHub Pages

```bash
npm run build
npm install gh-pages --save-dev
```

## 🔮 Future Enhancements

- [ ] Interactive weather maps
- [ ] Air quality index display
- [ ] Weather notifications
- [ ] Historical weather data
- [ ] UV index tracking
- [ ] Pollen count alerts

## 📝 License

MIT License - feel free to use this project freely

## 👨‍💻 Author

**SnakeEye-sudo** - Enhanced version with advanced features

### Original Creator
**Gaurav Ghai** - [gauravghai/weatherApp-Reactjs](https://github.com/gauravghai/weatherApp-Reactjs)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📞 Support

For issues and questions, please open a GitHub issue.

---

**Made with ❤️ for weather enthusiasts**
