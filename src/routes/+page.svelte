<script lang="ts">
	import Editor from '$lib/components/editor/editor.svelte';
	import Output from '$lib/components/io/output.svelte';
	import Input from '$lib/components/io/input.svelte';
	import Menu from '$lib/components/menu/menu.svelte';
	import { codeStore } from '$lib/store/store.js';

	export let data;
	let code = data.content;
	let language = 'cpp';
	let input = '';

	$: (code, language, input),
		codeStore.set({
			code,
			language,
			input
		});
</script>

<Menu />
<div class="h-screen w-screen flex">
	<div class="h-screen w-1/2 p-2 pr-0">
		<Editor bind:content={code} bind:language editable={true} fileName="code.cpp" />
	</div>
	<div class="h-screen w-1/2 flex flex-col p-2">
		<div class=" h-1/2 pb-2">
			<Input bind:input />
		</div>
		<div class="h-1/2">
			<Output />
		</div>
	</div>
</div>
