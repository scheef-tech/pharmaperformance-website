<script lang="ts">
	import '../app.css';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import { ModeWatcher } from 'mode-watcher';
	import Header from './Header.svelte';
	import type { LayoutData } from './$types';
	import type { Snippet } from 'svelte';
	import Footer from './Footer.svelte';
	import { m } from '$lib/paraglide/messages';

	type Props = { children: Snippet; data: LayoutData };

	let { children, data }: Props = $props();
</script>

<svelte:head>
	<title>{m.mild_same_falcon_wave()}</title>
	<meta name="description" content={m.moving_loud_vole_lend()} />
	<meta name="keywords" content={m.wild_tiny_koala_twist()} />
	<meta property="og:title" content={m.proud_aware_wasp_emerge()} />
	<meta property="og:description" content={m.strong_salty_whale_engage()} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.pharmaperformance.de/" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={m.stock_clear_wasp_empower()} />
	<meta name="twitter:description" content={m.drab_yummy_loris_adapt()} />
</svelte:head>

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

	<Footer currentLocale={data.header.locale.current} />
</div>
