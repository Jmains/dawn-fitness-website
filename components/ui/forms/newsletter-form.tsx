"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { Input } from "../input";
import { Button } from "../button";
import { useState } from "react";
import { useToast } from "../use-toast";

const formSchema = z.object({
	email: z.string().email().min(1).max(50),
	recaptchaResponse: z.string().optional(),
});

export function NewsletterForm({ className = "" }: { className?: string }) {
	const { toast } = useToast();
	const [isSending, setIsSending] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			recaptchaResponse: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		window.grecaptcha.ready(() => {
			window.grecaptcha
				.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY, { action: "submit" })
				.then(async (token: string) => {
					/* send data to the server */

					values.recaptchaResponse = token;
					setIsSending(true);
					try {
						const res = await fetch("api/newsletter", {
							method: "POST",
							body: JSON.stringify(values),
						});

						const data = await res.json();

						if (data.status == 200) {
							form.reset();
							toast({
								title: "Success! ✅",
								description: "Thank you for joining our newsletter!",
							});
						} else {
							toast({
								title: "Failure",
								description: "Something went wrong. Please try again.",
							});
						}
					} catch (error) {
						toast({
							title: "Failure",
							description: "Something went wrong. Please try again.",
						});
						console.log("Something went wrong: ", error);
					}
					setIsSending(false);
					/* End of the sending data */
				})
				.catch((error: any) => {
					console.log({ message: error?.message });
				});
		});
	}

	return (
		<Form {...form}>
			<form className={className} onSubmit={form.handleSubmit(onSubmit)}>
				<div className=" text-white font-normal">
					<FormField
						name="email"
						control={form.control}
						render={({ field }) => (
							<FormItem className="">
								<FormLabel className="text-white">Your Email</FormLabel>
								<FormControl>
									<Input
										type="email"
										id="email"
										placeholder="newsletter@dawn.fitness"
										className="mt-2 bg-black border-zinc-400 placeholder:text-white/70"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button
					type="submit"
					className="mt-10 text-center w-32 lg:w-full bg-white text-black hover:bg-white/60"
					disabled={isSending}
				>
					{!isSending ? "Join Now" : "Joining..."}
				</Button>
			</form>
		</Form>
	);
}
