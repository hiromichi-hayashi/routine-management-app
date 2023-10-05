import { useState } from 'react'
import Dropdown from '@/Components/Dropdown'
import Link from '@/Components/Link'
import route from 'ziggy-js'
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
            <div className="fixed w-full px-4 sm:px-6 shadow-md bg-white">
                <div className="flex justify-between h-16">
                    <Link
                        href="/"
                        className="flex items-center text-lg font-bold"
                    >
                        My Routimg
                    </Link>

                    {/* TODO サイドバー実装後hiddenを削除 */}
                    <div className="mr-4 flex items-center">
                        <button
                            onClick={menuTrigger}
                            className="relative p-2 z-40 w-8 h-5"
                        >
                            <span
                                className={`absolute bg-black left-0 top-0 inline-block h-[2px] w-[30px] transition-all duration-[0.2s] ${
                                    isMenuTrigger
                                        ? 'translate-y-[10px] rotate-45'
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
                        className={`w-64 fixed right-0 h-screen bg-white pl-6 pt-10 text-lg overflow-auto duration-300 ${
                            isMenuTrigger ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        {/* #TODO Accodionを追加 */}
                        <div>
                            <Link method="post" href="logout" as="button">
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
            </div>
        </>
    )
}

export default Header
