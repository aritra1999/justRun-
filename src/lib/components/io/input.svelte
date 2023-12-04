<script lang="ts">
	import Editor from '../editor/editor.svelte';
	// import Textarea from '../ui/textarea/textarea.svelte';
	// export let input: string;
	export let input: string;
</script>

<div class="w-full h-full">
	<Editor language="text" bind:content={input} editable={true} />
</div>
