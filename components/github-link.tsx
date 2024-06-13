import { GithubIcon } from "lucide-react";
import Link from "next/link";

type GithubLinkProps = {
  link: string;
};

export default function GithubLink({ link }: GithubLinkProps) {
  return (
    <Link href={link} className="bg-muted-foreground/20 p-2 rounded-lg">
      <GithubIcon size={16} strokeWidth={3} />
    </Link>
  );
}
