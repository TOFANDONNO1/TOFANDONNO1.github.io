import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Project.css";
import Slider from "react-slick";
import knockit1 from "../../Assests/ProjectsImg/KnockIT1.png";
import knockit2 from "../../Assests/ProjectsImg/KnockIT2.png";
import knockit3 from "../../Assests/ProjectsImg/KnockIT3.png";
import knockit4 from "../../Assests/ProjectsImg/KnockIT4.png";
import Gudu1 from "../../Assests/ProjectsImg/Gudu1.png";
import Gudu2 from "../../Assests/ProjectsImg/Gudu2.png";
import Gudu3 from "../../Assests/ProjectsImg/Gudu3.png";
import Gudu4 from "../../Assests/ProjectsImg/Gudu4.png";
import Health1 from "../../Assests/ProjectsImg/Health1.png";
import Health2 from "../../Assests/ProjectsImg/Health2.png";
import Health3 from "../../Assests/ProjectsImg/Health3.png";
import Health4 from "../../Assests/ProjectsImg/Health4.png";

const projectsData = [
  {
    title: "KnockIT",
    description:
      "Food delivery website is an online platform that connects users with local restaurants and eateries, allowing them to browse menus, place orders, and have food delivered directly to their doorstep. The website typically features an intuitive interface with user-friendly navigation, enabling customers to search for restaurants by location, cuisine, or specific dishes.",
    techStack:
      "React JS | FireBase | Bootstrap | Axios | NodeJS | MongoDB | ExpressJs",
    images: [knockit1, knockit2, knockit3, knockit4],
    githubLink: "https://github.com/TOFANDONNO1/KnockIT",
    demoLink: "https://startling-cannoli-29d0b7.netlify.app/",
  },
  {
    title: "GuddusDryFrutes",
    description:
      "Dry fruits website is an e-commerce platform dedicated to offering a wide variety of premium-quality dry fruits, nuts, and seeds to health-conscious consumers. The website provides an easy-to-navigate interface where users can explore an extensive range of products, including almonds, walnuts, cashews, raisins, pistachios, dates, and exotic dried fruits.",
    techStack:
      "React JS | Redux | Node JS | MongoDB | ExpressJS | Material UI ",
    images: [Gudu1, Gudu2, Gudu3, Gudu4],
    githubLink: "https://github.com/TOFANDONNO1/GuddusDryFrutes",
    demoLink: "https://clinquant-maamoul-9ccde9.netlify.app/allproductpage",
  },
  {
    title: "Healthyway stay healthy",
    description:
      " comprehensive nutrition tracking app on earth. our nutritional data is curated from verified, accurate sources.",
    techStack:
      "react | react-router | react-redux | jsx | chackra-ui | css  | mongodb | cyclic",
    images: [Health1, Health2, Health3, Health4],

    githubLink: "https://github.com/somesh9870/slow-argument-2201",
    demoLink: "https://healthy-way.vercel.app/",
  },
  // Add more projects as needed
];

const Project = ({ project, isEven }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <motion.div
      className={`project-wrapper ${isEven ? "project-even" : "project-odd"}`}
      ref={ref}
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : isEven ? 50 : -50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="project-slider">
        <Slider {...sliderSettings}>
          {project.images.map((image, imgIndex) => (
            <div key={imgIndex}>
              <img
                src={image}
                alt={`Slide ${imgIndex + 1}`}
                className="project-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="project-details">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tech">{project.techStack}</p>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          <a
            href={project.githubLink}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={project.demoLink}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      {projectsData.map((project, index) => (
        <Project key={index} project={project} isEven={index % 2 === 0} />
      ))}
    </section>
  );
};

export default Projects;
