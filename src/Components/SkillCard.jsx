import { GridItem, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SkillCard = ({ icon, name }) => {
  return (
    <GridItem
      className="skills-card"
      p={5}
      rounded="2xl"
      _hover={{
        boxShadow: "0 0 5px #007FFF",
        transform: "scale(1.1)",
        transition: "all .2s ease-in-out",
      }}
    >
      <VStack>
        <Image
          className="skills-card-img"
          src={icon}
          // w="100%"
          // w={{ base: "80%", sm: "50%", md: "70%", lg: "100%", xl: "100%" }}
          w={["80%", "50%", "70%", "100%"]}
        />
        <Text className="skills-card-name" fontSize="sm">
          {name}
        </Text>
      </VStack>
    </GridItem>
  );
};

export default SkillCard;