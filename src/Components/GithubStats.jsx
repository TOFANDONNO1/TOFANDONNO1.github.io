import GitHubCalendar from "react-github-calendar";
import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
export const GithubStats = () => {
  return (
    <Box
      id="stats"
      h="auto"
      // bg="black"
      pt={20}
      w="100%"
      fontFamily="Roboto Mono, monospace"
      // color="white"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems={"center"}
      gap="30px"
    >
      <Center>
        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mb={10}>
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: useBreakpointValue({ base: "20%", md: "30%" }),
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "#bb0606",
              zIndex: -1,
            }}
          >
            Github
          </Text>
        </Heading>
      </Center>

      <Box
        padding={{ base: "5px", md: "30px" }}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        boxShadow="rgb(0, 0, 0) 3px 2px 10px 1px" 
        borderRadius="10px"
        width={{ base: "90%", md: "70%" }}
      >
        <GitHubCalendar
          class="react-activity-calendar"
          username="TOFANDONNO1"
          theme={{
            level0: "#161b22",
            level1: "#39ff43c7",
            level2: "#68e700c7",
            level3: "#007e06",
            level4: "#004e04c7",
          }}
        />
      </Box>
      <Box
        padding={{ base: "5px", md: "30px" }}
        boxShadow="rgb(0, 0, 0) 3px 2px 10px 1px" 
        borderRadius="20px"
        width="70%"
      >
        <Text style={{ base: "10px", md: "20px" }} textAlign="center">
          TOFANDONNO1's streak
        </Text>
        <img
          id="github-streak-stats"
          style={{ display: "block", margin: "auto" }}
          src="https://github-readme-streak-stats.herokuapp.com/?user=TOFANDONNO1&theme=bear&hide_border=false"
          alt="github-streak-stats"
        />
      </Box>
      <Box
        padding={{ base: "5px", md: "30px" }}
        boxShadow="rgb(0, 0, 0) 3px 2px 10px 1px"
        borderRadius="10px"
        width="70%"
      >
        <Text style={{ base: "10px", md: "20px" }} textAlign="center">
          TOFANDONNO1's Github Stats
        </Text>
        <img
          id="github-stats-card"
          style={{ display: "block", margin: "auto" }}
          src="https://github-readme-stats.vercel.app/api?username=TOFANDONNO1&theme=bear&show_icons=true&hide_border=false&count_private=true"
          alt="github-stats-card"
        />
          </Box>
      <Box
        padding={{ base: "5px", md: "30px" }}
        boxShadow="rgb(0, 0, 0) 3px 2px 10px 1px" 
        borderRadius="20px"
        width="70%"
      >
        <Text style={{ base: "10px", md: "20px" }} textAlign="center">
          TOFANDONNO1's Top Languages
        </Text>
        <img
          style={{ display: "block", margin: "auto" }}
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=TOFANDONNO1&theme=bear&show_icons=true&hide_border=false&layout=compact"
       alt="github-top-langs"
       />
        </Box>
    </Box>
  );
};