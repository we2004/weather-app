import Header from "../components/Header.tsx"

function FavoriteCity() {
  return (
    <>
      <Header
        icon={<i className="bi bi-house-fill"></i>}
        toHomePage={true}
      />

      <h2 className="section-title">Favorite City</h2>

      <div className="favorite-city-container">
        <div className="favorite-city-card">
          <div className="data-section">
            <div className="city-name">Jeddah</div>

            <div className="time">12:30 PM</div>

            <div className="description">
              rainy
            </div>
          </div>

          <div className="temp-section">
            26&deg;C
          </div>

        </div>
      </div>
    </>
  )
}

export default FavoriteCity
