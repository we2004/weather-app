import {
  type WeatherSummaryProps,
  type FavoriteCityCardProps
} from "../types/weather"
import { useState, useEffect } from "react"
import "./WeatherSummary.css"

function WeatherSummary({
  city,
  cityIcon,
  mainTemp,
  weatherDiscription,
  currentTime
}: WeatherSummaryProps) {
  //favorite
  const [isFavored, setIsFavored] = useState(false)
  //read the favorite cities list from local storage
  const favoriteCityList: FavoriteCityCardProps[] = JSON.parse(
    localStorage.getItem("favoriteCities") || "[]"
  )

  //checks if a specific city exists or not
  const checkCityExist = (cardCity: string): boolean => {
    return favoriteCityList.some((cityInfo) => cityInfo.city === cardCity)
  }

  useEffect(() => {
    setIsFavored(checkCityExist(city))
  }, [city])

  //when favorite button is clicked
  const handleFavorite = () => {
    //if the city extists remove the city and undo the favorite button
    if (checkCityExist(city)) {
      const newList = favoriteCityList.filter(
        (cityInfo) => cityInfo.city !== city
      )
      localStorage.setItem("favoriteCities", JSON.stringify(newList))
      setIsFavored(false)
      console.log(newList)
      return
    }

    //if the city does not exist
    //create the object
    const favoriteCity = {
      city: city,
      time: currentTime,
      description: weatherDiscription,
      temp: mainTemp
    }

    //add it to the list
    favoriteCityList.push(favoriteCity)
    //add it to local storage
    localStorage.setItem("favoriteCities", JSON.stringify(favoriteCityList))
    setIsFavored(true)

    console.log(localStorage.getItem("favoriteCities"))
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
