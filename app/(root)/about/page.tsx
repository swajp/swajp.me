import MaxWidthWrapper from "@/components/max-width-wrapper"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "About"
}

export default function AboutPage() {
    return (
        <MaxWidthWrapper className="py-10 md:py-20">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full space-y-3">
                    <div>
                        <h2 className="text-4xl font-bold">About</h2>
                        <p className="text-muted-foreground mt-1 mb-4">Some information about me.</p>
                    </div>
                    <p>
                        My name is Miroslav Stejskal, and I have been involved in web development for some time. Initially, it was just a hobby, but
                        now I dedicate myself to this activity daily and with great enthusiasm
                    </p>
                    <p>
                        My main motivation for web application development is the desire to create modern and visually appealing websites. I am a
                        passionate advocate of the Next.js framework, which allows me to implement the latest approaches in web development.
                    </p>
                    <p>
                        One of my favorite projects that I&apos;ve worked on is a project called{" "}
                        <Link href="https://drie.cz" className="underline underline-offset-2">
                            DRIE
                        </Link>
                        . I collaborate on it with friends, and we aim not only to offer web development but also to create modern tools and solutions
                        for the online environment.
                    </p>
                    <p>
                        My dream is to live in an environment where every website is modern and attractive. Even though I haven&apos;t been employed
                        in this field yet, it doesn&apos;t mean I lack the passion to learn new things efficiently and quickly.
                    </p>
                    <p>Beyond web development, I have a passion for badminton and enjoy rewatching episodes of The Walking Dead.</p>
                </div>
                <div className="w-full flex justify-center">
                    <div className="p-4 border w-fit rounded-lg bg-gradient-to-b from-primary/10 from-60%">
                        <Image src="/mira2.jpg" className="rounded-lg" width={400} height={400} alt="Miroslav Stejskal" />
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}
