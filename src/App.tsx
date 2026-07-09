import { Routes, Route } from "react-router-dom"
import WeatherDashboard from "./pages/WeatherDashboard"
import FavoriteCity from "./pages/FavoriteCity"
import About from "./pages/About"

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

      <Route
        path="about"
        element={<About />}
      />
    </Routes>
  )
}

export default App
