<script lang="ts">
	import { getStaticPath } from '$lib/path';
	import { format } from 'date-fns';

	type Props = {
		img: string;
		tag: string;
		date: Date;
		title: string;
		description: string;
		author: string;
		avatar: string;
	};

	let { ...props }: Props = $props();
</script>

<div
	class="group/card font-[Figtree] border border-black m-auto flex flex-col justify-between shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,1)] p-[18px] rounded-[20px] w-[327px] h-[501px] bg-[color:hsl(0,0%,100%)] hover:-translate-x-[0.25rem] hover:-translate-y-[0.25rem] hover:shadow-[0.75rem_0.75rem_0px_0px_rgba(0,0,0,1)] hover:cursor-pointer transition"
>
	<div>
		<img class="rounded-[10px]" src={getStaticPath(props.img)} alt="Blog Preview" />
	</div>
	<div class="flex flex-col">
		<div class="mb-3">
			<span class="bg-[color:hsl(47,88%,63%)] text-[14px] px-1.5 py-1 font-bold rounded-sm">
				{props.tag}
			</span>
		</div>
		<p class="text-[color:hsl(0,0%,7%)] text-[12px] mb-3">
			Published {format(props.date, 'dd MMM yyyy')}
		</p>
		<h2
			class="text-[color:hsl(0,0%,7%)] font-bold text-[20px] font-[Figtree] mb-3 group-hover/card:text-[color:hsl(47,88%,63%)] transition"
		>
			{props.title}
		</h2>
		<p class="text-[color:hsl(0,0%,50%)] text-[14px]">{props.description}</p>
	</div>
	<div>
		<div class="flex items-center mb-2">
			<img
				src={getStaticPath(props.avatar)}
				alt="Author Avatar"
				class="w-[30px] h-[30px] rounded-full"
			/>
			<div class="flex flex-col ml-2">
				<span class="text-[color:hsl(0,0%,10%)] text-[14px] font-bold">{props.author}</span>
			</div>
		</div>
	</div>
</div>
