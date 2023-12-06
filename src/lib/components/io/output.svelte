<script lang="ts">
	import { outputStore } from '$lib/store/store';
	import Editor from '$lib/components/editor/editor.svelte';

	let content: string;
	outputStore.subscribe((output) => {
		content = output;
	});
</script>

<div class="w-full h-full">
	<Editor language="text" bind:content editable={false} fileName="output.txt" />
</div>
