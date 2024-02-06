import { FadeInText } from "@/components/fadeInText";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/forms/contact-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main>
			<div className="z-20 w-full items-center justify-between text-sm lg:flex">
				<div className="fixed z-10 left-0 top-0 flex w-full justify-center bg-gradient-to-b from-zinc-200 pb-4 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
					<div className="flex w-full max-w-7xl items-center justify-between px-4">
						<Link href="/">
							<Image height={35} width={80} src="/DAWN_logo_2024.png" alt="dawnfit logo" />
						</Link>
						<div className="flex gap-4 text-xs md:gap-8 md:text-sm items-center">
							<Link
								href="#services"
								className="relative inline-block after:content-[''] after:hover:scale-x-100 after:hover:origin-bottom-left after:focus:scale-x-100 after:focus:origin-bottom-left after:absolute after:w-full after:origin-bottom-right after:bottom-0 after:left-0 after:scale-x-0 after:bg-black after:h-0.5 after:transition after:duration-200 after:ease-in-out"
							>
								Services
							</Link>
							<Link
								href="#testimonials"
								className="relative inline-block after:content-[''] after:hover:scale-x-100 after:hover:origin-bottom-left after:focus:scale-x-100 after:focus:origin-bottom-left after:absolute after:w-full after:origin-bottom-right after:bottom-0 after:left-0 after:scale-x-0 after:bg-black after:h-0.5 after:transition after:duration-200 after:ease-in-out"
							>
								Testimonials
							</Link>
							<Link
								href="#contact"
								className="py-1 px-4 bg-black hover:bg-black/80 rounded-md text-white"
							>
								Contact
							</Link>
						</div>
					</div>
				</div>
			</div>
			<section className="grid grid-cols-1 md:grid-cols-2 pt-[4.83rem] gap-y-12 max-w-7xl mx-auto">
				<div className="pt-12 md:pt-20 px-4">
					<h1 className="font-bold text-4xl md:text-5xl grid gap-2 md:gap-4">
						<FadeInText word="New Dawn." delay={5} />
						<FadeInText word="New Beginning." delay={13} />
						<FadeInText word="New you." delay={20} />
					</h1>
					<h2 className="mt-12 text-zinc-700 max-w-lg">
						<strong>Dawn</strong> is a fit-lifestyle company that coaches individuals on how to
						become the happiest, healthiest, and most successful version of themselves. Our range
						of services includes <strong>personal training</strong>,{" "}
						<strong>lifestyle coaching</strong>, and <strong>fitness planning</strong>
						—available both in person and online—allowing you to transform your life on{" "}
						<strong>your own terms</strong>.
					</h2>
				</div>
				<div className="">
					<video
						autoPlay={true}
						muted={true}
						loop={true}
						playsInline={true}
						id="dawnFitVideo"
						controls={false}
						className="h-[80vh] w-full object-cover object-vid max-h-[36rem]"
					>
						<source src="headerVid.mp4" type="video/mp4" />
					</video>
				</div>
			</section>
			<section id="services" className="bg-zinc-50 scroll-m-20">
				<div className="px-4 py-10 md:py-20 max-w-7xl mx-auto">
					<h3 className="text-center font-bold text-3xl md:text-4xl">Services</h3>
					<div className="grid gap-8 md:grid-cols-3 mt-8">
						<div className="p-4 py-10 border-zinc-300  shadow-md rounded-md bg-zinc-100 ">
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
						<div className="p-4 py-10 border-zinc-300  shadow-md rounded-md bg-zinc-100 ">
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
						<div className="p-4 py-10 border-zinc-300  shadow-md rounded-md bg-zinc-100 ">
							<div>
								<ClockIcon className="h-16 w-16 mx-auto" />
								<h4 className="text-center font-semibold text-xl mt-5">Flexible Services</h4>
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
				<div className="px-4 py-16 max-w-7xl mx-auto">
					<h3 className="text-center text-3xl font-bold text-white ">Client Testimonials</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-16 lg:gap-x-32">
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
					</div>
				</div>
			</section>
			<section className="px-4 py-10 bg-zinc-100">
				<div id="contact" className="text-4xl font-bold mx-auto scroll-m-32">
					<h3 className="text-center">Let&apos;s Get In Touch!</h3>
					<ContactForm className="max-w-lg mx-auto mt-10" />
				</div>
			</section>
			<section className="bg-white">
				<div className="max-w-7xl mx-auto py-10 md:py-16 px-4">
					<h4 className="font-bold">Dawn Fitness</h4>
					<hr className="mt-4 bg-black" />
					<div className="flex flex-col gap-y-10 md:flex-row justify-between items-start mt-4">
						<p className="text-sm  max-w-sm">
							Dawn Fitness is based in Dallas, TX. Our team is dedicated to providing the best
							service possible. Please let us know how we can meet your expectations through our
							social media platforms listed.
						</p>
						<div className="flex items-center gap-4">
							<a
								href="https://www.tiktok.com/@dawn.fit"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width="24px"
									height="24px"
									viewBox="0 0 512 512"
									id="icons"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
								</svg>
							</a>
							<a
								href="https://www.instagram.com/dawn.fit.training/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width="24px"
									height="24px"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7.5 5C6.11929 5 5 6.11929 5 7.5C5 8.88071 6.11929 10 7.5 10C8.88071 10 10 8.88071 10 7.5C10 6.11929 8.88071 5 7.5 5Z"
										fill="#000000"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M4.5 0C2.01472 0 0 2.01472 0 4.5V10.5C0 12.9853 2.01472 15 4.5 15H10.5C12.9853 15 15 12.9853 15 10.5V4.5C15 2.01472 12.9853 0 10.5 0H4.5ZM4 7.5C4 5.567 5.567 4 7.5 4C9.433 4 11 5.567 11 7.5C11 9.433 9.433 11 7.5 11C5.567 11 4 9.433 4 7.5ZM11 4H12V3H11V4Z"
										fill="#000000"
									/>
								</svg>
							</a>
							<a
								href="https://twitter.com/dawnfitlife"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									className=" text-black dark:text-white"
									width="28px"
									height="28px"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										d="M22 5.9c-.7.3-1.5.5-2.4.6a4 4 0 0 0 1.8-2.2c-.8.5-1.6.8-2.6 1a4.1 4.1 0 0 0-6.7 1.2 4 4 0 0 0-.2 2.5 11.7 11.7 0 0 1-8.5-4.3 4 4 0 0 0 1.3 5.4c-.7 0-1.3-.2-1.9-.5a4 4 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.9 2.8c-1.8 1.3-4 2-6.1 1.7a11.7 11.7 0 0 0 10.7 1A11.5 11.5 0 0 0 20 8.5V8a10 10 0 0 0 2-2.1Z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>

				<p className="bg-black text-center py-3 text-xs text-white/50">
					Copyright &copy; {new Date().getFullYear()} Dawn Fitness. All Rights Reserved.
				</p>
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
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
			/>
		</svg>
	);
}
