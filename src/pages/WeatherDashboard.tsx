import { Fragment } from "react/jsx-runtime"
import Header from "../components/Header"
import WeatherSummary from "../components/WeatherSummary"
import WeatherSingleCard from "../components/cards/WeatherSingleCard"
import WeatherDoubleCard from "../components/cards/WeatherDoubleCard"

const singleCards = [
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

const doubleCards = [
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

function WeatherDetails() {
  return (
    <>
      <Header />
      <WeatherSummary />

      <div className="weather-details">
        {singleCards.map((card, idx) => {
          return (
            <Fragment key={idx}>
              <WeatherSingleCard
                value={card.value}
                icon={card.icon}
                title={card.title}
                temp={card.temp}
              />
            </Fragment>
          )
        })}

        {doubleCards.map((card, idx) => {
          return (
            <Fragment key={idx}>
              <WeatherDoubleCard
                topIcon={card.topIcon}
                topValue={card.topValue}
                bottomIcon={card.bottomIcon}
                bottomValue={card.bottomValue}
                temp={card.temp}
              />
            </Fragment>
          )
        })}
      </div>
    </>
  )
}

export default WeatherDetails
