interface Props {
    children: React.ReactNode
}

const Title = ({ children }: Props) => (
    <>
        <div className="sm:text-2xl text-3xl font-semibold">{children}</div>
    </>
)

export default Title
