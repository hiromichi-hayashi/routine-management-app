import { Head } from '@inertiajs/react'
import Auth from '@/Pages/Auth/Login'
import Dashboard from '@/Pages/Dashboard'

export default function Home(props: any) {
    return (
        <>
            <Head title="Home" />
            <div>
                <div>
                    {props.auth.user ? <Dashboard {...props} /> : <Auth />}
                </div>
            </div>
        </>
    )
}
