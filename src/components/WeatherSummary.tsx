import axios from "axios"
import { type WeatherSummaryProps } from "../types/weather"
import { useEffect, useState } from "react"
import "./WeatherSummary.css"

const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY
const currentWeatherBaseURL = import.meta.env.VITE_WEATHER_CURRENT_URL
const geoURL = import.meta.env.VITE_WEATHER_GEO_URL

type GeoData = {
  lat: number
  lon: number
}

function WeatherSummary({
  city,
  cityIcon,
  mainTemp,
  weatherDiscription,
  currentTime
}: WeatherSummaryProps) {
  const [currentWeatherData, setCurrentWeatherData] = useState<GeoData | null>(null)
  const [location, setLocation] = useState<GeoData | null>(null)
  const isFavored = false

 
  useEffect(() => {
    const getLocationData = async () => {
      const response = await axios(`${geoURL}?q=jeddah&appid=${weatherApiKey}`)
      console.log(response.data[0].lat)
      setLocation({
        lat: response.data[0].lat,
        lon: response.data[0].lon
      })

       console.log({
        lat: response.data[0].lat,
        lon: response.data[0].lon
      })
    } 

  
   

  },[])

  

  return (
    <div className="city-general-details">
      <p className="city-name">{city}</p>
      <img
        src={cityIcon}
        alt=""
        className="temp-icon"
      />
      <div className="temp-details">
        <div className="main-temp">{mainTemp}&deg;C</div>
        <div className="weather-description">{weatherDiscription}</div>
      </div>

      <div className="current-time">
        <i className="bi bi-clock"></i> {currentTime} AM
      </div>
      <button className="fav-btn">
        {isFavored ? (
          <i className="bi bi-heart-fill"></i>
        ) : (
          <i className="bi bi-heart"></i>
        )}
      </button>
    </div>
  )
}

export default WeatherSummary
