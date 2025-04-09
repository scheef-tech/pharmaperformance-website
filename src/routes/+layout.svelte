<script>
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import { afterNavigate } from '$app/navigation';

	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<svelte:head>
	<title>Medella</title>
</svelte:head>

<ParaglideJS {i18n}>
	<div class="flex h-dvh flex-col">
		<Header />
		<div class="flex flex-1 flex-col overflow-y-auto">
			<main class="flex-1">
				<slot />
			</main>
			<Footer />
		</div>
	</div>
</ParaglideJS>
