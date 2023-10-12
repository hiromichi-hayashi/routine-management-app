interface Task {
    task: string
    completed: boolean
}

interface TaskGroup {
    tasks: Task[]
    date: string
}

interface Props {
    items: TaskGroup[]
}

const Calendar = ({ items }: Props) => {
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() + 1
    const weekdays = ['日', '月', '火', '水', '木', '金', '土']

    const tasksForDate = (date: string): Task[] => {
        const foundGroup = items.find((item) => item.date === date)
        return foundGroup ? foundGroup.tasks : []
    }

    const renderWeekdaysHeader = () =>
        weekdays.map((day, idx) => (
            <div
                key={idx}
                className="w-full h-10 flex justify-center items-center text-lg font-semibold"
            >
                {day}
            </div>
        ))

    const formatDateStr = (year: number, month: number, day: number) => {
        return `${year}-${String(month).padStart(2, '0')}-${String(
            day
        ).padStart(2, '0')}`
    }

    const getContributionColorClass = (completed: number, total: number) => {
        const achievementRate = total === 0 ? 0 : (completed / total) * 100

        if (achievementRate === 100) return 'bg-teal-600'
        if (achievementRate >= 70) return 'bg-teal-500'
        if (achievementRate >= 40) return 'bg-teal-400'
        if (achievementRate >= 1) return 'bg-teal-300'
        return 'bg-slate-100'
    }

    const renderCalendar = () => {
        const daysInMonth = new Date(
            currentDate.getFullYear(),
            currentMonth,
            0
        ).getDate()

        return Array.from({ length: daysInMonth }).map((_, idx) => {
            const day = idx + 1
            const dateStr = formatDateStr(
                currentDate.getFullYear(),
                currentMonth,
                day
            )
            const tasksOnDate = tasksForDate(dateStr)
            const completedTasks = tasksOnDate.filter(
                (task) => task.completed
            ).length
            const totalTasks = tasksOnDate.length
            const colorClass = getContributionColorClass(
                completedTasks,
                totalTasks
            )

            return (
                <div
                    key={dateStr}
                    className={`w-full h-10 lg:h-20 ${colorClass} flex justify-center items-center`}
                >
                    {day}
                </div>
            )
        })
    }

    const renderContributionLegend = () => {
        return (
            <div className="w-full">
                <div className="flex items-center justify-end space-x-2">
                    <div>0%</div>
                    <div className="w-4 h-4 bg-slate-100" />
                    <div className="w-4 h-4 bg-teal-300" />
                    <div className="w-4 h-4 bg-teal-400" />
                    <div className="w-4 h-4 bg-teal-500" />
                    <div className="w-4 h-4 bg-teal-600" />
                    <div>100%</div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="text-xl font-semibold mb-4">{currentMonth}月</div>
            <div className="grid grid-cols-7 gap-1 lg:gap-3 w-full mb-4">
                {renderWeekdaysHeader()}
                {renderCalendar()}
            </div>
            {renderContributionLegend()}
        </>
    )
}

export default Calendar
