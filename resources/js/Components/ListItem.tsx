import Tasks from '@/typs/Tasks'

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
                        index % 2 === 0 ? 'bg-sky-400' : 'bg-sky-600'
                    }`}
                />
                <div className="items-center text-xl">{item.task}</div>
            </div>
        ))}

        {items.length > viewLimit && (
            <div className="w-full mt-2 flex justify-center items-center ">
                <div className="text-slate-500 hover:text-slate-400 cursor-pointer">
                    詳しく見る...
                </div>
            </div>
        )}
    </>
)

export default ListItem
