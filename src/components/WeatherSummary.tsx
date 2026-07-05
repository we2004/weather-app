


function WeatherSummary() {
  const isFavored = false

  return (
    <div className="city-general-details">
      <p className="city-name">Jeddah</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8eTki0RnKU8g47H-JoMogq9oqF7Agut8ZHtEsOA9VA&s"
        alt=""
        className="temp-icon"
      />
      <div className="main-temp">100&deg;C</div>
      <div className="weather-description">very sunny</div>
      <div className="current-time">6:38am</div>
      <button className="fav-btn">
        {isFavored ? (
          <i className="bi bi-heart-fill"></i>
        ) : (
          <i className="bi bi-heart"></i>
        )}
      </button>
    </div>
  )
}

export default WeatherSummary
