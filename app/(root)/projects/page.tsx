import Projects from "@/components/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <Projects />
    </>
  );
}
