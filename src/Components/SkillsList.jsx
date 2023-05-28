import React from "react";
import {
  Box,
  Grid,
  useBreakpointValue,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Heading,
} from "@chakra-ui/react";
import SkillCard from "./SkillCard";
// import SkillCard from "./SkillCard";
// import { skillsData } from "../../constants/skillsData";
import express from "../Assests/Express.png";
import git from "../Assests/git.png";
import node from "../Assests/Node.js.png";
import REACT from "../Assests/React.png";
import MUI from "../Assests/MaterialUi.png";
import MONGOOSE from "../Assests/mongoose.png";
import REDUX from "../Assests/Redux.png";
import css from "../Assests/CSS.png";
import js from "../Assests/js.png";
import github from "../Assests/github.png";
import html from "../Assests/html.png";
import mongodb from "../Assests/mongodb.png";
import vscode from '../Assests/vscode.png';

export const skillsData = [
  {
    // icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    icon: js,
    name: "Javascript",
    category: "frontend",
  },
  {
    // icon: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
    icon: html,
    name: "HTML",
    category: "frontend",
  },
  {
    // icon: "https://alih6051.github.io/static/media/css.39769a8bd378bf410d6b381a8d88fa35.svg",
    icon: css,
    name: "CSS",
    category: "frontend",
  },

  {
    icon: "https://alih6051.github.io/static/media/bootstrap.9d52c09ec3d831cca7244e06743aed7d.svg",
    name: "Bootstrap",
    category: "frontend",
  },
  {
    icon: "https://alih6051.github.io/static/media/tailwind.e7b4a92d5aefbddd6f0651c024144be2.svg",
    name: "Tailwind",
    category: "frontend",
  },
  {
    // icon: "https://alih6051.github.io/static/media/react.4e0c97009b885bfa75c5412262a46f5f.svg",
    icon: REACT,
    name: "React",
    category: "frontend",
  },
  {
    icon: "https://cdn.cdnlogo.com/logos/n/80/next-js.svg",
    name: "Next JS",
    category: "frontend",
  },
  {
    // icon: "https://alih6051.github.io/static/media/redux.7fe607aacc31f6e6199e70f16aae407e.svg",
    icon: REDUX,
    name: "Redux",
    category: "frontend",
  },
  {
    icon: "https://alih6051.github.io/static/media/chakra.15320604467d004df871.png",
    name: "Chakra UI",
    category: "frontend",
  },
  {
    // icon: "https://alih6051.github.io/static/media/mui.87264df237ee700ba78bb58ff701a6d3.svg",
    icon: MUI,
    name: "Material UI",
    category: "frontend",
  },
  {
    // icon: "https://alih6051.github.io/static/media/node.10c9e2aa0ca7edf36fceae25fec038a1.svg",
    icon: node,
    name: "Node JS",
    category: "backend",
  },
  {
    // icon: "https://alih6051.github.io/static/media/express.4925c0127df8857c18b38329795ce88f.svg",
    icon: express,
    name: "Express",
    category: "backend",
  },
  {
    // icon: "https://alih6051.github.io/static/media/mongodb.6835c61a518a732eb8318d43dfe8f700.svg",
    icon: mongodb,
    name: "MongoDB",
    category: "backend",
  },
  {
    // icon: "https://alih6051.github.io/static/media/mongoose.51275a001caf5e6e30d4.png",
    icon: MONGOOSE,
    name: "Mongoose",
    category: "backend",
  },
  {
    // icon: "https://alih6051.github.io/static/media/git.c08353563539c6459b353f29d8dd7bf2.svg",
    icon: git,
    name: "Git",
    category: "frontend",
  },
  {
    icon: "data:image/png;base64,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",
    name: "Postman",
    category: "tool",
  },
  {
    // icon: "https://code.visualstudio.com/assets/images/code-stable.png",
    icon: vscode,
    name: "VS Code",
    category: "tool",
  },
  {
    icon: "https://rangav.gallerycdn.vsassets.io/extensions/rangav/vscode-thunder-client/2.5.1/1678365054933/Microsoft.VisualStudio.Services.Icons.Default",
    name: "Thunder Client",
    category: "tool",
  },
  {
    // icon: "https://cdn-icons-png.flaticon.com/512/2175/2175377.png",
    icon: github,
    name: "Github",
    category: "tool",
  },
];

const SkillsList = () => {
  const frontend_skills = skillsData.filter(
    (skill) =>
      skill.category === "frontend" ||
      skill.name === "Git" ||
      skill.name === "Postman"
  );

  const backend_skills = skillsData.filter(
    (skill) =>
      skill.category === "backend" ||
      skill.name === "Git" ||
      skill.name === "Postman"
  );

  const tools = skillsData.filter(
    (skill) =>
      skill.category === "tool" ||
      skill.name === "Git" ||
      skill.name === "Postman"
  );

  return (
    <Box h="70%">
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
          Technical Skills
        </Text>
      </Heading>
      <Tabs variant="unstyled" align="center">
        <TabList my={5}>
          <Tab
            _selected={{ color: "white", bg: "#bb0606" }}
            bg="#fff"
            color="black"
            mx={3}
            rounded="md"
          >
            All
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#bb0606" }}
            bg="white"
            color="black"
            mx={3}
            rounded="md"
          >
            Frontend
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#bb0606" }}
            bg="#fff"
            color="black"
            mx={3}
            rounded="md"
          >
            Backend
          </Tab>
          {/* <Tab
            _selected={{ color: "white", bg: "#bb0606" }}
            bg="#fff"
            color="black"
            mx={3}
            rounded="md"
          >
            Tools
          </Tab> */}
        </TabList>

        <TabList my={5}>
          <Tab
            _selected={{ color: "white", bg: "#bb0606" }}
            bg="#fff"
            color="black"
            mx={3}
            rounded="md"
          >
            Tools
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel paddingBottom="100px">
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
                xl: "repeat(8, 1fr)",
              }}
              gap={10}
            >
              {skillsData.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel paddingBottom="100px">
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
                xl: "repeat(8, 1fr)",
              }}
              gap={10}
            >
              {frontend_skills.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel paddingBottom="100px">
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
                xl: "repeat(8, 1fr)",
              }}
              gap={10}
            >
              {backend_skills.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </Grid>
          </TabPanel>

          <TabPanel paddingBottom="100px">
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
                xl: "repeat(8, 1fr)",
              }}
              gap={10}
            >
              {tools.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SkillsList;