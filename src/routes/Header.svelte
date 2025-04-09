<script lang="ts" module>
	export type HeaderProps = {
		locale: {
			current: Locale;
			available: readonly Locale[];
		};
	};
</script>

<script lang="ts">
	import * as Select from '$lib/shadcn/components/ui/select/index.js';
	import { setLocale, type Locale } from '$lib/paraglide/runtime.js';
	import { invalidateAll } from '$app/navigation';

	type Props = HeaderProps;

	let { locale }: Props = $props();

	const changeLocale = (newLocale: Locale) => {
		setLocale(newLocale);
		invalidateAll();
	};
</script>

<div class="flex w-full justify-between px-4 py-2">
	<span></span>
	<span> LOGO </span>
	<Select.Root
		type="single"
		name="locale"
		value={locale.current}
		onValueChange={(newLocale) => {
			if (newLocale === locale.current) return;

			changeLocale(newLocale as Locale);
		}}
	>
		<Select.Trigger class="w-fit">
			{locale.current.toUpperCase()}
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				{#each locale.available as lang}
					{@const upperCaseLang = lang.toUpperCase()}
					<Select.Item value={lang} label={upperCaseLang}>{upperCaseLang}</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>

<!-- <Button onclick={toggleMode} variant="outline" size="icon">
	<Sun
		class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
	/>
	<Moon
		class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
	/>
	<span class="sr-only">Toggle theme</span>
</Button> -->
