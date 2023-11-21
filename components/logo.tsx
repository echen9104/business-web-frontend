import Link from "next/link";
import Image from "next/image";
import localFont from 'next/font/local';
import { cn } from "@/lib/utils";
import logo from "../assets/images/logo.png";

const headingFont = localFont({src: "../assets/fonts/font.woff2"});

export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 gap-x-2 items-center hidden md:flex">
                <Image 
                    src={logo}
                    alt="logo"
                    height={30}
                    width={30}
                />
                <p className={cn(
                    "text-lg text-neutral-700 pb-1",
                    headingFont.className
                )}>
                    TaxRecs
                </p>
            </div>
        </Link>
    )
}