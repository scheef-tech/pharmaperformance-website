// file initialized by the Paraglide-SvelteKit CLI - Feel free to edit it
import { createI18n } from '@inlang/paraglide-sveltekit';
import * as runtime from '$lib/paraglide/runtime.js';
import * as m from '$lib/paraglide/messages';
import { generateServices } from '../routes/content';

// Create a simple slug matcher
function matchSlug(param: string): boolean {
	const services = generateServices();
	// Get all possible localized slugs by executing the message functions
	const allSlugs = services.map(service => {
		const linkFn = m[service.link.slice(1) as keyof typeof m];
		return linkFn();
	});
	return allSlugs.includes(param);
}

export const i18n = createI18n(runtime, {
	pathnames: {
		'/kontakt': m.fancy_inclusive_osprey_arise,
		'/storitve/[slug]': {
			en: '/services/[slug]',
			de: '/dienstleistungen/[slug]',
			sl: '/storitve/[slug]'
		}
	},
	matchers: { slug: matchSlug }
});
