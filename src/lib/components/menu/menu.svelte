<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import Settings from '$lib/components/settings/settings.svelte';
	import Run from '$lib/components/run/run.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Theme from '$lib/components/theme/theme.svelte';

	import { GanttChart } from 'lucide-svelte';
</script>

<div class="fixed top-6 right-6 z-50 flex space-x-3">
	<Run />
	<Settings />
	<Theme />
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			<Button variant="secondary" class="p-2.5">
				<GanttChart class="w-5 h-5" />
			</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			<DropdownMenu.Group>About Me</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>
