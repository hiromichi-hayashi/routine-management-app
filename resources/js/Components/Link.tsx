import { Link as InertiaLink } from '@inertiajs/inertia-react'
import route from 'ziggy-js'

interface Props {
    as?: string
    href: string
    data?: object
    method?: 'get' | 'post' | 'put' | 'patch' | 'delete'
    className?: string
    children: React.ReactNode
    textColor?: string
    underline?: boolean
    fontSize?: string
}

export default function Link({
    as,
    className,
    href,
    method,
    children,
    textColor,
    underline,
    fontSize,
}: Props) {
    const sendHref: string = href === '/' ? href : route(href)

    return (
        <InertiaLink
            as={as}
            method={method}
            href={sendHref}
            className={[
                underline && 'underline',
                fontSize ?? 'text-sm',
                textColor ?? 'text-gray-600 hover:text-gray-900',
                className,
            ].join(' ')}
        >
            {children}
        </InertiaLink>
    )
}
