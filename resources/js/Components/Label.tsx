interface Props {
    forInput: string
    className?: string
    children: React.ReactNode
}

const Label = ({ forInput, className = '', children }: Props) => {
    return (
        <label
            htmlFor={forInput}
            className={`block font-medium text-sm text-gray-700 ${className}`}
        >
            {children}
        </label>
    )
}

export default Label
