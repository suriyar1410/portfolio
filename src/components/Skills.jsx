import { useState } from "react";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import bootstrapImg from "../assets/bootstrap.png";
import angularImg from "../assets/angular.png";
import reactImg from "../assets/react.png";
import tailwindImg from "../assets/tailwind.png";
import tsImg from "../assets/ts.png";
import ionicImg from "../assets/ionic.png";
import vite from "../assets/vite.png";

import nodeImg from "../assets/node.png";
import expressImg from "../assets/express.png";
import sqlImg from "../assets/sql.png";
import mongoImg from "../assets/mongo.png";
import cImg from "../assets/c.png";
import pythonImg from "../assets/python.png";

import gitImg from "../assets/git.png";
import githubImg from "../assets/github.png";
import cmdImg from "../assets/cmd.png";

import wixImg from "../assets/wix.png";
import wordpressImg from "../assets/wordpress.png";

import psImg from "../assets/ps.png";
import corelImg from "../assets/corel.png";
import balsamiqImg from "../assets/Balsamiq.png";
import figmaImg from "../assets/figma.png";

import jsImg from "../assets/js.png";

const techData = {
  Frontend_Skills: [
    { name: "HTML", img: htmlImg },
    { name: "CSS", img: cssImg },
    { name: "Bootstrap", img: bootstrapImg },
    { name: "Angular", img: angularImg },
    { name: "React", img: reactImg },
    { name: "Tailwind", img: tailwindImg },
    { name: "TypeScript", img: tsImg },
    { name: "Ionic", img: ionicImg },
    { name: "JavaScript", img: jsImg },
    { name: "Vite", img: vite },
  ],
  Backend_Skills: [
    { name: "Node JS", img: nodeImg },
    { name: "Express JS", img: expressImg },
    { name: "SQL", img: sqlImg },
    { name: "MongoDB", img: mongoImg },
  ],
  Misc_Skills: [
    { name: "Git", img: gitImg },
    { name: "GitHub", img: githubImg },
    { name: "CMD", img: cmdImg },
  ],
    CMS_Website_Creation: [
    { name: "Wix", img: wixImg },
    { name: "Wordpress", img: wordpressImg },
  ],
  Design_Software: [
    { name: "Photoshop", img: psImg },
    { name: "CorelDraw", img: corelImg },
    { name: "Balsamiq", img: balsamiqImg },
    { name: "Figma", img: figmaImg },
  ],
  Languages: [
    { name: "JavaScript", img: jsImg },
    { name: "C", img: cImg },
    { name: "Python", img: pythonImg },
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
                className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4 d-flex justify-content-center"
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
