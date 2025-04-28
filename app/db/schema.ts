import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const emails = pgTable("emails", {
	id: serial("id").primaryKey(),
	email: varchar("email", { length: 256 }),
	createdAt: timestamp("createdAt").defaultNow().notNull(),
	updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export type Email = typeof emails.$inferSelect;
