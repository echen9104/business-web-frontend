import { ClerkProvider } from "@clerk/nextjs";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const NavbarLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <ClerkProvider>
            <div className="h-screen bg-slate-100">
                <Navbar />
                <main>
                    {children} 
                </main>
                <Footer />
            </div>
        </ClerkProvider>
    )
}

export default NavbarLayout;