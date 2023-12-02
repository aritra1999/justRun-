<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Loader, Play } from 'lucide-svelte';

	let loading = false;
	let language = 'cpp';
	let code = 'dummy code';
	let input = 'dummy input';

	export const runCode = async () => {
		loading = true;
		await fetch('/api/run', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ language, code, input })
		})
			.then((res) => res.json())
			.catch((err) => console.log(err))
			.finally(() => (loading = false));
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
