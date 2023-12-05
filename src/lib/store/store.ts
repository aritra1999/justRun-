import { writable } from 'svelte/store';

export const defaultEditorConfig = {
	fontSize: 15,
	tabSize: 8,
	fontFamily: 'JetBrains Mono',
	fontLigatures: true,
	theme: 'vs-dark',
	automaticLayout: true,
	minimap: { enabled: false }
};

export const editorStore = writable(defaultEditorConfig);

export const metaStore = writable({
	runningCode: false,
	laguage: {
		value: 'cpp',
		label: 'C++'
	},
	theme: {
		value: 'vs-dark',
		label: 'VS Code Dark'
	}
});

export const codeStore = writable({
	code: '',
	language: '',
	input: ''
});

export const outputStore = writable('');
