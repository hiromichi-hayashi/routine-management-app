import Link from '@/Components/Link'
import { useState, useContext, createContext } from 'react'
import { Transition } from '@headlessui/react'

interface ContextType {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    toggleOpen: React.MouseEventHandler<HTMLDivElement>
}

interface Children {
    children: React.ReactNode
}

type ContentProps = {
    align?: string
    width?: string
    contentClasses?: string
    children: React.ReactNode
}

type DropdownLinkProps = {
    href: string
    method?: 'get' | 'post' | 'put' | 'patch' | 'delete'
    as?: string
    children: React.ReactNode
    underline?: boolean
}

const DropDownContext = createContext<ContextType>({} as ContextType)

const Dropdown = ({ children }: Children) => {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen((prev) => !prev)

    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="relative">{children}</div>
        </DropDownContext.Provider>
    )
}

const Trigger = ({ children }: Children) => {
    const { open, toggleOpen } = useContext(DropDownContext)
    return (
        <>
            <div onClick={toggleOpen}>{children}</div>
            {open && <div className="fixed inset-0" onClick={toggleOpen}></div>}
        </>
    )
}

const baseContentClasses = `
    absolute mt-2 rounded-md shadow-lg
`
const baseRingClasses = `
    rounded-md ring-1 ring-black ring-opacity-5
`

const baseDropdownLinkClasses = `
    block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 
    hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out
`

const Content = ({
    align = 'right',
    width = '48',
    contentClasses = 'py-1 bg-white',
    children,
}: ContentProps) => {
    const { open, setOpen } = useContext(DropDownContext)
    if (!open) return null

    const alignmentClasses =
        align === 'left' ? 'origin-top-left left-0' : 'origin-top-right right-0'
    const widthClasses = width === '48' ? 'w-48' : ''

    return (
        <Transition
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <div
                className={`${baseContentClasses} ${alignmentClasses} ${widthClasses}`}
                onClick={() => setOpen(false)}
            >
                <div className={`${baseRingClasses} ${contentClasses}`}>
                    {children}
                </div>
            </div>
        </Transition>
    )
}

const DropdownLink = ({
    href,
    method = 'post',
    as = 'a',
    children,
    underline = true,
}: DropdownLinkProps) => (
    <Link
        method={method}
        as={as}
        href={href}
        underline={underline}
        className={baseDropdownLinkClasses}
    >
        {children}
    </Link>
)

Dropdown.Trigger = Trigger
Dropdown.Content = Content
Dropdown.Link = DropdownLink

export default Dropdown
