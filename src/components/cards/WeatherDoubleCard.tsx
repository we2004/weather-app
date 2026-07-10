
import { type WeatherDoubleCardProps } from "../../types/weather"
import "./WeatherCard.css"

function WeatherDoubleCard({topIcon , topValue,bottomIcon, bottomValue, temp} : WeatherDoubleCardProps) {
  return (
    <div className="double-info-card">
      <div className="top-section">
        {topIcon} {topValue}{temp? '°C' : ''}
      </div>
      <div className="bottom-section">
        {bottomIcon} {bottomValue}{temp? '°C' : ''}
      </div>
    </div>
  )
}

export default WeatherDoubleCard
