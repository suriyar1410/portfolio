import React from 'react'

function About() {
  return (
    <div className="container-fluid sec-section" id="about">
      {/* About Section */}
      <div className="heading-wrapper">
        <h3>About Me</h3>
      </div>

      <p className="about mt-2">
        Full Stack Developer specializing in <b>MEAN</b> & <b>MERN</b> stacks, skilled in 
        <b> Angular</b>, <b>React</b>, <b>Node.js</b>, and <b>Express</b>, with a focus on 
        building intuitive user interfaces, scalable architectures, and seamless 
        frontend-backend integration.
      </p>

      {/* Experience Section */}
      <div className="experience">
        <div className="heading-wrapper mt-5">
          <h3>Experience</h3>
        </div>

        <div className="row p-5 m-2">
          <div className="col-lg-8">
            
            {/* Shrika Institute of Creative Technology */}
            <p>
              <b>
                <span className="company">Shrika Institute of Creative Technology</span>
                <span className="position"> | Full Stack Trainee & Developer</span>
              </b>
              <ul>
                <li>Training in advanced frontend (<b>React, Angular</b>) and backend (<b>Node.js, Express, MongoDB, SQL</b>) technologies.</li>
                <li>Building and deploying full-stack projects focused on real-world business requirements.</li>
                <li>Collaborating on live projects to enhance problem-solving, scalability, and performance optimization.</li>
              </ul>
              <p><i>05/2025 – Present | Madurai, India</i></p>
            </p>

            {/* ARR INFOTECH */}
            <p className="mt-4">
              <b>
                <span className="company">ARR INFOTECH</span>
                <span className="position"> | Full Stack Developer</span>
              </b>
              <ul>
                <li>Developed the frontend for a travel booking mobile app using <b>Ionic with Angular</b>, ensuring a seamless and intuitive experience.</li>
                <li>Implemented complex UI features using <b>Angular</b> and <b>TypeScript</b>, optimizing performance and responsiveness.</li>
                <li>Built the frontend for a scalable web platform in Angular with high responsiveness and smooth navigation.</li>
                <li>
                  <b>ARR Holidays Website:</b> Designed and developed a dynamic website using <b>WordPress</b>, improving speed and mobile responsiveness.
                  <a href="https://arrholidays.com/" target="_blank" rel="noreferrer" className="ms-2">
                    View site
                  </a>
                </li>
              </ul>
              <p><i>02/2024 – 03/2025 | Madurai, India</i></p>
            </p>
            <p className="mt-4">
              <b>
                <span className="company">Premac Industries</span>
                <span className="position"> | Technical Support Engineer</span>
              </b>
              <ul>
                <li>Created visually appealing and user-friendly interfaces, enhancing usability and aesthetic appeal.</li>
                <li>Provided front-end technical support and implemented UI enhancements during product development.</li>
                <li>Troubleshot and resolved bugs using <b>C#</b> and <b>.NET</b> to improve system reliability and performance.</li>
              </ul>
              <p><i>05/2023 – 11/2023 | Coimbatore, India</i></p>
            </p>
          </div>

          <div className="col-lg-3 d-flex justify-content-center align-items-start">
            <img className="suriya " src="./assets/suriya2.jpeg" alt="Suriya" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
