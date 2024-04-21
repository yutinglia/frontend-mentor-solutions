<script context="module" lang="ts">
	type Step = {
		number: number;
		title: string;
	};

	type Plan = {
		name: string;
		monthlyPrice: number;
		yearlyPrice: number;
	};

	type AddOn = Plan & {
		description: string;
	};

	type UserInput = {
		name: string;
		email: string;
		phone: string;
		plan: Plan;
		addOns: AddOn[];
	};

	export type Data = {
		steps: Step[];
		currentStep: number;
		userInput?: UserInput;
	};
</script>

<script lang="ts">
	import Card from './components/Card.svelte';
	import MobileFooter from './components/MobileFooter.svelte';
	import MobileStepDots from './components/MobileStepDots.svelte';

	let data: Data = $state({
		steps: [
			{ number: 1, title: 'Personal Info' },
			{ number: 2, title: 'Plan' },
			{ number: 3, title: 'Add-ons' },
			{ number: 4, title: 'Payment' }
		],
		currentStep: 1
	});
</script>

<div
	class="h-dvh flex flex-col justify-between bg-[url('/multi-step-form/bg-sidebar-mobile.svg')] bg-no-repeat bg-contain bg-[color:hsl(217,100%,97%)] md:bg-none"
>
	<MobileStepDots {data} />
	<Card {data} />
	<MobileFooter bind:data />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
</style>
