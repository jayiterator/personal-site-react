import { ReactNode } from "react";
import { Box, useColorModeValue, Text, Image, Heading } from "@chakra-ui/react";
export default function AboutSection({
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

      <Box
        title="leftSideArea"
        className="flex flex-col basis-1/3 border-2 border-white "
      >
        <Heading
          color={useColorModeValue("#050017", "#FFC700")}
          className="basis-1/4 p-2 font-Inter font-bold text-6xl w-700 max-w-full  "
          //   noOfLines={2}
          wordBreak={"break-word"}
        >
          About
        </Heading>
        <Image
          src="/images/About1.png"
          alt="Image of Me."
          className="flex flex-col"
          width={200}
        />
      </Box>
      <Box title="middleArea" className=" basis-2/5 border-2 border-white">
        <Text
          color={useColorModeValue("#050017", "#FFC700")}
          className=" font-Inter font-regular text-l text-white w-750 h-427 max-w-full"
          wordBreak={"break-word"}
        >
          Blurb:
          <br />
          <br />
          {blurbText}
        </Text>
      </Box>
      <Box
        title="rightSideArea"
        className="flex flex-col w-1/2  border-2 border-white"
      ></Box>
    </Box>
  );
}
