import { Head } from '@inertiajs/react'
import Title from '@/Components/Title'
import Layout from '@/Layouts/Layout'
import Panel from '@/Components/Panel'
import ListItem from '@/Components/ListItem'
import Header from '@/Components/Header'
import SideMenu from '@/Components/SideMenu'
import Calendar from '@/Components/Calendar'

import TaskProgressChart from '@/Components/TaskProgressChart'
import User from '@/types/User'
import { pageContent } from '@/data/pageContent'

interface Props {
    user: User
}

const Home = ({ user }: Props) => {
    const dummyData = [
        {
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
            date: '2023-10-01',
        },
        {
            tasks: [
                { task: 'task1', completed: true },
                { task: 'task2', completed: true },
                { task: 'task3', completed: true },
                { task: 'task4', completed: true },
                { task: 'task5', completed: true },
                { task: 'task6', completed: true },
                { task: 'task7', completed: true },
                { task: 'task8', completed: true },
                { task: 'task9', completed: true },
                { task: 'task10', completed: true },
                { task: 'task11', completed: true },
                { task: 'task12', completed: true },
                { task: 'task13', completed: true },
                { task: 'task14', completed: true },
                { task: 'task15', completed: true },
            ],
            date: '2023-10-12',
        },
    ]

    return (
        <>
            <Head title="Home" />
            <Header user={user} />
            <SideMenu />
            <Layout>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Panel className="mt-4 w-full col-span-2 lg:col-auto">
                        <div className="my-4">
                            <Title>{pageContent.home.todo.title}</Title>
                        </div>
                        <ListItem
                            items={dummyData[0].tasks.filter(
                                (task) => task.completed === false
                            )}
                            viewLimit={8}
                        />
                    </Panel>

                    <Panel className="lg:mt-4 w-full col-span-2 lg:col-auto">
                        <div className="my-4">
                            <Title>
                                {pageContent.home.achievementRate.title}
                            </Title>
                        </div>
                        <div className="w-72 mb-8 m-auto relative">
                            <TaskProgressChart
                                items={dummyData[0].tasks}
                                className={
                                    'absolute top-[42%] left-[35%] font-semibold text-5xl'
                                }
                            />
                        </div>
                    </Panel>

                    <Panel className="col-span-2 w-full">
                        <div className="w-full">
                            <div className="my-4">
                                <Title>{pageContent.home.calendar.title}</Title>
                            </div>
                            <div className="flex flex-col items-start w-full">
                                <Calendar items={dummyData} />
                            </div>
                        </div>
                    </Panel>
                </div>
            </Layout>
        </>
    )
}

export default Home
