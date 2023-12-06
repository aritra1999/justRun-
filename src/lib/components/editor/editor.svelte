<script lang="ts">
	import loader from '@monaco-editor/loader';
	import { onDestroy, onMount } from 'svelte';
	import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';
	import { defaultEditorConfig, editorStore } from '$lib/store/store';

	export let fileName: string;
	export let content: string;
	export let language: string;
	export let editable: boolean;

	let editor: Monaco.editor.IStandaloneCodeEditor;
	let monaco: typeof Monaco;
	let editorContainer: HTMLElement;
	let options = { ...defaultEditorConfig, readonly: !editable };

	function updateEditorContentOnOutputChange(content: string) {
		if (!editable) editor?.setValue(content);
	}

	$: updateEditorContentOnOutputChange(content);

	editorStore.subscribe((config) => {
		editor?.updateOptions(config);
	});

	onMount(async () => {
		const monacoEditor = await import('monaco-editor');
		loader.config({ monaco: monacoEditor.default });

		monaco = await loader.init();

		editor = monaco.editor.create(editorContainer, options);
		const model = monaco.editor.createModel(content, language);

		editor.setModel(model);
		editor.getModel()?.onDidChangeContent((event) => {
			content = editor.getModel()?.getValue() || content;
		});
	});

	onDestroy(() => {
		monaco?.editor.getModels().forEach((model) => model.dispose());
		editor?.dispose();
	});
</script>

<div class="flex flex-col h-full w-full bg-background rounded-lg p-2">
	<div class="w-fit px-4 py-1.5 bg-secondary rounded-t-md editor text-sm">
		{fileName ?? 'untitled*'}
	</div>
	<div class="h-full w-full rounded-lg editor bg-background" bind:this={editorContainer} />
</div>

<style>
	.editor {
		font-family: 'JetBrains Mono', monospace !important;
	}
</style>
