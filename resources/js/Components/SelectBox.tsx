import { useEffect, useRef } from 'react'

interface Props {
    name: string
    value: string
    options: { [key: string]: string[] }
    className?: string
    required?: boolean
    isFocused?: boolean
    handleChange: React.ChangeEventHandler<HTMLSelectElement>
    validation: string | undefined
}

const SelectBox = ({
    name,
    value,
    options,
    className,
    required,
    isFocused,
    handleChange,
    validation,
}: Props) => {
    const selectRef = useRef<HTMLSelectElement>(null)

    useEffect(() => {
        if (isFocused && selectRef.current) {
            selectRef.current.focus()
        }
    }, [isFocused])

    const selectClasses = `
        focus:border-gray focus:ring-gray rounded-md shadow-sm
        ${validation ? 'border-red-400' : 'border-gray-300'}
        ${className || ''} 
    `

    return (
        <div className="flex flex-col items-start">
            <select
                name={name}
                value={value}
                className={selectClasses}
                ref={selectRef}
                required={required}
                onChange={handleChange}
            >
                {Object.entries(options).map(([key, val]) => (
                    <option key={key} value={key}>
                        {val}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SelectBox
