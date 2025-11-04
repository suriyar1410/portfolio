import { useState } from "react";
import '../App.css'
export default function Project() {
  const [selectedType, setSelectedType] = useState("Big Projects");

  const projects = {
    "Big Projects": [
      {
        title: "TODO APP-MERN",
        img: "../assets/project/Todo.png",
        link: "https://tiny-mermaid-3e47c0.netlify.app/",
      },
      {
        title: "Contact-Book",
        img: "../assets/project/CB.png",
        link: "https://contact-book-1-ep8b.onrender.com/",
      },
      {
        title: "Blog Website-MERN",
        img: "../assets/project/Blog.png",
        link: "https://your-blog-site.com",
      },
      //  {
      //   title: "Ecommerce-MEAN",
      //   img: "../assets/project/Blog.png",
      //   link: "https://your-blog-site.com",
      // },
    ],
    "Small Projects": [
      {
        title: "Rock Paper Scissor",
        img: "../assets/project/RPC.png",
        link: "https://suriyar1410.github.io/Rock-Paper-Scissors/",
      },
      {
        title: "Expense Tracker",
        img: "../assets/project/ET.png",
        link: "https://suriyar1410.github.io/Expense-tracker/",
      },
      {
        title: "Weather App",
        img: "../assets/project/Weather API.png",
        link: "https://suriyar1410.github.io/weather-API/",
      },
      {
        title: "Ecom Website",
        img: "../assets/project/Ecom.png",
        link: "https://suriyar1410.github.io/E-com-website/",
      },
      {
        title: "Dog API",
        img: "../assets/project/Dog API.png",
        link: "https://suriyar1410.github.io/Dog-API/",
      },
      {
        title: "Photography Site",
        img: "../assets/project/pic.png",
        link: "https://suriyar1410.github.io/photography-site/",
      },
      {
        title: "Calculator App",
        img: "../assets/project/NC.png",
        link: "https://suriyar1410.github.io/calculator/",
      },
      {
        title: "Digital Clock",
        img: "../assets/project/DC.png",
        link: "https://suriyar1410.github.io/Digital-clock/",
      },
    ],
  };

  return (
  <>
      <div className="heading-wrapper mb-4"  id="project">
        <h2 style={{ fontWeight: "bold", fontFamily: "Gugi" }}>Explore My Recent Projects</h2>
      </div>

      <div className="d-flex justify-content-center mb-4">
        {Object.keys(projects).map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className="btn mx-2"
            style={{
              backgroundColor:
                selectedType === type ? "#FF8C00" : "transparent",
              color: selectedType === type ? "#fff" : "#000",
              border: "2px solid #ffffffff",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize:"20px",
              padding: "15px 20px",
              transition: "all 0.3s ease",
            }}
          >
            {type}
          </button>
        ))}
      </div>

      <div
  style={{
    width: "50%",
    height: "1px",
    backgroundColor: "#FF8C00",
    borderRadius: "2px",
    margin: "0 auto 20px auto",
  }}
></div>
  <div className="container py-5 text-center"
      style={{color: "#000",height: "60vh",
     overflowY: "auto",overflowX: "hidden", marginBottom:"50px",
    padding: "20px",    scrollbarWidth: "auto",
    scrollbarColor: "#FF8C00 transparent" }} >
      <div className="container">
        <div className="row justify-content-center">
          {projects[selectedType].map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center" >
              <div
                  className="card project-card" style={{width: "18rem",
                  border: "2px solid #000",
                  borderRadius: "12px",
                  backgroundColor: "#fff8e1", 
                  color: "#000",
                  boxShadow: "0 6px 10px rgba(0,0,0,0.3)",
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                }}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" >
                  <img src={project.img}  className="card-img-top" alt={project.title}
                    style={{ height: "200px", objectFit: "cover", cursor: "pointer", }} /> </a>

                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#000" }}>{project.title} </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div></>
  );
}
