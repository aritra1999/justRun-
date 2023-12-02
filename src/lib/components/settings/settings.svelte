<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Select from '$lib/components/ui/select';
	import Theme from '$lib/components/theme/theme.svelte';

	import { Settings } from 'lucide-svelte';

	const settings = {
		theme: {
			'vs-light': {
				name: 'VS Code Light',
				selected: true
			},
			'vs-dark': {
				name: 'VS Code Dark',
				selected: false
			}
		},
		language: {
			cpp: {
				name: 'C++',
				disabled: false,
				selected: true
			},
			js: {
				name: 'JS',
				disabled: true,
				selected: false
			},
			go: {
				name: 'Go',
				disabled: true,
				selected: false
			},
			python: {
				name: 'Python',
				disabled: true,
				selected: false
			},
			java: {
				name: 'Java',
				disabled: true,
				selected: false
			}
		}
	};
</script>

<div class="fixed top-6 right-6 z-50">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			<button on:click|preventDefault class="p-3 bg-muted rounded-md">
				<Settings class="h-5 w-5" />
			</button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			<DropdownMenu.Group>
				<div class="mb-3">
					<Select.Root>
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
					<Select.Root>
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
				<DropdownMenu.Separator />

				<Theme />
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>
