"use client";
import dynamic from "next/dynamic";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Extensions from "@/components/Extensions";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Contact from "@/components/contact/Contact";

const Projects = dynamic(() => import("@/components/projects/Projects"), {
  ssr: false,
  loading: () => <section className="c-space my-20 min-h-[32rem]" aria-hidden="true" />,
});

// export const metadata: Metadata = {
//   title: "Home",
//   description:
//     "Welcome to my portfolio. I am a software developer specializing in full-stack web development with React and Node.js.",
// };

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl relative w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        {/* <RecentProjects /> */}
        <Experience />
        <Extensions />
        {/* <Approach /> */}
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
