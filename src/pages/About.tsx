import Header from "../components/Header"
import "./About.css"

const profileName = "Wesal Ismail"
const role = "Software Engineering Student - Frontend Developer"
const aboutText =
  "This weather app helps you quickly check the day’s forecast, explore city details, and keep your favorite places close at hand."
const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wesal-ismail-410372330?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: <i className="bi bi-linkedin"></i>
  },
  {
    label: "GitHub",
    href: "https://github.com/we2004",
    icon: <i className="bi bi-github"></i>
  },
  {
    label: "Email",
    href: "mailto:wsalasmayl363@gmail.com",
    icon: <i className="bi bi-envelope-fill"></i>
  }
]

function About() {
  return (
    <>
      <Header
        icon={<i className="bi bi-house-fill"></i>}
        toHomePage={true}
      />
      <div className="page">
        <div className="about-page">
          <section className="about-card">
            <span className="about-badge">About this app</span>
            <h2 className="section-title about-title">Weather made simple</h2>
            <p className="about-text">{aboutText}</p>

            <div className="profile-card">
              <div>
                <h3>{profileName}</h3>
                <p>{role}</p>
              </div>
            </div>

            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default About
