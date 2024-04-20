<script lang="ts">
	import { base } from '$app/paths';
	import { cn } from '$lib/className';

	type Props = {
		class?: string;
		challenge: string;
	};

	const { challenge, class: className }: Props = $props();
</script>

<a
	class={cn(
		'inline-block bg-slate-200 rounded-lg p-5 font-bold hover:bg-slate-300 hover:-translate-y-1 transition-all',
		className
	)}
	href={`${base}/challenges/${challenge}`}
>
	{challenge.toUpperCase()}
</a>
