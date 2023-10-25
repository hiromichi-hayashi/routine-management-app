interface Props {
    name: string
    checked: boolean
    handleChange: React.ChangeEventHandler<HTMLInputElement>
}

const Checkbox = ({ name, checked, handleChange }: Props) => {
    const classNames = [
        'rounded',
        'border-gray',
        'text-gray',
        'shadow-sm',
        'focus:border-gray',
        'focus:ring',
        'focus:ring-gray',
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
