import { EmailMessage } from 'cloudflare:email';
import { createMimeMessage } from 'mimetext';


export class EmailService {
	private seb: SendEmail;
	private sender: string

	constructor(seb: SendEmail, sender: string) {
		this.seb = seb;
		this.sender = sender
	}

	async sendEmail(to: string, subject: string, html: string) {
		try {
			const msg = createMimeMessage();
			msg.setSender({ addr: this.sender });
			msg.setRecipient(to);
			msg.setSubject(subject);
			msg.addMessage({
				contentType: 'text/html',
				data: html
			});

			const message = new EmailMessage(
				this.sender,
				to,
				msg.asRaw()
			);

			await this.seb.send(message);
			// Log successful email

			return { success: true };
		} catch (error) {
			console.error('Failed to send email:', error);
			

			throw error;
		}
	}
}

