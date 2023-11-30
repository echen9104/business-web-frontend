'use client'
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { UserButton, useUser } from "@clerk/nextjs"

export const Navbar = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    return (
        <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm flex bg-white items-center">
            <div className="md:mx-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo />
                { isSignedIn ?
                    <UserButton afterSignOutUrl="/"/>
                    :
                    <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                        <Button size="sm" variant="outline" asChild>
                            <Link href="/sign-in">
                                Login
                            </Link>                        
                        </Button>
                        <Button size="sm" asChild>
                            <Link href="/sign-up">
                                Sign up
                            </Link> 
                        </Button>
                    </div>
                }
            </div>
        </div>
    )
}