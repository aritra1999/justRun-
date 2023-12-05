<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { codeStore, metaStore, outputStore } from '$lib/store/store';
	import { Loader, Play } from 'lucide-svelte';

	export const runCode = async () => {
		$metaStore.runningCode = true;
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
				$metaStore.runningCode = false;
			});

		outputStore.set(outputObject.message);
	};
</script>

<Button on:click={runCode} class="flex items-center" variant="secondary">
	Run
	{#if $metaStore.runningCode}
		<Loader class="h-4 w-4 ml-3 animate-spin" />
	{:else}
		<Play class="h-4 w-4 ml-3" />
	{/if}
</Button>
