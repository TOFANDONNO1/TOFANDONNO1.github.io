// import React, { useState } from 'react';
// import { VscGithub } from 'react-icons/vsc';
// import { FaEye } from 'react-icons/fa';
// import { TbChevronsLeft } from 'react-icons/tb';
// import { TbChevronsRight } from 'react-icons/tb';

// let projects = [
//   {
//     id: 0,
//     img: 'cultfit.png',
//     title: 'At cult.fit, we make group workouts fun',
//     discription:
//       'This is fitnesswebpage authentication and authorization full Stack Project (Frontend ).',
//     tags: ['HTML', 'css'],
//     repolink: 'https://github.com/TOFANDONNO1/serene-scarecrow-3205',
//     livelink: 'https://shiny-longma-e9ae48.netlify.app/',
//   },
//   {
//     id: 1,
//     img: 'foodmeat.png',
//     title: 'E-commerce store meat and othe masala product',
//     discription:
//     'At FoodMeat product is handpicked by a team with years of experience.',
//     tags: ['react', 'react-router',"scss", 'css'],
//     repolink: 'https://github.com/TOFANDONNO1/FoodMeat',
//     livelink: 'https://foodmeatwebsitsoumya.netlify.app/',
//   },
//   {
//     id: 2,
//     img: 'healthyway.png',
//     title: 'Healthyway stay healthy',
//     discription:
//       ' comprehensive nutrition tracking app on earth. our nutritional data is curated from verified, accurate sources.',
//     tags: ['react', 'react-router','react-redux', 'jsx','chackra-ui', 'css','mongodb','cyclic'],
//     repolink: 'https://github.com/somesh9870/slow-argument-2201',
//     livelink: 'https://healthy-way.vercel.app/',
//   },
//   {
//     id: 3,
//     img: 'thehindu.png',
//     title: 'New Paper in Online Read ',
//     discription:
//       'Todays News Headlines, Breaking News & Latest News from India and World.',
//     tags: ["html", 'css'],
//     repolink: 'https://github.com/TOFANDONNO1/bright-stamp-7114',
//     livelink: 'https://phenomenal-nasturtium-9dbe90.netlify.app/',
//   }
// ];

// function Projects() {
//   let num;
//   if (window.outerWidth <= 480) {
//     num = 1;
//   } else if (window.outerWidth > 480 && window.outerWidth <= 768) {
//     num = 2;
//   } else {
//     num = 3;
//   }
//   const [count, setCount] = useState(0);

//   const [frontProjects, setFrontProjects] = useState(() => {
//     let arr = [];
//     for (let i = count; i < count + num; i++) {
//       arr.push(projects[i]);
//     }
//     // console.log(arr);
//     return arr;
//   });
//   // console.log(frontProjects);

//   function handleLeft() {
//     setCount((prevState) => {
//       if (count > 0) {
//         return prevState - 1;
//       } else {
//         return 0;
//       }
//     });

//     setFrontProjects(() => {
//       let arr = [];
//       for (let i = count; i < count + num; i++) {
//         arr.push(projects[i]);
//       }
//       // console.log(arr);
//       return arr;
//     });
//   }

//   function handleRight() {
//     setCount((prevState) => {
//       if (count < projects.length - num) {
//         return prevState + 1;
//       } else {
//         return projects.length - num;
//       }
//     });

//     setFrontProjects(() => {
//       let arr = [];
//       for (let i = count; i < count + num; i++) {
//         arr.push(projects[i]);
//       }
//       // console.log(arr);
//       return arr;
//     });
//   }

//   return (
//     <>
//       <section className='projects' id='projects'>
//         <h2> <u>Projects</u> </h2>
//         <div className='project-box mn-sm-center ' >
//           {frontProjects && frontProjects.map((item, index) => {
//             return (
//               <div
//                 className='flex-30 project-item sm-flex-45 mn-sm-bet project-card'
//                 key={index}

//               >
//                 <div className="project-card">
//                   <figure className='figure'>
//                     <img
//                       className='full-width'
//                       src={`./assets/projects/${item.img}`}
//                       alt=''
//                     />
//                   </figure>
//                   <h3  className='project-name project-title'> {item.title}</h3>
//                   <p  className='project-description discription'>{item.discription} </p>
//                   <div className='tag-box project-tech-stack' style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", marginTop: "25px" }}>
//                     {item.tags.map((tag) => {
//                       return <button style={{ borderRadius: "10px", backgroundColor: "rgba(193, 32, 32, 0.5)", color: "white", padding: "4px" }} key={tag}> {tag.toUpperCase()}</button>;
//                     })}
//                   </div>
//                   <div className='repolink-box' >
//                     <abbr title='Go To Repository' className="project-github-link">
//                       <a href={item.repolink} target='blank'>
//                         <VscGithub />
//                       </a>
//                     </abbr>
//                     <abbr title='Go To Live Demo'  className="project-deployed-link">
//                       <a href={item.livelink} target='blank'>
//                         {item.tags.includes('css') ? <FaEye /> : ''}
//                       </a>
//                     </abbr>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         <TbChevronsLeft
//           className='left sm-left mn-left '
//           onClick={handleLeft}
//         />
//         <TbChevronsRight
//           className='right  sm-right mn-right'
//           onClick={handleRight}
//         />
//       </section>
//     </>
//   );
// }

// export default Projects;

import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import { MdSlideshow } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import cultfit from "../Images/cultfit.png";
import foodmeat from "../Images/foodmeat.png";
import healthyway from "../Images/healthyway.png";
import thehindu from "../Images/thehindu.png";

import React from "react";

