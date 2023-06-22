import { ReactNode } from "react";
import { Box, useColorModeValue, Text } from "@chakra-ui/react";

export default function ProjectLeftSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      borderWidth={1}
      borderColor={useColorModeValue("gray.500", "gray.700")}
      h={300}
      w={"full"}
      marginTop={10}
    >
      {children}
      <Text color={useColorModeValue("#050017", "white")}>Project Left</Text>
    </Box>
  );
}
