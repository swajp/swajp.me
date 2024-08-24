import { buttonVariants } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

interface PostItemProps {
    slug: string
    title: string
    description?: string
    date: string
}

export default function PostItem({ slug, title, description, date }: PostItemProps) {
    return (
        <article className="my-8 rounded-lg border p-4">
            <div>
                <Link href={slug}>
                    <h2 className="text-2xl font-semibold">{title}</h2>
                </Link>
            </div>
            {description && <p className="text-muted-foreground">{description}</p>}
            <div className="flex justify-between">
                <dl className="flex">
                    <dt>Published On</dt>
                    <dd>
                        <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                </dl>
                <Link
                    className={buttonVariants({
                        variant: "link",
                        className: "flex gap-1 items-center"
                    })}
                    href={slug}
                >
                    Read More
                    <ArrowRightIcon size={16} />
                </Link>
            </div>
        </article>
    )
}
