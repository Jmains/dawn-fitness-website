import { db } from "@/app/db";
import { emails } from "@/app/db/schema";
import { NextResponse } from "next/server";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRETKEY;

export async function POST(request: Request) {
	try {
		const res = (await request.json()) as {
			email: string;
			recaptchaResponse?: string;
		};

		if (!res.recaptchaResponse) throw "robot detected";

		const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${res.recaptchaResponse}`;

		const recaptchaRes = await fetch(verifyUrl, { method: "POST" });
		const recaptchaJson = await recaptchaRes.json();

		if (recaptchaJson?.score < 0.5)
			return NextResponse.json({ error: "Internal Server Error", status: 500 });

		if (!recaptchaJson.success) return NextResponse.json({ error: "Internal Server Error", status: 500 });

		await db.insert(emails).values({ email: res.email });

		return NextResponse.json({ message: "success", status: 200 });
	} catch (error) {
		return NextResponse.json({ error });
	}
}
