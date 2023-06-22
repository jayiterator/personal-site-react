import { Text } from "@chakra-ui/react";

export default function DarkModeText({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) {
  return type === "standard" ? (
    <Text className="font-inter font-semibold text-base text-white">
      {children}
    </Text>
  ) : (
    <Text className="font-inter font-semibold text-base text-yellow-300">
      {children}
    </Text>
  );
}
