import React from "react"

export type WeatherSingleCardProps = {
  icon: React.ReactNode
  title: string
  value: string
  temp?: boolean
}

export type WeatherDoubleCardProps = {
	topIcon: React.ReactNode
	topValue: string
	bottomIcon: React.ReactNode
	bottomValue: string
	temp? : boolean
}

export type ForecastDayCardProps = {
  day: string
  dayIcon: string
  dayDescription: string
  dayRain: string
  dayTemp: string
}

export type WeatherSummaryProps = {
  city: string
  cityIcon: string
  mainTemp: number
  weatherDiscription: string
  currentTime: number
}
