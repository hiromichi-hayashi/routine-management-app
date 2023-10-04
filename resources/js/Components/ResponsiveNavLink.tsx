import Link from '@/Components/Link'

interface Props {
    method?: 'get' | 'post' | 'put' | 'patch' | 'delete'
    as?: string
    href: string
    active?: boolean
    children?: React.ReactNode
    underline?: boolean
}

const ResponsiveNavLink = ({
    method = 'get',
    as = 'a',
    href,
    active = false,
    children,
    underline = true,
}: Props) => {
    const baseClasses = `
        w-full flex items-start pl-3 pr-4 py-2 border-l-4 
        text-base font-medium focus:outline-none transition duration-150 ease-in-out
    `

    const activeClasses = `
        border-indigo-400 text-indigo-700 bg-indigo-50 
        focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700
    `

    const inactiveClasses = `
        border-transparent text-gray-600 hover:text-gray-800 
        hover:bg-gray-50 hover:border-gray-300
    `

    return (
        <Link
            method={method}
            as={as}
            href={href}
            underline={underline}
            className={`${baseClasses} ${
                active ? activeClasses : inactiveClasses
            }`}
        >
            {children}
        </Link>
    )
}

export default ResponsiveNavLink
