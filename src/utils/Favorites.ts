import { type FavoriteCityData } from "../types/weather"

//read the favorite cities list from local storage
export const getFavoriteCityList = (): FavoriteCityData[] => {
  return JSON.parse(localStorage.getItem("favoriteCities") || "[]")
}

export const addCityToStorage = (citiesList: FavoriteCityData[]) => {
  localStorage.setItem("favoriteCities", JSON.stringify(citiesList))
}

//checks if a specific city exists or not
export const checkCityExist = (cardCity: string): boolean => {
  const favoriteCityList = getFavoriteCityList()
  return favoriteCityList.some((cityInfo) => cityInfo.city === cardCity)
}

//remove city from favorites
export const removeCityFromStorage = (
  city: string,
  citiesList: FavoriteCityData[]
) => {
  const newList = citiesList.filter((cityInfo) => cityInfo.city !== city)
  addCityToStorage(newList)
}
