import { bebasFont } from "@/fonts";
import clsx from "clsx";
import Image from "next/image";

export default function MeetTheTeam() {
	return (
		<div className="pt-20 px-4">
			<div className="mt-10 md:mt-12 max-w-4xl mx-auto">
				<h3 className={clsx("text-center font-bold text-4xl md:text-6xl", bebasFont.className)}>
					Meet The Team
				</h3>
				<hr className="h-[0.1rem] bg-neutral-300 mt-6 md:mt-12" />
				<h4 className="font-bold text-neutral-800 text-3xl text-center md:text-left md:text-5xl mt-12 lg:mt-20">
					Coaches
				</h4>
				<div className="md:grid grid-cols-3 gap-10 mt-20">
					<div className="md:col-span-1">
						<Image
							src="/brandon.jpg"
							className="object-cover object-center rounded-full mx-auto md:m-0 shadow-lg w-64 h-64  bg-white sm:rounded-md md:w-[150rem] md:h-96"
							height={256}
							width={700}
							loading="eager"
							alt="Brandon Nayebi"
						/>
					</div>
					<div className="md:col-span-2">
						<h2
							className={clsx(
								"font-bold text-2xl md:text-3xl text-center md:text-left mt-4",
								bebasFont.className
							)}
						>
							Brandon Nayebi
						</h2>
						<h3
							className={clsx(
								"text-center text-black/65 font-semibold text-lg md:text-xl md:text-left",
								bebasFont.className
							)}
						>
							Head Coach
						</h3>

						<p className="mt-8 text-black/60">
							Brandon is a Fitness Coach who has been training for over a decade. He has lost
							120 lbs. himself and has used that experience to help over a hundred clients
							lose/gain weight, build muscle, get stronger, and develop healthy habits that
							result in lifelong transformations. Brandon&apos;s passion for changing lives is
							what led him to found Dawn Fitness with the ambition to help impact as many lives
							as possible!
						</p>
					</div>
				</div>
				<div className="md:grid grid-cols-3 gap-10 mt-20">
					<div className="md:col-span-1">
						<Image
							src="/jackson.jpg"
							className="object-cover object-center rounded-full mx-auto md:m-0 shadow-lg w-64 h-64 bg-white sm:rounded-md md:w-[150rem] md:h-96"
							height={256}
							width={700}
							loading="eager"
							alt="Brandon Nayebi"
						/>
					</div>
					<div className="md:col-span-2">
						<h2
							className={clsx(
								"font-bold text-2xl md:text-3xl text-center md:text-left mt-4",
								bebasFont.className
							)}
						>
							Jackson Main
						</h2>
						<h3
							className={clsx(
								"text-center text-black/65 font-semibold text-lg md:text-xl md:text-left",
								bebasFont.className
							)}
						>
							Coach
						</h3>
						{/* <hr className="h-[0.1rem] bg-neutral-300 mt-4" /> */}
						<p className="mt-8 text-black/60">
							Jackson is a Fitness Coach who has a lifetime of experience in athletics, having
							played a variety of sports from an early age into adulthood. He specializes in
							strength and conditioning, with a focus on HIIT-style training. Jackson loves to
							get active with his clients and will often lead by example. Get ready to break a
							sweat and engage in some serious competition when training with him.
						</p>
					</div>
				</div>
				<hr className="h-[0.1rem] bg-neutral-300 mt-24" />
				<h4 className="font-bold text-neutral-800 text-3xl md:text-5xl mt-14 lg:mt-20 text-center md:text-left">
					Athletes
				</h4>
				<div className="md:grid grid-cols-3 gap-10 mt-20">
					<div className="md:col-span-1">
						<Image
							src="/alonso.jpg"
							className="object-cover object-center rounded-full mx-auto md:m-0 shadow-lg w-64 h-64 bg-white sm:rounded-md md:w-[150rem] md:h-96"
							height={256}
							width={700}
							loading="lazy"
							alt="Alonso Carranza"
						/>
					</div>
					<div className="md:col-span-2">
						<h2
							className={clsx(
								"font-bold text-2xl md:text-3xl text-center md:text-left mt-4",
								bebasFont.className
							)}
						>
							Alonso Carranza
						</h2>
						<h3
							className={clsx(
								"text-center text-black/65 font-semibold text-lg md:text-xl md:text-left",
								bebasFont.className
							)}
						>
							Dawn Athlete
						</h3>
						{/* <hr className="h-[0.1rem] bg-neutral-300 mt-4" /> */}
						<p className="mt-8 text-black/60">
							Alonso has been training for 5 years now, all self-taught before joining team
							Dawn. Growing up he would always tell his mom about his aspirations to be like
							“the buff guys on T.V.” so when he turned 17 and could join a gym he went in and
							got to work. Seeing progress in himself and others is what he says motivates him
							the most. Being able to inspire change by being a role-model has helped him be
							successful in his fitness journey.
						</p>
					</div>
				</div>
				<div className="md:grid grid-cols-3 gap-10 mt-20">
					<div className="md:col-span-1">
						<Image
							src="/chevy.jpeg"
							className="object-cover object-chevy rounded-full mx-auto md:m-0 shadow-lg w-64 h-64 bg-white sm:rounded-md md:w-[150rem] md:h-96"
							height={256}
							width={700}
							loading="lazy"
							alt="Trevor Albert"
						/>
					</div>
					<div className="md:col-span-2">
						<h2
							className={clsx(
								"font-bold text-2xl md:text-3xl text-center md:text-left mt-4",
								bebasFont.className
							)}
						>
							Trevor Albert
						</h2>
						<h3
							className={clsx(
								"text-center text-black/65 font-semibold text-lg md:text-xl md:text-left",
								bebasFont.className
							)}
						>
							Dawn Athlete
						</h3>
						<p className="mt-8 text-black/60">
							Trevor has had a long history with fitness, having practiced many different types
							of training from bodybuilding and crossfit to olympic lifting and even
							long-distance running. Currently, he has been gravitating towards strength and
							conditioning. He is currently pursuing his CSCS so that he can work with other
							athletes and help take them to the next level.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
