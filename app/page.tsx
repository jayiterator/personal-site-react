"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";
import Footer from "./components/footer";
import Hero from "./components/heroSection";
import Nav from "./components/navbar";
import ProjectLeftSection from "./components/projectLeftSection";
import ProjectRightSection from "./components/projectRightSection";
import { Suspense } from "react";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#050017]">
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark: bg-[#050017] dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Welcome home Jayson. This is your personal site.
    //       <Button colorScheme="blue" variant="outline">
    //         Button
    //       </Button>
    //     </p>

    //   </div>
    // </main>

    <Box
      className="flex min-h-screen flex-col items-center p-20 pt-5 "
      bg={useColorModeValue("gray.100", "#050017")}
    >
      <Nav />
      <Hero>{}</Hero>
      <ProjectLeftSection>{}</ProjectLeftSection>
      <ProjectRightSection>{}</ProjectRightSection>
      <ProjectLeftSection>{}</ProjectLeftSection>
      <Footer>{}</Footer>
    </Box>
  );
}
