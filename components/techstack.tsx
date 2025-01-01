import { FileCode, FileText, Github, LinkIcon, Linkedin, Mail, MailIcon } from "lucide-react"
import { Card, CardHeader } from "./ui/card"
import Link from "next/link"
import { Badge } from "./ui/badge"
import { TECH_STACK } from "@/config"

const colors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-indigo-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-orange-400",
    "bg-cyan-400",
    "bg-rose-400",
    "bg-fuchsia-400",
    "bg-violet-400",
    "bg-emerald-400",
    "bg-teal-400"
]

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

export default function TechStack() {
    return (
        <Card className="h-full">
            <CardHeader>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2 mb-2 text-sm">
                        <FileCode size={18} />
                        <p>Techstack</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                    {TECH_STACK.map(tech => (
                        <Link href={tech.href} key={tech.title} target="_blank">
                            <Badge variant="secondary">
                                <div className={`${getRandomColor()} w-2 h-2 mr-2 rounded-full`} />
                                <span className="font-mono">{tech.title}</span>
                            </Badge>
                        </Link>
                    ))}
                </div>
            </CardHeader>
        </Card>
    )
}
