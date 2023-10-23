import Button from '@/Components/Button'
import Checkbox from '@/Components/Checkbox'
import Guest from '@/Layouts/Guest'
import Input from '@/Components/Input'
import Label from '@/Components/Label'
import Link from '@/Components/Link'
import ValidationErrors from '@/Components/ValidationErrors'
import { Head, useForm } from '@inertiajs/react'
import route from 'ziggy-js'

const Login = () => {
    const { data, setData, post, errors, reset } = useForm({
        email: '',
        password: '',
        auth: '',
        throttle: '',
        remember: false,
    })

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        reset('password')
    }

    return (
        <Guest>
            <Head title="ログイン" />

            <div className="text-right">
                <Link href="register">新規登録はこちら</Link>
            </div>

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email">メールアドレス</Label>

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        isFocused={true}
                        handleChange={onChange}
                        validation={errors.email || errors.auth}
                        disabled={errors.throttle ? true : false}
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
                        autoComplete="current-password"
                        handleChange={onChange}
                        validation={errors.password || errors.auth}
                        disabled={errors.throttle ? true : false}
                    />
                </div>

                {errors && <ValidationErrors errors={errors.password} />}

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            handleChange={onChange}
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            ログイン情報を記憶する
                        </span>
                    </label>
                </div>
                <div className="mt-2 text-sm">
                    パスワードを忘れた方は
                    <Link href="password.request" underline>
                        こちら
                    </Link>
                </div>
                {errors && errors.throttle ? (
                    <ValidationErrors errors={errors.throttle} />
                ) : (
                    <ValidationErrors errors={errors.auth} />
                )}

                <div className="flex items-center justify-center mt-8">
                    <Button
                        disabled={errors.throttle === null ? true : false}
                        className="block w-40 py-2"
                    >
                        ログイン
                    </Button>
                </div>
            </form>
        </Guest>
    )
}

export default Login
