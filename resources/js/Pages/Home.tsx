import { useState } from 'react'
import { Head } from '@inertiajs/react'
import Authenticated from '@/Layouts/Authenticated'
import Title from '@/Components/Title'
import Layout from '@/Layouts/Layout'
import Panel from '@/Components/Panel'
import ListItem from '@/Components/ListItem'
import SelectBox from '@/Components/SelectBox'
import { FaEdit } from 'react-icons/fa'
import TaskProgressChart from '@/Components/TaskProgressChart'

const Home = (props: any) => {
    const [sortText, setSortText] = useState('全て')

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
        <Authenticated
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Home
                </h2>
            }
        >
            <Head title="Home" />

            <Layout>
                <div className="lg:flex block lg:space-x-4">
                    <Panel>
                        <div className="mt-4 mb-8">
                            <Title>残タスク</Title>
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
                <Panel>
                    <div className="mt-4 mb-8">
                        <Title>タスク一覧</Title>
                    </div>

                    <ListItem items={itemData.tasks} viewLimit={5} />
                </Panel>
                <Panel>
                    <div className="flex justify-between items-center">
                        <div className="mt-4 mb-3">
                            <Title>習慣化一覧</Title>
                        </div>
                        <div className="flex items-end text-slate-500">
                            <FaEdit className="w-6 h-7 mr-2" />
                            <div>新規作成</div>
                        </div>
                    </div>

                    <SelectBox
                        className={[
                            'form-select',
                            'appearance-none',
                            'border-slate-400',
                            'focus:border-slate-500',
                            'focus:ring',
                            'focus:ring-slate-300',
                            'focus:ring-opacity-50',
                            'rounded-md',
                            'block',
                            'px-3',
                            'w-36',
                            'py-1.5',
                            'my-5',
                        ].join(' ')}
                        options={['全て', '個人習慣化', '参加用習慣化']}
                        selectedOption={sortText}
                        onChange={setSortText}
                    />
                    <ListItem items={itemData.tasks} viewLimit={5} />
                </Panel>
            </Layout>
        </Authenticated>
    )
}

export default Home
