<script lang="ts">
	import HeroItemCarousel from '$lib/components/HeroItemCarousel.svelte';
	import { m } from '$lib/paraglide/messages';
	import type { PageProps } from './$types';
	import ContactForm from './contactForm/contactForm.svelte';

	const { data }: PageProps = $props();
</script>

<div class="w-full text-center">PHARMA PERFORMANCE Coming soon</div>

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
