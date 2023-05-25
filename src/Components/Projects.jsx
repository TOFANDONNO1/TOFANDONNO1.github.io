import React, { useState } from 'react';
import { VscGithub } from 'react-icons/vsc';
import { FaEye } from 'react-icons/fa';
import { TbChevronsLeft } from 'react-icons/tb';
import { TbChevronsRight } from 'react-icons/tb';

let projects = [
  {
    id: 0,
    img: 'cultfit.png',
    title: 'At cult.fit, we make group workouts fun',
    discription:
      'This is fitnesswebpage authentication and authorization full Stack Project (Frontend ).',
    tags: ['HTML', 'css'],
    repolink: 'https://github.com/TOFANDONNO1/serene-scarecrow-3205',
    livelink: 'https://shiny-longma-e9ae48.netlify.app/',
  },
  {
    id: 1,
    img: 'foodmeat.png',
    title: 'E-commerce store meat and othe masala product',
    discription:
    'At FoodMeat product is handpicked by a team with years of experience.',
    tags: ['react', 'react-router',"scss", 'css'],
    repolink: 'https://github.com/TOFANDONNO1/FoodMeat',
    livelink: 'https://foodmeatwebsitsoumya.netlify.app/',
  },
  {
    id: 2,
    img: 'healthyway.png',
    title: 'Healthyway stay healthy',
    discription:
      ' comprehensive nutrition tracking app on earth. our nutritional data is curated from verified, accurate sources.',
    tags: ['react', 'react-router','react-redux', 'jsx','chackra-ui', 'css','mongodb','cyclic'],
    repolink: 'https://github.com/somesh9870/slow-argument-2201',
    livelink: 'https://healthy-way.vercel.app/',
  },
  {
    id: 3,
    img: 'thehindu.png',
    title: 'New Paper in Online Read ',
    discription:
      'Todays News Headlines, Breaking News & Latest News from India and World.',
    tags: ["html", 'css'],
    repolink: 'https://github.com/TOFANDONNO1/bright-stamp-7114',
    livelink: 'https://phenomenal-nasturtium-9dbe90.netlify.app/',
  }
];

function Projects() {
  let num;
  if (window.outerWidth <= 480) {
    num = 1;
  } else if (window.outerWidth > 480 && window.outerWidth <= 768) {
    num = 2;
  } else {
    num = 3;
  }
  const [count, setCount] = useState(0);

  const [frontProjects, setFrontProjects] = useState(() => {
    let arr = [];
    for (let i = count; i < count + num; i++) {
      arr.push(projects[i]);
    }
    // console.log(arr);
    return arr;
  });
  // console.log(frontProjects);

  function handleLeft() {
    setCount((prevState) => {
      if (count > 0) {
        return prevState - 1;
      } else {
        return 0;
      }
    });

    setFrontProjects(() => {
      let arr = [];
      for (let i = count; i < count + num; i++) {
        arr.push(projects[i]);
      }
      // console.log(arr);
      return arr;
    });
  }

  function handleRight() {
    setCount((prevState) => {
      if (count < projects.length - num) {
        return prevState + 1;
      } else {
        return projects.length - num;
      }
    });

    setFrontProjects(() => {
      let arr = [];
      for (let i = count; i < count + num; i++) {
        arr.push(projects[i]);
      }
      // console.log(arr);
      return arr;
    });
  }

  return (
    <>
      <section className='projects' id='projects'>
        <h2> <u>Projects</u> </h2>
        <div className='project-box mn-sm-center ' >
          {frontProjects && frontProjects.map((item, index) => {
            return (
              <div
                className='flex-30 project-item sm-flex-45 mn-sm-bet project-card'
                key={index}
                
              >
                <div className="project-card">
                  <figure className='figure'>
                    <img
                      className='full-width'
                      src={`./assets/projects/${item.img}`}
                      alt=''
                    />
                  </figure>
                  <h3  className='project-name project-title'> {item.title}</h3>
                  <p  className='project-description discription'>{item.discription} </p>
                  <div className='tag-box project-tech-stack' style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", marginTop: "25px" }}>
                    {item.tags.map((tag) => {
                      return <button style={{ borderRadius: "10px", backgroundColor: "rgba(193, 32, 32, 0.5)", color: "white", padding: "4px" }} key={tag}> {tag.toUpperCase()}</button>;
                    })}
                  </div>
                  <div className='repolink-box' >
                    <abbr title='Go To Repository' className="project-github-link">
                      <a href={item.repolink} target='blank'>
                        <VscGithub />
                      </a>
                    </abbr>
                    <abbr title='Go To Live Demo'  className="project-deployed-link">
                      <a href={item.livelink} target='blank'>
                        {item.tags.includes('css') ? <FaEye /> : ''}
                      </a>
                    </abbr>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <TbChevronsLeft
          className='left sm-left mn-left '
          onClick={handleLeft}
        />
        <TbChevronsRight
          className='right  sm-right mn-right'
          onClick={handleRight}
        />
      </section>
    </>
  );
}

export default Projects;














