interface Props {
    forInput: string
    className?: string | undefined
    children: React.ReactNode
}

export default function Label({ forInput, className, children }: Props) {
    return (
        <label
            htmlFor={forInput}
            className={`block font-medium text-sm text-gray-700 ${
                className !== undefined ? className : ''
            }`}
        >
            {children}
        </label>
    )
}
