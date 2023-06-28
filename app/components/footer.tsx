import { ReactNode } from "react";
import {
  Box,
  useColorModeValue,
  Text,
  Link,
  Flex,
  useColorMode,
  Stack,
  Button,
  Menu,
  Image,
} from "@chakra-ui/react";
import LightModeHeader from "./dark/light/lightModeHeader";
import DarkModeHeader from "./dark/light/darkModeHeader";
import LightModeText from "./dark/light/lightModeText";
import DarkModeText from "./dark/light/darkModeText";

const NavLink = ({
  children,
  linkTo,
}: {
  children: ReactNode;
  linkTo: string;
}) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={linkTo}
  >
    {children}
  </Link>
);

export default function Footer({ children }: { children: React.ReactNode }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      borderWidth={1}
      borderColor={useColorModeValue("gray.500", "gray.700")}
      h={300}
      w={"full"}
      marginTop={10}
      className="flex flex-col p-5 lg:max-final:flex-row min-w-fit h-fit"
      id="footer"
    >
      {children}
      <Box className=" flex px-10 w-full ">
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          className=" w-full "
        >
          <Box>
            {colorMode === "light" ? (
              <LightModeHeader>Simple Digital Things</LightModeHeader>
            ) : (
              <DarkModeHeader>Simple Digital Things</DarkModeHeader>
            )}
          </Box>

          {colorMode === "light" ? (
            <NavLink linkTo="#Project1">
              <LightModeText>Things</LightModeText>
            </NavLink>
          ) : (
            <NavLink linkTo="#Project1">
              <DarkModeText type="schema">Things</DarkModeText>
            </NavLink>
          )}
          {colorMode === "light" ? (
            <NavLink linkTo="#about">
              <LightModeText>About</LightModeText>
            </NavLink>
          ) : (
            <NavLink linkTo="#about">
              <DarkModeText type="schema">About</DarkModeText>
            </NavLink>
          )}
          {colorMode === "light" ? (
            <NavLink linkTo="#footer">
              <LightModeText>Contact</LightModeText>
            </NavLink>
          ) : (
            <NavLink linkTo="#footer">
              <DarkModeText type="schema">Contact</DarkModeText>
            </NavLink>
          )}
        </Flex>
      </Box>
      <Box className=" basis-1/5 flex justify-end px-5 ">
        <Box className=" flex flex-row h-44 bg-[#F1F1F1] rounded-lg self-center min-w-[285px]">
          <Box className="flex flex-col basis-2/5 justify-around items-center py-5 ">
            <Box className="flex flex-row">
              <Link href="https://www.linkedin.com/in/jayson-paul-63762b79/">
                <Image
                  src="/images/LinkedIn.png"
                  alt="Image of Me."
                  className="flex flex-col mx-2"
                  width={10}
                />
              </Link>
              <Text className="text-black"> LinkedIn</Text>
            </Box>
            <Box className="flex flex-row">
              <Link href="https://github.com/jayiterator">
                <Image
                  src="/images/github.png"
                  alt="Image of Me."
                  className="flex flex-col mx-2"
                  width={10}
                />
              </Link>
              <Text className="text-black"> Github</Text>
            </Box>
          </Box>
          <Box className="flex flex-col items-center basis-3/5 justify-around">
            <Image
              src="/images/email.png"
              alt="Image of Me."
              className="flex flex-col"
              width={16}
            />
            <Box
              width="170px"
              height="73px"
              backgroundColor={"#50FFAF"}
              borderColor={"#050017"}
              borderRadius={50}
              color={"#050017"}
            >
              <Link href="mailto:jayson.nm.paul@hotmail.com">
                <Button
                  width="170px"
                  height="73px"
                  variant="solid"
                  backgroundColor={"#50FFAF"}
                  borderColor={"#050017"}
                  borderRadius={50}
                  color={"#050017"}
                >
                  Email Me
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
