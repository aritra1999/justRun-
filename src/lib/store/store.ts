import { writable } from 'svelte/store';

export const editorStore = writable({
	fontSize: 14,
	fontFamily: 'JetBrains Mono',
	fontLigatures: true,
	roundedSelection: true,
	scrollBeyondLastLine: false,
	theme: 'vs-light',
	automaticLayout: true,
	minimap: { enabled: false }
});

export const codeStore = writable({
	code: '',
	language: '',
	input: ''
});

export const outputStore = writable('');
