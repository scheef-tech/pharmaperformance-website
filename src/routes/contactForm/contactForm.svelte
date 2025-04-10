<script lang="ts">
	import * as Form from '$lib/shadcn/components/ui/form/index.js';
	import { Input } from '$lib/shadcn/components/ui/input/index.js';
	import { Textarea } from '$lib/shadcn/components/ui/textarea/index.js';
	import { Check } from '@lucide/svelte';
	import { contactSchema, type ContactSchema } from './contactSchema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { tick } from 'svelte';
	import { slide } from 'svelte/transition';
	import { Button } from '$lib/shadcn/components/ui/button';

	let { data }: { data: { form: SuperValidated<Infer<ContactSchema>> } } = $props();

	let errorMessage: string | undefined = $state(undefined);
	let successScreen: boolean = $state(false);

	const form = superForm(data.form, {
		validators: zodClient(contactSchema),
		onUpdate({ form }) {
			if (form.valid) {
				successScreen = true;
				return;
			}
			if (form.message) errorMessage = form.message;
		},

		onSubmit() {
			errorMessage = undefined;
			successScreen = false;
		}
	});

	const { form: formData, enhance } = form;
</script>

<div class="mx-auto max-w-xl">
	{#if successScreen}
		<div
			transition:slide
			class="flex h-full w-full flex-col items-center justify-start space-y-10 self-stretch pt-10"
		>
			<div class="flex items-center justify-center gap-5 self-stretch">
				<div class="aspect-square p-4">
					<Check class="text-primary h-8 w-8" />
				</div>
				<div class="">Thank you for contacting us. We'll get back to you shortly.</div>
			</div>
			<Button
				
				onclick={() => {
					successScreen = false;
				}}
			>
				Close
			</Button>
		</div>
	{:else}
		<form method="POST" use:enhance>
			<div class="flex flex-row gap-4">
				<Form.Field {form} name="firstName" class="flex-1">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>First Name</Form.Label>
							<Input {...props} bind:value={$formData.firstName} />
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="lastName" class="flex-1">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Last Name</Form.Label>
							<Input {...props} bind:value={$formData.lastName} />
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
			</div>

			<Form.Field {form} name="companyName">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Company Name (Optional)</Form.Label>
						<Input {...props} bind:value={$formData.companyName} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="email">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Email</Form.Label>
						<Input {...props} type="email" bind:value={$formData.email} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="phoneNumber">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Phone Number (Optional)</Form.Label>
						<Input {...props} type="tel" bind:value={$formData.phoneNumber} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="message">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Message</Form.Label>
						<Textarea {...props} bind:value={$formData.message} rows="4" />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<div class="mt-6">
				<Form.Button>Submit</Form.Button>
			</div>
			{#if errorMessage}
				<div class="text-destructive mt-2">{errorMessage}</div>
			{/if}
		</form>
	{/if}
</div>
