<script lang="ts" module>
	export type HeroItemProps = {
		leftImage: string;
		rightImage: string;
		htmlText: string;
	};
</script>

<script lang="ts">
	import { Image } from '@unpic/svelte';
	import type { ComponentProps } from 'svelte';

	type Props = HeroItemProps;

	let { leftImage, rightImage, htmlText }: Props = $props();

	const imageProps: ComponentProps<Image> = {
		layout: 'constrained',
		height: 400,
		aspectRatio: 6 / 4,
		breakpoints: [320, 640, 960, 1200],
		format: 'avif',
		alt: '',
		fit: 'cover',
		class: 'w-full'
	};
</script>

<div class="flex w-full max-w-[1200px] flex-col">
	<div class="flex w-full flex-row">
		<div class="w-1/2">
			<Image src={leftImage} {...imageProps} />
		</div>
		<div class="w-1/2">
			<Image src={rightImage} {...imageProps} />
		</div>
	</div>
	<div class="flex w-full bg-gray-500 px-6 py-4 lg:px-22 lg:py-12">
		<div
			class="text-foreground font-regular text-xl tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
		>
			{@html htmlText}
		</div>
	</div>
</div>
