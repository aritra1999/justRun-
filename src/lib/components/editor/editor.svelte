<script lang="ts">
	import loader from '@monaco-editor/loader';
	import { onDestroy, onMount } from 'svelte';
	import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';

	export let content: string;
	export let language: string;
	export let editable: boolean;

	let editor: Monaco.editor.IStandaloneCodeEditor;
	let monaco: typeof Monaco;
	let editorContainer: HTMLElement;
	let options = {
		fontSize: 15,
		fontFamily: 'JetBrains Mono',
		fontLigatures: true,
		theme: 'vs-dark',
		readOnly: !editable,
		automaticLayout: true,
		minimap: { enabled: false }
	};

	onMount(async () => {
		const monacoEditor = await import('monaco-editor');
		loader.config({ monaco: monacoEditor.default });

		monaco = await loader.init();

		const editor = monaco.editor.create(editorContainer, options);
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
