<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { codeStore, outputStore } from '$lib/store/store';
	import { Loader, Play } from 'lucide-svelte';

	let loading = false;

	export const runCode = async () => {
		loading = true;
		const outputObject = await fetch('/api/run', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				language: $codeStore.language,
				code: $codeStore.code,
				input: $codeStore.input
			})
		})
			.then((res) => res.json())
			.catch((err) => console.log(err))
			.finally(() => {
				console.log('done');
				loading = false;
			});

		outputStore.set(outputObject.message);
	};
</script>

<Button on:click={runCode} class="flex items-center text-lg" size="lg" variant="secondary">
	Run
	{#if loading}
		<Loader class="h-5 w-5 ml-3 animate-spin" />
	{:else}
		<Play class="h-5 w-5 ml-3" />
	{/if}
</Button>
