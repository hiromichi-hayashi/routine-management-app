import { useState } from 'react'
import route from 'ziggy-js'
import Modal from '@/Components/Modal'
import ValidationErrors from '@/Components/ValidationErrors'
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import Label from '@/Components/Label'
import axios, { AxiosResponse, AxiosError } from 'axios'
import Todos from '@/types/Todo'

interface Errors {
    title?: string
    work_time?: string
    work_description?: string
}

interface ErrorResponse {
    errors: Errors
}

interface Props {
    handleClose: (isOpen: boolean, updatedTodo?: Todos) => void
    todos: Todos[]
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
    initialTodo?: Todos
    editingIndex: number | null
}

const HabitModal = ({
    handleClose,
    todos,
    setTodos,
    initialTodo,
    editingIndex,
}: Props) => {
    const [data, setData] = useState(
        initialTodo || {
            title: '',
            work_time: '00:00',
            work_description: '',
        }
    )

    const [errors, setErrors] = useState<Errors>({
        title: '',
        work_time: '',
        work_description: '',
    })

    // HH:MM:SS -> HH:MM に変換する関数
    const formatToWorkTime = (time: string) => {
        return time.slice(0, 5)
    }

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // work_time を HH:MM 形式に整形
        const formattedData: Todos = {
            title: data.title,
            work_time: formatToWorkTime(data.work_time),
            work_description: data.work_description,
        }

        axios
            .post<Todos>(route('todo.store'), formattedData)
            .then((response: AxiosResponse<Todos>) => {
                if (response.status === 200 || response.status === 201) {
                    // 成功時にtodosにデータを追加
                    if (editingIndex !== null) {
                        // 編集モードの場合、既存のタスクを更新
                        const updatedTodos = [...todos]
                        updatedTodos[editingIndex] = formattedData
                        setTodos(updatedTodos)
                    } else {
                        // 新規作成モードの場合、新しいタスクを追加
                        setTodos([...todos, formattedData])
                    }
                    handleClose(false)
                }
            })
            .catch((error: AxiosError<ErrorResponse>) => {
                if (
                    error.response &&
                    error.response.status === 422 &&
                    error.response.data.errors
                ) {
                    setErrors({
                        title: error.response.data.errors.title?.[0],
                        work_time: error.response.data.errors.work_time?.[0],
                        work_description:
                            error.response.data.errors.work_description?.[0],
                    })
                }
            })
    }

    return (
        <Modal title="新規作成" handleClose={() => handleClose(false)}>
            <form onSubmit={submit}>
                <div className="mt-5">
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
                            setData((prevData) => ({
                                ...prevData,
                                title: e.target.value,
                            }))
                        }
                        validation={errors.title}
                        placeholder="タイトル"
                        max={50}
                    />
                    <ValidationErrors errors={errors.title} />
                    <Label
                        forInput="work_time"
                        className="mt-5 font-semibold"
                        fontSize="text-base"
                    >
                        作業時間
                    </Label>
                    <Input
                        type="time"
                        name="work_time"
                        value={data.work_time}
                        className="mt-2 block w-full lg:w-32 appearance-none"
                        handleChange={(e) =>
                            setData((prevData) => ({
                                ...prevData,
                                work_time: e.target.value,
                            }))
                        }
                        validation={errors.work_time}
                    />
                    <ValidationErrors errors={errors.work_time} />
                    <Label
                        forInput="work_description"
                        className="mt-5 font-semibold"
                        fontSize="text-base"
                    >
                        作業説明
                    </Label>
                    <textarea
                        name="description"
                        value={data.work_description}
                        className={`mt-2 block w-full h-28 lg:h-40 focus:border-gray focus:ring-gray rounded-md shadow-sm
                        ${
                            errors.work_description
                                ? 'border-red-400'
                                : 'border-gray'
                        }`}
                        onChange={(e) =>
                            setData((prevData) => ({
                                ...prevData,
                                work_description: e.target.value,
                            }))
                        }
                        maxLength={500}
                    />
                    <ValidationErrors errors={errors.work_description} />
                    <div className="mt-5 w-full flex items-center justify-center">
                        <Button className="block w-40 py-2">作成</Button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default HabitModal
