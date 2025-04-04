"use client"

import { ClockIcon, InfoIcon } from "lucide-react"
import useSWR from "swr"

import { fetcher } from "@/lib/fetcher"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { cn } from "@/lib/utils"

type Wakatime = {
    seconds: number
}

const CodingHours = () => {
    const { data: wakatimeData, error, isLoading } = useSWR<Wakatime>("/api/wakatime", fetcher)

    let content

    if (error) {
        content = <span className="text-red-500">Error</span>
    } else if (isLoading || !wakatimeData) {
        content = <div className="animate-pulse h-5 w-20 bg-primary/20 rounded-lg"></div>
    } else {
        const hours = Number.isFinite(wakatimeData?.seconds) ? Math.round(wakatimeData.seconds / 60 / 60) : 0

        const shouldBlur = hours === 0
        content = <span className={cn("px-2 py-1 rounded transition-all", shouldBlur && "bg-black/40 blur-sm")}>{hours}hrs</span>
    }

    return (
        <Card className="h-full group invert">
            <CardHeader>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2 mb-2 text-sm">
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
                <CardTitle className="font-mono">{content}</CardTitle>
            </CardHeader>
        </Card>
    )
}

export default CodingHours
