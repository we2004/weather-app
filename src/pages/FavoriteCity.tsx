import FavoriteCityCard from "../components/cards/FavoriteCityCard"
import Header from "../components/Header.tsx"
import "./FavoriteCity.css"
import type { FavoriteCityProps } from "../types/weather.ts"

function FavoriteCity({
  favoriteCityList,
  onRemoveFavorite
}: FavoriteCityProps) {
  

  return (
    <>
      <Header
        icon={<i className="bi bi-house-fill"></i>}
        toHomePage={true}
      />
      <div className="page">
        <h2 className="section-title favorite-page">Favorite Cities</h2>

        <div className="favorite-city-container">
          {favoriteCityList.map((item,idx) => (
            <FavoriteCityCard
              key={`${item.city}-${item.currentTime}-${idx}`}
              {...item}
              onRemoveFavorite={onRemoveFavorite}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default FavoriteCity
