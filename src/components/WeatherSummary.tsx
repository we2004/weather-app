import { type WeatherSummaryProps } from "../types/weather"

function WeatherSummary({city, cityIcon, mainTemp, weatherDiscription, currentTime} : WeatherSummaryProps) {
  const isFavored = false

  return (
    <div className="city-general-details">
      <p className="city-name">{city}</p>
      <img
        src={cityIcon}
        alt=""
        className="temp-icon"
      />
      <div className="main-temp">{mainTemp}&deg;C</div>
      <div className="weather-description">{weatherDiscription}</div>
      <div className="current-time">{currentTime}am</div>
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
