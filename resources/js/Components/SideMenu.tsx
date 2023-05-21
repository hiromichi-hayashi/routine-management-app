import { useState } from 'react'
import { Link } from '@inertiajs/inertia-react'
import Accordion from '@/Components/Accordion'
import routeList from '@/data/route'
import ApplicationLogo from '@/Components/ApplicationLogo'

const SideMenu = () => {
    return (
        <div className="relative lg:block hidden">
            <div className="bg-black text-slate-200 lg:w-48 h-screen absolute left-0">
                <div className="flex justify-center mt-3">
                    <Link href="/" className="flex items-center">
                        <ApplicationLogo className="block h-9 w-auto fill-white" />
                        <span className="ml-3">My Routing</span>
                    </Link>
                </div>

                <div className="mt-10">
                    <Accordion
                        listItems={routeList}
                        titleClsddName="pl-10 h-10 font-semibold flex items-center justify-start hover:bg-light-gray duration-300"
                        itemListsClsddName="pl-10 h-10 bg-gray hover:bg-light-gray flex items-center"
                    />
                </div>
            </div>
        </div>
    )
}

export default SideMenu
