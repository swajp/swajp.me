import {
  FileText,
  Github,
  LinkIcon,
  Linkedin,
  Mail,
  MailIcon,
} from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

export default function Connect() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 mb-2 text-sm">
            <LinkIcon size={18} />
            <p>Connect with me</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 *:text-muted-foreground *:flex *:items-center">
          <Link
            href="mailto:me@swajp.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon size={18} className="mr-3" />
            me@swajp.me
          </Link>
          <Link href="https://github.com/swajp">
            <Github size={18} className="mr-3" />
            swajp
          </Link>
          <Link href="https://www.linkedin.com/in/miroslav-stejskal/">
            <Linkedin size={18} className="mr-3" />
            Miroslav Stejskal
          </Link>
          <Link href="https://twitter.com/miirastejskal/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="size-[18px] mr-3"
            >
              <title>X</title>
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
            </svg>
            @miirastejskal
          </Link>
        </div>
      </CardHeader>
    </Card>
  );
}
