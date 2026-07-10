import { Routes, Route } from "react-router-dom"
import WeatherDashboard from "./pages/WeatherDashboard"
import About from "./pages/About"

function App() {
  return (
    <Routes>
      <Route
        index
        element={<WeatherDashboard />}
      />

      <Route
        path="about"
        element={<About />}
      />
    </Routes>
  )
}

export default App
