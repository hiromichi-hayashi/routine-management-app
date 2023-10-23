import React from 'react'

interface Props {
    type?: 'submit' | 'button' | 'reset'
    className?: string
    bgColor?: string
    textColor?: string
    fontSize?: string
    children: React.ReactNode
    disabled?: boolean
    handleClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({
    type = 'submit',
    className = '',
    bgColor = 'bg-black hover:bg-gray',
    textColor = 'text-white',
    fontSize = 'text-sm',
    children,
    disabled,
    handleClick,
}: Props) => {
    const baseClasses = [
        'items-center',
        'border',
        'border-transparent',
        'rounded-md',
        'font-semibold',
        'text-center',
        'uppercase',
        'tracking-widest',
        'transition',
        'ease-in-out',
        'duration-150',
    ]

    const dynamicClasses = [bgColor, textColor, className, fontSize]

    return (
        <button
            type={type}
            disabled={disabled}
            className={[...baseClasses, ...dynamicClasses].join(' ')}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default Button
