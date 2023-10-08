import { Head } from '@inertiajs/react'
import Title from '@/Components/Title'
import Layout from '@/Layouts/Layout'
import Panel from '@/Components/Panel'
import ListItem from '@/Components/ListItem'
import Header from '@/Components/Header'
import SideMenu from '@/Components/SideMenu'
import TaskProgressChart from '@/Components/TaskProgressChart'
import User from '@/types/User'

interface Props {
    user: User
}

const Home = ({ user }: Props) => {
    console.log(user)

    const itemData = {
        tasks: [
            { task: 'task1', completed: false },
            { task: 'task2', completed: true },
            { task: 'task3', completed: true },
            { task: 'task4', completed: true },
            { task: 'task5', completed: false },
            { task: 'task6', completed: true },
            { task: 'task7', completed: false },
            { task: 'task8', completed: false },
            { task: 'task9', completed: false },
            { task: 'task10', completed: false },
            { task: 'task11', completed: true },
            { task: 'task12', completed: false },
            { task: 'task13', completed: true },
            { task: 'task14', completed: true },
            { task: 'task15', completed: true },
        ],
    }

    return (
        <>
            <Head title="Home" />
            <Header user={user} />
            <SideMenu />
            <Layout>
                <div className="lg:flex block lg:space-x-4">
                    <Panel>
                        <div className="mt-4 mb-8">
                            <Title>ToDo</Title>
                        </div>
                        <ListItem
                            items={itemData.tasks.filter(
                                (task) => task.completed === false
                            )}
                            viewLimit={8}
                        />
                    </Panel>
                    <Panel>
                        <div className="w-full lg:max-w-md">
                            <div className="mt-4 mb-8">
                                <Title>達成率</Title>
                            </div>
                            <div className="w-72 mb-8 m-auto relative">
                                <TaskProgressChart
                                    items={itemData.tasks}
                                    className={
                                        'absolute top-[42%] left-[35%] font-semibold text-5xl'
                                    }
                                />
                            </div>
                        </div>
                    </Panel>
                </div>
            </Layout>
        </>
    )
}

export default Home
