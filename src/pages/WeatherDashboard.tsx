import Header from "../components/Header"
import WeatherSummary from "../components/WeatherSummary"
import WeatherSingleCard from "../components/cards/WeatherSingleCard"
import WeatherDoubleCard from "../components/cards/WeatherDoubleCard"
import ForecastDayCard from "../components/cards/ForecastDayCard"
import {
  type ForecastDayCardProps,
  type WeatherDoubleCardProps,
  type WeatherSingleCardProps
} from "../types/weather"
import "./WeatherDashboard.css"

const singleCards: WeatherSingleCardProps[] = [
  {
    title: "Temperature",
    value: "100°C",
    icon: <i className="bi bi-thermometer"></i>,
    temp: true
  },
  {
    title: "Feels Like",
    value: "100°C",
    icon: <i className="bi bi-water"></i>,
    temp: true
  },
  {
    title: "Humidity",
    value: "13",
    icon: <i className="bi bi-moisture"></i>
  },
  {
    title: "Pressure",
    value: "100",
    icon: <i className="bi bi-speedometer2"></i>
  }
]

const doubleCards: WeatherDoubleCardProps[] = [
  {
    topIcon: <i className="bi bi-brightness-low"></i>,
    topValue: "Min: 10",
    bottomIcon: <i className="bi bi-brightness-low-fill"></i>,
    bottomValue: "Max: 10",
    temp: true
  },
  {
    topIcon: <i className="bi bi-sunrise"></i>,
    topValue: "Sunrise: 10pm",
    bottomIcon: <i className="bi bi-sunset"></i>,
    bottomValue: "Sunset: 10am"
  }
]

const forecastDays: ForecastDayCardProps[] = [
  {
    day: "Mon",
    dayIcon: "https://openweathermap.org/img/wn/01d@2x.png",
    dayDescription: "Sunny",
    dayRain: "0% Rain"
  },
  {
    day: "Tue",
    dayIcon: "https://openweathermap.org/img/wn/02d@2x.png",
    dayDescription: "Partly Cloudy",
    dayRain: "10% Rain"
  },
  {
    day: "Wed",
    dayIcon: "https://openweathermap.org/img/wn/03d@2x.png",
    dayDescription: "Cloudy",
    dayRain: "20% Rain"
  },
  {
    day: "Thu",
    dayIcon: "https://openweathermap.org/img/wn/04d@2x.png",
    dayDescription: "Overcast",
    dayRain: "35% Rain"
  },
  {
    day: "Fri",
    dayIcon: "https://openweathermap.org/img/wn/09d@2x.png",
    dayDescription: "Light Rain",
    dayRain: "55% Rain"
  },
  {
    day: "Sat",
    dayIcon: "https://openweathermap.org/img/wn/10d@2x.png",
    dayDescription: "Rain Showers",
    dayRain: "70% Rain"
  },
  {
    day: "Sun",
    dayIcon: "https://openweathermap.org/img/wn/11d@2x.png",
    dayDescription: "Thunderstorm",
    dayRain: "85% Rain"
  }
]

function WeatherDetails() {
  return (
    <>
      <Header />

      <h2 className="section-title">Today's Weather</h2>

      <div className="today-weather">
        

        <div className="weather-details">
          {singleCards.map((card) => {
            return (
              <WeatherSingleCard
                key={card.title}
                {...card}
              />
            )
          })}

          {doubleCards.map((card) => {
            return (
              <WeatherDoubleCard
                key={card.topValue}
                {...card}
              />
            )
          })}
        </div>

        <WeatherSummary
          city="Jeddah"
          cityIcon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6qTlGh05v5CAcxJGH8DmRcQPpmqjkbcs2rjlRPxJNwPnzUKUbqvP0kI&s=10"
          currentTime={10}
          mainTemp={29}
          weatherDiscription="littl hot"
        />
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

export default WeatherDetails
