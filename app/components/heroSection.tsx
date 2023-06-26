import { ReactNode } from "react";
import {
  Box,
  useColorModeValue,
  Text,
  Heading,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";

export default function Hero({ children }: { children: React.ReactNode }) {
  return (
    <Box
      borderWidth={1}
      borderColor={useColorModeValue("gray.500", "gray.700")}
      w={"full"}
      marginTop={10}
      className="flex flex-col lg:max-2xl:flex-row p-5 "
    >
      {children}

      <Box
        title="leftSideArea"
        className="flex flex-col sm:max-2xl:w-4/6 items-center "
      >
        <Box className=" w-full flex-row ">
          <Heading
            color={useColorModeValue("#050017", "#FFC700")}
            className="basis-1/4 p-2 font-Inter w-11/12 font-bold text-3xl max-w-full ml-10 sm:max-2xl:text-6xl"
            // noOfLines={2}
            wordBreak={"break-word"}
          >
            Simple Things, Done Well
          </Heading>
          <Box className="basis-1/2 max-w-full ml-14  ">
            <Text
              color={useColorModeValue("#050017", "#FFC700")}
              className="font-Inter font-regular text-l w-700 h-427 max-w-full mt-5 line-clamp-5 md:max-2xl:flex"
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
              className="text-center pt-5 hidden md:max-2xl:block"
              color={useColorModeValue("#050017", "#FFC700")}
            >
              A collection of simple, digital things made well.
            </Box>
            {/* border-2 border-white */}
            <Box
              className="text-right pt-5 hidden md:max-2xl:block "
              color={useColorModeValue("#050017", "#FFC700")}
            >
              My ode to homegrown, human solutions.
            </Box>
          </Box>
        </Box>
        <Box className=" ml-10 flex flex-row  w-full justify-evenly pt-5">
          <Box
            backgroundColor={"#50FFAF"}
            borderColor={"#050017"}
            borderRadius={50}
            color={"#050017"}
            className=" w-[120px] h-[73px] md:max-2xl:w-[200px]"
          >
            <Link href="#Project1">
              <Button
                variant="solid"
                backgroundColor={"#50FFAF"}
                borderColor={"#050017"}
                borderRadius={50}
                color={"#050017"}
                className=" w-[120px] h-[73px] md:max-2xl:w-[200px]"
              >
                Things
              </Button>
            </Link>
          </Box>
          <Link href="#about">
            <Button
              variant="outline"
              borderColor={"#0030DD"}
              borderRadius={50}
              className=" w-[120px] h-[73px] md:max-2xl:w-[200px]"
            >
              About
            </Button>
          </Link>
        </Box>
      </Box>
      <Box
        title="rightSideArea"
        className=" flex-shrink-0 min-w-400 items-center  "
      >
        <Image
          src="/images/heroImage.png"
          alt="Image of phone and content falling out."
          // className="flex flex-col"
          width={400}
          height={380}
          className="min-w-400 flex-shrink-0"
        />
        <Text className="font-Inter text-sm lg:max-2xl:text-right font-light text-white w-529 h-46 max-w-full hidden md:max-2xl:block">
          image ~ https://craftwork.design/downloads/ultima/
        </Text>
      </Box>
    </Box>
  );
}
