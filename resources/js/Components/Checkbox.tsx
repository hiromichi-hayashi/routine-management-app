interface Props {
    name: string
    checked: boolean
    handleChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function Checkbox({ name, checked, handleChange }: Props) {
    return (
        <input
            type="checkbox"
            name={name}
            checked={checked}
            className={[
                'rounded',
                'border-gray-300',
                'text-indigo-600',
                'shadow-sm',
                'focus:border-indigo-300',
                'focus:ring',
                'focus:ring-indigo-200',
                'focus:ring-opacity-50',
            ].join(' ')}
            onChange={(e) => handleChange(e)}
        />
    )
}
