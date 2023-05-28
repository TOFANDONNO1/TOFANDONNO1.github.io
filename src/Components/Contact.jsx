// import React from 'react';

// export default function Contact() {
//   return (
//     <>
//       <section id='contact'>
//         <h4 style={{ marginBottom: '4rem' }}> <u>Get In Touch</u> </h4>
//         <div className='contact-box   sm-center   mn-flex-start '>
//           <div className='flex-20 sm-flex-50' style={{marginTop: "5px"}}>
//             <h3 className='contact-h3 '>Let's Connect Here ! </h3>

//             <div className='contact-icon-div' style={{marginTop: "15px"}}>
//               <a  id="contact-linkedin"
//                 href='https://www.linkedin.com/in/soumya-ranjan-842169222/'
//                 target='blank'
//               >
//                 {' '}
//                 <i className='fa-brands fa-linkedin'></i>
//               </a>
//               <a href='https://twitter.com/TOFANDONNO1' target='blank'>
//                 {' '}
//                 <i className='fa-brands fa-square-twitter'></i>
//               </a>
//               <a id="contact-github" href='https://github.com/TOFANDONNO1' target='blank'>
//                 {' '}
//                 <i className='fa-brands fa-square-github'></i>{' '}
//               </a>
//               <a
//                 href='http://api.whatsapp.com/send?phone=8249385352'
//                 target='blank'
//               >
//                 {' '}
//                 <i className='fa-brands fa-square-whatsapp'></i>{' '}
//               </a>
//             </div>
//           </div>

//           <div className='flex-50 sm-flex-50 sm-between '>
//             <h3 className='contact-h3 center'>
//               Make Something Amazing Together
//             </h3>

