import {type WeatherSingleCardProps } from "../../types/weather.ts"
import './WeatherCard.css'
function WeatherSingleCard({ icon, title, value, temp }: WeatherSingleCardProps) {
  return (
    <div className="single-info-card">
      {icon}
      <div className="card-title">{title}</div>
      <div className="card-data">{value}{temp? '°C' : ''}</div>
    </div>
  )
}

export default WeatherSingleCard
