import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const emailLogsTable = sqliteTable('email_log', {
	id: text('id').notNull().primaryKey(),
	to: text('to').notNull(),
	subject: text('subject').notNull(),
	sentAt: text('sent_at').notNull(),
	html: text('html').notNull(),
	failureReason: text('failure_reason').notNull()
});
