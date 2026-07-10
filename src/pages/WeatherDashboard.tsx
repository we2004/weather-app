import axios from "axios"
import dayjs from "dayjs"
import Header from "../components/Header"
import WeatherSummary from "../components/WeatherSummary"
import WeatherSingleCard from "../components/cards/WeatherSingleCard"
import WeatherDoubleCard from "../components/cards/WeatherDoubleCard"
import ForecastDayCard from "../components/cards/ForecastDayCard"
import {
  type ForecastDayCardProps,
  type WeatherDoubleCardProps,
  type WeatherSingleCardProps,
  type WeatherSummaryProps
} from "../types/weather"
import { useState, useEffect } from "react"
import "./WeatherDashboard.css"

const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY
const currentWeatherBaseURL = import.meta.env.VITE_WEATHER_CURRENT_URL
const geoURL = import.meta.env.VITE_WEATHER_GEO_URL

const forecastDays: ForecastDayCardProps[] = [
  {
    day: "Mon",
    dayIcon: "https://openweathermap.org/img/wn/01d@2x.png",
    dayDescription: "Sunny",
    dayRain: "0% Rain",
    dayTemp: "29"
  },
  {
    day: "Tue",
    dayIcon: "https://openweathermap.org/img/wn/02d@2x.png",
    dayDescription: "Partly Cloudy",
    dayRain: "10% Rain",
    dayTemp: "28"
  },
  {
    day: "Wed",
    dayIcon: "https://openweathermap.org/img/wn/03d@2x.png",
    dayDescription: "Cloudy",
    dayRain: "20% Rain",
    dayTemp: "27"
  },
  {
    day: "Thu",
    dayIcon: "https://openweathermap.org/img/wn/04d@2x.png",
    dayDescription: "Overcast",
    dayRain: "35% Rain",
    dayTemp: "26"
  },
  {
    day: "Fri",
    dayIcon: "https://openweathermap.org/img/wn/09d@2x.png",
    dayDescription: "Light Rain",
    dayRain: "55% Rain",
    dayTemp: "24"
  },
  {
    day: "Sat",
    dayIcon: "https://openweathermap.org/img/wn/10d@2x.png",
    dayDescription: "Rain Showers",
    dayRain: "70% Rain",
    dayTemp: "23"
  },
  {
    day: "Sun",
    dayIcon: "https://openweathermap.org/img/wn/11d@2x.png",
    dayDescription: "Thunderstorm",
    dayRain: "85% Rain",
    dayTemp: "22"
  }
]

function WeatherDashboard() {
  const [singleCardsData, setSingleCardsData] = useState<
    WeatherSingleCardProps[] | null
  >(null)
  const [doubleCardsData, setDoubleCardsData] = useState<
    WeatherDoubleCardProps[] | null
  >(null)
  const [weatherSummaryData, setWeatherSummaryData] =
    useState<WeatherSummaryProps | null>(null)

  const getCurrentWeatherData = async (lat: number, lon: number) => {
    const response = await axios(
      `${currentWeatherBaseURL}?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    )

    const { weather, main, sys, wind, dt, name, clouds, visibility } =
      response.data

    setWeatherSummaryData({
      city: name,
      cityIcon: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
      currentTime: dayjs.unix(dt).format("h:mm A"),
      mainTemp: main.temp,
      weatherDiscription: weather[0].description
    })

    setSingleCardsData([
      {
        title: "Temperature",
        value: main.temp,
        icon: <i className="bi bi-thermometer"></i>,
        temp: true
      },
      {
        title: "Feels Like",
        value: main.feels_like,
        icon: <i className="bi bi-water"></i>,
        temp: true
      },
      {
        title: "Humidity",
        value: main.humidity,
        icon: <i className="bi bi-moisture"></i>
      },
      {
        title: "Pressure",
        value: main.pressure,
        icon: <i className="bi bi-speedometer2"></i>
      },
      {
        title: "Wind Speed",
        value: wind.speed,
        icon: <i className="bi bi-wind"></i>
      },
      {
        title: "Cloudiness",
        value: clouds.all,
        icon: <i className="bi bi-clouds"></i>
      },
      {
        title: "Visibility",
        value: visibility,
        icon: <i className="bi bi-eye"></i>
      }
    ])

    setDoubleCardsData([
      {
        topIcon: <i className="bi bi-brightness-low"></i>,
        topValue: `Min: ${main.temp_min}`,
        bottomIcon: <i className="bi bi-brightness-low-fill"></i>,
        bottomValue: `Max: ${main.temp_max}`,
        temp: true
      },
      {
        topIcon: <i className="bi bi-sunrise"></i>,
        topValue: `Sunrise: ${dayjs.unix(sys.sunrise).format('h:mm A')}`,
        bottomIcon: <i className="bi bi-sunset"></i>,
        bottomValue: `Sunset: ${dayjs.unix(sys.sunset).format('h:mm A')}`
      }
    ])
  }

  useEffect(() => {
    const getLocationData = async () => {
      const response = await axios(`${geoURL}?q=japan&appid=${weatherApiKey}`)
      const { lat, lon }: { lat: number; lon: number } = response.data[0]

      await getCurrentWeatherData(lat, lon)
    }

    getLocationData()
  }, [])

  return (
    <>
      <Header
        icon={<i className="bi bi-heart-fill"></i>}
        toHomePage={false}
      />

      <h2 className="section-title">Today's Weather</h2>

      <div className="today-weather">
        <div className="weather-details">
          {singleCardsData?.map((card) => {
            return (
              <WeatherSingleCard
                key={card.title}
                {...card}
              />
            )
          })}

          {doubleCardsData?.map((card) => {
            return (
              <WeatherDoubleCard
                key={card.topValue}
                {...card}
              />
            )
          })}
        </div>

        {weatherSummaryData && (
          <WeatherSummary
            city={weatherSummaryData!.city}
            cityIcon={weatherSummaryData!.cityIcon}
            currentTime={weatherSummaryData!.currentTime}
            mainTemp={weatherSummaryData!.mainTemp}
            weatherDiscription={weatherSummaryData!.weatherDiscription}
          />
        )}
      </div>

      <h2 className="section-title">7-Day Forecast</h2>

      <div className="forecast">
        {forecastDays.map((day) => (
          <ForecastDayCard
            key={day.day}
            {...day}
          />
        ))}
      </div>
    </>
  )
}

export default WeatherDashboard
