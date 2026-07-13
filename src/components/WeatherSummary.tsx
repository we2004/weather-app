import { type WeatherSummaryProps } from "../types/weather"
import "./WeatherSummary.css"

function WeatherSummary({
  city,
  country,
  cityIcon,
  mainTemp,
  weatherDiscription,
  currentTime,
  backgroundImageUrl,
  onFavorite,
  favoriteCityList
}: WeatherSummaryProps) {
 
  return (
    <div className="city-general-details">
      <p className="city-name">
        {city}, {country}
      </p>
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
        <i className="bi bi-clock"></i> {currentTime}
      </div>

      <button
        className={`fav-btn ${favoriteCityList.some((cityInfo) => cityInfo.city === city) && "red-back"}`}
        onClick={() =>
          onFavorite({
            city,
            country,
            mainTemp,
            weatherDiscription,
            currentTime,
            backgroundImageUrl
          })
        }
      >
        {favoriteCityList.some((cityInfo) => cityInfo.city === city) ? (
          <i className="bi bi-heart-fill "></i>
        ) : (
          <i className="bi bi-heart"></i>
        )}
      </button>
    </div>
  )
}

export default WeatherSummary
