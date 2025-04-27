<script lang="ts">
	import HeroItemCarousel from '$lib/components/HeroItemCarousel.svelte';
	import { m } from '$lib/paraglide/messages';
	import type { PageProps } from './$types';
	import ContactForm from './contactForm/contactForm.svelte';

	const { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{m.stout_clean_pig_embrace()}</title>
	<meta name="description" content={m.extra_pink_niklas_forgive()} />
	<meta name="keywords" content={m.trick_sour_deer_rise()} />
	<meta property="og:title" content={m.actual_glad_swan_quiz()} />
	<meta property="og:description" content={m.loose_antsy_orangutan_dash()} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.pharmaperformance.de/" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={m.plane_tired_gazelle_climb()} />
	<meta name="twitter:description" content={m.sharp_sound_pony_fry()} />
</svelte:head>

<div class="mb-3 w-full text-center text-xl font-normal">
	<strong> PHARMA PERFORMANCE coming soon! </strong>
</div>

<div class="flex w-full justify-center">
	<HeroItemCarousel items={data.heroItemCarousel} />
</div>

<div
	class="text-foreground mx-auto max-w-4xl px-6 text-base font-extralight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
>
	{@html m.neat_drab_mink_strive().replace('<strong>', '<strong class="font-bold">')}
</div>

<ContactForm data={{ form: data.contactForm }} />

<!-- {m.grassy_seemly_hound_gasp()} -->
