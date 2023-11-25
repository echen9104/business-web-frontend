import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'TaxAI',
	description: 'Get recommendations for tax advatanges',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<div className="h-full bg-slate-100">
					{children}
				</div>
			</body>
		</html>
	)
}
