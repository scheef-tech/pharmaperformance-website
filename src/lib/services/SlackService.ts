export class SlackService {
	private webhookUrl: string;

	constructor(webhookUrl: string) {
		this.webhookUrl = webhookUrl;
	}

	async sendMessage(message: string) {
		
			const response = await fetch(this.webhookUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ text: message })
			});

			if (!response.ok) {
				throw new Error(`Failed to send Slack message: ${response.statusText} ${this.webhookUrl}`);
			}
		
	}
}

