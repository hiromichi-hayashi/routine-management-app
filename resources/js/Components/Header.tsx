import { useState } from 'react'
import Link from '@/Components/Link'
import Account from '@/Components/Account'
import Accordion from '@/Components/Accordion'
import { routeList, routeIcons } from '@/data/route'
import User from '@/types/User'
interface Props {
    user: User
}

const Header = ({ user }: Props) => {
    const [isMenuTrigger, setIsMenuTrigger] = useState(false)

    const menuTrigger = () => {
        setIsMenuTrigger(!isMenuTrigger)
        const body = document.querySelector('body')

        if (body) {
            if (isMenuTrigger) {
                body.classList.remove('no-scroll')
            } else {
                body.classList.add('no-scroll')
            }
        }
    }

    return (
        <>
            <div className="fixed w-full px-4 sm:px-5 shadow-md bg-teal-800 z-50">
                <div className="flex justify-between w-full h-16">
                    <div className="flex w-36 items-center  font-bold">
                        <Link
                            href="/"
                            fontSize="text-xl"
                            textColor="text-white"
                        >
                            My Routing
                        </Link>
                    </div>

                    <div className="text-white hidden lg:flex">
                        <Account name={user.name} icon={user.icon} />
                    </div>

                    {/* ハンバーガーメニュー */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={menuTrigger}
                            className="relative p-2 z-40 w-8 h-5"
                        >
                            <span
                                className={`absolute bg-white left-0 top-0 inline-block h-[2px] w-[30px] transition-all duration-[0.2s] 
                                ${
                                    isMenuTrigger
                                        ? 'translate-y-[10px] rotate-45'
                                        : ''
                                }`}
                            />
                            <span
                                className={`absolute bg-white left-0 top-[45%] inline-block h-[2px] w-[30px] transition-all duration-[0.2s]
                                ${isMenuTrigger ? 'opacity-0' : ''}`}
                            />
                            <span
                                className={`absolute bg-white left-0 bottom-0 inline-block h-[2px] w-[30px] transition-all duration-[0.2s]
                                ${
                                    isMenuTrigger
                                        ? '-translate-y-[8px] -rotate-45'
                                        : ''
                                }`}
                            />
                        </button>
                    </div>

                    {isMenuTrigger && (
                        <div
                            onClick={menuTrigger}
                            className="fixed top-0 right-0 h-screen w-full bg-black bg-opacity-50"
                        />
                    )}

                    <div
                        className={`w-64 fixed right-0 h-screen bg-teal-700 text-white overflow-auto duration-300 ${
                            isMenuTrigger ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        <div className="px-5 py-5">
                            <Account name={user.name} icon={user.icon} />
                        </div>
                        <Accordion
                            listItems={routeList}
                            titleClassName="h-11 pl-5 pr-3 font-semibold flex items-center justify-between hover:bg-teal-500 duration-400"
                            itemListsClassName="pl-11 h-11 w-full font-semibold bg-teal-600 hover:bg-teal-500 flex items-center"
                            listIcons={routeIcons}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
