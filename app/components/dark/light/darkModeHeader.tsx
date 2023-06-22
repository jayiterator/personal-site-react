import { Text } from "@chakra-ui/react";

export default function DarkModeHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Text className="font-inter font-bold text-xl text-yellow-300 w-700 h-179 max-w-full">
      {children}
    </Text>
  );
}
