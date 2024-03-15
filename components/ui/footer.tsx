import { Instagram } from "./icons/instagram";

export function Footer() {
	return (
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
						<a href="https://www.tiktok.com/@dawn.fit" target="_blank" rel="noopener noreferrer">
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
							<Instagram />
						</a>
						<a href="https://twitter.com/dawnfitlife" target="_blank" rel="noopener noreferrer">
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
	);
}
