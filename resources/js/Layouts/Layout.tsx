interface Children {
    children: React.ReactNode
}

const Layout = ({ children }: Children) => (
    <>
        <div className="pt-16 lg:pl-48">
            <div className="w-full h-full md:pr-4 px-4 pb-8 bg-gray-100">
                {children}
            </div>
        </div>
    </>
)

export default Layout
