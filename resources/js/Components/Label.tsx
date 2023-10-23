interface Props {
    forInput: string
    className?: string
    fontSize?: string
    children: React.ReactNode
}

const Label = ({
    forInput,
    className = '',
    fontSize = 'text-sm',
    children,
}: Props) => {
    return (
        <label
            htmlFor={forInput}
            className={`block font-medium text-gray-700 ${className} ${fontSize}`}
        >
            {children}
        </label>
    )
}

export default Label
