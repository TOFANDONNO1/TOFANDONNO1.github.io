import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Skills.css";
import express from "../../Assests/Express.png";
import git from "../../Assests/git.png";
import node from "../../Assests/Node.js.png";
import REACT from "../../Assests/React.png";
import MUI from "../../Assests/MaterialUi.png";
import MONGOOSE from "../../Assests/mongoose.png";
import REDUX from "../../Assests/Redux.png";
import css from "../../Assests/CSS.png";
import js from "../../Assests/js.png";
import github from "../../Assests/github.png";
import html from "../../Assests/html.png";
import mongodb from "../../Assests/mongodb.png";
import vscode from "../../Assests/vscode.png";
import Docker from "../../Assests/docker.png";
import Npm from "../../Assests/npm.png";
import CodePen from "../../Assests/codepen.png";
import BootStrap from "../../Assests/bootstrap.png";
import Slack from "../../Assests/slack.png";
import ChakraUI from "../../Assests/chackraUI.png";
import Postman from "../../Assests/postman.png";
import Thunderclient from "../../Assests/thunderclient.png";
import redis from "../../Assests/redis.png";
import nextjs from "../../Assests/nextjs.png";
// Use correct paths or imports for images
const skillsData = [
  { name: "HTML5", category: "Frontend", imgSrc: html },
  { name: "CSS", category: "Frontend", imgSrc: css },
  { name: "JavaScript", category: "Frontend", imgSrc: js },
  { name: "React", category: "Frontend", imgSrc: REACT },
  { name: "NextJS", category: "Frontend", imgSrc: nextjs },

  { name: "Node.js", category: "Backend", imgSrc: node },
  { name: "Express", category: "Backend", imgSrc: express },
  { name: "MongoDB", category: "Tech Stacks", imgSrc: mongodb },
  { name: "GitLens", category: "Tools", imgSrc: git },
  { name: "GitHub", category: "Tools", imgSrc: github },
  { name: "VsCode", category: "Tools", imgSrc: vscode },
  { name: "Redux", category: "Tools", imgSrc: REDUX },
  { name: "Mongoose", category: "Tools", imgSrc: MONGOOSE },
  { name: "MaterialUI", category: "Tools", imgSrc: MUI },

  { name: "Docker", category: "Tools", imgSrc: Docker },
  { name: "Npm", category: "Tech Stacks", imgSrc: Npm },
  { name: "CodePen", category: "Tools", imgSrc: CodePen },
  { name: "Bootstrap", category: "Frontend", imgSrc: BootStrap },
  { name: "Slack", category: "Tech Stacks", imgSrc: Slack },
  {
    name: "Chakra UI",
    category: "Frontend",
    imgSrc: ChakraUI,
  },
  { name: "Postman", category: "Tools", imgSrc: Postman },
  { name: "Thunder Client", category: "Tools", imgSrc: Thunderclient },
  { name: "redis", category: "Backend", imgSrc: redis },

];

const categories = ["All", "Frontend", "Backend", "Tech Stacks", "Tools"];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const sectionRef = useRef(null);
  const { inView } = useInView({
    ref: sectionRef,
    triggerOnce: true,
    threshold: 0.2,
  });

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <h2 className="section-title">Skills</h2>

      <div className="skills-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        className="skills-container"
        initial={{ opacity: 1000 }}
        // animate={{ opacity: inView ? 1000 : 0 }}
        // transition={{ duration: 5 }}
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 1000, y: 50 }}
            animate={{ opacity: inView ? 1000 : 1000, y: inView ? 1000 : 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <img src={skill.imgSrc} alt={skill.name} className="skill-image" />
            <p className="skill-name">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
