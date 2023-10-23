import { useEffect, useRef } from 'react'

interface InputProps {
    type: string
    name: string
    placeholder?: string
    value: string | number
    max?: number
    className?: string
    autoComplete?: string
    required?: boolean
    isFocused?: boolean
    handleChange: React.ChangeEventHandler<HTMLInputElement>
    validation?: string
    disabled?: boolean
}

const Input = ({
    type = 'text',
    name,
    placeholder,
    value,
    max,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    validation,
    disabled,
}: InputProps) => {
    const input = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (isFocused && input.current) {
            input.current.focus()
        }
    }, [isFocused])

    const inputClasses = `
        focus:border-gray focus:ring-gray rounded-md shadow-sm
        ${validation ? 'border-red-400' : 'border-gray-300'}
        ${disabled ? 'bg-slate-200 text-gray-500' : ''}
        ${className || ''} 
    `

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                maxLength={max}
                disabled={disabled}
                placeholder={placeholder}
                className={inputClasses.trim()}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={handleChange}
            />
        </div>
    )
}

export default Input
