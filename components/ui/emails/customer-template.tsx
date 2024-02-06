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

interface CustomerEmailProps {
	firstName: string;
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "localhost:3000";

export const CustomerEmail = ({ firstName }: CustomerEmailProps) => (
	<Html>
		<Head />
		<Preview>Thank you for your interest in Dawn Fitness.</Preview>
		<Body style={main}>
			<Container style={container}>
				<Img
					src="https://www.dawn.fitness/DAWN_logo.png"
					width="170"
					height="50"
					alt="Dawn Fitness Logo"
					style={logo}
				/>
				<Text style={paragraph}>Hi {firstName},</Text>
				<Text style={paragraph}>
					Thank you for your interest in Dawn Fitness! One of our expert coaches will reach out to
					you within the next 48 hours.
				</Text>
				{/* <Section style={btnContainer}>
					<Button style={button} href="https://getkoala.com">
						Get started
					</Button>
				</Section> */}
				<Text style={paragraph}>
					Best,
					<br />
					Dawn Fitness Team
				</Text>
				<Hr style={hr} />
				{/* <Text style={footer}>470 Noor Ave STE B #1148, South San Francisco, CA 94080</Text> */}
			</Container>
		</Body>
	</Html>
);

CustomerEmail.PreviewProps = {
	firstName: "",
} as CustomerEmailProps;

export default CustomerEmail;

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

const btnContainer = {
	textAlign: "center" as const,
};

const button = {
	backgroundColor: "#5F51E8",
	borderRadius: "3px",
	color: "#fff",
	fontSize: "16px",
	textDecoration: "none",
	textAlign: "center" as const,
	display: "block",
	padding: "12px",
};

const hr = {
	borderColor: "#cccccc",
	margin: "20px 0",
};

const footer = {
	color: "#8898aa",
	fontSize: "12px",
};
