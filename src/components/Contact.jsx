import { useState } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send("service_omfb07g", "template_e4lspjv", formData, "SpvOsCE3Ysn-qasFa")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <>
  
   <div className="heading-wrapper mb-4">
        <h3 style={{ fontWeight: "bold" }}>Get in Touch</h3>
      </div>

    <div
      className="container-fluid py-5"
      id="contact"
      style={{
        backgroundColor: "#f5deb3",
        color: "#000",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >


      <div className="container">
        <div className="row align-items-center">
          {/* LEFT SIDE - Contact Info & Socials */}
          <div className="col-lg-6 col-md-12 mb-4 text-start">
            <div style={{ padding: "20px" }}>
              <h3 className="mb-4 fw-bold" style={{color:"white"}}>Let's Connect</h3>
              <h5>
               <sapn style={{color:"#FFA500",fontWeight:"bold"}}>ADDRESS:{" "}</sapn> 
                <span style={{ fontWeight: "bold" }}>
                  17/16/13, KK Nagar, 3rd Street,<br/> Batlagundu, Dindigul - 624202
                </span>
              </h5>
              <h5 className="mt-3">
               <sapn style={{color:"#FFA500",fontWeight:"bold"}}>EMAIL:{" "}</sapn> 
                <span style={{ fontWeight: "bold" }}>rajsuriya606@gmail.com</span>
              </h5>
              <h5>
              <sapn style={{color:"#FFA500",fontWeight:"bold"}}> PHONE: </sapn>  <span style={{ fontWeight: "bold" }}>9597795673</span>
              </h5>

              <h3
                style={{
                  color:"white",
                  fontFamily: "Gugi",
                  fontSize: "large",
                  marginTop: "20px",
                }}
              >
                Check out my links below:
              </h3>

          <div className="d-flex gap-4 mt-3">
  <a
    href="https://www.linkedin.com/in/suriya-r-03a891264/"
    target="_blank"
    rel="noreferrer"
    className="social-icon linkedin"
  >
    <i className="fab fa-linkedin fa-2x"></i>
  </a>
  <a
    href="https://github.com/suriyar1410"
    target="_blank"
    rel="noreferrer"
    className="social-icon github"
  >
    <i className="fab fa-github fa-2x"></i>
  </a>
  <a href="mailto:rajsuriya606@gmail.com" className="social-icon gmail">
    <i className="fas fa-envelope fa-2x"></i>
  </a>
  <a
    href="https://www.instagram.com/__mr_suriya_/?hl=en"
    target="_blank"
    rel="noreferrer"
    className="social-icon instagram"
  >
    <i className="fab fa-instagram fa-2x"></i>
  </a>
</div>

            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="col-lg-6 col-md-12">
            <form
              onSubmit={handleSubmit}
              style={{
                background: "#fff",
                padding: "40px",
                borderRadius: "15px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              }}
            >
              <h3 className="mb-4 text-center fw-bold">Send a Message</h3>

              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: "#f7af21",
                  color: "#000",
                  fontWeight: "bold",
                  border: "none",
                }}
              >
                Send Message
              </button>

              {status && (
                <p className="mt-3 text-center" style={{ color: "#333" }}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>  </>
  );
}
