import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import * as React from "react";

interface BusinessEmailProps {
	firstName: string;
	lastName?: string;
	email: string;
	phoneNumber?: string;
	goals?: string;
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

export const BusinessEmail = ({
	firstName,
	lastName = "N/A",
	email,
	phoneNumber = "N/A",
	goals = "N/A",
}: BusinessEmailProps) => (
	<Html>
		<Head />
		<Preview>Potential New Customer</Preview>
		<Body style={main}>
			<Container style={container}>
				<Img
					src={`${baseUrl}/DAWN_logo.png`}
					width="170"
					height="50"
					alt="Dawn Fitness Logo"
					style={logo}
				/>
				<Text style={paragraph}>LES GOOOO!!! A new client reached out to you.</Text>
				<Text style={paragraph}>First Name: {firstName}</Text>
				<Text style={paragraph}>Last Name: {lastName}</Text>
				<Text style={paragraph}>Email: {email}</Text>
				<Text style={paragraph}>Phone Number: {phoneNumber}</Text>
				<Text style={paragraph}>Goals: {goals}</Text>

				<Text style={paragraph}>Please get back to the customer asap.</Text>

				<Hr style={hr} />
				{/* <Text style={footer}>470 Noor Ave STE B #1148, South San Francisco, CA 94080</Text> */}
			</Container>
		</Body>
	</Html>
);

BusinessEmail.PreviewProps = {
	firstName: "",
} as BusinessEmailProps;

export default BusinessEmail;

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
};

const logo = {
	margin: "0 auto",
};

const paragraph = {
	fontSize: "16px",
	lineHeight: "26px",
};

const hr = {
	borderColor: "#cccccc",
	margin: "20px 0",
};
