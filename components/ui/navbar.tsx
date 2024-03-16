"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Navbar() {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="z-20 w-full items-center justify-between text-sm lg:flex">
			<div className="fixed z-10 left-0 top-0 flex w-full justify-center bg-gradient-to-b from-zinc-200 pb-4 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
				<div className="flex w-full max-w-7xl items-center justify-between px-4">
					<Link href="/">
						<Image height={35} width={80} src="/DAWN_logo_2024.png" alt="dawnfit logo" />
					</Link>
					<div className="relative sm:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8"
							onClick={() => setShowMenu((prev) => !prev)}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 9h16.5m-16.5 6.75h16.5"
							/>
						</svg>
						{showMenu && (
							<>
								<div
									className={clsx(
										`fixed bg-black bg-opacity-20 inset-0 min-h-screen w-full`
									)}
									onClick={() => setShowMenu(false)}
								></div>
								<div className="absolute top-8 right-0">
									<div className="bg-white backdrop-blur-md shadow-md border border-neutral-300 py-2 rounded-md grid">
										<Link
											onClick={() => setShowMenu(false)}
											href="/#services"
											className="relative pl-16 text-right pr-4 py-2 inline-block hover:bg-neutral-200 duration-200 ease-out transition-colors"
										>
											Services
										</Link>
										<Link
											onClick={() => setShowMenu(false)}
											href="/#testimonials"
											className="relative pl-16 pr-4 text-right py-2 inline-block hover:bg-neutral-200 duration-200 ease-out transition-colors"
										>
											Testimonials
										</Link>
										<Link
											onClick={() => setShowMenu(false)}
											href="/meet-the-team"
											className="relative pl-16 whitespace-nowrap pr-4 text-right py-2 inline-block hover:bg-neutral-200 duration-200 ease-out transition-colors"
										>
											Meet The Team
										</Link>
										<Link
											onClick={() => setShowMenu(false)}
											href="/#contact"
											className="relative pl-16 whitespace-nowrap pr-4 text-right py-2 inline-block hover:bg-neutral-200 duration-200 ease-out transition-colors"
										>
											Contact
										</Link>
									</div>
								</div>
							</>
						)}
					</div>

					<div className="hidden sm:flex gap-4 text-xs md:gap-8 md:text-sm items-center">
						<Link
							href="/#services"
							className="relative inline-block after:content-[''] after:hover:scale-x-100 after:hover:origin-bottom-left after:focus:scale-x-100 after:focus:origin-bottom-left after:absolute after:w-full after:origin-bottom-right after:bottom-0 after:left-0 after:scale-x-0 after:bg-black after:h-0.5 after:transition after:duration-200 after:ease-in-out"
						>
							Services
						</Link>
						<Link
							href="/#testimonials"
							className="relative inline-block after:content-[''] after:hover:scale-x-100 after:hover:origin-bottom-left after:focus:scale-x-100 after:focus:origin-bottom-left after:absolute after:w-full after:origin-bottom-right after:bottom-0 after:left-0 after:scale-x-0 after:bg-black after:h-0.5 after:transition after:duration-200 after:ease-in-out"
						>
							Testimonials
						</Link>
						<Link
							href="/meet-the-team"
							className="relative inline-block after:content-[''] after:hover:scale-x-100 after:hover:origin-bottom-left after:focus:scale-x-100 after:focus:origin-bottom-left after:absolute after:w-full after:origin-bottom-right after:bottom-0 after:left-0 after:scale-x-0 after:bg-black after:h-0.5 after:transition after:duration-200 after:ease-in-out"
						>
							Meet The Team
						</Link>
						<Link
							href="/#contact"
							className="py-1 px-4 bg-black hover:bg-black/80 rounded-md text-white"
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
