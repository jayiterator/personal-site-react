import { ReactNode } from "react";
import {
  Box,
  useColorModeValue,
  Text,
  Image,
  Heading,
  Button,
  Link,
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
      h={650}
      w={"full"}
      marginTop={10}
      className="flex flex-col p-5 lg:max-final:flex-row min-w-fit h-fit "
      id="about"
    >
      {children}

      <Box
        title="leftSideArea"
        className=" flex basis-1/2 flex-col items-center px-8 "
      >
        <Heading
          color={useColorModeValue("#050017", "#FFC700")}
          className=" break-normal p-2 font-Inter w-11/12 font-bold text-3xl max-w-full md:max-final:text-6xl "
          //   noOfLines={2}
          wordBreak={"break-word"}
        >
          About
        </Heading>
        <Box className=" py-5 items-center flex flex-col w-full ">
          <Image
            src="/images/About1.png"
            alt="Image of Me."
            className="flex flex-col mb-6"
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
            <Link href="https://www.linkedin.com/in/jayson-paul-63762b79/">
              <Button
                width="200px"
                height="73px"
                variant="solid"
                colorScheme="blue"
                borderColor={"#0030DD"}
                borderRadius={50}
                color={useColorModeValue("#050017", "#FFC700")}
              >
                Check out my LinkedIn
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box title="middleArea" className=" basis-1/2 pt-2 lg:max-final:pt-16 ">
        <Text
          color={useColorModeValue("#050017", "#FFC700")}
          className=" font-Inter font-regular text-sm w-750 h-427 max-w-full pt-5"
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
        <Box
          className="text-center text-sm"
          color={useColorModeValue("#050017", "#FFC700")}
        >
          People give technology meaning.
        </Box>
        <Text
          className=" font-Inter font-regular text-sm w-750 h-427 max-w-full pt-5"
          color={useColorModeValue("#050017", "#FFC700")}
        >
          I build for people. Sometimes that person is myself, and other times
          its a client or a small company, but there’s always a person with a
          problem to solve behind the things I love to build. Technology has no
          inherent meaning--and we should love and judge it for its ability to
          suit the human purposes we give it.
          <br />
        </Text>
        <Box
          className="text-right text-sm"
          color={useColorModeValue("#050017", "#FFC700")}
        >
          I build simple things, well.
        </Box>
        <Text
          className=" font-Inter font-regular text-sm w-750 h-427 max-w-full pt-5"
          color={useColorModeValue("#050017", "#FFC700")}
        >
          I love to make things, and given the choice to build something, I’ll
          always start simple. As I’ve grown in my technology practice, I’ve
          become more and more passionate about simple, quality products with
          purpose.
        </Text>
      </Box>
      <Box
        title="rightSideArea"
        className="flex flex-col items-center justify-end mb-10 p-5"
      >
        <Image
          src="/images/About2.png"
          alt="Image of Me."
          className=" min-w-[285px] w-[300px]"
        />
      </Box>
    </Box>
  );
}
