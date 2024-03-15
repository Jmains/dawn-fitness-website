import { FadeInText } from "@/components/fadeInText";
import { ContactForm } from "@/components/ui/forms/contact-form";
import { bebasFont } from "@/fonts";
import clsx from "clsx";
import Link from "next/link";
import { Testimonials } from "@/components/ui/Testimonials";

export default function Home() {
	return (
		<main>
			<section className="grid grid-cols-1 md:grid-cols-2 pt-[4.83rem] gap-y-12 max-w-7xl mx-auto">
				<div className="pt-16 md:py-20 md:pt-12 px-4">
					<h1 className="font-bold text-6xl md:text-7xl grid gap-2 md:gap-4">
						<FadeInText className={bebasFont.className} word="New Dawn." delay={5} />
						<FadeInText className={bebasFont.className} word="New Beginning." delay={13} />
						<FadeInText className={bebasFont.className} word="New you." delay={20} />
					</h1>
					<h2 className="mt-12 text-zinc-700 max-w-lg">
						<strong>Dawn</strong> is a fit-lifestyle company that coaches individuals on how to
						become the happiest, healthiest, and most successful version of themselves. Our range
						of services includes <strong>personal training</strong>,{" "}
						<strong>lifestyle coaching</strong>, and <strong>fitness planning</strong>
						—available both in person and online—allowing you to transform your life on{" "}
						<strong>your own terms</strong>.
					</h2>
					<Link
						href={"/#contact"}
						className="mt-10 px-6 border border-neutral-400 hover:bg-black/75 shadow-md py-2 text-left bg-black/95 inline-block text-white rounded-md"
					>
						Start your fitness journey today!
					</Link>
				</div>
				<div className="">
					<video
						autoPlay={true}
						muted={true}
						loop={true}
						playsInline={true}
						id="dawnFitVideo"
						controls={false}
						className="h-[85vh] w-full object-cover object-vid max-h-[40rem] md:max-h-none md:h-full lg:h-[85vh] lg:max-h-[55rem]"
					>
						<source src="headerVid.mp4" type="video/mp4" />
					</video>
				</div>
			</section>
			<section id="services" className="bg-zinc-50 scroll-m-20">
				<div className="px-4 py-10 md:py-24 max-w-7xl mx-auto">
					<h3 className={clsx("text-center font-bold text-4xl md:text-5xl", bebasFont.className)}>
						Services
					</h3>
					<div className="grid gap-8 md:grid-cols-3 mt-8 md:mt-12">
						<div className="p-4 py-10 border-zinc-300 shadow-md rounded-md bg-zinc-100 sm:transfrom sm:hover:scale-105 sm:duration-300 sm:transition-transform sm:ease-in-out">
							<div>
								<ClipboardIcon className="h-16 w-16 mx-auto" />
								<h4 className="text-center font-semibold text-xl mt-5">Personalized Plans</h4>
								<p className="text-zinc-600 mt-6 text-center">
									Workouts, diet plans, and lifestyle goal setting are all uniquely tailored
									and delivered to you either in-person with one of our expert coaches or
									online through our app.
								</p>
							</div>
						</div>
						<div className="p-4 py-10 border-zinc-300 shadow-md rounded-md bg-zinc-100 sm:transfrom sm:hover:scale-105 sm:duration-300 sm:transition-transform sm:ease-in-out">
							<div>
								<DumbbellIcon className="h-16 w-16 mx-auto" />
								<h4 className="text-center font-semibold text-xl mt-5">
									More Than Just Exercise
								</h4>
								<p className="text-zinc-600 mt-6 text-center">
									We understand that big muscles aren&apos;t everything. At Dawn, we guide
									our clients in adapting to their new life and body. We set goals for both
									inside and outside of the gym, so you can become your most successful
									self.
								</p>
							</div>
						</div>
						<div className="p-4 py-10 border-zinc-300  shadow-md rounded-md bg-zinc-100 sm:transfrom sm:hover:scale-105 sm:duration-300 sm:transition-transform sm:ease-in-out">
							<div>
								<ClockIcon className="h-16 w-16 mx-auto" />
								<h4 className="text-center font-semibold text-xl mt-5">
									Flexible Scheduling
								</h4>
								<p className="text-zinc-600 mt-6 text-center">
									Change can be intimidating, but it doesn&apos;t have to be. We offer
									coaching both in-person and virtually to accommodate all lifestyles and
									schedules.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="testimonials" className="bg-zinc-900 scroll-m-20">
				<div className="px-4 py-16 md:py-24 max-w-7xl mx-auto">
					<h3
						className={clsx(
							"text-center text-4xl font-bold text-white md:text-5xl",
							bebasFont.className
						)}
					>
						Client Testimonials
					</h3>

					<div className="px-11 md:px-20">
						<Testimonials />
					</div>
					{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-16 lg:gap-x-32">
						<div className="flex gap-8 max-w-3xl mx-auto mt-16">
							<div>
								<p className="text-white/70 md:text-base">
									&quot;Dawn Fitness has truly changed my life. Previously, I struggled with
									wearing better clothes, often feeling that it wouldn&apos;t make a
									difference or that sloppy attire was acceptable. However, upon starting my
									training, I felt a renewed sense of vitality that had been missing for the
									past two years. I began to socialize more, my confidence soared, and I
									transitioned from wearing extra-large to large clothing sizes. With the
									guidance and encouragement from Dawn Fitness and Brandon, I&apos;ve been
									empowered to sculpt the person I aspire to become. Thank you, Dawn
									Fitness!.&quot;
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
						<div className="flex gap-8 max-w-3xl mx-auto mt-16">
							<div>
								<p className="text-white/70 md:text-base">
									&quot;I associate customer service with his brand... Like Gucci! They have
									some of the most incredible customer service, very hands on. Whenever
									you&apos;re in there, they cater to what you need. Brandon&apos;s that
									kind of guy. He&apos;ll try to figure out your strengths and weaknesses
									and build a plan for you, test, and ask what you like. Very similar to
									Gucci and it speaks volumes. You don&apos;t get that anywhere else.&quot;
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
					</div> */}
				</div>
			</section>
			{/* <section className="px-4 py-10 ">
				<h3 className="text-center font-bold text-3xl md:text-5xl">Meet The Team</h3>
				<div className="mt-10">
					<h4 className="text-center font-semibold text-2xl md:text-3xl text-neutral-500">
						Our Coaches
					</h4>
					<div>
						<div className="h-20 w-20 bg-black shadow-md rounded-full mx-auto"></div>
						<h5 className="text-center font-bold">Brandon Neyebi</h5>
						<h6 className="text-center">Head Coach</h6>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti est
							illo facere officiis a. Temporibus rerum, id velit sunt illo officiis, delectus
							veniam repellat perspiciatis, numquam consequatur nesciunt molestiae. Doloribus
							reprehenderit labore inventore vero atque eum modi pariatur ducimus eius? Fugiat
							laborum saepe dolorem voluptatibus mollitia magnam sequi, placeat odio!
						</p>
					</div>
				</div>
			</section> */}
			<section className="px-4 py-10 md:py-24 bg-zinc-100">
				<div id="contact" className="text-4xl font-bold mx-auto scroll-m-32">
					<h3 className={clsx("text-center font-bold text-4xl md:text-5xl", bebasFont.className)}>
						Let&apos;s Get In Touch!
					</h3>
					<ContactForm className="max-w-lg mx-auto mt-10" />
				</div>
			</section>
		</main>
	);
}

type IconProps = {
	className?: string;
};

function ClipboardIcon({ className = "" }: IconProps) {
	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
			<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
		</svg>
	);
}

function DumbbellIcon({ className = "" }: IconProps) {
	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m6.5 6.5 11 11" />
			<path d="m21 21-1-1" />
			<path d="m3 3 1 1" />
			<path d="m18 22 4-4" />
			<path d="m2 6 4-4" />
			<path d="m3 10 7-7" />
			<path d="m14 21 7-7" />
		</svg>
	);
}

function ClockIcon({ className = "w-6 h-6 text-gray-800 dark:text-white" }: IconProps) {
	return (
		<svg
			className={className}
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
			/>
		</svg>
	);
}
