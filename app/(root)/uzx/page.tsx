import MaxWidthWrapper from "@/components/max-width-wrapper";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function UzxPage() {
  return (
    <MaxWidthWrapper className="py-10 md:py-20">
      <h1 className="text-4xl font-bold">Two websites for Czech company UZX</h1>
      <p className="text-muted-foreground mt-2 mb-8 tracking-wide max-w-2xl">
        I created and designed{" "}
        <Link
          className="underline underline-offset-2 text-foreground"
          href="https://uzx-elektro.cz"
        >
          uzx-elektro
        </Link>{" "}
        which is company offering Loxone smart home solutions. The second
        website{" "}
        <Link
          href="https://uzx-security.cz"
          className="underline underline-offset-2 text-foreground"
        >
          uzx-security
        </Link>{" "}
        is focused on Jablotron alarm systems.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Link href="https://uzx-elektro.cz">
          <Card className="group h-full">
            <div className="p-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  alt="Image"
                  className="group-hover:scale-105 transition-all"
                  width={1280}
                  height={832}
                  quality={100}
                  src="/projects/uzxelektro-project.png"
                />
              </div>
            </div>
            <CardHeader className="pt-0 pb-3">
              <CardTitle>uzx-elektro</CardTitle>
              <CardDescription>
                A complete redesign of the company&apos;s website. Design was
                created in Figma. The website is built with Next.js and Tailwind
                CSS. For components, I used shadcn/ui. This website is focused
                on Loxone technology.
              </CardDescription>
            </CardHeader>
            <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Figma</Badge>
              <Badge variant="secondary">shadcn/ui</Badge>
            </CardFooter>
          </Card>
        </Link>
        <Link href="https://uzx-security.cz">
          <Card className="group h-full">
            <div className="p-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  alt="Image"
                  className="group-hover:scale-105 transition-all"
                  width={1280}
                  height={832}
                  quality={100}
                  src="/projects/uzxsecurity-project.png"
                />
              </div>
            </div>
            <CardHeader className="pt-0 pb-3">
              <CardTitle>uzx-security</CardTitle>
              <CardDescription>
                A complete redesign of the company&apos;s website. Design was
                created in Figma. The website is built with Next.js and Tailwind
                CSS. For components, I used shadcn/ui. This website is focused
                on Jablotron alarm systems.
              </CardDescription>
            </CardHeader>
            <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Figma</Badge>
              <Badge variant="secondary">shadcn/ui</Badge>
            </CardFooter>
          </Card>
        </Link>
      </div>
      <Card className="group h-full mt-8">
        <div className="p-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              alt="Image"
              className="group-hover:scale-105 transition-all"
              width={1600}
              height={900}
              quality={100}
              src="/projects/uzx-security-preview-01.png"
            />
          </div>
        </div>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
        <Link href="https://uzx-elektro.cz">
          <Card className="group h-full">
            <div className="p-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  alt="Image"
                  className="group-hover:scale-105 transition-all"
                  width={1280}
                  height={832}
                  quality={100}
                  src="/projects/uzx-security-preview-02.png"
                />
              </div>
            </div>
          </Card>
        </Link>
        <Link href="https://drie.cz/kontakt" target="_blank">
          <Card className="group relative overflow-hidden h-[300px] sm:h-full">
            <Sparkles
              className="absolute hidden lg:block text-muted-foreground/10 -right-[4rem] -bottom-[3rem]"
              size={300}
            />
            <Sparkles
              className="absolute text-muted-foreground/10 -left-[4rem] -top-[3rem]"
              size={180}
            />
            <Sparkles
              className="absolute text-muted-foreground/10 left-48 lg:left-[1rem] bottom-[1rem]"
              size={96}
            />
            <div className="h-full flex flex-col items-center justify-center">
              <h1 className="text-2xl mt-4 font-semibold">
                Are you interested?
              </h1>
              <p className="text-muted-foreground mt-1 text-center">
                Let&apos;s work together on your project.
              </p>
            </div>
          </Card>
        </Link>
      </div>
      <Card className="group h-full mt-8">
        <div className="p-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              alt="Image"
              className="group-hover:scale-105 transition-all"
              width={1600}
              height={900}
              quality={100}
              src="/projects/uzx-elektro-preview-01.png"
            />
          </div>
        </div>
      </Card>
    </MaxWidthWrapper>
  );
}
