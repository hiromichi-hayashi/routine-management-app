import { useState, createElement } from 'react'
import ListItems from '@/types/ListItems'
import Link from '@/Components/Link'

import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { IconType } from 'react-icons'

interface AccordionProps {
    listItems: ListItems[]
    titleClassName?: string
    itemListsClassName?: string
    listIcons: {
        [key: string]: IconType
    }
}

const Accordion = ({
    listItems,
    titleClassName,
    itemListsClassName,
    listIcons,
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
                    {item.itemLists !== undefined ? (
                        <div
                            className={titleClassName}
                            onClick={() => toggleItem(index)}
                        >
                            <div className="flex items-center space-x-2 text-base">
                                {createElement(listIcons[item.icon])}
                                <div>{item.title}</div>
                            </div>
                            {activeItem.includes(index) ? (
                                <BsChevronUp />
                            ) : (
                                <BsChevronDown />
                            )}
                        </div>
                    ) : (
                        <div className={titleClassName}>
                            <div className="flex items-center space-x-2 text-base">
                                {createElement(listIcons[item.icon])}
                                <Link href={item.href} fontSize="text-base">
                                    {item.title}
                                </Link>
                            </div>
                        </div>
                    )}
                    {item.itemLists && (
                        <ul
                            className={`transition-all duration-500 ${
                                activeItem.includes(index)
                                    ? 'max-h-96'
                                    : 'max-h-0'
                            } overflow-hidden`}
                        >
                            {item.itemLists.map((listItem) => (
                                <Link
                                    key={listItem.title}
                                    href={listItem.href}
                                    method={
                                        listItem.href === 'logout'
                                            ? 'post'
                                            : 'get'
                                    }
                                    fontSize="text-base"
                                    className={itemListsClassName}
                                >
                                    {listItem.title}
                                </Link>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </>
    )
}

export default Accordion
