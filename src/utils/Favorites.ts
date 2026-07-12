import { type FavoriteCityCardProps } from "../types/weather"

//read the favorite cities list from local storage
export const getFavoriteCityList = (): FavoriteCityCardProps[] => {
  return JSON.parse(localStorage.getItem("favoriteCities") || "[]")
}

export const addCityToStorage = (citiesList: FavoriteCityCardProps[]) => {
  localStorage.setItem("favoriteCities", JSON.stringify(citiesList))
}

//checks if a specific city exists or not
export const checkCityExist = (cardCity: string): boolean => {
  const favoriteCityList = getFavoriteCityList()
  return favoriteCityList.some((cityInfo) => cityInfo.city === cardCity)
}

//remove city from favorites
export const removeCityFromStorage = (city: string, citiesList: FavoriteCityCardProps[]) => {
  const newList = citiesList.filter((cityInfo) => cityInfo.city !== city)
  addCityToStorage(newList)
}
