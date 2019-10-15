<script>
  import { getContext, onMount } from "svelte";
  import SplitPane from "../SplitPane.svelte";
  import Viewer from "./Viewer.svelte";
  import CompilerOptions from "./CompilerOptions.svelte";
  import Compiler from "./Compiler.js";
  import CodeMirror from "../CodeMirror.svelte";
  import { is_browser } from "../env.js";

  const { register_output } = getContext("REPL");

  export let svelteUrl;
  export let sourceErrorLoc = null;
  export let runtimeError = null;
  export let embedded = false;
  export let relaxed = false;
  export let injectedJS;
  export let injectedCSS;

  let foo; // TODO workaround for https://github.com/sveltejs/svelte/issues/2122

  register_output({
    set: async (selected, options) => {
      if (selected.type === "js") {
        js_editor.set(`/* Select a component to see its compiled code */`);
        css_editor.set(`/* Select a component to see its compiled code */`);
        return;
      }

      const compiled = await compiler.compile(selected, options);
      if (!js_editor) return; // unmounted

      js_editor.set(compiled.js, "js");
      css_editor.set(compiled.css, "css");
    },

    update: async (selected, options) => {
      if (selected.type === "js") return;

      const compiled = await compiler.compile(selected, options);
      if (!js_editor) return; // unmounted

      js_editor.update(compiled.js);
      css_editor.update(compiled.css);
    }
  });

  const compiler = is_browser && new Compiler(svelteUrl);

  // refs
  let viewer;
  let js_editor;
  let css_editor;
  const setters = {};

  let view = "result";
</script>

<style>
  .view-toggle {
    height: var(--pane-controls-h);
    border-bottom: 1px solid rgba(95, 158, 160, 0.5);
    white-space: nowrap;
    box-sizing: border-box;
  }

  button {
    /* width: 50%;
		height: 100%; */
    background: white;
    text-align: left;
    position: relative;
    font: 400 12px/1.5 var(--font);
    border: none;
    border-bottom: 3px solid transparent;
    padding: 12px 12px 8px 12px;
    color: #999;
    border-radius: 0;
    cursor: unset;
  }

  .tab-content {
    position: absolute;
    width: 100%;
    height: calc(100% - 42px);
    opacity: 0;
    pointer-events: none;
  }

  .tab-content.visible {
    /* can't use visibility due to a weird painting bug in Chrome */
    opacity: 1;
    pointer-events: all;
  }

  .linkylink {
    float: right;
    margin: 10px 20px;
    font-size: 14px;
    font-family: "Fira Mono";
    border-bottom: none;
  }

  .linkylink:hover {
    border-bottom: 1px solid cadetblue;
    color: cadetblue;
  }
</style>

<div class="view-toggle">
  <button style="color: #333;" on:click={() => (view = 'result')}>
    Result
  </button>

  <a class="linkylink" href="https://github.com/AlexxNB/svelte-preprocess-markdown">Github -></a>
</div>

<!-- component viewer -->
<div class="tab-content" class:visible={view === 'result'}>
  <Viewer
    bind:this={viewer}
    bind:error={runtimeError}
    {relaxed}
    {injectedJS}
    {injectedCSS} />
</div>