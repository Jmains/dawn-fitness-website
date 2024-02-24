import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Dawn Fitness",
	description:
		"New Dawn, New You. Dawn Fitness transforms lives through body recomposition, personal training, and lifestyle coaching for a holistic approach to health and well-being.",
	openGraph: {
		type: "website",
		url: "https://dawn.fitness",
		title: "Dawn Fitness",
		description:
			"New Dawn, New You. Dawn Fitness transforms lives through body recomposition, personal training, and lifestyle coaching for a holistic approach to health and well-being.",
		siteName: "Dawn Fitness",
		images: [
			{
				url: "https://dawn.fitness/DAWN_logo.png",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "https://dawn.fitness",
		creator: "@creator",
		images: "https://dawn.fitness/DAWN_logo.png",
		title: "Dawn Fitness",
		description:
			"New Dawn, New You. Dawn Fitness transforms lives through body recomposition, personal training, and lifestyle coaching for a holistic approach to health and well-being.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Script
				src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}`}
			/>
			<body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
				<Navbar />
				{children}
				<Toaster />
				<Footer />
			</body>
			<GoogleAnalytics gaId="G-L424822YQS" />
		</html>
	);
}
