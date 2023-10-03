import { Head } from '@inertiajs/react'
import Authenticated from '@/Layouts/Authenticated'

interface Props {
    auth: {
        user: {
            created_at: string
            email: string
            email_verified_at?: string
            id: number
            name: string
            updated_at: string
        }
    }
}

export default function Dashboard({ auth }: Props) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
