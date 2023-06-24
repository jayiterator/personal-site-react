"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";
import Footer from "./components/footer";
import Hero from "./components/heroSection";
import Nav from "./components/navbar";
import ProjectLeftSection from "./components/projectLeftSection";
import ProjectRightSection from "./components/projectRightSection";
import { Suspense } from "react";
import AboutSection from "./components/aboutSection";

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
      <ProjectLeftSection
        blurbText="The 100 Days of Mindfulness project was designed and built for a
          client encapsulating a meditation program into a mobile application
          for Android and iOS on React Native. I built v1.0 of the app deployed
          to Android and iOS internal distribution. This app needed to be
          deployed both inside and outside China, and so back-ends were built
          and hosted on both AWS Amplify and Tencent Cloud. This was my first
          solo outing in React Native."
        techStack={"/images/100DaysStack.png"}
        projectTitle={"100 Days (React Native)"}
        projectImage={"/images/100DaysImages.png"}
      >
        {}
      </ProjectLeftSection>
      <ProjectRightSection
        blurbText="The C Project was a major group project from my
        penultimate semester of my Masters of IT - Software Development program.
        My personal contributions to the project focused on the site
        administration area including a bespoke loader for embedded links to
        musical pieces and a site message management system."
        techStack={"/images/CStack.png"}
        projectTitle={"C Project (React and NextJS)"}
        projectImage={"/images/CImages.png"}
      >
        {}
      </ProjectRightSection>
      <AboutSection
        blurbText={""}
        techStack={""}
        projectTitle={""}
        projectImage={""}
      >
        {}
      </AboutSection>
      <Footer>{}</Footer>
    </Box>
  );
}
