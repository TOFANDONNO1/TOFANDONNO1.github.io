import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import profileImage from "../Images/myProfile.jpg";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Flex
      id="home"
      mt={[4, 10]}
      // border="1px solid red"
      direction={{ base: "column", md: "row" }}
      justify={"center"}
      gap={8}
      minH="100vh"
      pb={{ base: "10px", lg: "120px" }}
      // pb={["10px", "20px", "60px"]}
      // bg={"black"}
    >
      <Flex
        alignItems="center"
        direction={{ base: "column", md: "row", lg: "row" }}
        gap={{ base: 5, md: 5, lg: 2 }}
        padding="20px"
        // border="1px solid red"
      >
        <Box
          // border={"1px solid yellow"}
          lineHeight={"60px"}
          // w={"100%"}
          w={{ base: "100%", md: "70%", lg: "70%" }}
          textAlign={{ base: "center", md: "center", lg: "start" }}
          p={"20px"}
        >
          <Text
            fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
            fontWeight="bold"
            mb={4}
            // border={"1px solid red"}
          >
            Hello there, I'm
          </Text>
          <Text
            textColor={"#bb0606"}
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="bold"
            mb={5}
            id="user-detail-name"
          >
           Soumya Ranjan Rout
          </Text>
          <Text fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}>
            <Typewriter
              options={{
                strings: [
                  "A Full Stack Developer",
                  "A Software Engineer",
                  "A Problem Solver",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
        </Box>
        <Image
          className="home-img"
          src={profileImage}
          objectFit={"contain"}
          // h={{ base: "5%", md: "60%", lg: "60%" }}
          w={{ base: "60%", md: "35%", lg: "35%" }}
          _hover={{
            transition: "0.9s",
            transform: "scale(1.1)",
            // width: "150%",
          }}
          borderRadius="50%"
          bg={"gray"}
        />
      </Flex>
    </Flex>
  );
};

export default Home;