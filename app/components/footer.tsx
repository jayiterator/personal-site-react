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

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
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
      className="flex flex-col"
    >
      {children}
      <Box className=" basis-1/5 px-5 w-3/4">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            {colorMode === "light" ? (
              <LightModeHeader>Simple Digital Things</LightModeHeader>
            ) : (
              <DarkModeHeader>Simple Digital Things</DarkModeHeader>
            )}
          </Box>

          {colorMode === "light" ? (
            <NavLink>
              <LightModeText>Things</LightModeText>
            </NavLink>
          ) : (
            <NavLink>
              <DarkModeText type="schema">Things</DarkModeText>
            </NavLink>
          )}
          {colorMode === "light" ? (
            <NavLink>
              <LightModeText>About</LightModeText>
            </NavLink>
          ) : (
            <NavLink>
              <DarkModeText type="schema">About</DarkModeText>
            </NavLink>
          )}
          {colorMode === "light" ? (
            <NavLink>
              <LightModeText>Contact</LightModeText>
            </NavLink>
          ) : (
            <NavLink>
              <DarkModeText type="schema">Contact</DarkModeText>
            </NavLink>
          )}
        </Flex>
      </Box>
      <Box className=" basis-4/5 flex justify-end px-5 ">
        <Box className=" flex flex-row h-44 bg-[#F1F1F1] rounded-lg self-center basis-1/3">
          <Box className="flex flex-col basis-2/5 justify-around items-center py-5 ">
            <Box className="flex flex-row">
              <Image
                src="/images/LinkedIn.png"
                alt="Image of Me."
                className="flex flex-col mx-2"
                width={10}
              />
              <Text className="text-black"> LinkedIn</Text>
            </Box>
            <Box className="flex flex-row">
              <Image
                src="/images/github.png"
                alt="Image of Me."
                className="flex flex-col mx-2"
                width={10}
              />
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
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
