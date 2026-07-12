import { type FavoriteCityCardProps } from "../../types/weather"
import { NavLink } from "react-router-dom"
import "./FavoriteCityCard.css"
import { getFavoriteCityList, removeCityFromStorage } from "../../utils/Favorites"

function FavoriteCityCard({
  city,
  time,
  description,
  temp
}: FavoriteCityCardProps) {
  
  const favoriteCityList = getFavoriteCityList()
  const handleRemoveBtn = () => {
    removeCityFromStorage(city, favoriteCityList)
  }

  return (
    <NavLink
      to={"/"}
      className="favorite-city-card"
    >
      <div className="data-section">
        <div className="city-name">{city}</div>

        <div className="time">{time}</div>

        <div className="description">{description}</div>

        <button className="remove-btn" onClick={handleRemoveBtn}>
          <i className="bi bi-trash"></i>
        </button>
      </div>

      <div className="temp-section">{temp}&deg;C</div>
    </NavLink>
  )
}

export default FavoriteCityCard
