import { useState } from 'react'
import Dropdown from '@/Components/Dropdown'
import { Link } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
// #TODO Userに後から型定義を変更
interface Props {
    user: {
        created_at: string
        email: string
        email_verified_at?: string
        id: number
        name: string
        updated_at: string
    }
}

const Header = ({ user }: Props) => {
    const [isMenuTrigger, setIsMenuTrigger] = useState(false)

    const menuTriggerClass = isMenuTrigger ? 'block' : 'hidden'

    return (
        <>
            <div className="px-4 sm:px-6 shadow-md">
                <div className="flex justify-between h-16">
                    <div className="flex items-center text-lg font-bold">
                        My Routimg
                    </div>

                    <div className="mr-4 flex items-center">
                        <button
                            onClick={() =>
                                setIsMenuTrigger((prevState) => !prevState)
                            }
                            className="relative p-2.5 w-8 h-6 z-40 block"
                        >
                            <span
                                className={`absolute bg-black left-0 top-0 inline-block h-[2px] w-[30px] transition-all duration-[0.2s] ${
                                    isMenuTrigger
                                        ? 'translate-y-[12px] rotate-45'
                                        : ''
                                }`}
                            />
                            <span
                                className={`absolute bg-black left-0 top-[45%] inline-block h-[2px] w-[30px] transition-all duration-[0.2s]
                                ${isMenuTrigger ? 'opacity-0' : ''}`}
                            />
                            <span
                                className={`absolute bg-black left-0 bottom-0 inline-block h-[2px] w-[30px] transition-all duration-[0.2s]
                                ${
                                    isMenuTrigger
                                        ? '-translate-y-[10px] -rotate-45'
                                        : ''
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 bg-black bg-opacity-50 ${menuTriggerClass}`}
            >
                <div
                    className={`fixed right-0 h-screen w-64 bg-white pl-6 pt-10 text-lg`}
                >
                    {/* #TODO Accodionを追加 */}
                    <div>
                        <Link method="post" href={route('logout')} as="button">
                            ログアウト
                        </Link>
                    </div>
                    <div className="absolute bottom-[5%]">
                        <div className="font-medium text-base text-gray-800">
                            {user.name}
                        </div>
                        <div className="font-medium text-sm text-gray-500">
                            {user.email}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
