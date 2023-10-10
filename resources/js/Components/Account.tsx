interface Props {
    name: string
    icon: string
}

const Account = ({ name, icon }: Props) => {
    return (
        <>
            <div className="lg:flex space-y-1 lg:space-y-0">
                <div className="lg:mt-3">
                    <img
                        src={`/images/icons/${icon}`}
                        alt={icon}
                        className="rounded-full w-8 lg:w-10 h-8 bg-white"
                    />
                </div>
                <div className="w-40 sm:w-full lg:ml-3 lg:pt-1 text-lg">
                    {name}
                    {/* Todo: フォローをdbから取得 */}
                    <div className="flex items-center text-xs space-x-2">
                        <div>
                            10<span className="text-slate-300">フォロー</span>
                        </div>
                        <div>
                            10<span className="text-slate-300">フォロワー</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account
