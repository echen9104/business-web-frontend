import { Footer } from "@/app/(navbar)/_components/footer";
import { Navbar } from "@/app/(navbar)/_components/navbar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
            <div className="h-full">
                <Navbar />
                {children}
                <Footer />
            </div>
    )
}

export default DashboardLayout;