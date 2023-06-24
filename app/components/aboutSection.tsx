import { ReactNode } from "react";
import {
  Box,
  useColorModeValue,
  Text,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
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

      <Box title="leftSideArea" className="flex flex-col basis-1/3  ">
        <Heading
          color={useColorModeValue("#050017", "#FFC700")}
          className="basis-1/8 pt-2 font-Inter font-bold text-6xl w-700 max-w-full pl-5 "
          //   noOfLines={2}
          wordBreak={"break-word"}
        >
          About
        </Heading>
        <Box className="basis-7/8 py-5 items-center flex flex-col ">
          <Image
            src="/images/About1.png"
            alt="Image of Me."
            className="flex flex-col mb-28"
            width={200}
          />
          <Image
            src="/images/LinkedIn.png"
            alt="Image of Me."
            className="flex flex-col mb-6"
            width={120}
          />
          <Box
            width="200px"
            height="73px"
            // backgroundColor={"#0030DD"}
            borderColor={"#0030DD"}
            borderRadius={50}
            borderWidth={2}
          >
            <Button
              width="200px"
              height="73px"
              variant="solid"
              colorScheme="blue"
              borderColor={"#0030DD"}
              borderRadius={50}
              color={"white"}
            >
              Check out my LinkedIn
            </Button>
          </Box>
        </Box>
      </Box>
      <Box title="middleArea" className=" basis-1/2 ">
        <Text
          color={useColorModeValue("#050017", "#FFC700")}
          className=" font-Inter font-regular text-l text-white w-750 h-427 max-w-full pt-5"
          wordBreak={"break-word"}
        >
          I’m a globe-trotting technologist.
          <br />
          <br />
          Born and raised in the twin-island republic of Trinidad and Tobago,
          I’ve studied, lived and work in Massachusetts at Amherst College. From
          there I continued my career in Beijing, China for three and a half
          years.
          <br />
          <br />
          Feeling the necessity of further expanding my skills and experiences I
          enrolled in and completed my Masters in IT software development at
          Swinburne University of Technology in Melbourne, where I currently
          reside and am building my career.
          <br />
          <br />
        </Text>
        <Box className="text-center">People give technology meaning.</Box>
        <Text>
          <br />
          I build for people. Sometimes that person is myself, and other times
          its a client or a small company, but there’s always a person with a
          problem to solve behind the things I love to build. Technology has no
          inherent meaning--and we should love and judge it for its ability to
          suit the human purposes we give it.
          <br />
          <br />
        </Text>
        <Box className="text-right">I build simple things, well.</Box>
        <Text>
          <br />I love to make things, and given the choice to build something,
          I’ll always start simple. As I’ve grown in my technology practice,
          I’ve become more and more passionate about simple, quality products
          with purpose.
        </Text>
      </Box>
      <Box
        title="rightSideArea"
        className="flex flex-col w-1/2 items-center justify-end "
      >
        <Image
          src="/images/About2.png"
          alt="Image of Me."
          className="flex flex-col pb-5"
          width={350}
        />
      </Box>
    </Box>
  );
}
