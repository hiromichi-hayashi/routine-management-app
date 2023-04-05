import React from 'react'
import Link from '@/Components/Link'

interface Props {
    children: React.ReactNode
}

export default function Guest({ children }: Props) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-10 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/" fontSize="text-xl" underline={false}>
                    My Routine
                </Link>
            </div>

            <div className="sm:w-full sm:max-w-md w-5/6 mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    )
}
