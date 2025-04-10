<script lang="ts" module>
	export type HeroItemProps = {
		leftImage: string;
		rightImage: string;
		htmlText: string;
		priority?: boolean;
	};
</script>

<script lang="ts">
	import { Image } from '@unpic/svelte';
	import type { ComponentProps } from 'svelte';

	type Props = HeroItemProps;

	let { leftImage, rightImage, htmlText, priority = undefined }: Props = $props();

	const imageProps: ComponentProps<Image> = {
		layout: 'constrained',
		height: 400,
		aspectRatio: 6 / 4,
		breakpoints: [320, 640, 960, 1200],
		format: 'avif',
		alt: '',
		fit: 'cover',
		priority,
		sizes: '(min-width: 1200px) 600px, (min-width: 960px) 480px, (min-width: 640px) 320px, 160px',
		class: 'w-full'
	};
</script>

<div class="flex w-full max-w-[1200px] flex-col">
	<div class="flex w-full flex-row">
		<div class="w-1/2">
			<Image
				src={leftImage}
				{...imageProps}
				alt="{htmlText.replace(/<[^>]*>/g, '')} | Left Image"
			/>
		</div>
		<div class="w-1/2">
			<Image
				src={rightImage}
				{...imageProps}
				alt="{htmlText.replace(/<[^>]*>/g, '')} | Right Image"
			/>
		</div>
	</div>
	<div
		class="flex min-h-[88px] w-full bg-[#201d1e] px-6 py-4 md:min-h-[108px] lg:min-h-[192px] lg:px-22 lg:py-12 xl:min-h-[215px]"
	>
		<div
			class="text-foreground text-xl font-extralight tracking-[2px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
		>
			{@html htmlText.replace('<strong>', '<strong class="font-bold">')}
		</div>
	</div>
</div>
