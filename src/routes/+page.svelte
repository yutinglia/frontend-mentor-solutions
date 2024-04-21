<script lang="ts">
	import SolutionLink from '$lib/components/SolutionLink.svelte';

	const challenges = ['qr-code-component', 'blog-preview-card', 'multi-step-form'];
</script>

<div class="bg-slate-400 h-dvh flex">
	<div class="m-auto flex flex-col">
		{#each challenges as challenge (challenge)}
			<SolutionLink class="my-1" {challenge} />
		{/each}
	</div>
</div>
