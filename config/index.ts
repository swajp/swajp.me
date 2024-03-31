interface IProject {
  title: string;
  description: string;
  href: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export const NAVIGATION = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
  //contact is included in the navigation by contact-form.tsx
];

export const PROJECTS: IProject[] = [
  {
    title: "DRIE",
    description: "Full-stack developer, designer, and creator.",
    href: "https://drie.cz",
    image: "/projects/drie-project.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer motion"],
    featured: true,
  },
  {
    title: "yogaboskovice",
    description: "Website for yoga studio in Boskovice.",
    href: "https://yogaboskovice.cz",
    image: "/projects/yogaboskovice-project.png",
    tags: ["Wordpress", "Elementor"],
    featured: true,
  },
  {
    title: "Shortner Tool",
    description: "Fast and simple URL shortner tool.",
    href: "https://short.drie.cz",
    image: "/projects/short-project.png",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "my-story",
    description: "Share your stories with the world.",
    href: "https://story-sharing-app-nu.vercel.app/",
    image: "/projects/mystory-project.png",
    tags: ["Next.js", "Tailwind CSS", "Framer motion", "Convex"],
  },
  {
    title: "LoRa",
    description: "LoRa network offered in Boskovice.",
    href: "https://lora.drie.cz",
    image: "/projects/lora-project.png",
    tags: ["Next.js", "Tailwind CSS", "Framer motion"],
  },
  {
    title: "betterUML",
    description: "Create effectively and easy class diagrams.",
    href: "https://better-uml.vercel.app",
    image: "/projects/betteruml-project.png",
    tags: ["Next.js", "Tailwind CSS", "Framer motion"],
  },
];
