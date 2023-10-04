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
    validation: string | undefined
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
    }, [isFocused]) // 明確なフックの依存関係を追加

    const inputClasses = `
        ${validation ? 'border-red-400' : 'border-gray-300'}
        focus:border-gray-500 focus:ring-gray-500 rounded-md shadow-sm
        ${disabled ? 'bg-slate-200 text-gray-500' : ''}
        ${className || ''} 
    `

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                max={max}
                disabled={disabled}
                placeholder={placeholder}
                className={inputClasses.trim()}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={handleChange} // 直接イベントハンドラをアタッチ
            />
        </div>
    )
}

export default Input
