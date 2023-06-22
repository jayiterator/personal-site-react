import { ReactNode } from "react";
import { Box, useColorModeValue, Text } from "@chakra-ui/react";

export default function Footer({ children }: { children: React.ReactNode }) {
  return (
    <Box
      borderWidth={1}
      borderColor={useColorModeValue("gray.500", "gray.700")}
      h={200}
      w={"full"}
      marginTop={10}
    >
      {children}
      <Text color={useColorModeValue("#050017", "white")}>Footer</Text>
    </Box>
  );
}
