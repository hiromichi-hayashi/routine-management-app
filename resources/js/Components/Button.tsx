interface Props {
    type?: 'submit' | 'button' | 'reset'
    className?: string
    bgColor?: string
    textColor?: string
    children: React.ReactNode
    disabled?: boolean
}

const Button = ({
    type = 'submit',
    className = '',
    bgColor = 'bg-gray-900 hover:bg-gray-700',
    textColor = 'text-white',
    children,
    disabled,
}: Props) => {
    const baseClasses = [
        'items-center',
        'px-4',
        'py-2',
        'border',
        'border-transparent',
        'rounded-md',
        'font-semibold',
        'text-xs',
        'text-center',
        'uppercase',
        'tracking-widest',
        'transition',
        'ease-in-out',
        'duration-150',
    ]

    const dynamicClasses = [bgColor, textColor, className]

    return (
        <button
            type={type}
            disabled={disabled}
            className={[...baseClasses, ...dynamicClasses].join(' ')}
        >
            {children}
        </button>
    )
}

export default Button
