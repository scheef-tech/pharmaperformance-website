import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import { getDatabaseService, type DatabaseService } from './DatabaseService';
import { emailLogsTable } from '$lib/db/emailLogs.schema';
import type { RequestEvent } from '@sveltejs/kit';

export class EmailService {
	private resend: Resend;
	private db: DatabaseService;

	constructor(db: DatabaseService) {
		try {
			this.resend = new Resend(env.RESEND_API_KEY);
		} catch (error) {
			console.error('Failed to initialize Resend:', error);
			throw error;
		}
		this.db = db;
	}

	async sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
		try {
			const result = await this.resend.emails.send({
				from: 'Medella Nabiralnik <noreply@scheef.tech>',
				to,
				subject,
				html
			});

			// Log successful email
			await this.logEmail(to, subject, html);

			return result;
		} catch (error) {
			console.error('Failed to send email:', error);
			// Log failed email
			await this.logEmail(to, subject, html, error);
			throw error;
		}
	}

	private async logEmail(to: string, subject: string, html: string, error?: unknown) {
		try {
			await this.db.insert(emailLogsTable).values({
				id: crypto.randomUUID(),
				to,
				subject,
				sentAt: new Date().toISOString(),
				html,
				failureReason: error ? String(error) : ''
			});
		} catch (logError) {
			console.error('Failed to log email:', logError);
			// Note: We're not throwing the error here to avoid disrupting the email sending process
		}
	}
}

export const getEmailService = async (e: D1Database | RequestEvent): Promise<EmailService> => {
	if ('platform' in e) {
		if (e.locals.email) return e.locals.email;

		const db = await getDatabaseService(e);
		const emailService = new EmailService(db);
		e.locals.email = emailService;
		return emailService;
	}

	return new EmailService(await getDatabaseService(e));
};
