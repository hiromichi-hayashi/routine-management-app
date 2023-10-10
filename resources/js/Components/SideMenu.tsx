import Accordion from '@/Components/Accordion'
import { routeList, routeIcons } from '@/data/route'

const SideMenu = () => {
    return (
        <div className="fixed lg:block hidden">
            <div className="bg-teal-700 text-white text-lg lg:w-48 h-screen absolute left-0">
                <div className="mt-16">
                    <Accordion
                        listItems={routeList}
                        titleClassName="h-11 pl-5 pr-3 font-semibold flex items-center justify-between hover:bg-teal-500 duration-400"
                        itemListsClassName="pl-11 h-11 w-full font-semibold bg-teal-600 hover:bg-teal-500 flex items-center"
                        listIcons={routeIcons}
                    />
                </div>
            </div>
        </div>
    )
}

export default SideMenu
