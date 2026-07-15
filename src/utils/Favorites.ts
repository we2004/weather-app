import { type FavoriteCityData } from "../types/weather"

//read the favorite cities list from local storage
export const getFavoriteCityList = (): FavoriteCityData[] => {
  return JSON.parse(localStorage.getItem("favoriteCities") || "[]")
}

export const addCityToStorage = (citiesList: FavoriteCityData[]) => {
  localStorage.setItem("favoriteCities", JSON.stringify(citiesList))
}

