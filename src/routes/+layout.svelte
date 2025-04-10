<script lang="ts">
	import '../app.css';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import { ModeWatcher } from 'mode-watcher';
	import Header from './Header.svelte';
	import type { LayoutData } from './$types';
	import type { Snippet } from 'svelte';
	import Footer from './Footer.svelte';

	type Props = { children: Snippet; data: LayoutData };

	let { children, data }: Props = $props();
</script>

<ModeWatcher defaultMode="dark" />
<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
<div class="flex min-h-dvh flex-col">
	<Header {...data.header} />
	<main class="mt-8 flex-grow space-y-8 xl:mt-12 xl:space-y-12">
		{@render children()}
	</main>

	<Footer />
</div>
