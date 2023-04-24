import Button from '@/Components/Button'
import Guest from '@/Layouts/Guest'
import Input from '@/Components/Input'
import Label from '@/Components/Label'
import ValidationErrors from '@/Components/ValidationErrors'
import { Head, useForm } from '@inertiajs/react'

interface Props {
    token: string
    email: string
}

type Name = 'email' | 'password' | 'password_confirmation' | 'token'

export default function ResetPassword({ token, email }: Props) {
    const { data, setData, post, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    })

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.name as Name, event.target.value)
    }

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        post(route('password.store'))
        reset('password', 'password_confirmation')
    }

    return (
        <Guest>
            <Head title="パスワード変更" />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="メールアドレス" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onChange}
                        validation={errors.email}
                        disabled={true}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="新規パスワード" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        placeholder="8文字以上の半角英数字"
                        autoComplete="new-password"
                        isFocused={true}
                        handleChange={onChange}
                        validation={errors.password}
                    />
                </div>

                <div className="mt-4">
                    <Label
                        forInput="password_confirmation"
                        value="新規パスワード(確認用)"
                    />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onChange}
                        validation={errors.password_confirmation}
                    />
                </div>

                <ValidationErrors errors={errors} />

                <div className="flex items-center justify-center mt-8 mb-3">
                    <Button className="block w-40">変更</Button>
                </div>
            </form>
        </Guest>
    )
}
