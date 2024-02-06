import BusinessEmail from "@/components/ui/emails/business-template";
import CustomerEmail from "@/components/ui/emails/customer-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRETKEY;

export async function POST(request: Request) {
	try {
		const res = (await request.json()) as {
			firstName: string;
			lastName?: string;
			email: string;
			phoneNumber?: string;
			goals?: string;
			recaptchaResponse?: string;
		};

		if (!res.recaptchaResponse) throw "robot detected";

		const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${res.recaptchaResponse}`;

		const recaptchaRes = await fetch(verifyUrl, { method: "POST" });
		const recaptchaJson = await recaptchaRes.json();

		if (recaptchaJson?.score < 0.5) throw "robot detected";

		if (!recaptchaJson.success) throw "robot detected: google recaptcha api down.";

		const sendCustomerEmail = await resend.emails.send({
			from: "Dawn Fitness Team<brandonnayebi@dawn.fitness>",
			to: [res.email],
			subject: `Dawn Fitness Confirmation`,
			react: CustomerEmail({ firstName: res.firstName }),
		});

		const sendBusinessEmail = await resend.emails.send({
			from: "Dawn Fitness Team<brandonnayebi@dawn.fitness>",
			to: ["brandonnayebi@dawn.fitness", "jacksonmain9@gmail.com"],
			subject: `New Potential Client: ${res.firstName}`,
			react: BusinessEmail(res),
		});

		if (sendCustomerEmail.error || sendBusinessEmail.error) throw "send email error";

		return NextResponse.json({ message: "success" });
	} catch (error) {
		return NextResponse.json({ error });
	}
}
