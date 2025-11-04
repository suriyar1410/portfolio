import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const techData = {
  Frontend_Skills: [
    { name: "HTML", img: "../assets/html.png" },
    { name: "CSS", img: "../assets/css.png" },
    { name: "Bootstrap", img: "../assets/bootstrap.png" },
    { name: "Angular", img: "../assets/angular.png" },
    { name: "React", img: "../assets/react.png" },
    { name: "Tailwind", img: "../assets/tailwind.png" },
    { name: "TypeScript", img: "../assets/ts.png" },
    { name: "Ionic", img: "../assets/ionic.png" },
  ],
  Backend_Skills: [
    { name: "Node JS", img: "../assets/node.png" },
    { name: "Express JS", img: "../assets/express.png" },
    { name: "SQL", img: "../assets/sql.png" },
    { name: "MongoDB", img: "../assets/mongo.png" },
    { name: "C", img: "../assets/c.png" },
    { name: "Python", img: "../assets/python.png" },
  ],
  Misc_Skills: [
    { name: "Git", img: "../assets/git.png" },
    { name: "GitHub", img: "../assets/github.png" },
    { name: "CMD", img: "../assets/cmd.png" },
  ],
  CMS_Website_Creation:[
   { name: "Wix", img: "../assets/wix.png" },
   { name: "Wordpress", img: "../assets/wordpress.png" }
  ],
  Design_Software:[
   { name: "Photoshop", img: "../assets/ps.png" },
   { name: "CorelDraw", img: "../assets/corel.png" },
   { name: "Balsamiq", img: "../assets/Balsamiq.png" },
   { name: "Figma", img: "../assets/figma.png" }
  ],
  Languages: [
    { name: "JavaScript", img: "../assets/js.png" },
    { name: "C", img: "../assets/c.png" },
    { name: "Python", img: "../assets/python.png" },
  ],
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("Frontend_Skills");

  return (
    <div className="container my-5" id="skill">
      <div className="heading-wrapper text-center mb-4">
        <h3 > TECHNOLOGIES KNOWN </h3>
      </div>

      <div className="row back">
        <div className="col-md-3 mb-4">
          <div className="list-group">
            {Object.keys(techData).map((category) => (
              <button
                key={category}
                className={`list-group-item list-group-item-action ${
                  selectedCategory === category ? "active" : ""
                }`}
                style={{
                  backgroundColor:
                    selectedCategory === category ? "#f7af21" : "#ffffffff",
                  border: "2px solid #fff",
                  color: "#000000ff",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                }}
                onClick={() => setSelectedCategory(category)}
              >
                {category.replace("_", " ")}
              </button>
            ))}
          </div>
        </div>

        <div className="col-md-9">
          <div className="row justify-content-center">
            {techData[selectedCategory].map((tech) => (
              <div
                key={tech.name}
                className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center"
              >
                <div
                  className="skill-card"
                  style={{
                    border: "2px solid #f7af21",
                    borderRadius: "12px",
                    backgroundColor: "#ffffffff",
                    color: "#000000ff",
                    textAlign: "center",
                    width: "130px",
                    height: "130px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  <img
                    src={tech.img}
                    alt={tech.name}
                    style={{ width: "50px", height: "50px", marginBottom: "10px" }}
                  />
                  <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
