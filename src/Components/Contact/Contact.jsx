import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-heading">Contact Me</h2>
      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Get in Touch</h3>
          <ul className="contact-info-list">
            <li>
              <FaEnvelope className="contact-icon" />{" "}
              <a href="mailto:ranjansoumya413@gmail.com">
                ranjansoumya413@gmail.com
              </a>
            </li>
            <li>
              <FaPhone className="contact-icon" />{" "}
              <a href="tel:8249385352">8249385352</a>
            </li>
            <li>
              <FaGithub className="contact-icon" />{" "}
              <a
                href="https://github.com/TOFANDONNO1"
                target="_blank"
                rel="noopener noreferrer"
              >
                TOFANDONNO1
              </a>
            </li>
            <li>
              <FaLinkedin className="contact-icon" />{" "}
              <a
                href="https://www.linkedin.com/in/soumya-ranjan-rout-842169222/"
                target="_blank"
                rel="noopener noreferrer"
              >
                soumya-ranjan
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="form-title">Contact Form</h3>
          <form
            className="contact-form"
            action="https://getform.io/f/477b9729-85ff-4e24-846e-b0c675acfd13" /* Use Formspree or similar service */
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="6"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
