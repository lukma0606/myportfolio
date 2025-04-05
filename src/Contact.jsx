import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";


const Contact = () => {
  return (
    <section id="contact" className="centered-section contact-section">
     <h2 className="text-center">
        <span className="sub-heading-text">Contact</span>
      </h2>
      <div className="contact-grid">
        <div className="contact-item">
        <FaEnvelope style={{ fontSize: "35px" }}/>

          <a href="mailto:your.email@example.com">shaikhlukman0606@gmail.com</a>
        </div>

        <div className="contact-item">
        <FaPhoneAlt style={{ fontSize: "35px" }}/>


          <a href="tel:+1234567890">9867010752</a>
        </div>

        <div className="contact-item">
        <FaLinkedin style={{ fontSize: "35px" }}/>
          <a href="www.linkedin.com/in/lukmanshaikh0606" target="_blank" rel="noopener noreferrer">
            Lukman Shaikh
          </a>
        </div>

        <div className="contact-item">
          {/* <FaMapMarkerAlt className="contact-icon" /> */}
          <FaAddressBook style={{ fontSize: "35px" }}/>
          <span>Thane, Kausa 400612</span>
        </div>

    
      </div>
 
  </section>
  )
}

export default Contact
