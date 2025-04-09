import { getContactUsForm } from '../api/forms/contact-us/contact-us';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (e) => {
	return {
		contactUsForm: await getContactUsForm(e)
	};
};
