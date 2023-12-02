<script lang="ts">
	import Editor from '$lib/components/editor/editor.svelte';
	export let data;
	let content = data.content;
</script>

<div class="h-screen w-screen flex">
	<div class="h-screen w-1/2 p-3 pr-0">
		{#if data.content}
			<Editor bind:content />
		{:else}
			Loading
		{/if}
	</div>
	<div class="h-screen w-1/2 flex flex-col p-3">
		<div class=" h-1/2 pb-3">
			<div class="bg-blue-100 w-full h-full rounded-lg">Input</div>
		</div>
		<div class="h-1/2">
			<div class="bg-blue-100 w-full h-full rounded-lg">Output</div>
		</div>
	</div>
</div>
