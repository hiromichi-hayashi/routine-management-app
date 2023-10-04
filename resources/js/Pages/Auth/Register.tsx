import Button from '@/Components/Button'
import Guest from '@/Layouts/Guest'
import Input from '@/Components/Input'
import Label from '@/Components/Label'
import Link from '@/Components/Link'
import ValidationErrors from '@/Components/ValidationErrors'
import { Head, useForm } from '@inertiajs/react'
import route from 'ziggy-js'

const Register = () => {
    const { data, setData, post, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(
            event.target.name as 'email' | 'password' | 'name',
            event.target.value
        )
    }

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        post(route('register'))
        reset('password', 'password_confirmation')
    }

    return (
        <Guest>
            <Head title="新規登録" />

            <div className="text-right">
                <Link href="login">ログインはこちら</Link>
            </div>
            <form onSubmit={submit}>
                <div>
                    <Label forInput="name">ユーザー名</Label>

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onChange}
                        validation={errors.name}
                    />
                </div>

                {errors && <ValidationErrors errors={errors.name} />}

                <div className="mt-4">
                    <Label forInput="email">メールアドレス</Label>

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onChange}
                        validation={errors.email}
                    />
                </div>

                {errors && <ValidationErrors errors={errors.email} />}

                <div className="mt-4">
                    <Label forInput="password">パスワード</Label>

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onChange}
                        validation={errors.password}
                    />
                </div>

                {errors && <ValidationErrors errors={errors.password} />}

                <div className="mt-4">
                    <Label forInput="password_confirmation">
                        パスワード(確認用)
                    </Label>

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onChange}
                        validation={errors.password_confirmation}
                    />
                </div>
                {errors && (
                    <ValidationErrors errors={errors.password_confirmation} />
                )}

                <div className="flex items-center justify-center mt-8 mb-3">
                    <Button className="block w-40">新規登録</Button>
                </div>
            </form>
        </Guest>
    )
}

export default Register
