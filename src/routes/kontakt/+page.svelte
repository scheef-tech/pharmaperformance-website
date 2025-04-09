<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import ContactUs from '../api/forms/contact-us/contact-us.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ContactUs data={data.contactUsForm} loading="eager" />
