import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

export const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm flex bg-white items-center">
            <div className="md:mx-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo />
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button>
                        Login
                    </Button>
                    <Button>
                        Signup
                    </Button>
                </div>
            </div>
        </div>
    )
}