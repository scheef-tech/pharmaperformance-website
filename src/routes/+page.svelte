<script lang="ts">
	import HeroItem from '$lib/components/HeroItem.svelte';
	import HeroItemCarousel from '$lib/components/HeroItemCarousel.svelte';
	import { m } from '$lib/paraglide/messages';
	import type { PageProps } from './$types';
	import ContactForm from './contactForm/contactForm.svelte';

	const { data }: PageProps = $props();
</script>

<div class="flex w-full justify-center">
	<HeroItemCarousel items={data.heroItemCarousel} />
</div>

<ContactForm data={{ form: data.contactForm }} />

<!-- {m.grassy_seemly_hound_gasp()} -->
