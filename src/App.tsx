import { Routes, Route } from "react-router-dom"
import WeatherDashboard from "./pages/WeatherDashboard"
import FavoriteCity from "./pages/FavoriteCity"
function App() {
  return (
    <Routes>
      <Route
        index
        element={<WeatherDashboard />}
      />

      <Route
        path="favorite"
        element={<FavoriteCity />}
      />
    </Routes>
  )
}

export default App
