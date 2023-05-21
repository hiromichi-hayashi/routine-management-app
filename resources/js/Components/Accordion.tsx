import { useState } from 'react'
import ListItems from '@/types/ListItems'

interface AccordionProps {
    listItems: ListItems[]
    titleClsddName?: string
    itemListsClsddName?: string
}

const Accordion = ({
    listItems,
    titleClsddName,
    itemListsClsddName,
}: AccordionProps) => {
    const [activeItem, setActiveItem] = useState<number[]>([])

    const toggleItem = (index: number) => {
        if (activeItem.includes(index)) {
            setActiveItem((prevItems) =>
                prevItems.filter((itemIndex) => itemIndex !== index)
            )
        } else {
            setActiveItem((prevItems) => [...prevItems, index])
        }
    }
    return (
        <>
            {listItems.map((item, index) => (
                <div key={index} className="cursor-pointer">
                    <div
                        onClick={() => toggleItem(index)}
                        className={titleClsddName}
                    >
                        {item.title}
                    </div>
                    {item.itemLists && (
                        <ul
                            className={`transition-all duration-500 ${
                                activeItem.includes(index)
                                    ? 'max-h-96'
                                    : 'max-h-0'
                            } overflow-hidden`}
                        >
                            {item.itemLists.map((listItem) => (
                                <li
                                    key={listItem}
                                    className={itemListsClsddName}
                                >
                                    {listItem}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </>
    )
}

export default Accordion
