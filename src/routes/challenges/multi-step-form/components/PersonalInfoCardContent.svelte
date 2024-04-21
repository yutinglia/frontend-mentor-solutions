<script lang="ts">
	import type { Data } from '../+page.svelte';

	type Props = {
		data: Data;
	};

	let { data }: Props = $props();
</script>

<div class="p-4">
	<p class="font-bold text-[1.5rem]">Personal info</p>
	<p class="text-[1.2rem] text-[color:hsl(231,11%,63%)] my-2">
		Please provide your name, email address, and phone number.
	</p>
	<div class="flex flex-col space-y-4">
		<input
			type="text"
			placeholder="Name"
			class="p-2 border border-[color:hsl(206,94%,87%)] rounded-lg"
		/>
		<input
			type="email"
			placeholder="Email"
			class="p-2 border border-[color:hsl(206,94%,87%)] rounded-lg"
		/>
		<input
			type="tel"
			placeholder="Phone"
			class="p-2 border border-[color:hsl(206,94%,87%)] rounded-lg"
		/>
	</div>
</div>
