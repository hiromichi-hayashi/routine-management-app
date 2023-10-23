import { useState, useEffect } from 'react'
import { Head, useForm } from '@inertiajs/react'
import route from 'ziggy-js'
import Input from '@/Components/Input'
import Label from '@/Components/Label'
import Title from '@/Components/Title'
import Layout from '@/Layouts/Layout'
import Header from '@/Components/Header'
import SideMenu from '@/Components/SideMenu'
import SelectBox from '@/Components/SelectBox'
import ValidationErrors from '@/Components/ValidationErrors'
import Button from '@/Components/Button'
import Checkbox from '@/Components/Checkbox'
import HabitTodoList from '@/Components/HabitTodoList'
import HabitModal from '@/Components/modal/HabitModal'

import { BsPlusCircle } from 'react-icons/bs'

import User from '@/types/User'
import Todos from '@/types/Todo'

interface ValueMap {
    [key: string]: string[]
}

interface Props {
    categories: ValueMap
    difficulties: ValueMap
    task_types: ValueMap
    user: User
}

const Create = ({ categories, difficulties, task_types, user }: Props) => {
    const { data, setData, post, errors } = useForm({
        title: '',
        category: Object.keys(categories)[0],
        difficulty: Object.keys(difficulties)[0],
        task_type: Object.keys(task_types)[0],
        todos: [] as Todos[],
        work_description: '',
        is_public: false,
    })
    const [isModalTrigger, setIsModalTrigger] = useState(false)
    const [newTodos, setNewTodos] = useState<Todos[]>([])
    const [editingTodoIndex, setEditingTodoIndex] = useState<number | null>(
        null
    )

    useEffect(() => {
        setData('todos', newTodos)
    }, [newTodos])

    const handleEditTodo = (index: number) => {
        setEditingTodoIndex(index)
        modalTrigger(true)
    }

    const handleModalClose = (isOpen: boolean, updatedTodo?: Todos) => {
        modalTrigger(isOpen)
        if (updatedTodo && editingTodoIndex !== null) {
            const updatedTodos = [...newTodos]
            updatedTodos[editingTodoIndex] = updatedTodo
            setNewTodos(updatedTodos)
        }
        setEditingTodoIndex(null)
    }

    const modalTrigger = (isOpen: boolean) => {
        setIsModalTrigger(isOpen)
        const body = document.querySelector('body')

        if (body) {
            if (isOpen) {
                body.classList.add('no-scroll')
            } else {
                body.classList.remove('no-scroll')
                setData('todos', newTodos)
            }
        }
    }

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log({ data, categories, difficulties, task_types })
        // post(route('habits.store'))
    }

    return (
        <>
            <Head title="新規作成" />
            <Header user={user} />
            <SideMenu />
            {isModalTrigger && (
                <HabitModal
                    initialTodo={
                        editingTodoIndex !== null
                            ? newTodos[editingTodoIndex]
                            : undefined
                    }
                    handleClose={handleModalClose}
                    todos={newTodos}
                    setTodos={setNewTodos}
                    editingIndex={editingTodoIndex}
                />
            )}
            <Layout>
                <div className="mt-4 lg:px-10 w-full">
                    <div className="mt-5 flex">
                        <Title>新規作成</Title>
                    </div>

                    <form onSubmit={submit}>
                        <Label
                            forInput="title"
                            className="mt-5 font-semibold"
                            fontSize="text-base"
                        >
                            タイトル
                            <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            type="text"
                            name="title"
                            value={data.title}
                            className="mt-2 block w-full lg:w-2/3"
                            isFocused={true}
                            handleChange={(e) =>
                                setData('title', e.target.value)
                            }
                            validation={errors.title}
                            placeholder="タイトル"
                        />
                        <ValidationErrors errors={errors.title} />

                        <div className="mt-4">
                            <Label
                                forInput="category"
                                className="mt-5 font-semibold"
                                fontSize="text-base"
                            >
                                カテゴリ
                                <span className="text-red-500">*</span>
                            </Label>
                            <SelectBox
                                name="category"
                                value={data.category}
                                className="mt-2 block w-44"
                                handleChange={(e) =>
                                    setData('category', e.target.value)
                                }
                                options={categories}
                                validation={errors.category}
                            />
                            <ValidationErrors errors={errors.category} />
                        </div>

                        <div className="mt-4">
                            <Label
                                forInput="difficulty"
                                className="mt-5 font-semibold"
                                fontSize="text-base"
                            >
                                難易度
                                <span className="text-red-500">*</span>
                            </Label>
                            <SelectBox
                                name="difficulty"
                                value={data.difficulty}
                                className="mt-2 block w-44"
                                handleChange={(e) =>
                                    setData('difficulty', e.target.value)
                                }
                                options={difficulties}
                                validation={errors.difficulty}
                            />
                            <ValidationErrors errors={errors.difficulty} />
                        </div>

                        <div className="mt-4">
                            <Label
                                forInput="task_type"
                                className="mt-5 font-semibold"
                                fontSize="text-base"
                            >
                                タスク種別
                                <span className="text-red-500">*</span>
                            </Label>
                            <SelectBox
                                name="task_type"
                                value={data.task_type}
                                className="mt-3 block w-44"
                                handleChange={(e) =>
                                    setData('task_type', e.target.value)
                                }
                                options={task_types}
                                validation={errors.task_type}
                            />
                            <ValidationErrors errors={errors.task_type} />
                        </div>

                        <div className="mt-4">
                            <Label
                                forInput="description"
                                className="mt-5 font-semibold"
                                fontSize="text-base"
                            >
                                説明
                            </Label>
                            <textarea
                                name="description"
                                value={data.work_description}
                                className="mt-2 block w-full lg:w-2/3 h-40 focus:border-gray focus:ring-gray rounded-md shadow-sm"
                                onChange={(e) =>
                                    setData('work_description', e.target.value)
                                }
                            />
                        </div>

                        <div className="mt-4">
                            <div className="flex mt-5 w-full lg:w-2/3 items-center justify-between">
                                <Label
                                    forInput="task_type"
                                    className="font-semibold"
                                    fontSize="text-base"
                                >
                                    作業項目
                                    <span className="text-red-500">*</span>
                                </Label>
                                <Button
                                    type="button"
                                    bgColor="bg-ghostwhite hover:text-gray"
                                    textColor="black"
                                    className="flex items-center justify-center"
                                    fontSize="text-xs md:text-sm"
                                    handleClick={() => modalTrigger(true)}
                                >
                                    <BsPlusCircle className="mr-1" />
                                    タスクを追加する
                                </Button>
                            </div>
                            <div className="w-full lg:w-2/3">
                                <div
                                    className={`mt-2 overflow-auto lg:no-scrollbar ${
                                        data.todos.length >= 5 ? 'h-52' : ''
                                    }`}
                                >
                                    <HabitTodoList
                                        className={`flex items-center h-8 hover:bg-slate-100`}
                                        items={data.todos}
                                        onEditClick={handleEditTodo}
                                    />
                                </div>
                            </div>
                        </div>

                        {data.task_type === 'habit_task' && (
                            <div className="mt-4">
                                <Label
                                    forInput="is_public"
                                    className="mt-2 font-semibold"
                                    fontSize="text-base"
                                >
                                    Share Routingも作成する
                                </Label>
                                <Checkbox
                                    name="is_public"
                                    checked={data.is_public}
                                    handleChange={(e) =>
                                        setData('is_public', e.target.checked)
                                    }
                                />
                            </div>
                        )}

                        <div className="mt-10 w-full flex items-center justify-center">
                            <Button className="block w-40 py-2">
                                新規作成
                            </Button>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default Create
