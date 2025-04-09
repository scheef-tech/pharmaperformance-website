<script lang="ts">
	import HeroItem from '$lib/components/HeroItem.svelte';
	import HeroItemCarousel from '$lib/components/HeroItemCarousel.svelte';
	import { m } from '$lib/paraglide/messages';
	import type { PageData, PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<div class="flex w-full justify-center">
	<HeroItemCarousel items={data.heroItemCarousel} />
</div>

{m.grassy_seemly_hound_gasp()}
