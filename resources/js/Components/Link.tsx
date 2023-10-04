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

const Link = ({
    as,
    className,
    href,
    method,
    children,
    textColor = 'text-gray-600 hover:text-gray-900',
    underline = false,
    fontSize = 'text-sm',
}: Props) => {
    const sendHref: string = href === '/' ? href : route(href)

    const linkClassNames = [
        underline && 'underline',
        fontSize,
        textColor,
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <InertiaLink
            as={as}
            method={method}
            href={sendHref}
            className={linkClassNames}
        >
            {children}
        </InertiaLink>
    )
}

export default Link
