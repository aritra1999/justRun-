<script lang="ts">  
  import loader from '@monaco-editor/loader';
  import { onDestroy, onMount } from 'svelte';
  import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';
  
  export let content: string;
  
  let editor: Monaco.editor.IStandaloneCodeEditor;
  let monaco: typeof Monaco;
  let editorContainer: HTMLElement;
  let options = {
    minimap: { enabled: false },
  }

  onMount(async () => {
        const monacoEditor = await import('monaco-editor');
        loader.config({ monaco: monacoEditor.default });

        monaco = await loader.init();

        const editor = monaco.editor.create(editorContainer, options);
        const model = monaco.editor.createModel(content, 'cpp');
        
        editor.setModel(model);
    });

    onDestroy(() => {
        monaco?.editor.getModels().forEach((model) => model.dispose());
        editor?.dispose();
    });
</script>

<div class="h-full w-full rounded-lg" bind:this={editorContainer} />
  
