import { ReactNode } from "react";
import { Box, useColorModeValue, Text, Heading, Image } from "@chakra-ui/react";
import heroImage from "../images/heroImage.png";

export default function Hero({ children }: { children: React.ReactNode }) {
  return (
    <Box
      borderWidth={1}
      borderColor={useColorModeValue("gray.500", "gray.700")}
      h={500}
      w={"full"}
      marginTop={10}
      className="flex flex-row"
    >
      {children}

      <Box title="leftSideArea" className="flex flex-col w-1/2">
        <Heading
          color={useColorModeValue("#050017", "#FFC700")}
          className="basis-1/4 p-2 font-Inter font-bold text-6xl w-700 max-w-full "
          //   noOfLines={2}
          wordBreak={"break-word"}
        >
          Simple Things, Done Well
        </Heading>
        <Text
          color={useColorModeValue("#050017", "#FFC700")}
          className="basis-3/4  p-2 font-Inter font-regular text-l text-white w-750 h-427 max-w-full "
          wordBreak={"break-word"}
        >
          Hi!
          <br />
          <br />
          My name is Jayson. This is my personal website.
          <br />
          <br />
          Here you will find:
          <br />
          <br />
          <span className="ml-20">
            A collection of simple, digital things made well.
          </span>
          <br />
          <br />
          <span className="ml-40">My ode to homegrown, human solutions.</span>
        </Text>
      </Box>
      <Box title="rightSideArea" className="flex flex-col w-1/2  items-center">
        <Image
          src="/images/heroImage.png"
          alt="Image of phone and content falling out."
          className="flex flex-col"
          width={480}
        />
      </Box>
    </Box>
  );
}
