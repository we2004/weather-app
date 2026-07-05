



function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">9eather</div>

        <div className="searchbar">
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
