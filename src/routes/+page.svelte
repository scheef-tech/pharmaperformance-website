<script lang="ts">
	import { Button } from '$lib/ui/components/ui/button';
	import { Image } from '@terrxo/unpic-svelte';
	import { thumbhashToCssBackground } from '$lib/thumbhash_utils';
	import type { PageData } from './$types';
	import * as m from '$msgs';
	import ContactUs from './api/forms/contact-us/contact-us.svelte';
	import { languageTag } from '$lib/paraglide/runtime';
	import { afterNavigate } from '$app/navigation';
	import { generateServices, generateTeam } from './content';

	export let data: PageData;

	let { services, team } = data;

	// Add reactive debugging
	$: if (services) {
		console.log('Services updated:', services);
	}

	$: if (team) {
		console.log('Team updated:', team);
	}

	afterNavigate(() => {
		console.log('Language changed to:', languageTag());
		services = generateServices();
		team = generateTeam();
	});
</script>

<section class="relative w-full lg:py-24">
	<div class="absolute inset-0 -z-10 bg-black/40"></div>
	<Image
		class="absolute inset-0 -z-20 h-full"
		style="object-position: 50% 85%"
		layout="fullWidth"
		objectFit="cover"
		src="https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-e9imBaxctQI8JNZ0o0Yu0"
		background={thumbhashToCssBackground(`nhgKDYKKuWaPt4d0NneXe2dQ6gTX`)}
		alt="Image Alt"
		priority
	/>

	<div class="mx-auto max-w-6xl px-8 py-16">
		<h1 class="text-center text-3xl font-semibold text-white sm:text-5xl lg:text-6xl">
			{m.icy_ago_hornet_dash()}
		</h1>
		<Button
			href={m.fancy_inclusive_osprey_arise()}
			class="mx-auto mt-16 block w-fit"
			variant="default"
		>
			{m.blue_deft_tapir_spark()}
		</Button>
	</div>
</section>
<section class="mx-auto mt-2 max-w-4xl px-8 py-8 text-center">
	<span class="text-3xl font-semibold sm:text-4xl">
		<span class="block text-5xl sm:text-6xl">{m.jolly_tiny_martin_hint()}</span>
		{m.dark_late_flea_tickle()}
	</span>
	<br />
	<br />

	<span class="text-lg sm:text-xl lg:text-2xl">
		{m.zesty_spare_jannes_advise()}
	</span>
</section>
<section id="services" class="bg-muted px-8 py-12">
	<div class="mx-auto max-w-7xl">
		<h2 class="text-center text-3xl font-semibold sm:text-4xl">{m.stock_zippy_gibbon_devour()}</h2>
		<div class="mt-8 grid grid-cols-1 gap-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
			{#each services as service, index}
				<div class="flex flex-col gap-3">
					<Image
						class="w-full"
						aspectRatio={4 / 3}
						src={service.image.src}
						alt={service.image.alt}
						layout="fullWidth"
						objectFit="cover"
						loading={index < 3 ? 'eager' : 'lazy'}
						fetchpriority={index < 3 ? 'high' : 'low'}
					/>
					<div>
						<h3 class="text-xl font-semibold sm:text-2xl">{service.title}</h3>
						<Button
							href="{m.real_drab_haddock_rush()}{service.link}#svc"
							class="mt-2 text-base sm:text-lg">Preberi več</Button
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
<section class="px-8 py-12">
	<div class="mx-auto max-w-7xl">
		<h2 class="text-center text-3xl font-semibold sm:text-4xl">{m.lime_short_okapi_lead()}</h2>
		<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each team as member}
				<div class="flex flex-col gap-3">
					<Image
						class="w-full object-top"
						aspectRatio={4 / 5}
						src={member.image.src}
						alt={member.image.alt}
						layout="fullWidth"
						objectFit="cover"
					/>
					<div>
						<h3 class="text-xl font-semibold sm:text-2xl">{member.name}</h3>
						<p class="text-sm text-muted-foreground sm:text-base">{member.role}</p>
					</div>
					<p class="text-sm sm:text-base">{member.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<div class="mx-auto">
	<ContactUs data={data.contactUsForm} />
</div>
