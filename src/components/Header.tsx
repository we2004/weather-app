import React from "react"
import { NavLink, useNavigate, useSearchParams } from "react-router-dom"
import { useState } from "react"
import "./Header.css"

type HeaderProps = {
  icon: React.ReactNode
  toHomePage: boolean
}
function Header({ icon, toHomePage }: HeaderProps) {
  const link = toHomePage ? "/" : "/favorite"
  const iconClass = toHomePage ? "home-icon" : "fav-icon"

  const [searchParams] = useSearchParams()
  const search = searchParams.get("search")
  const [searchInput, setSearchInput] = useState(search || "")
  const navigate = useNavigate()

  //to update the city name as the user is typing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  //to display a city when the user clicks the search button
  const getCityWeather = () => {
    navigate(`/?search=${searchInput}`)
  }

  //to display a city when the user clicks enter
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      
      getCityWeather()

    }
  }

  return (
    <>
      <div className="header">
        <div className="logo">9eather</div>
        <NavLink
          to={link}
          className={iconClass}
        >
          {icon}
        </NavLink>

        <NavLink
          to="/about"
          className="about-icon"
        >
          <i className="bi bi-info-circle"></i>
        </NavLink>

        <div className="search-bar">
          <input
            type="search"
            placeholder="Search City"
            value={searchInput}
            onChange={handleInputChange}
            onKeyDown={handleEnterKey}
          />
          <button className="search-btn" onClick={getCityWeather}>
            <i
              className="bi bi-search"
              
            ></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