function Projects() {
  let projectdata = [
    {
      img: cultfit,
      name: "CULTFIT",
      type: "individual",
      desc: "This is fitnesswebpage authentication and authorization full Stack Project (Frontend ).",
      techstack: "HTML | CSS | JavaScript",
      livelink: "https://shiny-longma-e9ae48.netlify.app/",
      gitlink: "https://github.com/TOFANDONNO1/serene-scarecrow-3205",
    },
    {
         
          img: foodmeat,
          name: "FOOODMEAT",
          
      type: "individual",
          desc:
          'At FoodMeat product is handpicked by a team with years of experience.',
          techstack:"React | JavaScript | React-Router | Scss | Chackra UI ",
          livelink: 'https://foodmeatwebsitsoumya.netlify.app/',
          gitlink: 'https://github.com/TOFANDONNO1/FoodMeat',

        },
        {
             
              img: healthyway,
              name: 'Healthyway',
              
      type: "Group",
              desc:
                ' comprehensive nutrition tracking app on earth. our nutritional data is curated from verified, accurate sources.',
              techstack: " React | Redux | JavaScript | Node.js | Express.js | Mongoose | MOngoDB Atlas | Chakra UI | Cyclic" ,
              livelink: 'https://healthy-way.vercel.app/',
              gitlink: 'https://github.com/TOFANDONNO1/Healthy-way',
          
            },
            {
                
                  img: thehindu,
                  name: 'TheHindu',
                  type: "individual",
                  desc:
                    'Todays News Headlines, Breaking News & Latest News from India and World.',
                  techstack: "HTML | CSS",
                  livelink: 'https://phenomenal-nasturtium-9dbe90.netlify.app/',
                  gitlink: 'https://github.com/TOFANDONNO1/bright-stamp-7114',

                }


  ];

  return (
    <Box
      id="projects"
      className="project"
      w="full"
      // color="#ffffff"
      p="30px 0px"
      textAlign="center"
      pt={20}>
      <Box w="85%" m="auto">
        <Box
          gap={"10px"}
          display={"flex"}
          mb="25px"
          justifyContent={"center"}
          fontWeight="400">
          <Text
            // ml={["110px", "200px", "490px"]}
            textAlign="center"
            // color={useColorModeValue('','')}
            fontWeight={700}
            fontSize={["3xl", "4xl", "5xl"]}>
            Projects
          </Text>
          <Text mt={["8px", "10px", "15px"]} fontSize={["3xl", "4xl", "5xl"]}>
            <MdSlideshow className="bounce" color={"#bb0606"} />
          </Text>
        </Box>
        <Box display="grid" gap="50px" gridTemplateColumns="repeat(1, 1fr)">
          {projectdata &&
            projectdata.map((project) => {
              return (
                <Box className="project-card" bg={"#0c1014"}>
                  <Box
                    display={["inline", "inline", "inline", "flex"]}
                    rowGap="60px"
                    justifyContent="space-between"
                    border={"3px solid #1877f2"}>
                    <Image
                      w={["100%", "97%", "97%", "60%"]}
                      m="auto"
                      src={project.img}
                      alt="project-thumbnail"
                    />
                    <Box w={["100%", "97%", "97%", "39%"]} m="auto" p={"30px"}>
                      <Text
                        fontSize={["3xl", "3xl", "3xl", "4xl"]}
                        fontWeight={700}
                        className="project-title"
                        // color="#fff"
                        color={"#bb0606"}
                        mb="30px"
                        mt={"20px"}>
                        {project.name}
                      </Text>
                      {/* <Text fontSize={["xl", "2xl", "3xl"]}>
                        ( {project.type} )
                      </Text> */}
                      <Text
                        className="project-description"
                        textAlign={"left"}
                        w={["100%", "90%", "90%"]}
                        m="auto"
                        fontSize={["sm", "md", "md"]}
                        color="#fff"
                        mb="20px">
                        {project.desc}
                      </Text>
                      <Flex
                        w={["100%", "90%", "90%"]}
                        mb={"20px"}
                        justify={"center"}>
                        {/* <Text
                          className="project-tech-stack"
                          // w={["100%", "90%", "90%"]}
                          m="auto"
                          mt="10px"
                          fontSize={["md", "md", "lg"]}
                          color="#fff"
                          mb={["0", "0", "20px"]}
                        >
                          Techstacks
                        </Text> */}
                        <Text
                          className="project-tech-stack"
                          // w={["100%", "90%", "90%"]}
                          // m="auto"
                          mt="10px"
                          fontSize={["sm", "md", "md"]}
                          color="#fff">
                          {project.techstack}
                        </Text>
                      </Flex>
                      <Box
                        display="flex"
                        w={["100%", "80%", "100%"]}
                        m="auto"
                        justifyContent="space-around">
                        <Button
                          className="project-deployed-link"
                          as="a"
                          // color={useColorModeValue('black','white')}
                          target="_blank"
                          href={project.livelink}
                          _hover={{ color: "#bb0606" }}
                          mt="10px"
                          w={"100px"}
                          p={["5px 5px", "10px 10px", "10px 10px"]}
                          fontSize={["md", "lg", "lg"]}
                          // color="black"
                          // border="1px solid white"
                          variant="solid"
                          leftIcon={<BiLinkExternal />}>
                          Live
                        </Button>
                        <Button
                          className="project-github-link"
                          as="a"
                          target="_blank"
                          href={project.gitlink}
                          _hover={{ color: "#bb0606" }}
                          mt="10px"
                          w={"100px"}
                          p={["5px 5px", "10px 10px", "10px 10px"]}
                          fontSize={["md", "lg", "lg"]}
                          // color="black"
                          // border="1px solid white"
                          variant="solid"
                          leftIcon={<BsGithub />}>
                          Github
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}
export default Projects;
