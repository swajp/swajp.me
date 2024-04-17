import AboutMe from "@/components/about-me";
import FeaturedProjects from "@/components/featured-projects";
import Hero from "@/components/hero";
import ProjectStudy from "@/components/project-study";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectStudy />
      <FeaturedProjects />
      <AboutMe />
    </>
  );
}
