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

<div class="flex w-full justify-center my-8">
	<HeroItemCarousel items={data.heroItemCarousel} />
</div>

<div class="flex w-full justify-center my-8">
	<a
		href="https://outlook.office.com/bookwithme/user/266acf8acc04433dbf52ef08d9de1e0b@pharmaperformance.de?anonymous&ep=plink"
		target="_blank"
		rel="noopener noreferrer"
		class="rounded-md bg-white px-6 py-3 text-lg font-semibold text-black shadow-md transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:border hover:border-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
	>
	{m.known_proud_reindeer_pout()}
	</a>
</div>

<div
	class="text-foreground mx-auto max-w-4xl px-6 text-base font-extralight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
>
	{@html m.neat_drab_mink_strive().replace('<strong>', '<strong class="font-bold">')}
</div>

<ContactForm data={{ form: data.contactForm }} />