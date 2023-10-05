import Link from '@/Components/Link'
import Accordion from '@/Components/Accordion'
import Account from '@/Components/Account'
import routeList from '@/data/route'
import User from '@/types/User'

interface Props {
    user: User
}

const SideMenu = ({ user }: Props) => {
    return (
        <div className="fixed lg:block hidden">
            <div className="bg-black text-slate-200 lg:w-48 h-screen absolute left-0">
                <div className="flex justify-center mt-3">
                    <Link href="/" className="flex items-center">
                        <span className="ml-3">My Routing</span>
                    </Link>
                </div>

                <div className="mt-10">
                    <Accordion
                        listItems={routeList}
                        titleClassName="pl-10 h-10 font-semibold flex items-center justify-start hover:bg-light-gray duration-300"
                        itemListsClassName="pl-10 h-10 bg-gray hover:bg-light-gray flex items-center"
                    />
                </div>

                {/* #TODO アカウント設定のリンク先を追加 */}
                <div className="absolute bottom-[5%] h-10 w-full px-10">
                    <Account name={user.name} email={user.email} />
                </div>
            </div>
        </div>
    )
}

export default SideMenu
