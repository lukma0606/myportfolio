import React from 'react'
import { Fade } from "react-awesome-reveal";


const Hero = () => {
  
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section">
        <div className='hero-main-div'>
            {/* <img src="/images/DumyImage.jpg" alt="" width='200px' height='200px'/> */}
          <Fade bottom cascade>
          <h1 className='heading-text'>Hi, I'm Lukman Shaikh</h1>
         </Fade>
      <Fade delay={500}>
        <p className='job-heading-text'>React Developer | JavaScript Enthusiast</p>
      </Fade>
     
        <button  onClick={() => scrollToSection("projects")}  className="work-btn pointer">
         View work
        </button>
     
      </div>
  </section>
  )
}

export default Hero
