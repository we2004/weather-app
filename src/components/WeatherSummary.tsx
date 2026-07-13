import { type WeatherSummaryProps } from "../types/weather"
import { useState, useEffect } from "react"
import { getFavoriteCityList, addCityToStorage, checkCityExist, removeCityFromStorage } from "../utils/Favorites"
import "./WeatherSummary.css"

function WeatherSummary({
  city,
  cityIcon,
  mainTemp,
  weatherDiscription,
  currentTime,
  backgroundImageUrl
}: WeatherSummaryProps) {
  //favorite
  const [isFavored, setIsFavored] = useState(false)

 

  useEffect(() => {
    setIsFavored(checkCityExist(city))
  }, [city])

  //when favorite button is clicked
  const handleFavorite = () => {
    const favoriteCityList = getFavoriteCityList()
    //if the city extists remove the city and undo the favorite button
    if (checkCityExist(city)) {
      removeCityFromStorage(city, favoriteCityList)
      setIsFavored(false)
      return
    }

    //if the city does not exist
    //create the object
    const favoriteCity = {
      city: city,
      time: currentTime,
      description: weatherDiscription,
      temp: mainTemp,
      backgroundImageUrl: backgroundImageUrl
    }

    //add it to the list
    favoriteCityList.push(favoriteCity)
    //add it to local storage
    addCityToStorage(favoriteCityList)
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
