<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	const progress = tweened(0, { duration: 300, easing: cubicInOut });

	export let open = false;

	$: progress.set(open ? 1 : 0);
</script>

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		d="M{4 + 16 * $progress} {6 + 6 * $progress}L{20 - 16 * $progress} {6 + 6 * $progress}"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
	/>
	<path
		d="M4 12H20"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		opacity={1 - $progress}
	/>
	<path
		d="M{4 + 16 * $progress} {18 - 6 * $progress}L{20 - 16 * $progress} {18 - 6 * $progress}"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
	/>
</svg>
