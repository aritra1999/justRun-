import { writable } from 'svelte/store';

export const editorDefaultConfig = {
	fontSize: 14,
	fontFamily: 'JetBrains Mono',
	fontLigatures: true,
	roundedSelection: true,
	scrollBeyondLastLine: false,
	theme: 'vs-dark',
	automaticLayout: true,
	minimap: { enabled: false }
};

export const metaStore = writable({
	editorConfig: editorDefaultConfig
});
