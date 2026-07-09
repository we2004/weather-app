import { type FavoriteCityCardProps } from "../../types/weather"


function FavoriteCityCard({city, time, description, temp}:FavoriteCityCardProps) {
  return (
    <div className="favorite-city-card">
      <div className="data-section">
        <div className="city-name">{city}</div>

        <div className="time">{time}</div>

        <div className="description">{description}</div>
      </div>

      <div className="temp-section">{temp}&deg;C</div>
    </div>
  )
}

export default FavoriteCityCard