//             <div className='contact-mail sm-bet'>
//               <div className='flex-65 view-box sm-flex-60'>
//                 <a
//                 id="contact-email"
//                   className='mail'
//                   target='blank'
//                   href='mailto:ranjansoumya413@gmail.com  '
//                 >
//                   Mail Me : ranjansoumya413@gmail.com
//                 </a>
//               </div>
//               <div className='flex-40 view-box sm-flex-35'>
//                 {' '}
//                 <a  id="contact-phone" className='tel' target='blank' href='tel:8249385352'>
//                   Call Me : +918249385352
//                 </a>
//               </div>
//             </div>
//           </div>
  


  
//           <div className='flex-20 sm-flex-50 '>
//             <h3 className='contact-h3'> Want To Know More !</h3>
//             {/* <div className='resume '>
//               <div className='view-box sm-flex-45 '>
//                 <a   id="resume-link-2" href='./assets/docs/Soumya_Ranjan_Resume.pdf' download>
//                   Download Resume{' '}
//                 </a>
//               </div>
//               <div className='view-box  sm-flex-45 '>
//                 <a  id="resume-link-1"
//                   target='blank'
//                   href='https://drive.google.com/file/d/1kb_M7bXCGGET0NVde1GLPsApcoG-etSK/view?usp=sharing'
//                 >
//                   View Resume{' '}
//                 </a>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import React from "react";
import {
  Box,
  Stack,
  Input,
  Text,
  Flex,
  Textarea,
  Button,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <Box
      // h={["1000px", "1050px", "700px"]}
      color={useColorModeValue("black", "white")}
    >
      <Text
        mb="25px"
        textAlign="center"
        fontWeight="700"
        fontSize={["3xl", "4xl", "5xl"]}
        // color={"#00b9e8"}
        mt={"10%"}
      >
        Contact Me
      </Text>
      <Box
        display={["inline", "inline", "inline", "flex"]}
        // gap={10}
        // border={"2px solid red"}
        className="contact"
        id="contact"
        w={["100%", "97%", "79%"]}
        fontSize={30}
        // color={"black"}
        m={"auto"}
        mt={{ base: 0, md: "5%", lg: "5%" }}
        h={"500px"}
      >
        <Box w={["100%", "80%", "50%"]} margin="auto">
          <Stack>
            <Text
              color={useColorModeValue("red", "red")}
              fontSize={["20px", "25px", "30px"]}
              textAlign={["center", "center", "left"]}
            >
              Get in Touch
            </Text>

            <Grid
              // border={"1px solid red"}
              justifyContent={{ base: "center", md: "left", lg: "left" }}
              alignItems={{ base: "center" }}
              gap="20px"
            >
              <Box mt={"5px"}>
                <Flex gap={"20px"}>
                  <Text
                    // ml={["50px", "100px", "1px"]}
                    fontSize={["20px", "30px", "40px"]}
                    mt={"5px"}
                  >
                    <TfiEmail />
                  </Text>
                  <Text
                    id="contact-email"
                    // color={"white"}
                    fontSize={["14px", "20px", "22px"]}
                    // ml={["8%", "", ""]}
                    mt={["4px", "", ""]}
                  >
                    <a
                      href="mailto:ranjansoumya413@gmail.com"
                      alt="githublink"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ranjansoumya413@gmail.com
                    </a>
                  </Text>
                </Flex>
              </Box>

              <Box mt={"5px"}>
                <Flex gap={"20px"}>
                  <Text
                    // ml={["50px", "100px", "1px"]}
                    fontSize={["20px", "30px", "40px"]}
                  >
                    <a
                      href="https://github.com/TOFANDONNO1"
                      fontSize={["20px", "30px", "40px"]}
                    >
                      <AiFillGithub />
                    </a>
                  </Text>
                  <Text
                    id="contact-github"
                    // color={"white"}
                    fontSize={["14px", "20px", "22px"]}
                    // ml={["8%", "", ""]}
                    mt={["3px", "", ""]}
                  >
                    <a
                      href="https://github.com/TOFANDONNO1"
                      alt="githublink"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TOFANDONNO1
                    </a>
                  </Text>
                </Flex>
              </Box>

              <Box mt={"5px"}>
                <Flex gap={"20px"}>
                  <Text
                    // ml={["50px", "100px", "1px"]}
                    fontSize={["20px", "30px", "40px"]}
                  >
                    <a
                      href="https://www.linkedin.com/in/soumya-ranjan-842169222/"
                      alt=""
                      fontSize={["20px", "30px", "40px"]}
                    >
                      <FaLinkedin />
                    </a>
                  </Text>
                  <Text
                    id="contact-linkedin"
                    // color={"white"}
                    fontSize={["14px", "20px", "22px"]}
                    // ml={["8%", "", ""]}
                    mt={["1px", "", ""]}
                  >
                    <a
                      href="https://www.linkedin.com/in/soumya-ranjan-842169222/"
                      alt="linkedinlink"
                      target="_blank"
                      rel="noreferrer"
                    >
                        Soumya Ranjan
                    </a>
                  </Text>
                </Flex>
              </Box>

              <Box mt={"5px"}>
                <Flex gap={"20px"}>
                  <Text
                    // ml={["50px", "100px", "1px"]}
                    fontSize={["20px", "30px", "40px"]}
                  >
                    <a
                      href="https://github.com/TOFANDONNO1"
                      fontSize={["20px", "30px", "40px"]}
                    >
                      <IoCall />
                    </a>
                  </Text>
                  <Text
                    id="contact-phone"
                    // color={"white"}
                    fontSize={["14px", "20px", "22px"]}
                    // ml={["8%", "", ""]}
                    mt={["1px", "", ""]}
                  >
                    + 91 8249385352
                  </Text>
                </Flex>
              </Box>
            </Grid>
          </Stack>
        </Box>

        <form
          action="https://getform.io/f/477b9729-85ff-4e24-846e-b0c675acfd13"
          method="POST"
        >
          <Box
            w={["90%", "70%", "90%"]}
            margin="auto"
            mt={["50px", "50px", "50px", "0px"]}
            // marginTop={{ base: "0px", md: "0" }}
            // h={"400px"}
            // ml={["70px", "100px", "-5%"]}
            // boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            p="35px"
            borderRadius={"20px"}
          >
            <Stack>
              <Stack>
                <Text
                  color={"red"}
                  fontSize={["20px", "25px", "30px"]}
                  textAlign={["center", "center", "left"]}
                  mt={["-10px", "", ""]}
                >
                  Message Me
                </Text>
                <Flex>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    size={["md", "lg", "lg"]}
                    // color={"white"}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    size={["md", "lg", "lg"]}
                    // color={"white"}
                    ml={"20px"}
                  />
                </Flex>
              </Stack>

              <Stack mt={"20px"}>
                <Input
                  type="number"
                  name="number"
                  placeholder="Mobile Number"
                  size={["md", "lg", "lg"]}
                  // color={"white"}
                  m={"auto"}
                  mt={"8%"}
                />
              </Stack>

              <Stack mt={"20px"}>
                <Textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  size={["md", "lg", "lg"]}
                  // color={"white"}
                  m={"auto"}
                  mt={"8%"}
                />
              </Stack>
              <Stack mt={"20px"}>
                <Button
                  type="submit"
                  w={["50%", "30%", "50%"]}
                  h={["35px", "40px", "45px"]}
                  mt={"5%"}
                  ml={["56px", "170px", "100px"]}
                  size="lg"
                  color={"white"}
                  fontSize={["15px", "19px", "20px"]}
                  bg={"#bb0606"}
                  _hover={{
                    background: "#00b9e8",
                    color: "black",
                  }}
                >
                  Send
                </Button>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Box>
      <Text
        textAlign={"center"}
        fontSize={{ base: "12px", md: "16px" }}
        marginTop={{ base: "20px" }}
        color={useColorModeValue("teal", "teal")}
      >
        Desgined & Build By Soumya Ranjan, 2023
      </Text>
    </Box>
  );
};

export default Contact;