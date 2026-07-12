import { type WeatherSummaryProps, type FavoriteCityCardProps } from "../types/weather"
import { useState } from "react"
import "./WeatherSummary.css"

function WeatherSummary({
  city,
  cityIcon,
  mainTemp,
  weatherDiscription,
  currentTime,
}: WeatherSummaryProps) {
  //favorite
  const [isFavored, setIsFavored] = useState(false)

  const handleFavorite = () => {
    const favoriteCity = {
      city: city,
      time: currentTime,
      description: weatherDiscription,
      temp: mainTemp
    }

    const favoriteCityList : FavoriteCityCardProps[] =
      JSON.parse(localStorage.getItem("favoriteCities") || "[]") 

    favoriteCityList.push(favoriteCity)

    localStorage.setItem("favoriteCities", JSON.stringify(favoriteCityList))
    console.log(localStorage.getItem("favoriteCities"))
    setIsFavored(true)
  }

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
        <i className="bi bi-clock"></i> {currentTime}
      </div>

      <button
        className={`fav-btn ${isFavored && "red-back"}`}
        onClick={handleFavorite}
      >
        {isFavored ? (
          <i className="bi bi-heart-fill "></i>
        ) : (
          <i className="bi bi-heart"></i>
        )}
      </button>
    </div>
  )
}

export default WeatherSummary
