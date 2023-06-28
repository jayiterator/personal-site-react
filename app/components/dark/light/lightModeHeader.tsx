import { Text } from "@chakra-ui/react";

export default function LightModeHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Text className="font-inter font-bold text-sm text-[#050017] w-700 h-179 max-w-full md:max-2xl:text-xl">
      {children}
    </Text>
  );
}
