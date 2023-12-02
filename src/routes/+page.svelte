<script lang="ts">
	import Editor from '$lib/components/editor/editor.svelte';
	import Output from '$lib/components/io/output.svelte';
	import Input from '$lib/components/io/input.svelte';
	import Settings from '$lib/components/settings/settings.svelte';
	import Menu from '$lib/components/menu/menu.svelte';
	export let data;
	let content = data.content;
	let language = 'cpp';
</script>

<Menu />

<div class="h-screen w-screen flex">
	<div class="h-screen w-1/2 p-3 pr-0 bg-background">
		{#if data.content}
			<Editor bind:content bind:language editable={true} />
		{:else}
			Loading
		{/if}
	</div>
	<div class="h-screen w-1/2 flex flex-col p-3">
		<div class=" h-1/2 pb-3">
			<Input />
		</div>
		<div class="h-1/2">
			<Output />
		</div>
	</div>
</div>
