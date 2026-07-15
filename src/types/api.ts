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

export type CurrentWeatherApiResponse = {
    weather : [{
        description: string
        icon: string
    }]
    main : {
        temp: number
        feels_like: number
        humidity: number
        pressure: number
        temp_min: number
        temp_max: number
    }
    sys : {
        country: string
        sunrise: number
        sunset: number
    }
    wind: {
        speed: number
    }
    dt: number
    name: string
    clouds: {
        all: number
    }
    visibility: number
}