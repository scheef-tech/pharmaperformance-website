import type { RequestEvent } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

export const contactUsSchema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	message: z.string().min(1)
});

export type ContactUsSchema = typeof contactUsSchema;

export const getContactUsForm = async (e: RequestEvent) => {
	const form = await superValidate(e, zod(contactUsSchema));
	return form;
};
