import Select, {
    ValueType,
    OptionTypeBase,
    StylesConfig,
    ActionMeta,
} from 'react-select'

interface Props {
    name: string
    value: string
    options: { [key: string]: string }
    className?: string
    required?: boolean
    handleChange: (value: string) => void
    validation: string | undefined
}

const SelectBox = ({
    name,
    value,
    options,
    className,
    handleChange,
    validation,
}: Props) => {
    const formattedOptions = Object.entries(options).map(([key, val]) => ({
        value: key,
        label: val,
    }))

    const customStyles: StylesConfig<OptionTypeBase, false> = {
        control: (provided, state) => ({
            ...provided,
            borderColor: validation ? 'red' : 'gray',
            boxShadow: state.isFocused ? '0 0 0 1px' : 'none',
            '&:hover': {
                borderColor: validation ? 'red' : 'gray',
            },
        }),
    }

    const handleOptionChange = (
        option: ValueType<OptionTypeBase, false>,
        action: ActionMeta<OptionTypeBase>
    ) => {
        if (action.action === 'select-option') {
            handleChange((option as { value: string }).value)
        }
    }

    const selectedValue =
        formattedOptions.find((opt) => opt.value === value) || null

    return (
        <div className="flex flex-col items-start">
            <Select
                name={name}
                value={selectedValue}
                options={formattedOptions}
                className={className}
                styles={customStyles}
                isSearchable={false}
                onChange={handleOptionChange}
            />
        </div>
    )
}

export default SelectBox
