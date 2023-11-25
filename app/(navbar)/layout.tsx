import { Footer } from "./_components/footer";
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
            <Footer />
        </div>
    )
}

export default NavbarLayout;