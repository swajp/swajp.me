import { FOOTER_PAGES, OTHERS, SOCIALS } from "@/config";
import Link from "next/link";

export default function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="bg-background mx-auto w-full max-w-screen-xl px-6 md:px-20 z-50">
      <div className="border-t w-full py-6">
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-4 w-fit">
            {FOOTER_PAGES.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {page.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 w-fit">
            {SOCIALS.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {social.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 w-fit">
            {OTHERS.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {social.title}
              </Link>
            ))}
          </div>
        </div>
        <p className="pt-8">© {getYear()} swajp</p>
      </div>
    </footer>
  );
}
