import { Navbar } from "./_components/navbar";

const NavbarLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full bg-slate-100">
            <Navbar />
            <main>
                {children} 
            </main>
        </div>
    )
}

export default NavbarLayout;