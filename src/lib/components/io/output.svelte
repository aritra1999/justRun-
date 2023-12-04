<script lang="ts">
	import { Textarea } from '$lib/components/ui/textarea';
	import { outputStore } from '$lib/store/store';

	$: value = $outputStore;
	$: console.log(value);
</script>

<div class="w-full h-full">
	<Textarea class="text-foreground h-full bg-zinc-900 io" {value} readonly />
</div>
