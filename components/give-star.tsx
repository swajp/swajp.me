"use client";
import { ExternalLink, FileText, Star } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import Link from "next/link";

export default function GiveStar() {
  const { data } = useSWR("/api/github", fetcher);

  return (
    <Card className="h-full group">
      <Link href="https://github.com/swajp/swajp.me" target="_blank">
        <CardHeader>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
              <Star
                size={18}
                className="group-hover:text-yellow-400 group-hover:fill-yellow-400 transition-colors"
              />
              <p>Give it a star</p>
            </div>
            <ExternalLink size={14} className="text-muted-foreground" />
          </div>
          <CardTitle>{String(data)} stars</CardTitle>
        </CardHeader>
      </Link>
    </Card>
  );
}
