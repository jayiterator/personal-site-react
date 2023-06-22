import { Text } from "@chakra-ui/react";

export default function LightModeText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Text className="font-inter font-semibold text-base text-[#050017]">
      {children}
    </Text>
  );
}
