interface Props {
    name: string
    checked: boolean
    handleChange: React.ChangeEventHandler<HTMLInputElement>
}

const Checkbox = ({ name, checked, handleChange }: Props) => {
    // クラス名を予めグループ化
    const classNames = [
        'rounded',
        'border-gray-300',
        'text-indigo-600',
        'shadow-sm',
        'focus:border-indigo-300',
        'focus:ring',
        'focus:ring-indigo-200',
        'focus:ring-opacity-50',
    ].join(' ')

    return (
        <input
            type="checkbox"
            name={name}
            checked={checked}
            className={classNames}
            onChange={handleChange}
        />
    )
}

export default Checkbox
