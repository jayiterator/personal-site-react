import { ReactNode } from "react";
import { Box, useColorModeValue, Text, Image, Heading } from "@chakra-ui/react";

export default function ProjectLeftSection({
  children,
}: {
  children: React.ReactNode;
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
        <Image
          src="/images/100DaysImages.png"
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
          100 Days (React Native)
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
            src="/images/100DaysStack.png"
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
          The 100 Days of Mindfulness project was designed and built for a
          client encapsulating a meditation program into a mobile application
          for Android and iOS on React Native. I built v1.0 of the app deployed
          to Android and iOS internal distribution. This app needed to be
          deployed both inside and outside China, and so back-ends were built
          and hosted on both AWS Amplify and Tencent Cloud. This was my first
          solo outing in React Native.
        </Text>
      </Box>
    </Box>
  );
}
