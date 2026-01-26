import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
	variable: "--font-nenu",
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Silk Slip | Disha Patani in Crimson Light",
	description:
		"Silk Slip is an intimate, scroll-driven gallery capturing Disha Patani in five bold, crimson-lit editorial frames.",
	icons: {
		icon: [
			{
				url: "/icon.svg",
				type: "image/svg+xml",
			},
			{
				url: "/favicon.ico",
				sizes: "any",
			},
		],
		apple: "/apple-icon.png",
	},
	authors: [{ name: "rudra-xi", url: "https://rudra-geek-nook.vercel.app/" }],
	creator: "rudra-xi",
	keywords: [
		"Disha Patani gallery",
		"Disha Patani photoshoot",
		"model portfolio",
		"image gallery",
		"editorial portrait",
		"fashion photography",
	],
	openGraph: {
		title: "Silk Slip — Disha Patani in Scarlet Shadow",
		description:
			"A minimal, scroll-first viewing experience with Disha Patani, bathed in deep reds, soft highlights, and cinematic shadow.",
		url: "https://silk-slip.vercel.app/",
		type: "website",
		siteName: "Silk Slip",
		images: [
			{
				url: "https://silk-slip.vercel.app/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Silk Slip – Disha Patani in a bold red look, framed by shadow and light",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Silk Slip | Disha Patani in Crimson Light",
		description:
			"Five-frame, scroll-led portrait series of Disha Patani styled in rich reds and sculpted shadow.",
		creator: "rudra-xi",
		images: ["https://silk-slip.vercel.app/og-image.jpg"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${bebas.className} antialiased`}>
				<main className={"min-h-screen"}>{children}</main>
			</body>
		</html>
	);
}
