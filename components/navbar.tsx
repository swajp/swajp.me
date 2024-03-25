"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, Square } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/config";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col  md:flex md:flex-row md:items-center md:justify-between w-full">
        <Link href="#" className="flex items-center gap-2 font-semibold">
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
            <Link href="#" className="hover:text-foreground">
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Orders
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Customers
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Analytics
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
