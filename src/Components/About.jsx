
// import React from 'react';

// function About() {
//   return (
//     <>
//       <section  id="about" className="about-section about section">
//         <article>
//           <h2   className="about section"> <u>About Me</u> </h2>
//           <p className='abuot-p'>
//             I am <a style={{color: '#c12020',fontWeight: 'bold', fontSize: '1.5rem'}} href='#contact'>Soumya Ranjan Rout.</a>
//             <br/>
//              I am a MERN stack developer.
//           </p>
//           {/* <div className='view-box sm-flex-45 '> */}
//                 {/* <a   id="resume-link-2" href='./assets/docs/Soumya_Ranjan_Resume.pdf' download>
//                   Download Resume{' '}
//                 </a> */}
//               {/* </div> */}
//                <button id="resume-button-2" style={{backgroundColor:'yellow'}}
//                 onClick={() =>
//                   window.open(
//                     "https://drive.google.com/file/d/1gaANNDjHx1_rVRdzMl_y96Dj4dRPTCgG/view?usp=sharing"
//                   )
//                 }
//                >
//               <a
//              id="resume-link-2"
             
//               href={"./assets/docs/Soumya_Ranjan_Resume.pdf"}
//               target="_blank"
//               rel='noreferrer'
//               download="Soumya_Ranjan_Resume.pdf"
//             >
//               Resume
//             </a>
//               </button> 
//               {/* <div><button id="resume-button-2"  onclick="window.open('https://drive.google.com/file/d/1kb_M7bXCGGET0NVde1GLPsApcoG-etSK/view?usp=sharing')">
//               <a href="./assets/docs/Soumya_Ranjan_Resume.pdf" id="resume-link-2"

//                             download="Soumya_Ranjan_Resume">Download Resume</a>
//               </button>
                           
                                   
//                         </div> */}
//           <p className='abuot-p'> I learnd Full Stack Web Development from <a style={{color: '#c12020', fontWeight: 'bold' ,fontSize: '1.5rem'}} href='https://www.masaischool.com/' target="blank">Masai School. </a>
//           <br/>
//           I am comfortable with both Frontend and Backend.
//            </p>
//           <p className='abuot-p'>
//             {' '}
//             <strong> Backend : </strong> Learned Node.js, MongoDB, Express.js.
//             Continued with learning Authentication, Authorization, OAuth and much more.
//           </p>
//           <p className='abuot-p' id="user-detail-intro">
//             {' '}
//             <strong> Frontend : </strong> HTML,CSS,JavaScript,Learned React, React Router, React
//             Router Dom, Redux. Continued with Functional Components, Class
//             Components, State, Props, Context API, HOC, Render Props , Hooks and
//             much more.
//           </p>

//           <ul>
//             <li className='brand flex'>
//               {/* <a href=''></a> */}
//               <a href='home'>
//                 {'<'} <strong>Soumya</strong>
//                 {' />'}
//               </a>
//             </li>
//           </ul>
//         </article>
//       </section>
//     </>
//   );
// }

// export default About;

import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiDownload } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import SoumyaRanjan from "../Resume/Soumya_Ranjan_Resume.pdf";

function About() {
  const handleClick = () => {
    window.location.href = "https://github.com/TOFANDONNO1";
  };

  return (
    <Grid
      // border="1px solid red"
      textAlign="center"
      justifyContent={"center"}
      alignItems="center"
      py={12}
      minH="100vh"
      id="about"
      className="about section"
    >
      <Heading
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        mb={"60px"}
        textAlign={"center"}
      >
        <Text
          as={"span"}
          position={"relative"}
          // _after={{
          //   content: "''",
          //   width: "full",
          //   height: useBreakpointValue({ base: "20%", md: "30%" }),
          //   position: "absolute",
          //   bottom: 1,
          //   left: 0,
          //   bg: "red.600",
          //   zIndex: -1,
          // }}
          borderBottom="2px solid #d50032"
        >
          About Me
        </Text>
      </Heading>
      <Flex
        direction={{ base: "column", md: "column", lg: "row" }}
        px={{ base: 5, md: 20, lg: 20 }}
        gap={[0,0,0,8]}
      >
        <Box marginBottom={{ base: "30px" }}>
          <Image
            margin={"auto"}
            width={{ base: "100%", md: "60%", lg: "100%" }}
            height={{ base: "200px", md: "auto" }}
            borderRadius={{ base: "10%", md: "10%" }}
            objectFit="contain"
            src="https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966"
            alt="#"
          />
        </Box>
        <Box textAlign={"start"}  w={"100%"}>
          {/* <Text
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          textAlign={"center"}
          mb={10}
        >
          Hi, I'm Somesh Rawat. I am a Full Stack Web Developer. I have
          been working as a Full Stack Web Developer since 2020. I have
          worked with many different technologies and I have also worked with
          many different languages.
        </Text> */}

          <Text fontSize={["sm", "lg", "xl"]} mx="auto" p={[0, 4]}>
            Hi there! My name is Soumya Ranjan and I am an Aspiring Full Stack
            Developer (MERN)
          </Text>
          <Text
            fontSize={["sm", "lg", "xl"]}
            maxW="3xl"
            mx="auto"
            mt={6}
            mb={30}
            id="user-detail-intro"
            p={[0, 4]}
          >
            A Full Stack Web Developer with expertise in Coding, Data Structures
            & Algorithms, and Design. MERN and JavaScript programmer with
            extensive experience. The ability to quickly learn new technologies
            and software. Capable of contributing to the success of a team by
            providing valuable support.
          </Text>
          <Flex
            justify={"center"}
            alignItems="center"
            gap={10}
            direction={["column", "row", "row"]}
          >
            <Flex>
              <Button id="resume-button-2" bg={"#bb0606"} gap={4} px={10}>
                <Link
                  id="resume-link-2"
                  display={"flex"}
                  // justifyContent="space-between"
                  gap="15px"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1gaANNDjHx1_rVRdzMl_y96Dj4dRPTCgG/view?usp=sharing"
                    )
                  }
                  href={SoumyaRanjan}
                  target={"_blank"}
                  download
                >
                  <FiDownload /> <span> Resume</span>
                </Link>
              </Button>
            </Flex>
            <Flex>
              <Button gap={4} px={10} onClick={handleClick}>
                {" "}
                <BsGithub /> <span>TOFANDONNO1</span>
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Grid>
  );
}

export default About;