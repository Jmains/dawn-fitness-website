import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/forms/contact-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<div className="z-10 w-full items-center justify-between text-sm lg:flex">
				<div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
					<div className="flex w-full max-w-7xl items-center justify-between px-4">
						Logo
						<div className="flex gap-4 md:gap-6 text-sm md:text-base items-center">
							<a href="#services" className="">
								Services
							</a>
							<a href="#testimonials" className="">
								Testimonials
							</a>
							<Button size={"sm"}>Contact</Button>
						</div>
					</div>
				</div>
			</div>
			<section className="grid grid-cols-1 md:grid-cols-2 pt-16 gap-y-8 max-w-7xl mx-auto">
				<div className="pt-20 px-4">
					<h1 className="font-bold text-3xl md:text-4xl grid gap-4">
						<span>Transform your body. </span>
						<span>Transform your life. </span>
						<span>Become the best version of yourself.</span>
					</h1>
					<h2 className="mt-6 text-zinc-700">
						Brandon is a Dallas-based personal trainer who really really really wants to be a
						billionaire and his co founder Jackson is helping him achieve that goal amen.
					</h2>
				</div>
				<div className="bg-contact-form bg-center bg-cover h-[70dvh] max-h-[36rem]"></div>
			</section>
			<section id="services" className="bg-zinc-50 scroll-m-20">
				<div className="px-4 py-10 md:py-20 max-w-7xl mx-auto">
					<h3 className="text-center font-bold text-3xl md:text-4xl">Services</h3>
					<div className="grid gap-8 md:grid-cols-3 mt-8">
						<div className="p-4 py-10 border-zinc-300  shadow-md bg-gradient-to-b rounded-md from-zinc-50 to-zinc-200 border">
							<div>
								<ClipboardIcon className="h-16 w-16 mx-auto" />
								<h4 className="text-center font-semibold text-xl mt-5">Personalized Plans</h4>
								<p className="text-zinc-600 mt-6 text-center">
									Experience personalized plans tailored to your unique goals, integrating
									targeted exercises, nutrition strategies, and lifestyle adjustments.
									Unlock your full potential with a fitness journey crafted exclusively for
									you.
								</p>
							</div>
						</div>
						<div className="p-4 py-10 border-zinc-300  shadow-md bg-gradient-to-b rounded-md from-zinc-50 to-zinc-200 border">
							<div>
								<DumbbellIcon className="h-16 w-16 mx-auto" />
								<h4 className="text-center font-semibold text-xl mt-5">
									More Than Just Exercise
								</h4>
								<p className="text-zinc-600 mt-6 text-center">
									Our approach extends beyond the gym, encompassing personalized nutrition,
									lifestyle coaching, and unwavering motivation. Elevate your well-being
									with us - it's not just a workout; it's a holistic transformation.
								</p>
							</div>
						</div>
						<div className="p-4 py-10 border-zinc-300  shadow-md bg-gradient-to-b rounded-md from-zinc-50 to-zinc-200 border">
							<div>
								<ClipboardIcon className="h-16 w-16 mx-auto" />
								<h4 className="text-center font-semibold text-xl mt-5">Flexible Services</h4>
								<p className="text-zinc-600 mt-6 text-center">
									I get it-life can get in the way sometimes. That doesn't have to stop you
									from reaching your goals. I offer virtual options and depending on what
									works for you at any time.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="testimonials" className="bg-zinc-900 scroll-m-20">
				<div className="px-4 py-16">
					<h3 className="text-center text-3xl font-bold text-white ">Client Testimonials</h3>
					<div className="flex gap-8 max-w-3xl mx-auto mt-16">
						<div className="shrink-0">
							<img
								src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="Chris"
								className=" rounded-lg shadow-md hidden md:block h-56 w-40 object-center object-cover"
							/>
						</div>
						<div>
							<p className="text-white/70 md:text-lg">
								"I associate customer service with his brand... Like Gucci! They have some of
								the most incredible customer service, very hands on. Whenever you're in there,
								they cater to what you need. Brandon's that kind of guy. He'll try to figure
								out your strengths and weaknesses and build a plan for you, test, and ask what
								you like. Very similar to Gucci and it speaks volumes. You don't get that
								anywhere else."
							</p>

							<div className="flex items-center gap-4 mt-10 md:mt-4">
								<img
									src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Chris"
									className="shrink-0 rounded-full object-center object-cover shadow-md w-12 h-12 lg:hidden"
								/>
								<div>
									<p className="font-semibold text-white">Chris, 27</p>
									<p className="text-white text-sm">Client for 12 months</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="px-4 py-10 bg-zinc-100">
				<div id="contact" className="text-4xl font-bold mx-auto">
					<h3 className="text-center">Let's Get In Touch!</h3>
					<ContactForm className="max-w-lg mx-auto mt-10" />
				</div>
			</section>
			<section className="bg-white">
				<div className="max-w-7xl mx-auto py-10 md:py-16 px-4">
					<h4 className="font-bold">Dawn Fitness</h4>
					<hr className="mt-4 bg-black" />
					<div className="flex flex-col gap-y-10 md:flex-row justify-between items-start mt-4">
						<p className="text-sm  max-w-sm">
							Some text about dawn fit fill with content now ome text about dawn fit fill with
							content now ome text about dawn fit fill with content now ome text about dawn fit
							fill with content now
						</p>
						<div className="flex items-center gap-4">
							<svg
								width="24px"
								height="24px"
								viewBox="0 0 512 512"
								id="icons"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
							</svg>
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
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M4.5 0C2.01472 0 0 2.01472 0 4.5V10.5C0 12.9853 2.01472 15 4.5 15H10.5C12.9853 15 15 12.9853 15 10.5V4.5C15 2.01472 12.9853 0 10.5 0H4.5ZM4 7.5C4 5.567 5.567 4 7.5 4C9.433 4 11 5.567 11 7.5C11 9.433 9.433 11 7.5 11C5.567 11 4 9.433 4 7.5ZM11 4H12V3H11V4Z"
									fill="#000000"
								/>
							</svg>
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
