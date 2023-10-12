interface Props {
    children: React.ReactNode
    className: string
}

const Panel = ({ children, className }: Props) => (
    <>
        <div
            className={`pb-6 pt-3 px-8 bg-white rounded-md shadow-md ${className}`}
        >
            {children}
        </div>
    </>
)

export default Panel
