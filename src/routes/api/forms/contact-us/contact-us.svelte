<script lang="ts">
	import {
		MapPin,
		Mail,
		Phone,
		LoaderCircle,
		AlertCircle,
		CheckCircle2,
		Instagram,
		InstagramIcon,
		Facebook
	} from 'lucide-svelte';
	import * as Alert from '$lib/ui/components/ui/alert';
	import * as Form from '$lib/ui/components/ui/form';
	import { Input } from '$lib/ui/components/ui/input';
	import { Textarea } from '$lib/ui/components/ui/textarea';
	import * as m from '$msgs';

	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { page } from '$app/stores';
	import { contactUsSchema, type ContactUsSchema } from './contact-us';
	import { Image } from '@terrxo/unpic-svelte';
	import { thumbhashToCssBackground } from '$lib/thumbhash_utils';
	import { cn } from '$lib/ui/utils';

	export let data: SuperValidated<Infer<ContactUsSchema>>;
	export let action: string = '/api/forms/contact-us';
	export let loading: 'eager' | 'lazy' = 'lazy';

	const form = superForm(data, {
		validators: zodClient(contactUsSchema)
	});

	const { form: formData, enhance, delayed, submitting, message } = form;
</script>

<section class="container mx-auto max-w-6xl px-8 py-12">
	<div
		class="mt-8 flex min-w-[300px] flex-col items-center justify-between md:mt-12 md:flex-row md:gap-12"
	>
		<!-- Contact Info Card -->
		<div
			class="flex min-w-[330px] flex-col justify-center gap-6 rounded-lg bg-secondary px-8 py-6 md:w-1/3"
		>
			<Image
				layout="fullWidth"
				aspectRatio={4 / 5}
				class={cn('w-full rounded-md')}
				src="https://hub.scheef.tech/cdn-cgi/imagedelivery/coO5-ODUTOt3Xy0qRkHGhQ/m-AyoSQrQnfIW3HGStomlgc"
				breakpoints={[200, 300, 400, 600]}
				alt="Image Alt"
				{loading}
				background={thumbhashToCssBackground(`3fcFBQDPkzdpKGkXiGdWl+rd/8Xn`)}
			/>
			<a
				href="https://maps.app.goo.gl/fATprWyx7SgoGWKc6"
				class="contact-item"
				target="_blank"
				rel="noopener noreferrer"
			>
				<MapPin size={26} class="icon" />
				<span class="text-sm md:text-base">Plintovec 28E,<br />2201 Zgornja Kungota</span>
			</a>
			<a class="contact-item" href="mailto:terapije.medella@gmail.com">
				<Mail class="icon" />
				<span class="text-sm md:text-base">terapije.medella@gmail.com</span>
			</a>
			<a class="contact-item" href="tel:+386 51 232 830">
				<Phone class="icon" />
				<span class="text-sm md:text-base">+38651232830</span>
			</a>
			<div class="flex flex-col gap-2">
				<h2 class="font-semibold">{m.careful_silly_nuthatch_flip()}</h2>
				<div class="flex gap-4">
					<a href="https://www.instagram.com/medella.si/" class={cn('rounded-full bg-primary p-2')}>
						<Instagram size={24} color="white" />
					</a>
					<a
						href="https://www.facebook.com/people/Medella-mesto-dobrega-po%C4%8Dutja/61570050674492"
						class={cn('rounded-full bg-primary p-2')}
					>
						<Facebook size={24} color="white" />
					</a>
				</div>
			</div>
		</div>

		<!-- Contact Form -->

		<form class="mt-4 w-full md:mt-0 md:w-2/3" {action} method="POST" use:enhance>
			<h2 class="mb-4 text-left text-3xl font-semibold md:text-4xl">
				{m.plain_long_cockroach_grasp()}
			</h2>
			{#if $message}
				<Alert.Root variant={$page.status >= 400 ? 'destructive' : 'default'} class="mb-4">
					{#if $page.status >= 400}
						<AlertCircle class="h-4 w-4" />
						<Alert.Title>{m.noble_tough_ibex_aspire()}</Alert.Title>
					{:else}
						<CheckCircle2 class="h-4 w-4" />
						<Alert.Title>{m.large_aqua_blackbird_roar()}</Alert.Title>
					{/if}
					<Alert.Description>{$message}</Alert.Description>
				</Alert.Root>
			{/if}
			<div class="space-y-4">
				<Form.Field {form} name="name">
					<Form.Control let:attrs>
						<Form.Label class="text-sm md:text-base">{m.top_smart_marmot_amuse()}</Form.Label>
						<Input {...attrs} class="mt-1.5" bind:value={$formData.name} />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="email">
					<Form.Control let:attrs>
						<Form.Label class="text-sm md:text-base">{m.left_sunny_chicken_hurl()}</Form.Label>
						<Input {...attrs} class="mt-1.5" bind:value={$formData.email} />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="message">
					<Form.Control let:attrs>
						<Form.Label class="text-sm md:text-base">{m.weary_noble_dove_adore()}</Form.Label>
						<Textarea {...attrs} class="mt-1.5 min-h-[120px]" bind:value={$formData.message} />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Button disabled={$submitting} class="w-full md:w-auto">
					{#if $delayed}
						<LoaderCircle class="size-4 animate-spin" />
						<span class="ml-2">{m.arable_ago_bumblebee_pause()}.</span>
					{:else}
						{m.dark_soft_felix_gasp()}
					{/if}
				</Form.Button>
			</div>
		</form>
	</div>
</section>

<style lang="postcss">
	.contact-item {
		@apply flex items-center gap-4 rounded-md p-2 transition-colors hover:bg-primary/5 hover:text-primary active:scale-[0.98] active:bg-primary/10;
	}

	.icon {
		@apply size-4 rounded-full bg-primary p-1 transition-colors;
	}

	.contact-item:hover .icon {
		@apply bg-primary/80;
	}
</style>
