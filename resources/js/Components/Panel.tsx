interface Props {
    children: React.ReactNode
}

const Panel = ({ children }: Props) => (
    <>
        <div className="pb-6 pt-3 px-8 w-full bg-white rounded-md mt-4">
            {children}
        </div>
    </>
)

export default Panel
