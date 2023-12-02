<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Select from '$lib/components/ui/select';

	import Settings from '$lib/components/settings/settings.svelte';
	import { GanttChart } from 'lucide-svelte';
	import Run from '$lib/components/run/run.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="fixed top-6 right-6 z-50 flex space-x-3">
	<Run />
	<Settings />

	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			<Button variant="secondary" class="p-3">
				<GanttChart class="w-5 h-5" />
			</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			<DropdownMenu.Group>Hello World</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>
