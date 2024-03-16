"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

export function Testimonial() {
	return (
		<Carousel
			opts={{
				loop: true,
			}}
			plugins={[
				AutoScroll({
					playOnInit: true,
					speed: 0.55,
					stopOnInteraction: false,
					stopOnMouseEnter: true,
					startDelay: 250,
				}),
			]}
			className=""
		>
			<CarouselContent className="-ml-4 mt-16">
				<CarouselItem className="pl-4 max-w-3xl">
					<div className="bg-zinc-800/40 rounded-lg border border-zinc-600 p-4 md:p-8">
						<p className="text-white/70 md:text-base">
							&quot;I associate customer service with his brand... Like Gucci! They have some of
							the most incredible customer service, very hands on. Whenever you&apos;re in
							there, they cater to what you need. Brandon&apos;s that kind of guy. He&apos;ll
							try to figure out your strengths and weaknesses and build a plan for you, test,
							and ask what you like. Very similar to Gucci and it speaks volumes. You don&apos;t
							get that anywhere else.&quot;
						</p>
						<div className="flex items-center gap-4 mt-10 md:mt-4">
							<div>
								<p className="font-semibold text-white">Chris, 37</p>
								<p className="text-white text-sm">Client for 11 months</p>
							</div>
						</div>
					</div>
				</CarouselItem>
				<CarouselItem className="pl-4 max-w-3xl ">
					<div className="bg-zinc-800/40 rounded-lg border border-zinc-600 p-4 md:p-8">
						<p className="text-white/70 md:text-base">
							&quot;Dawn Fitness has truly changed my life. Previously, I struggled with wearing
							better clothes, often feeling that it wouldn&apos;t make a difference or that
							sloppy attire was acceptable. However, upon starting my training, I felt a renewed
							sense of vitality that had been missing for the past two years. I began to
							socialize more, my confidence soared, and I transitioned from wearing extra-large
							to large clothing sizes. With the guidance and encouragement from Dawn Fitness and
							Brandon, I&apos;ve been empowered to sculpt the person I aspire to become. Thank
							you, Dawn Fitness!.&quot;
						</p>
						<div className="flex items-center gap-4 mt-10 md:mt-4">
							<div>
								<p className="font-semibold text-white">Mendelson, 25</p>
								<p className="text-white text-sm">Client for 18 months</p>
							</div>
						</div>
					</div>
				</CarouselItem>
				<CarouselItem className="pl-4 max-w-3xl">
					<div className="bg-zinc-800/40 rounded-lg border border-zinc-600 p-4 md:p-8">
						<p className="text-white/70 md:text-base">
							&quot;My workouts with my coach throughout the week are like therapy for me. I get
							to talk about what is going on in my personal life and at work and we use the gym
							as a way to channel all the frustrations I have. It&apos;s more than just fitness
							advice, my coach helps me prioritize all of my goals in life and actually checks
							in with me to make sure I am making the progress I want to. I appreciate that he
							always remembers what we talked about and keeps me motivated and excited
							throughout my week!&quot;
						</p>
						<div className="flex items-center gap-4 mt-10 md:mt-4">
							<div>
								<p className="font-semibold text-white">Dewayne, 31</p>
								<p className="text-white text-sm">Client for 25 months</p>
							</div>
						</div>
					</div>
				</CarouselItem>
			</CarouselContent>
			{/* <CarouselPrevious />
			<CarouselNext /> */}
		</Carousel>
	);
}
