"use client";

import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, Square } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/config";
import { cn } from "@/lib/utils";
import { ContactForm } from "./contact-form";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background mx-auto w-full max-w-screen-xl px-6 md:px-20 z-50">
      <nav className="hidden flex-col  md:flex md:flex-row md:items-center md:justify-between w-full">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Square className="size-5 fill-foreground" />
          <p>swajp</p>
        </Link>
        <div className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-5 md:text-sm lg:gap-6">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "hover:text-foreground",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
          <ContactForm />
          <ModeToggle />
        </div>
      </nav>
      <Sheet>
        <div className="w-full flex md:hidden justify-between">
          <Link
            href="#"
            className="flex items-center gap-2 font-semibold w-fit"
          >
            <Square className="size-5 fill-foreground" />
            <p>swajp</p>
          </Link>
          <div>
            <ModeToggle />
            <SheetTrigger className="ml-2" asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
          </div>
        </div>
        <SheetContent side="right">
          <nav className="grid gap-6 text-lg font-medium">
            {NAVIGATION.map((item) => (
              <SheetClose asChild>
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "hover:text-foreground",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              </SheetClose>
            ))}
            <ContactForm />
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
