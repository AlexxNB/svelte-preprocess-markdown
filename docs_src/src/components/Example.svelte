<script>
  import Repl from "./Repl/Repl.svelte";
  import { onMount } from "svelte";
  let repl;

  export let readonly = false;
  export let components = [
    {
        type: "md",
        name: "App",
        source: '# Hello World!'
    }
];

components = components.map(cmp => {
  cmp.source = cmp.source.trim();
  return cmp;
})

  onMount(() => {
    repl.set({
      components
    });
  });
</script>

<div class="container">
    <div class="repl">
        <Repl bind:this={repl} 
            orientation="rows"
            {readonly}
            embedded
        />
    </div>
</div>

<style>
    .container{
        max-width: 70rem;
        margin: 0 auto;
        padding: 1rem 1rem;
    } 

    .repl{
        width:100%;
        height: 400px;
        border:1px solid var(--dark);
        border-radius: 10px;
        overflow: hidden;
    }
</style>