import FavoriteCityCard from "../components/cards/FavoriteCityCard"
import Header from "../components/Header.tsx"
import {
  getFavoriteCityList,
  removeCityFromStorage
} from "../utils/Favorites.ts"
import { useState } from "react"

import "./FavoriteCity.css"

function FavoriteCity() {
  const [favoriteCityList, setFavoriteCityList] = useState(getFavoriteCityList)

  const handleRemoveBtn = (
    event: React.MouseEvent<HTMLButtonElement>,
    city: string
  ) => {
    event.preventDefault() // Prevent the link navigation
    event.stopPropagation() // Stop the event from reaching the NavLink

    removeCityFromStorage(city, favoriteCityList)
    setFavoriteCityList(getFavoriteCityList())
  }

  return (
    <>
      <Header
        icon={<i className="bi bi-house-fill"></i>}
        toHomePage={true}
      />
      <div className="page">
        <h2 className="section-title favorite-page">Favorite Cities</h2>

        <div className="favorite-city-container">
          {favoriteCityList.map((item) => (
            <FavoriteCityCard
              key={`${item.city}-${item.time}`}
              {...item}
              onRemove={handleRemoveBtn}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default FavoriteCity
