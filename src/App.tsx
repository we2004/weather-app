import { Routes, Route } from "react-router-dom"
import WeatherDashboard from "./pages/WeatherDashboard"
import About from "./pages/About"
import FavoriteCity from "./pages/FavoriteCity"
import { getFavoriteCityList } from "./utils/Favorites"
import { useState } from "react"
import { addCityToStorage } from "./utils/Favorites"
import type { FavoriteCityData } from "./types/weather"

function App() {
  const [favoriteCityList, setFavoriteCityList] = useState(getFavoriteCityList)

  //when favorite button is clicked
  const addFavorite = ({
    city,
    country,
    currentTime,
    weatherDiscription,
    mainTemp,
    backgroundImageUrl
  }: FavoriteCityData) => {
    //if the city does not exist
    //create the object
    const favoriteCity = {
      city: city,
      country: country,
      currentTime: currentTime,
      weatherDiscription: weatherDiscription,
      mainTemp: mainTemp,
      backgroundImageUrl: backgroundImageUrl
    }

    //add it to the list
    const newList = [...favoriteCityList, favoriteCity]
    setFavoriteCityList(newList)
    //add it to local storage
    addCityToStorage(newList)
  }

  const removeFavorite = (city: string) => {
    const newList = favoriteCityList.filter(
      (cityInfo) => cityInfo.city !== city
    )
    setFavoriteCityList(newList)
    addCityToStorage(newList)
  }

  const toggleFavorite = ({
    city,
    country,
    currentTime,
    weatherDiscription,
    mainTemp,
    backgroundImageUrl
  }: FavoriteCityData) => {
    //if the city extists remove the city and undo the favorite button
    if (favoriteCityList.some((cityInfo) => cityInfo.city === city)) {
      removeFavorite(city)
      return
    }

    addFavorite({
      city,
      country,
      currentTime,
      weatherDiscription,
      mainTemp,
      backgroundImageUrl
    })
  }

  return (
    <Routes>
      <Route
        index
        element={
          <WeatherDashboard
            favoriteCityList={favoriteCityList}
            onFavorite={toggleFavorite}
          />
        }
      />

      <Route
        path="favorite"
        element={<FavoriteCity />}
      />

      <Route
        path="about"
        element={<About />}
      />
    </Routes>
  )
}

export default App
