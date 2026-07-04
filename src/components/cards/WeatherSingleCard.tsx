import React from "react"

type WeatherSingleCardProps = {
  icon: React.ReactNode
  title: string
  value: string
  temp?: boolean
}

function WeatherSingleCard({ icon, title, value, temp }: WeatherSingleCardProps) {
  return (
    <div className="single-info-card">
      {icon}
      <div className="card-title">{title}{temp? '°C' : ''}</div>
      <div className="card-data">{value}{temp? '°C' : ''}</div>
    </div>
  )
}

export default WeatherSingleCard
