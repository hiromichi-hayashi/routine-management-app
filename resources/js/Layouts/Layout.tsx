interface Children {
    children: React.ReactNode
}

const Layout = ({ children }: Children) => (
    <>
        <div className="w-full h-full lg:pl-48 md:pr-4 px-4 pb-8 bg-gray-100">
            {children}
        </div>
    </>
)

export default Layout
