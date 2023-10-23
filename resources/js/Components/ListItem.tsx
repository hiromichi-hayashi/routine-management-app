import Tasks from '@/types/Tasks'

interface Props {
    items: Tasks[]
    viewLimit: number
}

const ListItem = ({ items, viewLimit }: Props) => (
    <>
        {items.slice(0, viewLimit).map((item, index) => (
            <div
                key={index}
                className="flex items-center h-10 w-full hover:bg-slate-100"
            >
                <span
                    className={`w-[4px] h-full mr-3 ${
                        index % 2 === 0 ? 'bg-teal-400' : 'bg-teal-600'
                    }`}
                />
                <div className="items-center text-xl">{item.task}</div>
            </div>
        ))}

        {/* TODO: Linkに変更 */}
        {items.length > viewLimit && (
            <div className="w-full mt-2 flex justify-center items-center ">
                <div className="text-black hover:text-slate-600 cursor-pointer">
                    詳しく見る...
                </div>
            </div>
        )}
    </>
)

export default ListItem
