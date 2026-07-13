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
  dayCloud: number
  dayTemp: number
}

export type ForecastApiItem = {
  dt: number
  main: {
    temp: number
  }
  weather: {
    main: string
    description: string
    icon: string
  }[]
  clouds: {
    all: number
  }
}

export type WeatherSummaryProps = {
  city: string
  cityIcon: string
  mainTemp: number
  weatherDiscription: string
  currentTime: string
  backgroundImageUrl:string
}

export type WeatherSummaryData = Omit<WeatherSummaryProps, 'backgroundImageUrl'>

export type FavoriteCityData = {
  city: string
  time: string
  description: string
  temp: number
  backgroundImageUrl:string
}

export type FavoriteCityCardProps = FavoriteCityData & {
  onRemove: (event: React.MouseEvent<HTMLButtonElement>, city: string) => void
  backgroundImageUrl:string
}
