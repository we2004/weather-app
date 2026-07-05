import { type ForecastDayCardProps } from "../../types/weather"

function ForecastDayCard({day, dayIcon, dayDescription, dayRain} : ForecastDayCardProps) {
  return (
    <div className="day-card">
      <div className="day-text">{day}</div>
      <img
        src={dayIcon}
        alt=""
        className="day-icon"
      />
      <div className="day-description">{dayDescription}</div>
      <div className="day-rain">{dayRain}</div>
    </div>
  )
}

export default ForecastDayCard
