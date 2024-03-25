import type { Metadata } from "next";
import Navbar from "@/components/navbar";

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
    <>
      <Navbar />
      {children}
    </>
  );
}
