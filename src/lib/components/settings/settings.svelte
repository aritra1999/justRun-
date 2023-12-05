<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Select from '$lib/components/ui/select';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { editorStore, metaStore } from '$lib/store/store';

	import { Minus, Plus, Settings } from 'lucide-svelte';

	const settings = {
		theme: {
			'vs-light': {
				name: 'VS Code Light'
			},
			'vs-dark': {
				name: 'VS Code Dark'
			}
		},
		language: {
			cpp: {
				name: 'C++',
				disabled: false
			},
			js: {
				name: 'JS',
				disabled: true
			},
			go: {
				name: 'Go',
				disabled: true
			},
			python: {
				name: 'Python',
				disabled: true
			},
			java: {
				name: 'Java',
				disabled: true
			}
		}
	};
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<Button variant="secondary" class="p-2.5">
			<Settings class="h-5 w-5" />
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<div class="mb-3">
				<Select.Root
					selected={$metaStore.theme}
					onSelectedChange={({ value }) => {
						$editorStore.theme = value;
					}}
				>
					<Select.Trigger>
						<Select.Value placeholder="Theme" />
					</Select.Trigger>
					<Select.Content>
						{#each Object.entries(settings.theme) as [key, value]}
							<Select.Item value={key}>{value.name}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>
			<div class="mb-3">
				<Select.Root selected={$metaStore.laguage}>
					<Select.Trigger>
						<Select.Value placeholder="Language" />
					</Select.Trigger>
					<Select.Content>
						{#each Object.entries(settings.language) as [key, value]}
							<Select.Item value={key} disabled={value.disabled}>
								{value.name}
								{#if value.disabled}
									<span class="ml-3 tag">Coming soon</span>
								{/if}
							</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>
			<div class="flex items-center justify-between">
				<div>Font Size:</div>
				<div class="flex space-x-3">
					<Button variant="secondary" class="p-2.5" on:click={() => $editorStore.fontSize--}>
						<Minus class="h-4 w-4" />
					</Button>
					<Input class="w-20" bind:value={$editorStore.fontSize} disabled />
					<Button variant="secondary" class="p-2.5" on:click={() => $editorStore.fontSize++}>
						<Plus class="h-4 w-4" />
					</Button>
				</div>
			</div>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
