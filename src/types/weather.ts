import React from "react"

export type WeatherSingleCardProps = {
  icon: React.ReactNode
  title: string
  value: number
  temp?: boolean
}

export type SingleCardData = {
  mainTemp: number
  feelLike: number
  humidity: number
  pressure: number
  speed: number
  cloud: number
  visibility: number
}

export type WeatherDoubleCardProps = {
  topIcon: React.ReactNode
  topValue: string
  bottomIcon: React.ReactNode
  bottomValue: string
  temp?: boolean
}

export type DoubleCardData = {
  minTemp: number
  maxTemp: number
  sunrise: number
  sunset: number
}

export type ForecastDayCardProps = {
  day: string
  dayIcon: string
  dayDescription: string
  dayRain: string
  dayTemp: string
}

export type ForecastData = Omit<WeatherSummaryProps, "city" | 'currentTime'> & { rain: number, currentTime:number }

export type ForecastApiItem = {
  dt: number
  temp: {
    day: number
  }
  weather: {
    main: string
    description: string
    icon: string
  }[]
  rain: number
}

export type WeatherSummaryProps = {
  city: string
  cityIcon: string
  mainTemp: number
  weatherDiscription: string
  currentTime: string
}
