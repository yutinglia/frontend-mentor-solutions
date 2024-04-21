<script lang="ts">
	import type { Data } from '../+page.svelte';
	import PersonalInfoCardContent from './PersonalInfoCardContent.svelte';

	type Props = {
		data: Data;
	};

	let { data }: Props = $props();
</script>

<div class="w-dvw p-4">
	<div class="bg-white rounded-lg">
		<PersonalInfoCardContent {data} />
	</div>
</div>
