import Image from "next/image";
import MaxWidthWrapper from "./max-width-wrapper";
import { Badge } from "./ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { PROJECTS } from "@/config";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import GithubLink from "./github-link";

export default function FeaturedProjects() {
  return (
    <MaxWidthWrapper className="py-10 md:py-20">
      <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {PROJECTS.filter((project) => project.featured).map((project) => (
          <Card className="h-full group" key={project.title}>
            <div className="p-4">
              <Link href={project.href}>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    alt="Image"
                    className="group-hover:scale-105 transition-all"
                    width={1280}
                    height={832}
                    quality={100}
                    src={project.image}
                  />
                </div>
              </Link>
            </div>
            <CardHeader className="pt-0 pb-3">
              <CardTitle>
                <div className="flex gap-2 items-center">
                  <Link href={project.href}>{project.title}</Link>
                  {project.github && <GithubLink link={project.github} />}
                </div>
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
              {project.tags.map((tag) => (
                <Badge variant="secondary" key={tag}>
                  {tag}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href="/projects"
          className={buttonVariants({
            variant: "outline",
            className: "mt-6",
          })}
        >
          View all projects
        </Link>
      </div>
    </MaxWidthWrapper>
  );
}
