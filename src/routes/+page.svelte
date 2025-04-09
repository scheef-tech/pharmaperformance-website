<script lang="ts">
	import HeroItem from '$lib/components/HeroItem.svelte';
	import { m } from '$lib/paraglide/messages';
	import type { PageData, PageProps } from './$types';

	const { data }: PageProps = $props();
</script>


<HeroItem {...data.heroItemCarousel[0]} />

{m.grassy_seemly_hound_gasp()}
