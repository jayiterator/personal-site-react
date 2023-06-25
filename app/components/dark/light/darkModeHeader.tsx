import { Text } from "@chakra-ui/react";

export default function DarkModeHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Text className="font-inter font-bold text-sm text-[#FFC700] w-700 h-179 max-w-full md:max-2xl:text-xl">
      {children}
    </Text>
  );
}
