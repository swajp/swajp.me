import Image from "next/image";
import MaxWidthWrapper from "./max-width-wrapper";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { PROJECTS } from "@/config";

export default function Projects() {
  return (
    <MaxWidthWrapper className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {PROJECTS.map((project) => (
        <Card key={project.title} className="group">
          <div className="p-4">
            <div className="overflow-hidden rounded-lg">
              <Image
                alt="Image"
                className="group-hover:scale-105 transition-all"
                width={1280}
                height={832}
                quality={100}
                src="/cover.png"
              />
            </div>
          </div>
          <CardHeader className="pt-0 pb-3">
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardFooter className="*:mr-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </CardFooter>
        </Card>
      ))}
    </MaxWidthWrapper>
  );
}
