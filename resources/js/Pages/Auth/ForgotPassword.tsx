import Button from '@/Components/Button'
import Guest from '@/Layouts/Guest'
import Input from '@/Components/Input'
import Link from '@/Components/Link'
import ValidationErrors from '@/Components/ValidationErrors'
import { Head, useForm } from '@inertiajs/react'
import route from 'ziggy-js'

interface Props {
    status: string
}

const ForgotPassword = ({ status }: Props) => {
    const { data, setData, post, errors } = useForm({
        email: '',
    })

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.name as 'email', event.target.value)
    }

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        post(route('password.email', data))
    }

    return (
        <Guest>
            <Head title="パスワードリセット" />

            <div className="mb-4 sm:text-sm text-xs text-center text-gray-500 leading-normal">
                メールアドレスを入力してください。
                <br />
                パスワードリセット用のリンクを送ります。
            </div>

            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    handleChange={onChange}
                    validation={errors.email}
                />

                {status && (
                    <div className="mt-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}

                {errors && <ValidationErrors errors={errors.email} />}

                <div className="flex items-center justify-center mt-4">
                    <Link href="login" textColor="text-white" underline={false}>
                        <Button className="bg-gray-900">戻る</Button>
                    </Link>
                    <Button className="ml-4 bg-gray-900">送信</Button>
                </div>
            </form>
        </Guest>
    )
}

export default ForgotPassword
