import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import { text } from 'stream/consumers';
const headingFont = localFont({src: "../../assets/fonts/font.woff2"});
const textFont = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function Home() {
    return (
		<div>
			<div className={cn("", headingFont.className)}>
				Index Header
			</div>
			<div className={cn("", textFont.className)}>
				Index text
			</div>
		</div>
    )
}
