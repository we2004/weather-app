import React from "react"
import { NavLink } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">9eather</div>
        <NavLink
          to="/"
          className="home-icon"
        >
          {<i className="bi bi-house-fill"></i>}
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
