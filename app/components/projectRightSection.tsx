import { ReactNode } from "react";
import { Box, useColorModeValue, Text, Image, Heading } from "@chakra-ui/react";

export default function ProjectRightSection({
  children,
  blurbText,
  techStack,
  projectTitle,
  projectImage,
}: {
  children: React.ReactNode;
  blurbText: string;
  techStack: string;
  projectTitle: string;
  projectImage: string;
}) {
  return (
    <Box
      borderWidth={1}
      borderColor={useColorModeValue("gray.500", "gray.700")}
      h={700}
      w={"full"}
      marginTop={10}
      className="flex flex-row"
    >
      {children}

      <Box title="leftSideArea" className="flex flex-col w-1/2  items-center ">
        <Heading
          color={useColorModeValue("#050017", "#FFC700")}
          className="basis-1/4 p-2 font-Inter font-bold text-6xl w-700 max-w-full  ml-16"
          //   noOfLines={2}
          wordBreak={"break-word"}
        >
          {projectTitle}
        </Heading>
        <Text
          color={useColorModeValue("#050017", "#FFC700")}
          className="p-2 font-Inter font-regular text-l text-white w-750 h-427 max-w-full ml-16"
          wordBreak={"break-word"}
        >
          Tech Stack:
          <br />
          <br />
        </Text>
        <Box className="ml-16">
          <Image
            src={techStack}
            alt="Image of three developed phone app screens."
            className="flex flex-col"
            width={480}
          />
        </Box>
        <Text
          color={useColorModeValue("#050017", "#FFC700")}
          className="pt-4 p-2 font-Inter font-regular text-l text-white w-750 h-427 max-w-full ml-16"
          wordBreak={"break-word"}
        >
          Blurb:
          <br />
          <br />
          {blurbText}
        </Text>
      </Box>
      <Box title="rightSideArea" className="flex flex-col w-1/2 ">
        <Image
          src={projectImage}
          alt="Image of three developed phone app screens."
          className="flex flex-col"
          width={480}
        />
      </Box>
    </Box>
  );
}
