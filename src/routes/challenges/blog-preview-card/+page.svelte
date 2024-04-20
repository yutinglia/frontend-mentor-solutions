<script lang="ts">
	import Card from './Card.svelte';
</script>

{#snippet header()}
	<h1>Test</h1>
{/snippet}

<main class="flex h-dvh bg-[color:hsl(47,88%,63%)]">
	<Card
		img="/blog-preview-card/illustration-article.svg"
		tag="Learning"
		date={new Date(2023, 11, 21)}
		title="HTML & CSS foundations"
		description="These languages are the backbone of every website, defining structure, content, and presentation."
		author="Greg Hooper"
		avatar="/blog-preview-card/image-avatar.webp"
	/>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&display=swap');
</style>
