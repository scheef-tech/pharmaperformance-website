import type { PageServerLoad } from './$types';
import { getContactUsForm } from './api/forms/contact-us/contact-us';
import { generateServices, generateTeam } from './content';

export const load: PageServerLoad = async (e) => {
	return {
		contactUsForm: await getContactUsForm(e),
		services: generateServices(),
		team: generateTeam()
	};
};
