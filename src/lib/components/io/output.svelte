<script lang="ts">
	import { outputStore } from '$lib/store/store';
	import Editor from '../editor/editor.svelte';

	let content: string;
	outputStore.subscribe((output) => {
		content = output;
	});
</script>

<div class="w-full h-full">
	<Editor language="text" bind:content editable={false} />
	<!-- <Textarea class="text-foreground h-full bg-zinc-900 io" {value} readonly /> -->
</div>
