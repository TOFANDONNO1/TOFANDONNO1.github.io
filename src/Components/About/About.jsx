import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import profile from "../../Assests/myProfile.jpg";
import ResumeButton from "../../Resume/Resume";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2>About Me</h2>
          <p>
            I am a passionate web developer with experience in building
            full-stack applications. My journey in coding started with a deep
            curiosity for how things work, and it has blossomed into a
            fulfilling career. I enjoy solving complex problems, learning new
            technologies, and working on exciting projects.
          </p>
          <p>
            Skilled in JavaScript, React, Node.js, and MongoDB, I have built
            multiple projects that demonstrate my ability to create scalable and
            efficient applications. I’m always open to new opportunities and
            collaborations.
          </p>
         <ResumeButton/>
        </motion.div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={profile}
            alt="About Me"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
