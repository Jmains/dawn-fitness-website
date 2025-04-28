import "@/drizzle/envConfig";
import { Config, defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "postgresql",
	schema: "./app/db/schema.ts",
	out: "./drizzle/migrations",
	dbCredentials: {
		url: process.env.POSTGRES_URL!,
	},
	verbose: true,
	strict: true,
}) satisfies Config;
