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

    const menuTrigger = () => {
        setIsMenuTrigger(!isMenuTrigger)
        const body = document.querySelector('body')

        if (body) {
            isMenuTrigger
                ? body.classList.remove('no-scroll')
                : body.classList.add('no-scroll')
        }
    }

    return (
        <>
            <div className="fixed max-w-7xl w-full px-4 sm:px-6 shadow-md bg-white">
                <div className="flex justify-between h-16">
                    <Link
                        href="/"
                        className="flex items-center text-lg font-bold"
                    >
                        My Routimg
                    </Link>
                    {/* #TODO ログアウト用にのこしてありアカウント画面実装後削除 */}
                    <div className="hidden sm:flex sm:items-center sm:ml-6">
                        <div className="ml-3 relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {auth.user.name}

                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                    >
                                        ログアウト
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>

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
                        >
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="fixed right-0 h-screen w-64 bg-white pl-6 pt-10 text-lg overflow-auto"
                            >
                                {/* #TODO Accodionを追加 */}
                                <div>
                                    <Link
                                        method="post"
                                        href={route('logout')}
                                        as="button"
                                    >
                                        ログアウト
                                    </Link>
                                </div>
                                <div className="absolute bottom-[5%]">
                                    <div className="font-medium text-base text-gray-800">
                                        {auth.user.name}
                                    </div>
                                    <div className="font-medium text-sm text-gray-500">
                                        {auth.user.email}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Header
