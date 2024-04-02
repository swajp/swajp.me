import { unstable_noStore as noStore } from "next/cache";
import { NextResponse } from "next/server";

export const runtime = "edge";

export const GET = async () => {
  noStore();

  const res = await fetch("https://api.github.com/repos/swajp/swajp.me");

  if (res.ok) {
    const { stargazers_count } = await res.json();
    return new NextResponse(stargazers_count.toString());
  }

  return new NextResponse("No data");
};
