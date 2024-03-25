import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import MaxWidthWrapper from "@/components/max-width-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "swajp",
  description: "Full-stack developer, designer, and creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative h-full min-h-screen antialiased font-sans",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="swajp-theme"
          disableTransitionOnChange
        >
          <MaxWidthWrapper>
            <Navbar />
            {children}
          </MaxWidthWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
