<script>
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<footer class="mt-8 flex w-full justify-center px-4 py-2 pb-6 xl:mt-12">
	<div class="flex max-w-lg justify-around gap-6 lg:gap-8">
		<a href={localizeHref('/impressum')}>{m.cute_sleek_cuckoo_slurp()}</a>
		<a href={localizeHref('/privacy-policy')}>{m.grand_whole_shrike_blend()}</a>
		<a href="https://www.linkedin.com/in/gaby-perfahl">{m.dull_level_shad_radiate()}</a>
	</div>
</footer>
