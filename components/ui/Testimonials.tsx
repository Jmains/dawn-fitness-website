"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export function Testimonials() {
	return (
		<Carousel
			plugins={[
				Autoplay({
					delay: 15000,
				}),
			]}
		>
			<CarouselContent>
				<CarouselItem>
					<div className="flex gap-8 max-w-3xl mx-auto mt-16">
						<div>
							<p className="text-white/70 md:text-base">
								&quot;Dawn Fitness has truly changed my life. Previously, I struggled with
								wearing better clothes, often feeling that it wouldn&apos;t make a difference
								or that sloppy attire was acceptable. However, upon starting my training, I
								felt a renewed sense of vitality that had been missing for the past two years.
								I began to socialize more, my confidence soared, and I transitioned from
								wearing extra-large to large clothing sizes. With the guidance and
								encouragement from Dawn Fitness and Brandon, I&apos;ve been empowered to
								sculpt the person I aspire to become. Thank you, Dawn Fitness!.&quot;
							</p>
							<div className="flex items-center gap-4 mt-10 md:mt-4">
								<Image
									width={24}
									height={24}
									src="/mendy.png"
									alt="Mendelson"
									className="shrink-0 rounded-full object-center object-cover shadow-md w-10 h-10 md:w-12 md:h-12"
								/>
								<div>
									<p className="font-semibold text-white">Mendelson, 25</p>
									<p className="text-white text-sm">Client for 18 months</p>
								</div>
							</div>
						</div>
					</div>
				</CarouselItem>
				<CarouselItem>
					<div className="flex gap-8 max-w-3xl mx-auto mt-16">
						<div>
							<p className="text-white/70 md:text-base">
								&quot;I associate customer service with his brand... Like Gucci! They have
								some of the most incredible customer service, very hands on. Whenever
								you&apos;re in there, they cater to what you need. Brandon&apos;s that kind of
								guy. He&apos;ll try to figure out your strengths and weaknesses and build a
								plan for you, test, and ask what you like. Very similar to Gucci and it speaks
								volumes. You don&apos;t get that anywhere else.&quot;
							</p>
							<div className="flex items-center gap-4 mt-10 md:mt-4">
								<Image
									width={24}
									height={24}
									src="/client1.jpg"
									alt="Chris"
									className="shrink-0 rounded-full object-center object-cover shadow-md w-10 h-10 md:w-12 md:h-12"
								/>
								<div>
									<p className="font-semibold text-white">Chris, 37</p>
									<p className="text-white text-sm">Client for 11 months</p>
								</div>
							</div>
						</div>
					</div>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
