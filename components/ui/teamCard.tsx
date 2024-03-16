"use client";

import { bebasFont } from "@/fonts";
import clsx from "clsx";
import Image from "next/image";
import { Instagram } from "./icons/instagram";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function TeamCard({
	name,
	position,
	imgSrc,
	instaUrl,
	description,
	priority,
}: {
	name: string;
	position: string;
	imgSrc: string;
	instaUrl: string;
	description: string;
	priority: boolean;
}) {
	const cardRef = useRef(null);
	useGSAP(
		() => {
			gsap.fromTo(
				".coachAnim",
				{
					y: 60,
					opacity: 0,
					duration: 0.85,
					ease: "power1",
					stagger: {
						amount: 0.25,
					},
					scrollTrigger: {
						trigger: ".coachAnim",
						start: "30% bottom",
					},
				},
				{
					stagger: {
						amount: 0.25,
					},
					y: 0,
					opacity: 1,
					duration: 0.85,
					ease: "power1",
					scrollTrigger: {
						trigger: ".coachAnim",
						start: "30% bottom", // 50% of .coachAnim enters the bottom of the viewport
						// Whatever other ScrollTrigger vars you need here
					},
				}
			);
		},
		{ scope: cardRef }
	);

	return (
		<div ref={cardRef} className="md:grid grid-cols-3 gap-10 mt-20">
			<div className="md:col-span-1 coachAnim">
				<Image
					src={imgSrc}
					className="object-cover object-center rounded-full mx-auto md:m-0 shadow-lg w-64 h-64 bg-white sm:rounded-md md:w-[150rem] md:h-96"
					height={256}
					width={700}
					alt={name}
					priority={priority}
				/>
			</div>
			<div className="md:col-span-2 coachAnim">
				<h2
					className={clsx(
						"font-bold text-2xl md:text-3xl text-center md:text-left mt-4",
						bebasFont.className
					)}
				>
					{name}
				</h2>
				<div className="flex items-center justify-center md:justify-start gap-4">
					<h3
						className={clsx(
							"text-center text-black/65 font-semibold text-lg md:text-xl md:text-left mt-0.5",
							bebasFont.className
						)}
					>
						{position}
					</h3>
					<div>
						<a target="_blank" referrerPolicy="no-referrer" href={instaUrl}>
							<Instagram className="h-[1rem] w-[1rem] md:h-[1.25rem] md:w-[1.25rem]" />
						</a>
					</div>
				</div>

				<p className="mt-8 text-black/70 ">{description}</p>
			</div>
		</div>
	);
}
