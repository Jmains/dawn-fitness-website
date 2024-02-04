"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { Input } from "../input";
import { Button } from "../button";
import { Textarea } from "../textarea";

const formSchema = z.object({
	firstName: z.string().min(1, { message: "Please enter your first name." }).max(50),
	lastName: z.string().optional(),
	email: z.string().email().min(1).max(50),
	phoneNumber: z.string().optional(),
	goals: z.string().optional(),
});

export function ContactForm({ className = "" }: { className?: string }) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Form {...form}>
			<form className={className} onSubmit={form.handleSubmit(onSubmit)}>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-0 text-black">
					<FormField
						name="firstName"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									First Name <span className="text-red-500">*</span>
								</FormLabel>
								<FormControl>
									<Input type="text" id="firstName" className="" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="lastName"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<Input type="text" id="lastName" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="email"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Email <span className="text-red-500">*</span>
								</FormLabel>
								<FormControl>
									<Input type="email" id="email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="phoneNumber"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone Number</FormLabel>
								<FormControl>
									<Input type="tel" id="phoneNumber" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="goals"
						control={form.control}
						render={({ field }) => (
							<FormItem className="md:col-span-2">
								<FormLabel>Tell me about your goals</FormLabel>
								<FormControl>
									<Textarea id="goals" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button type="submit" className="mt-10">
					Submit
				</Button>
			</form>
		</Form>
	);
}
