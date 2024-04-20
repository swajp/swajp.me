import ProjectStudy from "@/components/project-study";
import Projects from "@/components/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectStudy />
      <Projects />
    </>
  );
}
