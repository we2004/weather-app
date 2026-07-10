import axios from "axios"
import dayjs from "dayjs"
import {
  type DoubleCardData,
  type SingleCardData,
  type WeatherSummaryProps
} from "../types/weather"

const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY
const currentWeatherBaseURL = import.meta.env.VITE_WEATHER_CURRENT_URL
const geoURL = import.meta.env.VITE_WEATHER_GEO_URL

export const getCurrentWeatherData = async (city: string) => {
  const { lat, lon } = await getCityCoords(city)
  const response = await axios(
    `${currentWeatherBaseURL}?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
  )

  const { weather, main, sys, wind, dt, name, clouds, visibility } =
    response.data

  const weatherSummaryData: WeatherSummaryProps = {
    city: name,
    cityIcon: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
    currentTime: dayjs.unix(dt).format("h:mm A"),
    mainTemp: main.temp,
    weatherDiscription: weather[0].description
  }

  const singleCardData: SingleCardData = {
    mainTemp: main.temp,
    feelLike: main.feels_like,
    humidity: main.humidity,
    pressure: main.pressure,
    speed: wind.speed,
    cloud: clouds.all,
    visibility
  }

  const doubleCardData: DoubleCardData = {
    minTemp: main.temp_min,
    maxTemp: main.temp_max,
    sunrise: sys.sunrise,
    sunset: sys.sunset
  }

  return {
    weatherSummaryData,
    singleCardData,
    doubleCardData
  }
}

const getCityCoords = async (city: string) => {
  const response = await axios(`${geoURL}?q=${city}&appid=${weatherApiKey}`)
  const { lat, lon }: { lat: number; lon: number } = response.data[0]
  return { lat, lon }
}
