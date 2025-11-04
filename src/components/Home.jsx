import { useEffect, useState, useRef } from "react";
import "../App.css";
import Projects from "./Project";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
function Home() {
  const titles = [
    " Full Stack Developer",
    " MEAN Stack Developer",
    " MERN Stack Developer",
    " Graphic Designer",
  ];

  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const squaresRef = useRef([]);


  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % titles.length;
      setCurrentTitle(titles[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) el.classList.add("in-view");
          else el.classList.remove("in-view");
        });
      },
      { threshold: 0.3 }
    );
    squaresRef.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);


  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bungee" id="home">
        <div className="container-fluid">
          <a className="navbar-brand" style={{color:"#FFA500"}}> Suriya's portfolio </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" onClick={() => scrollToSection("home")}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection("about")}>About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection("skill")}>Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection("project")}>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection("contact")}>Contact</a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center ms-auto social-nav-icons">
            <a href="https://www.linkedin.com/in/suriya-r-03a891264/" target="_blank" className="nav-icon linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/suriyar1410" target="_blank" className="nav-icon github">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:rajsuriya606@gmail.com" className="nav-icon gmail">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.instagram.com/__mr_suriya_/?hl=en" target="_blank" className="nav-icon instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container-fluid hero-section">
        <div className="hero-image-wrapper">
          <img src="/assets/homephoto.jpeg" alt="Home" className="profile-img" />
          <h1 className="hero-text-overlay">
            I am a <span>{currentTitle}</span>
            <div>
            <a href="https://drive.google.com/file/d/1kixmvOFV5F5skZ-3_u0APolzFr0PPqYQ/view?usp=drivesdk"
            className="cv-btn"> Click here to download CV </a>
            </div>
          </h1>
        </div>
      </div>



        <About/>
        <Skills/>
        <Projects/>
        <Contact/> 


        
      <button id="backToTopBtn" title="Go to top" onClick={() => scrollToSection("home")}>
        <i className="fas fa-arrow-up"></i>
      </button>

      <div className="empty"></div>
    </>
  );
}

export default Home;
