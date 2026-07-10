import dayjs from "dayjs"
import Header from "../components/Header"
import WeatherSummary from "../components/WeatherSummary"
import WeatherSingleCard from "../components/cards/WeatherSingleCard"
import WeatherDoubleCard from "../components/cards/WeatherDoubleCard"
import ForecastDayCard from "../components/cards/ForecastDayCard"
import {
  type DoubleCardData,
  type ForecastDayCardProps,
  type SingleCardData,
  type WeatherDoubleCardProps,
  type WeatherSingleCardProps,
  type WeatherSummaryProps
} from "../types/weather"
import "./WeatherDashboard.css"
import { getCurrentWeatherData, getForecast } from "../api/weather"
import { useEffect, useState } from "react"

function WeatherDashboard() {
  const [weatherSummaryData, setWeatherSummaryData] =
    useState<WeatherSummaryProps | null>(null)
  const [singleCardData, setSingleCardsData] = useState<SingleCardData | null>(
    null
  )
  const [doubleCardData, setDoubleCardData] = useState<DoubleCardData | null>(
    null
  )
  const [forecastDays, setForecastDays] = useState<
    ForecastDayCardProps[] | null
  >(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      const { weatherSummaryData, singleCardData, doubleCardData } =
        await getCurrentWeatherData("china")

      const forecast = await getForecast("china")

      setWeatherSummaryData(weatherSummaryData)
      setSingleCardsData(singleCardData)
      setDoubleCardData(doubleCardData)
      setForecastDays(forecast)
      await getForecast('china')
    }

    fetchWeatherData()
      
  }, [])



  const singleCards: WeatherSingleCardProps[] = [
    {
      title: "Temperature",
      value: singleCardData?.mainTemp ?? 0,
      icon: <i className="bi bi-thermometer"></i>,
      temp: true
    },
    {
      title: "Feels Like",
      value: singleCardData?.feelLike ?? 0,
      icon: <i className="bi bi-water"></i>,
      temp: true
    },
    {
      title: "Humidity",
      value: singleCardData?.humidity ?? 0,
      icon: <i className="bi bi-moisture"></i>
    },
    {
      title: "Pressure",
      value: singleCardData?.pressure ?? 0,
      icon: <i className="bi bi-speedometer2"></i>
    },
    {
      title: "Wind Speed",
      value: singleCardData?.speed ?? 0,
      icon: <i className="bi bi-wind"></i>
    },
    {
      title: "Cloudiness",
      value: singleCardData?.cloud ?? 0,
      icon: <i className="bi bi-clouds"></i>
    },
    {
      title: "Visibility",
      value: singleCardData?.visibility ?? 0,
      icon: <i className="bi bi-eye"></i>
    }
  ]

  const doubleCards: WeatherDoubleCardProps[] = [
    {
      topIcon: <i className="bi bi-brightness-low"></i>,
      topValue: `Min: ${doubleCardData?.minTemp ?? 0}`,
      bottomIcon: <i className="bi bi-brightness-low-fill"></i>,
      bottomValue: `Max: ${doubleCardData?.maxTemp ?? 0}`,
      temp: true
    },
    {
      topIcon: <i className="bi bi-sunrise"></i>,
      topValue: `Sunrise: ${doubleCardData?.sunrise ? dayjs.unix(doubleCardData.sunrise).format("h:mm A") : "--"}`,
      bottomIcon: <i className="bi bi-sunset"></i>,
      bottomValue: `Sunset: ${doubleCardData?.sunset ? dayjs.unix(doubleCardData.sunset).format("h:mm A") : "--"}`
    }
  ]

  return (
    <>
      <Header />

      <h2 className="section-title">Today's Weather</h2>

      <div className="today-weather">
        <div className="weather-details">
          {singleCards?.map((card) => {
            return (
              <WeatherSingleCard
                key={card.title}
                {...card}
              />
            )
          })}

          {doubleCards?.map((card) => {
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
            city={weatherSummaryData.city}
            cityIcon={weatherSummaryData.cityIcon}
            currentTime={weatherSummaryData.currentTime}
            mainTemp={weatherSummaryData.mainTemp}
            weatherDiscription={weatherSummaryData.weatherDiscription}
          />
        )}
      </div>

      <h2 className="section-title">Forecast</h2>

      <div className="forecast">
        {forecastDays?.map((day) => (
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
