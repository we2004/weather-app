import React from "react"
import { NavLink } from "react-router-dom"
import "./Header.css"

type HeaderProps = {
  icon: React.ReactNode
  toHomePage: boolean
}
function Header({ icon, toHomePage }: HeaderProps) {
  const link = toHomePage ? "/" : "/favorite"
  const iconClass = toHomePage ? "home-icon" : "fav-icon"

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
          />
          <i className="bi bi-search"></i>
        </div>
      </div>
    </>
  )
}

export default Header