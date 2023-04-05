import React, { useEffect } from 'react'
import Button from '@/Components/Button'
import Checkbox from '@/Components/Checkbox'
import Guest from '@/Layouts/Guest'
import Input from '@/Components/Input'
import Label from '@/Components/Label'
import Link from '@/Components/Link'
import ValidationErrors from '@/Components/ValidationErrors'
import { useForm } from '@inertiajs/inertia-react'
import { Head } from '@inertiajs/react'

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    })

    useEffect(() => {
        return () => {
            reset('password')
        }
    }, [])

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(
            event.target.name as 'email' | 'password' | 'remember',
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value
        )
    }

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        post(route('login'))
    }

    return (
        <Guest>
            <Head title="ログイン" />

            <ValidationErrors errors={errors} />

            <div className="text-right">
                <Link href="register">新規登録はこちら</Link>
            </div>

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="Email" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            handleChange={onHandleChange}
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            ログイン情報を記憶する
                        </span>
                    </label>
                </div>

                <div className="grid items-center justify-center mt-4">
                    <div className="m-auto mt-10">
                        <Button className="block w-40" processing={processing}>
                            ログイン
                        </Button>
                    </div>

                    <Link href="password.request" className="mt-4">
                        パスワードを忘れた方はこちら
                    </Link>
                </div>
            </form>
        </Guest>
    )
}
