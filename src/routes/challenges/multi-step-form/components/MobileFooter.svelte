<script lang="ts">
	import { cn } from '$lib/className';
	import type { Data } from '../+page.svelte';

	type Props = {
		data: Data;
	};

	let { data = $bindable() }: Props = $props();
	let firstStep = $derived(data.steps[0].number);
	let lastStep = $derived(data.steps[data.steps.length - 1].number);

	let isFirstStep = $derived(data.currentStep === firstStep);
	let isLastStep = $derived(data.currentStep === lastStep);

	const goBack = () => {
		if (isFirstStep) return;
		data.currentStep -= 1;
	};

	const nextStep = () => {
		if (isLastStep) return;
		data.currentStep += 1;
	};
</script>

<div class="flex justify-between bg-[color:hsl(231,100%,99%)] p-4 md:hidden">
	<button
		class={cn('text-[color:hsl(231,11%,63%)] font-bold', { invisible: isFirstStep })}
		onclick={goBack}
	>
		Go Back
	</button>
	<button
		onclick={nextStep}
		class="bg-[color:hsl(213,96%,18%)] text-[color:hsl(217,100%,97%)] rounded-sm px-4 py-3 font-bold"
	>
		Next Step
	</button>
</div>
