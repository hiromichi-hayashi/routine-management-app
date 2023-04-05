interface Props {
    type?: 'submit' | 'button' | 'reset' | undefined
    className?: string
    bgColor?: string
    textColor?: string
    processing: boolean
    children: React.ReactNode
}

export default function Button({
    type = 'submit',
    className = '',
    bgColor = 'bg-gray-900',
    textColor = 'text-white',
    processing,
    children,
}: Props) {
    return (
        <button
            type={type}
            className={[
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
                processing ? 'opacity-25' : '',
                bgColor,
                textColor,
                className,
            ].join(' ')}
            disabled={processing}
        >
            {children}
        </button>
    )
}
