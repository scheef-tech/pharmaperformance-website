import { redirect, type RequestHandler } from '@sveltejs/kit';
import * as m from '$msgs';
import { inboxTable } from '$lib/db/inbox.schema';
import { getDatabaseService } from '$lib/services/DatabaseService';
import { getEmailService } from '$lib/services/EmailService';
import { superValidate, actionResult, message, fail } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { contactUsSchema } from './contact-us';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (e) => {
	throw redirect(302, '/kontakt');
};

export const actions: Actions = {
	default: async (e) => {
		const form = await superValidate(e, zod(contactUsSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const db = await getDatabaseService(e);
		const email = await getEmailService(e);

		try {
			const [data] = await db
				.insert(inboxTable)
				.values({
					name: form.data.name,
					email: form.data.email,
					message: form.data.message,
					createdAt: new Date()
				})
				.returning();

			await email.sendEmail({
				to: 'terapije.medella@gmail.com',
				subject: `Medella - Novi kontakt #${data.id}`,
				html: `<p>Ime:<br/>${form.data.name}</p><p>Email:<br/>${form.data.email}</p><p>Sporočilo:<br/>${form.data.message}</p>`
			});
		} catch (error) {
			console.error(error);
			return message(form, m.odd_pretty_grizzly_evoke(), {
				status: 500
			});
		}

		return message(form, m.spicy_candid_chipmunk_animate());
	}
};
