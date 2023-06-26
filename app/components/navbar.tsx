import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import DarkModeHeader from "./dark/light/darkModeHeader";
import LightModeHeader from "./dark/light/lightModeHeader";
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
    color={useColorModeValue("#050017", "#FFC700")}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      borderRadius={15}
      id="nav"
      className=" px-4 min-w-[380px] w-full"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Text
            color={useColorModeValue("#050017", "#FFC700")}
            className="font-inter font-bold text-lg w-700 h-179 max-w-full"
            noOfLines={2}
          >
            Simple Digital Things
          </Text>
        </Box>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Box className=" hidden sm:max-2xl:flex">
              <NavLink linkTo="#nav">
                <Text className="font-inter font-bold text-lg w-700 h-179 max-w-full">
                  Home
                </Text>
              </NavLink>

              <NavLink linkTo="#Project1">
                <Text className="font-inter font-bold text-lg w-700 h-179 max-w-full">
                  Things
                </Text>
              </NavLink>

              <NavLink linkTo="#about">
                <Text className="font-inter font-bold text-lg w-700 h-179 max-w-full">
                  About
                </Text>
              </NavLink>
            </Box>

            {/* md:max-xl:text-xl */}
            <Box className=" flex sm:max-2xl:hidden ml-5">
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  // variant="outline"
                  color={useColorModeValue("#050017", "#FFC700")}
                  size={"md"}
                />
                <MenuList alignItems={"center"}>
                  <MenuItem
                    color={useColorModeValue("#050017", "#FFC700")}
                    className="font-inter font-bold text-lg w-700 h-179 max-w-full"
                  >
                    <NavLink linkTo="#nav">Home</NavLink>
                  </MenuItem>
                  <MenuItem
                    color={useColorModeValue("#050017", "#FFC700")}
                    className="font-inter font-bold text-lg w-700 h-179 max-w-full"
                  >
                    <NavLink linkTo="#Project1">Things</NavLink>
                  </MenuItem>
                  <MenuItem
                    color={useColorModeValue("#050017", "#FFC700")}
                    className="font-inter font-bold text-lg w-700 h-179 max-w-full"
                  >
                    <NavLink linkTo="#about">About</NavLink>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
