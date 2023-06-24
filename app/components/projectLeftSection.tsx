import { ReactNode } from "react";
import { Box, useColorModeValue, Text, Image, Heading } from "@chakra-ui/react";
export default function ProjectLeftSection({
  children,
  blurbText,
  techStack,
  projectTitle,
  projectImage,
  id,
}: {
  children: React.ReactNode;
  blurbText: string;
  techStack: string;
  projectTitle: string;
  projectImage: string;
  id: string;
}) {
  return (
    <Box
      borderWidth={1}
      borderColor={useColorModeValue("gray.500", "gray.700")}
      h={700}
      w={"full"}
      marginTop={10}
      className="flex flex-row"
      id={id}
    >
      {children}

      <Box title="leftSideArea" className="flex flex-col w-1/2  items-center ">
        <Image
          src={projectImage}
          alt="Image of three developed phone app screens."
          className="flex flex-col"
          width={480}
        />
      </Box>
      <Box title="rightSideArea" className="flex flex-col w-1/2 ">
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
          className="p-2 font-Inter font-regular text-l w-750 h-427 max-w-full ml-14"
          wordBreak={"break-word"}
        >
          Stack:
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
          className="pt-4 p-2 font-Inter font-regular text-l w-750 h-427 max-w-full ml-14"
          wordBreak={"break-word"}
        >
          <br />
          {blurbText}
        </Text>
      </Box>
    </Box>
  );
}
