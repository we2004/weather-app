import axios from "axios"
import dayjs from 'dayjs'
import { type WeatherSummaryProps } from "../types/weather"
import { useEffect, useState } from "react"
import "./WeatherSummary.css"

const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY
const currentWeatherBaseURL = import.meta.env.VITE_WEATHER_CURRENT_URL
const geoURL = import.meta.env.VITE_WEATHER_GEO_URL

type CurrentWeatherData = {
  mainStat: string
  description: string
  iconLink: string
  mainTemp: number
  feelLike: number
  minTemp: number
  maxTemp: number
  pressure: number
  humidity: number
  currentTime: number
  sunrise: number
  sunset: number
  cityName: string
  windSpeed: number
  cloud: number
  visibility: number
}

function WeatherSummary({
  city,
  cityIcon,
  mainTemp,
  weatherDiscription,
  currentTime
}: WeatherSummaryProps) {
  const [currentWeatherData, setCurrentWeatherData] =
    useState<CurrentWeatherData | null>(null)
  const isFavored = false

  const getCurrentWeatherData = async (lat: number, lon: number) => {
    const response = await axios(
      `${currentWeatherBaseURL}?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    )

    const { weather, main, sys, wind, dt, name, clouds, visibility } =
      response.data

    const currentWeather: CurrentWeatherData = {
      mainStat: weather[0].main,
      description: weather[0].description,
      iconLink: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
      mainTemp: main.temp,
      feelLike: main.feels_like,
      minTemp: main.temp_min,
      maxTemp: main.temp_max,
      pressure: main.pressure,
      humidity: main.humidity,
      currentTime: dt,
      sunrise: sys.sunrise,
      sunset: sys.sunset,
      cityName: name,
      windSpeed: wind.speed,
      cloud: clouds.all,
      visibility: visibility
    }

    setCurrentWeatherData(currentWeather)
  }

  useEffect(() => {
    const getLocationData = async () => {
      const response = await axios(`${geoURL}?q=japan&appid=${weatherApiKey}`)
      const { lat, lon }: { lat: number; lon: number } = response.data[0]

      await getCurrentWeatherData(lat, lon)
    }

    // getLocationData()
  }, [])

  return (
    <div className="city-general-details">
      {currentWeatherData && (
        <>
          <p className="city-name">{currentWeatherData.cityName}</p>
          <img
            src={currentWeatherData.iconLink}
            alt={currentWeatherData.description}
            className="temp-icon"
          />
          <div className="temp-details">
            <div className="main-temp">
              {currentWeatherData.mainTemp}&deg;C
            </div>
            <div className="weather-description">
              {currentWeatherData.description}
            </div>
          </div>

          <div className="current-time">
            <i className="bi bi-clock"></i>{" "}
            {dayjs.unix(currentWeatherData.currentTime).format('h:mm A')}
          </div>
          <button className="fav-btn">
            {isFavored ? (
              <i className="bi bi-heart-fill"></i>
            ) : (
              <i className="bi bi-heart"></i>
            )}
          </button>
        </>
      )}
    </div>
  )
}

export default WeatherSummary


//  (
//         <>
//           <p className="city-name">{city}</p>
//           <img
//             src={cityIcon}
//             alt=""
//             className="temp-icon"
//           />
//           <div className="temp-details">
//             <div className="main-temp">{mainTemp}&deg;C</div>
//             <div className="weather-description">{weatherDiscription}</div>
//           </div>

//           <div className="current-time">
//             <i className="bi bi-clock"></i> {currentTime} AM
//           </div>
//           <button className="fav-btn">
//             {isFavored ? (
//               <i className="bi bi-heart-fill"></i>
//             ) : (
//               <i className="bi bi-heart"></i>
//             )}
//           </button>
//         </>
//       )
