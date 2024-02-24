import Image from "next/image";

export default function MeetTheTeam() {
	return (
		<div className="pt-20 px-4">
			<div className="mt-10 max-w-7xl mx-auto">
				<h3 className="text-center font-bold text-4xl md:text-5xl">Meet The Team</h3>
				<div className="md:flex gap-10 mt-20">
					<div className="">
						<Image
							src="/brandon.jpg"
							className="object-cover object-center rounded-full mx-auto md:m-0 shadow-lg w-64 h-64  bg-white sm:rounded-md md:w-[150rem] md:h-96"
							height={256}
							width={700}
							loading="eager"
							alt="Brandon Nayebi"
						/>
					</div>
					<div className="">
						<h2 className="font-bold text-2xl text-center md:text-left mt-4">Brandon Nayebi</h2>
						<h3 className="text-center text-black/65 font-semibold text-lg mt-1 md:text-left">
							Head Coach
						</h3>
						{/* <hr className="h-[0.1rem] bg-neutral-300 mt-4" /> */}
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
				<hr className="h-[0.1rem] bg-neutral-300 my-16" />
				<div className="md:flex gap-10 mt-20">
					<div className="order-1">
						<Image
							src="/jackson.jpg"
							className="object-cover rounded-full mx-auto md:m-0 shadow-lg w-64 h-64 object-vid bg-white sm:rounded-md md:w-[150rem] md:h-96"
							height={256}
							width={700}
							alt="Jackson Main"
						/>
					</div>
					<div className="">
						<h2 className="font-bold text-2xl text-center md:text-left mt-4">Jackson Main</h2>
						<h3 className="text-center text-black/65 font-semibold text-lg mt-1 md:text-left">
							Coach
						</h3>
						<p className="mt-8 text-black/60">
							Jackson is a Fitness Coach who has a lifetime of experience in athletics, having
							played a variety of sports from an early age into adulthood. He specializes in
							strength and conditioning, with a focus on HIIT-style training. Jackson loves to
							get active with his clients and will often lead by example. Get ready to break a
							sweat and engage in some serious competition when training with him.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
