import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <ClerkProvider>
            <div className="h-screen">
                {children}
            </div>
        </ClerkProvider>
    )
}

export default PlatformLayout;