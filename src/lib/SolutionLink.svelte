<script lang="ts">
	type Props = {
		challenge: string;
	};

	const { challenge }: Props = $props();
</script>

<a
	class="inline-block bg-slate-200 rounded-lg p-5 font-bold hover:bg-slate-300 hover:-translate-y-1 transition-all"
	href={`/challenges/${challenge}`}
>
	{challenge.toUpperCase()}
</a>
