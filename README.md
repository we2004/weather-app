# Weather App

## Description

A React weather dashboard that fetches real-time weather data from OpenWeatherMap API and displays current conditions, 3-hour forecast, and additional weather details. Users can search for cities, save their favorite locations, and view weather background images powered by Unsplash.

## Live Demo

[View the live project](https://w9eather-app-react.netlify.app/)

## Features

- Search weather by city name
- Current weather conditions with detailed metrics
- 7-day 3-hour forecast display
- Save and manage favorite cities
- Dynamic background images from Unsplash
- Weather metrics including temperature, humidity, wind speed, pressure, visibility, and cloudiness
- Sunrise/sunset times and min/max temperature display
- Responsive design with CSS media queries
- Loading states with spinner overlay
- Error handling with error card display
- About page

## Technologies Used

- React 19
- TypeScript
- Vite
- React Router DOM
- Axios
- CSS3
- Day.js
- Bootstrap Icons
- OpenWeatherMap API (current weather, geolocation, forecast)
- Unsplash API (background images)

## Project Structure

```
weather-app/
├── dist/
├── node_modules/
├── public/
│   └── web-icon.svg
├── src/
│   ├── api/
│   │   └── weather.ts
│   ├── assets/
│   ├── components/
│   │   ├── cards/
│   │   │   ├── ErrorCard.css
│   │   │   ├── ErrorCard.tsx
│   │   │   ├── FavoriteCityCard.css
│   │   │   ├── FavoriteCityCard.tsx
│   │   │   ├── ForecastDayCard.css
│   │   │   ├── ForecastDayCard.tsx
│   │   │   ├── WeatherCard.css
│   │   │   ├── WeatherDoubleCard.tsx
│   │   │   └── WeatherSingleCard.tsx
│   │   ├── Header.css
│   │   ├── Header.tsx
│   │   ├── Spinner.css
│   │   ├── Spinner.tsx
│   │   ├── WeatherSummary.css
│   │   └── WeatherSummary.tsx
│   ├── pages/
│   │   ├── About.css
│   │   ├── About.tsx
│   │   ├── FavoriteCity.css
│   │   ├── FavoriteCity.tsx
│   │   ├── NotFound.tsx
│   │   ├─  WeatherDashboard.css
│   │   └── WeatherDashboard.tsx
│   ├── types/
│   │   ├── api.ts
│   │   └── weather.ts
│   ├── utils/
│   │   ├── Favorites.ts
│   │   └── getWeatherIconUrl.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Installation and Setup

### Get the API Keys

This project requires two API keys to function.

1. **OpenWeatherMap API Key**
   - Visit [https://openweathermap.org/](https://openweathermap.org/)
   - Create an account and generate an API key

2. **Unsplash API Key**
   - Visit [https://unsplash.com/](https://unsplash.com/)
   - Create a developer account and register an application to get your access key

3. Configure environment variables
   - Rename `.env.example` to `.env`
   - Add your API keys:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
VITE_UNSPLASH_API_ACCESS_KEY=your_unsplash_api_key
```

### Run the Project Locally

1. Clone the repository:

```bash
git clone https://github.com/we2004/weather-app.git
```

2. Navigate to the project folder:

```bash
cd weather-app
```

3. Install dependencies:

```bash
npm install
```

4. Create the `.env` file and add your API keys as explained above.

5. Start the development server:

```bash
npm run dev
```

6. Open the URL provided in the terminal (typically `http://localhost:5173`) in your browser.

## What I Learned

While building this project I practiced:

- Building reusable React components with TypeScript
- State management across multiple pages using React hooks
- Fetching and transforming data from multiple external APIs
- Using TypeScript to model application and API data types
- Implementing loading and error states for better UX
- Client-side routing with React Router DOM
- Creating responsive layouts with CSS media queries
- Deploying a Vite application to Netlify
- Date/time formatting with Day.js

## Screenshots

### Dashboard

![Dashboard](screenshots/weatherDashboard.png)

### Favorite Cities

![Favorite Cities](screenshots/favorites.png)

