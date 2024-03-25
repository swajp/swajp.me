import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <MaxWidthWrapper className="mb-16 mt-24 sm:mt-32 flex flex-col items-center justify-center text-center">
      <Link
        className="inline-flex items-center rounded-lg border px-3 py-1 text-sm font-medium mb-2"
        href="/docs/changelog"
      >
        <span className="relative flex h-2 w-2 mr-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
        </span>
        <span className="sm:hidden">Available for hire</span>
        <span className="hidden sm:inline">Available for work!</span>
      </Link>
      <h1 className="max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl">
        Hi I&apos;m a{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">
          Full Stack
        </span>{" "}
        developer creating modern web apps.
      </h1>
      <p className="mt-5 max-w-prose text-muted-foreground sm:text-lg">
        A full stack developer based in the Czech Republic. I&apos;m passionate
        about building modern web applications using Next.js, React, and
        Tailwind CSS.
      </p>

      <Link
        className={buttonVariants({ size: "lg", className: "mt-5" })}
        href={"/dashboard"}
        target="_blank"
      >
        Get started <ArrowRight className="w-5 h-5 ml-2" />
      </Link>
    </MaxWidthWrapper>
  );
}
