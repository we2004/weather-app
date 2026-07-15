import React from "react"

//domain models
export type WeatherSummaryData = {
  city: string
  country: string
  cityIcon: string
  mainTemp: number
  weatherDiscription: string
  currentTime: string
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

export type DoubleCardData = {
  minTemp: number
  maxTemp: number
  sunrise: number
  sunset: number
}

export type FavoriteCityData = {
  city: string
  country: string
  currentTime: string
  weatherDiscription: string
  mainTemp: number
  backgroundImageUrl: string
}

//api
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

//components
export type WeatherSingleCardProps = {
  icon: React.ReactNode
  title: string
  value: number
  temp?: boolean
}

export type WeatherDoubleCardProps = {
  topIcon: React.ReactNode
  topValue: string
  bottomIcon: React.ReactNode
  bottomValue: string
  temp?: boolean
}

export type ForecastDayCardProps = {
  day: string
  dayIcon: string
  dayDescription: string
  dayCloud: number
  dayTemp: number
}

export type WeatherSummaryProps = WeatherSummaryData & {
  backgroundImageUrl: string
  onFavorite: (favoriteCityData: FavoriteCityData) => void
  favoriteCityList: FavoriteCityData[]
}

export type FavoriteCityCardProps = FavoriteCityData & {
  onRemoveFavorite: (city: string) => void
}

export type WeatherDashboardProps = {
  onFavorite: (favoriteCityData: FavoriteCityData) => void
  favoriteCityList: FavoriteCityData[]
}

export type FavoriteCityProps = {
  onRemoveFavorite: (city: string) => void
  favoriteCityList: FavoriteCityData[]
}
