import React from 'react'

type WeatherDoubleCardProps = {
	topIcon: React.ReactNode
	topValue: string
	bottomIcon: React.ReactNode
	bottomValue: string
	temp? : boolean
}


function WeatherDoubleCard({topIcon , topValue,bottomIcon, bottomValue, temp} : WeatherDoubleCardProps) {
  return (
    <div className="double-info-card">
      <div className="top-section">
        {topIcon} <span>{topValue}{temp? '°C' : ''}</span>
      </div>
      <div className="bottom-section">
        {bottomIcon} <span>{bottomValue}{temp? '°C' : ''}</span>
      </div>
    </div>
  )
}

export default WeatherDoubleCard
