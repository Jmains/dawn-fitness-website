import BusinessEmail from "@/components/ui/emails/business-template";
import CustomerEmail from "@/components/ui/emails/customer-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const res = (await request.json()) as {
			firstName: string;
			lastName?: string;
			email: string;
			phoneNumber?: string;
			goals?: string;
		};

		const sendCustomerEmail = await resend.emails.send({
			from: "Dawn Fitness Team<brandonnayebi@dawn.fitness>",
			to: [res.email],
			subject: `Dawn Fitness Confirmation`,
			react: CustomerEmail({ firstName: res.firstName }),
		});

		const sendBusinessEmail = await resend.emails.send({
			from: "Dawn Fitness Team<brandonnayebi@dawn.fitness>",
			to: [res.email],
			subject: `New Potential Client: ${res.firstName}`,
			react: BusinessEmail(res),
		});

		if (sendCustomerEmail.error || sendBusinessEmail.error) {
			throw "error";
		}

		return NextResponse.json({ message: "success" });
	} catch (error) {
		return NextResponse.json({ error });
	}
}
