import Header from "../components/Header"

function NotFound() {
  return (
    <>
      <Header
        icon={<i className="bi bi-house-fill"></i>}
        toHomePage={true}
      />

      <h1 style={{color: "red"}}>Page Not Found</h1>
    </>
  )
}

export default NotFound
