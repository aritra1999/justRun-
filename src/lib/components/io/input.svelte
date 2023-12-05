<script lang="ts">
	import Editor from '$lib/components/editor/editor.svelte';
	export let input: string;
</script>

<div class="w-full h-full">
	<Editor language="text" bind:content={input} editable={true} />
</div>
