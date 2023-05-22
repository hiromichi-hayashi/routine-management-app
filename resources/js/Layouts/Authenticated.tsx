import Header from '@/Components/Header'
interface Props {
    user: {
        created_at: string
        email: string
        email_verified_at?: string
        id: number
        name: string
        updated_at: string
    }
    children: React.ReactNode
}

const Authenticated = ({ user, children }: Props) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white">
                <Header user={user} />
            </nav>

            <main>{children}</main>
        </div>
    )
}

export default Authenticated
