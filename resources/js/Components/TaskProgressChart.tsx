import { useEffect, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import Tasks from '@/types/Todo'

interface Props {
    items: Tasks[]
    className: string
}

const TaskProgressChart = ({ items, className }: Props) => {
    const [totalTasks, setTotalTasks] = useState(0)
    const [completedTasks, setCompletedTasks] = useState(0)

    useEffect(() => {
        const fetchTaskData = () => {
            setTotalTasks(items.length)
            setCompletedTasks(items.filter((task) => task.completed).length)
        }

        fetchTaskData()
    }, [])

    const calculateCompletionRate = () => {
        return totalTasks === 0
            ? 0
            : Math.round((completedTasks / totalTasks) * 100)
    }
    return (
        <>
            <div className={className}>{calculateCompletionRate()}%</div>
            <PieChart
                data={[{ title: '完了', value: totalTasks, color: '#49B8A7' }]}
                startAngle={270}
                lineWidth={25}
                animate
                animationDuration={1000}
                reveal={calculateCompletionRate()}
                background="#e2e8f0"
            />
        </>
    )
}

export default TaskProgressChart
