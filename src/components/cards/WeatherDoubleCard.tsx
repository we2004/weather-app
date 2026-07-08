
import { type WeatherDoubleCardProps } from "../../types/weather"
import "./WeatherCard.css"

function WeatherDoubleCard({topIcon , topValue,bottomIcon, bottomValue, temp} : WeatherDoubleCardProps) {
  return (
    <div className="double-info-card">
      <div className="top-section">
        {topIcon} <span className="card-title">{topValue}{temp? '°C' : ''}</span>
      </div>
      <div className="bottom-section">
        {bottomIcon} <span className="card-title">{bottomValue}{temp? '°C' : ''}</span>
      </div>
    </div>
  )
}

export default WeatherDoubleCard
