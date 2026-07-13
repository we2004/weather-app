import { type FavoriteCityCardProps } from "../../types/weather"
import { NavLink } from "react-router-dom"
import "./FavoriteCityCard.css"

function FavoriteCityCard({
  onRemoveFavorite,
  city,
  country,
  currentTime,
  weatherDiscription,
  mainTemp,
  backgroundImageUrl
}: FavoriteCityCardProps) {
  const handleRemoveBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault() // Prevent the link navigation
    event.stopPropagation() // Stop the event from reaching the NavLink

    onRemoveFavorite(city)
  }

  return (
    <NavLink
      to={`/?search=${city}`}
      className="favorite-city-card"
      style={
        backgroundImageUrl
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${backgroundImageUrl})`
            }
          : undefined
      }
    >
      <div className="data-section">
        <div className="city-name">
          {city}, {country}
        </div>

        <div className="time">{currentTime}</div>

        <div className="description">{weatherDiscription}</div>

        <button
          className="remove-btn"
          onClick={handleRemoveBtn}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>

      <div className="temp-section">{mainTemp}&deg;C</div>
    </NavLink>
  )
}

export default FavoriteCityCard
