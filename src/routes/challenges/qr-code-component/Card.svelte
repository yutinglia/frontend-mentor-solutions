<script lang="ts">
	type Props = {
		img: string;
		header: string;
		content: string;
	};

	let { img, header, content }: Props = $props();
</script>

<div
	class="font-[Outfit] m-auto flex flex-col shadow-md p-3 rounded-[20px] w-[320px] h-[497px] bg-[color:hsl(0,0%,100%)]"
>
	<img class="rounded-[15px]" src={img} alt="qr code" />
	<p class="font-bold p-3 leading-7 text-center text-[22px] text-[color:hsl(218,44%,22%)]">
		{header}
	</p>
	<p class="p-4 pt-0 leading-5 text-center text-[15px] text-[color:hsl(220,15%,55%)]">
		{content}
	</p>
</div>
