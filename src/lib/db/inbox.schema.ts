import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

export const inboxTable = sqliteTable('inbox', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull(),
	message: text('message').notNull(),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull()
});

export const insertInboxSchema = createInsertSchema(inboxTable, {
	name: z.string().min(1),
	email: z.string().email(),
	message: z.string().min(1)
});
