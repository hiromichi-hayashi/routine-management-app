import Todos from '@/types/Todo'
import { BsPencilSquare } from 'react-icons/bs'

interface Props {
    items: Todos[]
    className: string
    onEditClick?: (index: number) => void
}

const HabitTodoList = ({ items, className, onEditClick }: Props) => (
    <>
        {items.map((item, index) => (
            <div key={index} className={className}>
                <span
                    className={`w-[4px] h-full mr-3 ${
                        index % 2 === 0 ? 'bg-teal-400' : 'bg-teal-600'
                    }`}
                />
                <div className="w-full flex justify-between items-center cursor-pointer">
                    {item.title}
                    <BsPencilSquare
                        className="mr-4"
                        onClick={() => onEditClick && onEditClick(index)}
                    />
                </div>
            </div>
        ))}
    </>
)

export default HabitTodoList
