"use client";

import { ClockIcon, InfoIcon } from "lucide-react";
import useSWR from "swr";

import { fetcher } from "@/lib/fetcher";
import { Card, CardHeader, CardTitle } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

type Wakatime = {
  seconds: number;
};

const CodingHours = () => {
  const { data: wakatimeData } = useSWR<Wakatime>("/api/wakatime", fetcher);

  return (
    <Card className="h-full group">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
            <ClockIcon size={18} />
            <p>Coding hours</p>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <InfoIcon size={18} />
              </TooltipTrigger>
              <TooltipContent className="border p-2 bg-background px-3 rounded-md text-sm text-muted-foreground">
                I started tracking my coding hours in Mar 13 2024.
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardTitle>
          {wakatimeData
            ? Math.round(wakatimeData.seconds / 60 / 60) + " hrs"
            : "No data"}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default CodingHours;
