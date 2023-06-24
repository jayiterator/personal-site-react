import { ReactNode } from "react";
import {
  Box,
  useColorModeValue,
  Text,
  Heading,
  Image,
  Button,
} from "@chakra-ui/react";

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

      <Box title="leftSideArea" className="flex flex-col w-1/2 items-center  ">
        <Heading
          color={useColorModeValue("#050017", "#FFC700")}
          className="basis-1/4 p-2 font-Inter w-11/12 font-bold text-6xl max-w-full ml-16"
          //   noOfLines={2}
          wordBreak={"break-word"}
        >
          Simple Things, Done Well
        </Heading>
        <Box className="basis-1/2 w-11/12 max-w-full ml-20">
          <Text
            color={useColorModeValue("#050017", "#FFC700")}
            className="font-Inter font-regular text-l w-700 h-427 max-w-full mt-5    "
            wordBreak={"break-word"}
          >
            Hi!
            <br />
            <br />
            My name is Jayson. This is my personal website.
            <br />
            <br />
            Here you will find:
          </Text>
          <Box
            className="text-center pt-5"
            color={useColorModeValue("#050017", "#FFC700")}
          >
            A collection of simple, digital things made well.
          </Box>
          <br />
          <Box
            className="text-right pt-5"
            color={useColorModeValue("#050017", "#FFC700")}
          >
            My ode to homegrown, human solutions.
          </Box>
        </Box>
        <Box className="flex flex-row mt-5  w-full justify-evenly">
          <Box
            width="200px"
            height="73px"
            backgroundColor={"#50FFAF"}
            borderColor={"#050017"}
            borderRadius={50}
            color={"#050017"}
          >
            <Button
              width="200px"
              height="73px"
              variant="solid"
              backgroundColor={"#50FFAF"}
              borderColor={"#050017"}
              borderRadius={50}
              color={"#050017"}
            >
              Things
            </Button>
          </Box>
          <Button
            width="200px"
            height="73px"
            variant="outline"
            borderColor={"#0030DD"}
            borderRadius={50}
          >
            About
          </Button>
        </Box>
      </Box>
      <Box title="rightSideArea" className="flex flex-col w-1/2  items-center ">
        <Image
          src="/images/heroImage.png"
          alt="Image of phone and content falling out."
          className="flex flex-col"
          width={480}
        />
        <Text className="font-Inter font-light text-base text-white w-529 h-46 max-w-full">
          {" "}
          image ~ https://craftwork.design/downloads/ultima/
        </Text>
      </Box>
    </Box>
  );
}
