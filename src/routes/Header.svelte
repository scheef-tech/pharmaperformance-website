<script lang="ts">
	import { afterNavigate, invalidateAll } from '$app/navigation';
	import HamburgerMenu from '$lib/ui/icons/HamburgerMenu.svelte';
	import * as Collapsible from '$lib/ui/components/ui/collapsible';
	import * as m from '$msgs';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { i18n } from '$lib/i18n';
	import { availableLanguageTags, languageTag, onSetLanguageTag } from '$lib/paraglide/runtime';
	import { Button } from '$lib/ui/components/ui/button';
	import { writable, readable } from 'svelte/store';
	import * as DropdownMenu from '$lib/ui/components/ui/dropdown-menu';
	import { ChevronDown } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { buttonVariants } from '$lib/ui/components/ui/button';
	import { Image } from '@terrxo/unpic-svelte';

	export function getSearchParams(searchParams: URLSearchParams): string {
		return searchParams.toString();
	}

	let menuOpen = false;
	let dropdownOpen = false;

	afterNavigate(() => {
		menuOpen = false;
	});

	export let navigation: {
		href: string;
		label: string;
	}[] = [
		{
			label: m.top_upper_moth_cook(),
			href: '/'
		},
		{
			label: m.next_honest_shark_dash(),
			href: '/#services'
		},
		{
			label: m.zippy_long_liger_embrace(),
			href: '/kontakt'
		}
	];

	$: currentPathWithoutLanguage = i18n.route($page.url.pathname);

	const currentLanguage = readable(languageTag(), (set) => {
		set(languageTag());
		return onSetLanguageTag((newTag) => {
			set(newTag);
			invalidateAll();
		});
	});

	$: console.log($currentLanguage);

	$: currentSearchParams = getSearchParams($page.url.searchParams);

	// Add a function to handle viewport changes
	function handleViewportChange(e: MediaQueryList | MediaQueryListEvent) {
		if (!e.matches) {
			// If switching to mobile
			dropdownOpen = false;
		}
	}

	// Set up the media query listener
	onMount(() => {
		const mediaQuery = window.matchMedia('(min-width: 768px)'); // md breakpoint
		handleViewportChange(mediaQuery); // Initial check
		mediaQuery.addEventListener('change', handleViewportChange);

		return () => mediaQuery.removeEventListener('change', handleViewportChange);
	});

	$: console.log($page.url.pathname);
</script>

<header class="sticky top-0 z-10 w-full">
	<div
		class="relative z-10 flex w-full items-center justify-between bg-background px-6 py-4 drop-shadow-md"
	>
		<a href="/" aria-label="scheef.tech">
			<div class="w-36">
				<Image layout="fullWidth" src="/medella-logo.webp" alt="Medella Logo" />
			</div>
		</a>

		<!-- Changed this div to use justify-center and flex-1 -->
		<div class="hidden flex-1 items-center justify-center md:flex">
			<div class="flex items-center gap-4">
				{#each navigation as { href, label }}
					<a
						{href}
						class={buttonVariants({
							variant: i18n.route($page.url.pathname) === href ? 'nav-active' : 'nav',
							size: 'nav',
							class: 'transition-colors'
						})}
					>
						{label}
					</a>
				{/each}
			</div>
		</div>

		<div class="w-30 hidden items-center md:flex">
			<DropdownMenu.Root bind:open={dropdownOpen}>
				<DropdownMenu.Trigger asChild let:builder>
					<Button variant="ghost" builders={[builder]} class="gap-2">
						{$currentLanguage.toUpperCase()}
						<ChevronDown class="h-4 w-4" />
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					{#each availableLanguageTags.filter((tag) => tag !== $currentLanguage) as locale}
						<DropdownMenu.Item>
							<a
								href={`${currentPathWithoutLanguage}?${currentSearchParams}`}
								hreflang={locale}
								class="w-full {$currentLanguage === locale ? 'font-bold' : ''}"
							>
								{locale.toUpperCase()}
							</a>
						</DropdownMenu.Item>
					{/each}
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>

		<!-- Mobile menu button -->
		<button
			class="p-4 focus:outline-none md:hidden"
			on:click={() => (menuOpen = !menuOpen)}
			aria-label={m.sound_awake_slug_roam()}
		>
			<HamburgerMenu open={menuOpen} />
		</button>
	</div>

	{#if menuOpen}
		<div
			role="presentation"
			transition:fade={{ duration: 200 }}
			class="fixed inset-0 bg-[#000000]/30"
			on:click={() => (menuOpen = false)}
			aria-label={m.clean_flaky_spider_pride()}
		></div>
	{/if}

	<Collapsible.Root bind:open={menuOpen}>
		<Collapsible.Content class="absolute w-full bg-background">
			<div class="flex w-full flex-col items-center gap-4 pb-10 pt-4">
				{#each navigation as { href, label }}
					<a
						{href}
						class={buttonVariants({
							variant: i18n.route($page.url.pathname) === href ? 'nav-active' : 'nav',
							class: 'w-auto justify-center'
						})}
					>
						{label}
					</a>
				{/each}
			</div>
			<div class="flex w-full justify-center gap-4 bg-[--primary]">
				{#each availableLanguageTags as locale}
					<Button
						variant="link"
						href={`${currentPathWithoutLanguage}?${currentSearchParams}`}
						hreflang={locale}
						style="color: {$currentLanguage === locale ? '' : 'text-[hsv(var(--primary))]'}"
					>
						{locale.toUpperCase()}
					</Button>
				{/each}
			</div>
		</Collapsible.Content>
	</Collapsible.Root>
</header>
