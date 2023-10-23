import Button from '@/Components/Button'
import { BsXLg } from 'react-icons/bs'

interface Props {
    title: string
    children: React.ReactNode
    handleClose: React.MouseEventHandler<HTMLDivElement>
}

const Modal = ({ title, children, handleClose }: Props) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center min-h-screen z-50">
            <div
                className="fixed inset-0 bg-gray opacity-75"
                onClick={handleClose}
            ></div>

            <div className="bg-white rounded-lg shadow-xl w-5/6 lg:w-1/2 z-10 relative">
                <div
                    className="absolute top-[-15px] right-[-15px] cursor-pointer rounded-full p-2 bg-gray z-20"
                    onClick={handleClose}
                >
                    <BsXLg className="text-xl text-white" />
                </div>
                <div className="p-5">
                    <div className="flex justify-between items-center">
                        <p className="text-2xl font-bold">{title}</p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
