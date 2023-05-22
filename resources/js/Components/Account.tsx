interface Props {
    name: string
    email: string
}

const Account = ({ name, email }: Props) => {
    return (
        <>
            {/* #TODO アカウント設定のリンク先を追加 */}
            <div className="flex items-center text-lg font-semibold">
                {name}
                {/* #TODO ログイン状況の判断を追加 */}
                <div className="ml-2 h-4 w-4 rounded-full bg-emerald-500/20 p-1">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>
            </div>
            <div className="text-sm text-light-gray">{email}</div>
        </>
    )
}

export default Account
