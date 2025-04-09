import { error, redirect } from "@sveltejs/kit";
import { generateServices } from "../../content";
import type { PageServerLoad } from "./$types";
import { getContactUsForm } from "../../api/forms/contact-us/contact-us";
import * as m from '$lib/paraglide/messages';
import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';
import { i18n } from '$lib/i18n';

export const load: PageServerLoad = async (e) => {
    const currentSlug = e.params.slug;
    const services = generateServices();
    
    const service = services.find(service => {
        return availableLanguageTags.some(lang => {
            const localizedLink = m[service.linkId as keyof typeof m]({}, {
                languageTag: lang
            });
            return localizedLink.replace('/', '') === currentSlug;
        });
    });

    if (!service) throw error(404);
    
    // Get the properly translated slug for the current language
    const properSlug = m[service.linkId as keyof typeof m]({}, {
        languageTag: languageTag()
    }).replace('/', '');

    // Get the proper route based on current language
    let baseRoute = `${m.real_drab_haddock_rush()}/${properSlug}`
    if (languageTag() !== 'sl')
        baseRoute = `/${languageTag()}${baseRoute}`



    // Redirect to the proper slug if it doesn't match the current slug
    if (properSlug !== currentSlug) {
        throw redirect(307, `${baseRoute.replace('[slug]', properSlug)}`);
    }

    return {
        contactUsForm: await getContactUsForm(e),
        service
    };
};