<script lang="ts">
	import { Image } from '@terrxo/unpic-svelte';
	import ContactUs from '../../api/forms/contact-us/contact-us.svelte';
	import type { PageData } from './$types';
	import { afterNavigate, replaceState } from '$app/navigation';
	import * as m from '$msgs';

	export let data: PageData;
</script>

<section id="svc" class="container mx-auto flex max-w-6xl flex-col gap-8 px-8 py-12 md:flex-row">
	<div>
		<h1 class="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-5xl">
			{data.service.title}
		</h1>

		<p class="longText leading-7 [&:not(:first-child)]:mt-6">
			{@html data.service.longText}
		</p>
	</div>
	<Image
		class="w-full rounded-md md:max-w-[40%]"
		aspectRatio={4 / 3}
		src={data.service.secondaryImage.src}
		alt={data.service.secondaryImage.alt}
		layout="fullWidth"
		objectFit="cover"
		loading="eager"
		fetchpriority="high"
	/>
</section>

<ContactUs data={data.contactUsForm} />
