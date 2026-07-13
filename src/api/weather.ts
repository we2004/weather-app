import axios from "axios"
import dayjs from "dayjs"
import {
  type DoubleCardData,
  type ForecastApiItem,
  type ForecastDayCardProps,
  type SingleCardData,
  type WeatherSummaryData
} from "../types/weather"
import { getWeatherIconUrl } from "../utils/getWeatherIconUrl"

const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY
const currentWeatherBaseURL = import.meta.env.VITE_WEATHER_CURRENT_URL
const geoURL = import.meta.env.VITE_WEATHER_GEO_URL
const forecastURL = import.meta.env.VITE_WEATHER_FORECAST_URL
const unsplashAccessKey = import.meta.env.VITE_UNSPLASH_API_ACCESS_KEY
const unsplashSearchUrl = import.meta.env.VITE_UNSPLASH_SEARCH_URL

export const getCurrentWeatherData = async (city: string) => {
  const { lat, lon } = await getCityCoords(city)
  const response = await axios(
    `${currentWeatherBaseURL}?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
  )

  const { weather, main, sys, wind, dt, name, clouds, visibility } =
    response.data

  const weatherSummaryData: WeatherSummaryData = {
    city: name,
    country: sys.country,
    cityIcon: getWeatherIconUrl(weather[0].icon),
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

export const getUnsplashImage = async (city: string) => {
  const response = await axios(
    `${unsplashSearchUrl}?query=${encodeURIComponent(city)}&per_page=1&orientation=landscape&client_id=${unsplashAccessKey}`
  )

  return response.data.results?.[0]?.urls?.regular ?? ""
}

export const getForecast = async (city: string) => {
  const { lat, lon } = await getCityCoords(city)
  const response = await axios(
    `${forecastURL}?lat=${lat}&lon=${lon}&cnt=7&appid=${weatherApiKey}&units=metric`
  )

  const forecast: ForecastDayCardProps[] = response.data.list.map(
    ({ dt, main, weather, clouds }: ForecastApiItem): ForecastDayCardProps => {
      return {
        day: dayjs.unix(dt).format("ddd, h A"),
        dayIcon: getWeatherIconUrl(weather[0].icon),
        dayDescription: weather[0].description,
        dayCloud: clouds.all,
        dayTemp: main.temp
      }
    }
  )

  return forecast
  // console.log(response.data)
}

const getCityCoords = async (city: string) => {
  const response = await axios(`${geoURL}?q=${city}&appid=${weatherApiKey}`)
  const { lat, lon }: { lat: number; lon: number } = response.data[0]
  return { lat, lon }
}
