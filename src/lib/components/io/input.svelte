<script lang="ts">
	import Editor from '../editor/editor.svelte';
	import Textarea from '../ui/textarea/textarea.svelte';
	export let input: string;
</script>

<div class="w-full h-full">
	<Textarea class="text-foreground h-full bg-zinc-900 io" bind:value={input} />
</div>
