import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

export const notifyEmailsTable = sqliteTable('notify_emails', {
	id: integer('id').primaryKey(),
	email: text('email').notNull(),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull()
});

export const insertNotifyEmailSchema = createInsertSchema(notifyEmailsTable, {
	email: z.string().email('Vnesite veljaven e-poštni naslov')
});
