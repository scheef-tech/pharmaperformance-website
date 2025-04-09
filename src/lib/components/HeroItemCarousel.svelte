<script lang="ts">
	import type { HeroItemProps } from './HeroItem.svelte';
	import * as Carousel from '$lib/shadcn/components/ui/carousel/index.js';
	import HeroItem from './HeroItem.svelte';
	import Autoplay from 'embla-carousel-autoplay';

	type Props = {
		items: HeroItemProps[];
	};

	const { items }: Props = $props();
</script>

<Carousel.Root
	class="w-full max-w-[1200px]"
	plugins={[
		Autoplay({
			delay: 4000
		})
	]}
>
	<Carousel.Content>
		{#each items as item}
			<Carousel.Item><HeroItem {...item} /></Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
