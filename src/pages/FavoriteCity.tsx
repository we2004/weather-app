import FavoriteCityCard from "../components/cards/FavoriteCityCard.tsx"
import Header from "../components/Header.tsx"
import { type FavoriteCityCardProps } from "../types/weather"
import './FavoriteCity.css'

const mockFavoriteCities: FavoriteCityCardProps[] = [
  {
    city: "Jeddah, SA",
    time: 12,
    description: "Rainy",
    temp: "26"
  },
  {
    city: "London, UK",
    time: 10,
    description: "Partly Cloudy",
    temp: "18"
  },
  {
    city: "New York, US",
    time: 5,
    description: "Sunny",
    temp: "22"
  },
  {
    city: "Tokyo, JP",
    time: 19,
    description: "Clear",
    temp: "27"
  },
  {
    city: "Sydney, AU",
    time: 21,
    description: "Windy",
    temp: "16"
  },
  {
    city: "Cairo, EG",
    time: 11,
    description: "Hot",
    temp: "33"
  }
]

function FavoriteCity() {
  return (
    <>
      <Header
        icon={<i className="bi bi-house-fill"></i>}
        toHomePage={true}
      />

      <h2 className="section-title favorite-page">Favorite Cities</h2>

      <div className="favorite-city-container">
        {mockFavoriteCities.map((item) => (
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
