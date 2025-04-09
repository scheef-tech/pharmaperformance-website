import * as m from '$lib/paraglide/messages';
import { writable } from 'svelte/store';
import { onSetLanguageTag } from '$lib/paraglide/runtime';

// Helper functions to generate content
export function generateServices() {
	return [
		{
			image: {
				src: 'https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-uZEViOy3SSTalRJKN5vgm',
				alt: m.warm_quick_beaver_jump()
			},
			secondaryImage: {
				src: 'https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-uZEViOy3SSTalRJKN5vgm',
				alt: m.warm_quick_beaver_jump()
			},
			title: m.warm_quick_beaver_jump(),
			linkId: 'even_hour_otter_hunt',
			link: m.even_hour_otter_hunt(),
			description: m.neat_early_wasp_float(),
			longText: m.lower_fancy_piranha_evoke()
		},
		{
			image: {
				src: 'https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-rYcNQj9mTyl93jidlvFOq',
				alt: m.wise_proud_shark_wave()
			},
			secondaryImage: {
				src: 'https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-rYcNQj9mTyl93jidlvFOq',
				alt: m.wise_proud_shark_wave()
			},
			title: m.wise_proud_shark_wave(),
			linkId: 'heroic_candid_starfish_jump',
			link: m.heroic_candid_starfish_jump(),
			description: m.busy_wild_eagle_soar(),
			longText: m.careful_mad_cat_pave()
		},
		{
			image: {
				src: 'https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-fpazAuXINMGNhQWK2qqTU',
				alt: m.calm_brave_deer_leap()
			},
			secondaryImage: {
				src: 'https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-fpazAuXINMGNhQWK2qqTU',
				alt: m.calm_brave_deer_leap()
			},
			title: m.calm_brave_deer_leap(),
			linkId: 'misty_teal_lemming_shine',
			link: m.misty_teal_lemming_shine(),
			description: m.soft_keen_owl_glide(),
			longText: m.long_antsy_mule_spur()
		},
		{
			image: {
				src: 'https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-XkMzs63UWL1gt4Jk1B6SL',
				alt: m.rare_kind_snake_crawl()
			},
			secondaryImage: {
				src: 'https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-XkMzs63UWL1gt4Jk1B6SL',
				alt: m.rare_kind_snake_crawl()
			},
			title: m.rare_kind_snake_crawl(),
			linkId: 'icy_slimy_larva_amuse',
			link: m.icy_slimy_larva_amuse(),
			description: m.pure_wise_moth_fly(),
			longText: m.heavy_round_owl_fear()
		},
		{
			image: {
				src: 'https://primary.jwwb.nl/unsplash/T5ozJtUX4uc.jpg',
				alt: m.bold_swift_hawk_dive()
			},
			secondaryImage: {
				src: 'https://primary.jwwb.nl/unsplash/T5ozJtUX4uc.jpg',
				alt: m.bold_swift_hawk_dive()
			},
			title: m.bold_swift_hawk_dive(),
			linkId: 'dark_least_bear_skip',
			link: m.dark_least_bear_skip(),
			description: m.fair_calm_duck_swim(),
			longText: m.trick_these_tapir_clap()
		},
		{
			image: {
				src: 'https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-G37en-fWJb3CnupswnzAG',
				alt: m.cool_fast_fish_dart()
			},
			secondaryImage: {
				src: 'https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-G37en-fWJb3CnupswnzAG',
				alt: m.cool_fast_fish_dart()
			},
			title: m.cool_fast_fish_dart(),
			linkId: 'left_patient_pug_grip',
			link: m.left_patient_pug_grip(),
			description: m.safe_mild_seal_rest(),
			longText: m.brave_tiny_frog_propel()
		},
		{
			image: {
				src: 'https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-IawkqzeiWUnUgCgXVcf0L',
				alt: m.keen_sure_wolf_hunt()
			},
			secondaryImage: {
				src: 'https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-IawkqzeiWUnUgCgXVcf0L',
				alt: m.keen_sure_wolf_hunt()
			},
			title: m.keen_sure_wolf_hunt(),
			linkId: 'that_patient_gull_play',
			link: m.that_patient_gull_play(),
			description: m.glad_firm_bear_walk(),
			longText: m.sharp_nimble_raven_trust()
		},
		{
			image: {
				src: 'https://primary.jwwb.nl/unsplash/Pdea8oxLHkU.jpg',
				alt: m.rich_deep_crow_call()
			},
			secondaryImage: {
				src: 'https://primary.jwwb.nl/unsplash/Pdea8oxLHkU.jpg',
				alt: m.rich_deep_crow_call()
			},
			title: m.rich_deep_crow_call(),
			linkId: 'even_weird_porpoise_dart',
			link: m.even_weird_porpoise_dart(),
			description: m.true_bold_fox_run(),
			longText: m.mellow_frail_rooster_twist()
		},
		{
			image: {
				src: 'https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-51CoWcNUcC_KaT8bA1U5P',
				alt: m.vast_fair_ant_march()
			},
			secondaryImage: {
				src: 'https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-51CoWcNUcC_KaT8bA1U5P',
				alt: m.vast_fair_ant_march()
			},
			title: m.vast_fair_ant_march(),
			linkId: 'kind_teal_stork_slurp',
			link: m.kind_teal_stork_slurp(),
			description: m.wise_pure_bee_buzz(),
			longText: m.every_slimy_chicken_persist()
		}
	];
}

export function generateTeam() {
	return [
		{
			image: {
				src: 'https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-bdsBYztEyQCuOEJqUmfhE',
				alt: 'Tadej Divjak'
			},
			name: 'Tadej Divjak',
			role: m.tall_brave_elk_stand(),
			description: m.safe_kind_dove_nest()
		},
		{
			image: {
				src: 'https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-kOfgtKGIFemK7Y0kvHKIN',
				alt: 'Anja Jevnišek'
			},
			name: 'Anja Jevnišek',
			role: m.calm_wise_owl_watch(),
			description: m.pure_soft_swan_float()
		},
		{
			image: {
				src: 'https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-twBlOcWN_6PwVQRWhHONX',
				alt: 'Suzana Divjak'
			},
			name: 'Suzana Divjak',
			role: m.bold_sure_hawk_soar(),
			description: m.warm_mild_deer_leap()
		}
	];
}
