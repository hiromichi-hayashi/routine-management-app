interface Props {
    children: React.ReactNode
}

const Panel = ({ children }: Props) => (
    <>
        <div className="pb-6 pt-3 px-8 mt-4 w-full bg-white rounded-md shadow-md">
            {children}
        </div>
    </>
)

export default Panel
