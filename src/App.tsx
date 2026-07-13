import { Routes, Route } from "react-router-dom"
import WeatherDashboard from "./pages/WeatherDashboard"
import About from "./pages/About"
import FavoriteCity from "./pages/FavoriteCity"
import { getFavoriteCityList } from "./utils/Favorites"
import { useState } from "react"
import { addCityToStorage} from "./utils/Favorites"
import type { FavoriteCityData } from "./types/weather"

function App() {
  const [favoriteCityList, setFavoriteCityList] = useState(getFavoriteCityList)
  

  //when favorite button is clicked
  const addFavorite = ({city, country, currentTime, weatherDiscription, mainTemp, backgroundImageUrl}:FavoriteCityData) => {

    //if the city extists remove the city and undo the favorite button
    if (favoriteCityList.some((cityInfo) => cityInfo.city === city)) {
      const newList = favoriteCityList.filter((cityInfo) => cityInfo.city !== city)
      setFavoriteCityList(newList)
      addCityToStorage(newList)
      return
    }

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


  return (
    <Routes>
      <Route
        index
        element={<WeatherDashboard favoriteCityList={favoriteCityList} onAddFavorite={addFavorite}/>}
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
