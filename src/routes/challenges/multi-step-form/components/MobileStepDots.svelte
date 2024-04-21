<script lang="ts">
	import { cn } from '$lib/className';
	import type { Data } from '../+page.svelte';

	type Props = {
		data: Data;
	};

	let { data }: Props = $props();

	let stepNumbers = $derived(data.steps.map((d) => d.number));
</script>

{#snippet dot(number, active)}
	<div
		class={cn(
			'border border-white rounded-full mx-2 aspect-square h-10 leading-10 text-white font-bold text-center',
			{
				'border border-[color:hsl(206, 94%, 87%)] rounded-full mx-2 aspect-square h-10 leading-10 text-black font-bold text-center bg-[color:hsl(206,94%,87%)]':
					active
			}
		)}
	>
		{number}
	</div>
{/snippet}

<div class="flex justify-center md:hidden py-10">
	{#each stepNumbers as number (number)}
		{@render dot(number, number === data.currentStep)}
	{/each}
</div>
