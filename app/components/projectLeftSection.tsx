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
      className="flex flex-col p-5 lg:max-2xl:flex-row min-w-fit h-fit "
      id={id}
    >
      {children}

      <Box title="leftSideArea" className=" w-full  items-center  ">
        <Box className=" flex items-center justify-center w-full">
          <Image
            src={projectImage}
            alt="Image of three developed phone app screens."
            className=" min-w-[330px] w-[450px] "
          />
        </Box>
      </Box>
      <Box title="rightSideArea" className=" w-full flex flex-col px-10 h-fit">
        <Heading
          color={useColorModeValue("#050017", "#FFC700")}
          className="basis-1/4 break-normal p-2 font-Inter w-11/12 font-bold text-3xl max-w-full md:max-2xl:text-6xl"
          //   noOfLines={2}
          wordBreak={"break-word"}
        >
          {projectTitle}
        </Heading>
        <Text
          color={useColorModeValue("#050017", "#FFC700")}
          className="p-2 font-Inter font-regular text-l w-750 h-427 max-w-full "
          wordBreak={"break-word"}
        >
          Stack:
          <br />
          <br />
        </Text>
        <Box className="ml-2">
          <Image
            src={techStack}
            alt="Image of three developed phone app screens."
            className="flex flex-col"
            width={480}
          />
        </Box>
        <Box className="flex">
          <Text
            color={useColorModeValue("#050017", "#FFC700")}
            className="font-Inter font-regular text-l h-fit w-fit max-w-full mt-5 line-clamp-5 lg:max-2xl:flex "
            wordBreak={"break-word"}
          >
            <br />
            {blurbText}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
