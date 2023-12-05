<script lang="ts">
	import loader from '@monaco-editor/loader';
	import { onDestroy, onMount } from 'svelte';
	import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';
	import { defaultEditorConfig, editorStore } from '$lib/store/store';

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

<div class="h-full w-full rounded-lg editor bg-background" bind:this={editorContainer} />

<style>
	.editor {
		font-family: 'JetBrains Mono', monospace !important;
	}
</style>
