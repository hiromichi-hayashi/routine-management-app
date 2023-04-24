import Button from '@/Components/Button'
import Checkbox from '@/Components/Checkbox'
import Guest from '@/Layouts/Guest'
import Input from '@/Components/Input'
import Label from '@/Components/Label'
import Link from '@/Components/Link'
import ValidationErrors from '@/Components/ValidationErrors'
import { Head, useForm } from '@inertiajs/react'

export default function Login() {
    const { data, setData, post, errors, reset } = useForm({
        email: '',
        password: '',
        auth: '',
        throttle: '',
        remember: false,
    })

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
                    <Label forInput="email" value="メールアドレス" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        isFocused={true}
                        handleChange={onHandleChange}
                        validation={errors.email || errors.auth}
                        disabled={errors.throttle ? true : false}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="パスワード" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                        validation={errors.password || errors.auth}
                        disabled={errors.throttle ? true : false}
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
                {errors && <ValidationErrors errors={errors} />}

                <div className="flex items-center justify-center mt-8">
                    <Button
                        disabled={errors.throttle ? true : false}
                        className="block w-40"
                    >
                        ログイン
                    </Button>
                </div>
                <div className="text-center mt-4">
                    <Link href="password.request">
                        パスワードを忘れた方はこちら
                    </Link>
                </div>
            </form>
        </Guest>
    )
}
