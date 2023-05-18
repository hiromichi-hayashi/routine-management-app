import { useState } from 'react'
import { Link } from '@inertiajs/inertia-react'
import { routeList } from '@/data/route'
import ApplicationLogo from '@/Components/ApplicationLogo'

const SideMenu = () => {
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
            <div className="relative lg:block hidden">
                <div className="bg-black text-slate-200  lg:w-48 h-screen absolute left-0">
                    <div className="flex justify-center mt-3">
                        <Link href="/" className="flex items-center">
                            <ApplicationLogo className="block h-9 w-auto fill-white" />
                            <span className="ml-3">sidemnue</span>
                        </Link>
                    </div>

                    <div className="mt-10">
                        {routeList.map((item, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer h-${
                                    item.itemLists
                                        ? 10 * item.itemLists.length
                                        : 10
                                } `}
                            >
                                <div
                                    onClick={() => toggleItem(index)}
                                    className="pl-10 h-10 font-semibold flex items-center hover:bg-light-gray duration-300"
                                >
                                    {item.title}
                                </div>
                                {item.itemLists &&
                                    activeItem.includes(index) && (
                                        <ul>
                                            {item.itemLists.map((listItem) => (
                                                <li
                                                    key={listItem}
                                                    className="pl-10 h-10 bg-gray hover:bg-light-gray flex items-center "
                                                >
                                                    {listItem}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideMenu
