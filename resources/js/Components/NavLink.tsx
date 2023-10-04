import { Link } from '@inertiajs/inertia-react'

interface Props {
    href: string
    active: boolean
    children: React.ReactNode
}

const NavLink = ({ href, active, children }: Props) => {
    const baseClasses = `
        inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium 
        leading-5 focus:outline-none transition duration-150 ease-in-out
    `

    const activeClasses = `
        border-indigo-400 text-gray-900 focus:border-indigo-700
    `

    const inactiveClasses = `
        border-transparent text-gray-500 hover:text-gray-700 
        hover:border-gray-300 focus:text-gray-700 focus:border-gray-300
    `

    return (
        <Link
            href={href}
            className={`${baseClasses} ${
                active ? activeClasses : inactiveClasses
            }`}
        >
            {children}
        </Link>
    )
}

export default NavLink
