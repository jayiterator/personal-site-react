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
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import DarkModeHeader from "./dark/light/darkModeHeader";
import LightModeHeader from "./dark/light/lightModeHeader";
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

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        w={"full"}
        borderRadius={15}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            {colorMode === "light" ? (
              <LightModeHeader>Simple Digital Things</LightModeHeader>
            ) : (
              <DarkModeHeader>Simple Digital Things</DarkModeHeader>
            )}
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {colorMode === "light" ? (
                <NavLink>
                  <LightModeText>Home</LightModeText>
                </NavLink>
              ) : (
                <NavLink>
                  <DarkModeText type="schema">Home</DarkModeText>
                </NavLink>
              )}
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
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>
                      {colorMode === "light" ? (
                        <LightModeText>Username</LightModeText>
                      ) : (
                        <DarkModeText type="standard">Username</DarkModeText>
                      )}
                    </p>
                  </Center>
                  <br />
                  <MenuDivider />
                  {colorMode === "light" ? (
                    <>
                      <MenuItem>
                        <LightModeText>Your Servers</LightModeText>
                      </MenuItem>
                      <MenuItem>
                        <LightModeText>Account Settings</LightModeText>
                      </MenuItem>
                      <MenuItem>
                        <LightModeText>Logout</LightModeText>
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem>
                        <DarkModeText type="standard">
                          Your Servers
                        </DarkModeText>
                      </MenuItem>
                      <MenuItem>
                        <DarkModeText type="standard">
                          Account Settings
                        </DarkModeText>
                      </MenuItem>
                      <MenuItem>
                        <DarkModeText type="standard">Logout</DarkModeText>
                      </MenuItem>
                    </>
                  )}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
