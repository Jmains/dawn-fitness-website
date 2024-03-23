import { TeamCard } from "@/components/ui/teamCard";
import { bebasFont } from "@/fonts";
import clsx from "clsx";

const teammates = [
	{
		name: "Brandon Nayebi",
		position: "Head Coach",
		imgSrc: "/brandon.jpg",
		instaUrl: "https://www.instagram.com/bbno_fit/",
		description:
			"Brandon is a Fitness Coach who has been training for over a decade. He has lost 120 lbs. himself and has used that experience to help over a hundred clients lose/gain weight, build muscle, get stronger, and develop healthy habits that result in lifelong transformations. Brandon's passion for changing lives is what led him to found Dawn Fitness with the ambition to help impact as many lives as possible!",
		priority: true,
	},
	{
		name: "Jackson Main",
		position: "Coach",
		imgSrc: "/jackson.jpg",
		instaUrl: "https://www.instagram.com/jermain_18/",
		description:
			"Jackson is a Fitness Coach who has a lifetime of experience in athletics, having played a variety of sports from an early age into adulthood. He specializes in strength and conditioning, with a focus on HIIT-style training. Jackson loves to get active with his clients and will often lead by example. Get ready to break a sweat and engage in some serious competition when training with him.",
		priority: false,
	},
	{
		name: "Alonso Carranza",
		position: "Dawn Athlete",
		imgSrc: "/alonso.jpg",
		instaUrl: "https://www.instagram.com/zostetic/",
		description:
			"Alonso has been training for 5 years now, all self-taught before joining team Dawn. Growing up he would always tell his mom about his aspirations to be like “the buff guys on T.V.” so when he turned 17 and could join a gym he went in and got to work. Seeing progress in himself and others is what he says motivates him the most. Being able to inspire change by being a role-model has helped him be successful in his fitness journey.",
		priority: false,
	},
	{
		name: "Trevor Albert",
		position: "Dawn Athlete",
		imgSrc: "/chevy.jpeg",
		instaUrl: "https://www.instagram.com/tja.fit/",
		description:
			"Trevor has had a long history with fitness, having practiced many different types of training from bodybuilding and crossfit to olympic lifting and even long-distance running. Currently, he has been gravitating towards strength and conditioning. He is currently pursuing his CSCS so that he can work with other athletes and help take them to the next level.",
		priority: false,
	},
	{
		name: "Dayton Ames",
		position: "Dawn Athlete",
		imgSrc: "/dayton.jpg",
		instaUrl: "https://www.instagram.com/amesdayton/",
		description:
			"Dayton has been involved in competitive sports since childhood, exposing him to a diverse range of workout programs. Currently, Dayton aspires to become a professional Mixed Martial Artist, competing in the Fury Fighting Championships promotion. His gym regimen extends beyond combat sports, emphasizing injury rehabilitation, improving functional movements, and developing explosive power and cardio.",
		priority: false,
	},
];

export default function MeetTheTeam() {
	return (
		<div className="pt-20 px-4">
			<div className="mt-10 md:mt-12 max-w-4xl mx-auto">
				<h3 className={clsx("text-center font-bold text-4xl md:text-6xl", bebasFont.className)}>
					Meet The Team
				</h3>
				<hr className="h-[0.1rem] bg-neutral-300 mt-6 md:mt-12" />
				<h4 className="font-bold text-neutral-800 text-3xl text-center md:text-left tracking-tight md:text-5xl mt-12 lg:mt-20">
					Coaches
				</h4>
				<p className="mt-6 text-xl text-black/70">
					Our Coaches boast years of experience in both online and virtual training. Having
					successfully guided numerous clients towards achieving their goals, they lead by example,
					embodying the principles they teach. Explore more about them below!
				</p>
				<TeamCard {...teammates[0]} />
				<div className="flex items-center justify-center md:justify-start my-16">
					<hr className="h-[0.05rem] bg-neutral-300 w-44 md:w-72" />
				</div>
				<TeamCard {...teammates[1]} />
				<hr className="h-[0.1rem] bg-neutral-300 mt-24" />
				<h4 className="font-bold text-neutral-800 text-3xl tracking-tight md:text-5xl mt-14 lg:mt-20 text-center md:text-left">
					Athletes
				</h4>
				<p className="mt-6 text-xl text-black/70">
					Meet our sponsored Dawn Athletes who have embraced the lessons we teach at Dawn Fitness
					and translated them into their own journeys. Explore their stories to gain insights and
					inspiration!
				</p>
				<TeamCard {...teammates[2]} />
				<div className="flex items-center justify-center md:justify-start my-16">
					<hr className="h-[0.05rem] bg-neutral-300 w-44 md:w-72" />
				</div>
				<TeamCard {...teammates[3]} />
				<div className="flex items-center justify-center md:justify-start my-16">
					<hr className="h-[0.05rem] bg-neutral-300 w-44 md:w-72" />
				</div>
				<TeamCard {...teammates[4]} />
			</div>
		</div>
	);
}
