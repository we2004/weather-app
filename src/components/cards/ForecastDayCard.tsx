import { type ForecastDayCardProps } from "../../types/weather"
import './ForecastDayCard.css'
function ForecastDayCard({day, dayIcon, dayTemp,dayDescription} : ForecastDayCardProps) {
  return (
    <div className="day-card">
      <div className="day-text">{day}</div>
      <img
        src={dayIcon}
        alt=""
        className="day-icon"
      />
      <div className="day-temp">{dayTemp} &deg;C</div>
      <div className="day-description">{dayDescription}</div>
    </div>
  )
}

export default ForecastDayCard
