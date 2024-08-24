import Image from "next/image"
import * as runtime from "react/jsx-runtime"
import { cn } from "@/lib/utils"
import { Callout } from "./callout"

const useMDXComponent = (code: string) => {
    const fn = new Function(code)
    return fn({ ...runtime }).default
}

const components = {
    Image,
    Callout,
    pre: (props: any) => (
        <pre {...props} className={cn("bg-muted text-muted-foreground rounded-sm p-4", props.className)} />
    ),
    code: (props: any) => (
        <code {...props} className={cn("bg-muted text-muted-foreground  text-wrap", props.className)} />
    ),
    h1: (props: any) => <h1 {...props} className={cn("text-4xl font-bold", props.className)} />,
    h2: (props: any) => <h2 {...props} className={cn("text-3xl font-bold", props.className)} />,
    h3: (props: any) => <h3 {...props} className={cn("text-2xl font-bold", props.className)} />,
    h4: (props: any) => <h4 {...props} className={cn("text-xl font-bold", props.className)} />,
    h5: (props: any) => <h5 {...props} className={cn("text-lg font-bold", props.className)} />,
    ul: (props: any) => <ul {...props} className={cn("list-disc", props.className)} />,
    li: (props: any) => <li {...props} className={cn("ml-4", props.className)} />,
    ol: (props: any) => <ol {...props} className={cn("list-decimal", props.className)} />,
    p: (props: any) => <p {...props} className={cn("text-lg", props.className)} />
}

interface MdxProps {
    code: string
}

export function MDXContent({ code }: MdxProps) {
    const Component = useMDXComponent(code)
    return <Component components={components} />
}
