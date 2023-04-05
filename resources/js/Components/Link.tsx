import { Link as InertiaLink } from '@inertiajs/inertia-react'

interface Props {
    as?: string
    href: string
    data?: object
    method?: string
    className?: string
    children: React.ReactNode
    textColor?: string
    underline?: boolean
    fontSize?: string
}

export default function Link({
    as,
    className = '',
    href,
    method,
    children,
    textColor = 'text-gray-600 hover:text-gray-900',
    underline = true,
    fontSize = 'text-sm',
}: Props) {
    return (
        <InertiaLink
            as={as}
            method={method}
            href={route(href)}
            className={[
                underline && 'underline',
                fontSize,
                textColor,
                className,
            ].join(' ')}
        >
            {children}
        </InertiaLink>
    )
}
