
import React from "react"
import "./Header.css"

type HeaderProps = {
  icon: React.ReactNode
}
function Header({icon} : HeaderProps) {
  return (
    <>
      <div className="header">
        <div className="logo">9eather</div>
        {icon}
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
