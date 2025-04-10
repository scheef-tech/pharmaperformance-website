import { heroItems } from "$lib";
import type { HeroItemProps } from "$lib/components/HeroItem.svelte";
import { fail, superValidate, message } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { Actions, PageServerLoad } from "./$types";
import { contactSchema } from "./contactForm/contactSchema";
import { SlackService } from "$lib/services/SlackService";
import { env } from "$env/dynamic/private";
import { m } from "$lib/paraglide/messages";

export const load: PageServerLoad = async (e) => {
    const heroItemCarouselProps: HeroItemProps[] = heroItems()

    const contactForm = await superValidate(zod(contactSchema))

    return {
        heroItemCarousel: heroItemCarouselProps,
        contactForm,
        rootText: m.neat_drab_mink_strive()
    }
};

export const actions: Actions = {
    default: async (event) => {
      const form = await superValidate(event, zod(contactSchema));
      if (!form.valid) {
        return fail(400, {
          form,
        });
      }

      const slackSvc = new SlackService(env.SLACK_WEBHOOK_URL)

      const { data } = form
    
      
      try {
          slackSvc.sendMessage(`
            *New Contact Form Submission*
            *Name:* ${data.firstName} ${data.lastName}
            ${data.companyName ? `*Company:* ${data.companyName}` : ''}
            *Email:* ${data.email}
            ${data.phoneNumber ? `*Phone:* ${data.phoneNumber}` : ''}
            *Message:*
            ${data.message}
            `)
            
        }

        catch (e)
        {
          return message(form, 'We are experiencing technical difficulties. Our team is working on it. Please try again later.', {
            status: 400
                  }
                    );
        }
    

      return {
        form,
      };
    },
  };