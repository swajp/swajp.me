import { Square } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col items-center gap-2 justify-center">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Square className="size-8 fill-foreground" />
        <p className="text-2xl">swajp</p>
      </Link>
      <p className="text-sm mt-8">404 not found</p>
    </div>
  );
}
