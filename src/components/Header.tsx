import React from "react"
import { NavLink } from "react-router-dom"
import "./Header.css"

type HeaderProps = {
  icon: React.ReactNode
  toHomePage: boolean
}
function Header({ icon, toHomePage }: HeaderProps) {
  return (
    <>
      <div className="header">
        <div className="logo">9eather</div>
        <NavLink to={toHomePage ? "/" : "/favorite"}>{icon}</NavLink>

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
