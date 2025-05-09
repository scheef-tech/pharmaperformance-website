<script lang="ts">
	import { Image } from '@unpic/svelte';
	
	const certificateImages = [
		'https://imagedelivery.net/coO5-ODUTOt3Xy0qRkHGhQ/2ff42a61-eb63-4061-b15b-9d80da270a00',
		'https://imagedelivery.net/coO5-ODUTOt3Xy0qRkHGhQ/70a15892-b2fb-4779-d5e2-2f4cd8603400'
	];
</script>

<div class="flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto py-10">
	<h2 class="text-foreground text-2xl font-light mb-8 tracking-[1.5px]">Quality Certifications</h2>
	
	<div class="flex flex-col sm:flex-row items-center justify-center gap-8">
		{#each certificateImages as src, i}
			<div class="w-[120px] h-[120px] flex items-center justify-center">
				<Image 
					src={src} 
					alt="Quality Certificate" 
					class="max-w-full max-h-full object-contain transition-all duration-300 scale-90 hover:scale-100"
					width="120"
					height="120"
				/>
			</div>
		{/each}
	</div>
</div> 