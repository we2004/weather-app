import FavoriteCityCard from "../components/cards/FavoriteCityCard"
import Header from "../components/Header.tsx"
import { getFavoriteCityList } from "../utils/Favorites.ts"
import "./FavoriteCity.css"



function FavoriteCity() {

  const favoriteCityList = getFavoriteCityList()
  return (
    <>
      <Header
        icon={<i className="bi bi-house-fill"></i>}
        toHomePage={true}
      />

      <h2 className="section-title favorite-page">Favorite Cities</h2>

      <div className="favorite-city-container">
        {favoriteCityList.map((item) => (
          <FavoriteCityCard
            key={`${item.city}-${item.time}`}
            {...item}
          />
        ))}
      </div>
    </>
  )
}

export default FavoriteCity
