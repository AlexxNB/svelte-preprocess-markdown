<script>
  import Repl from "./Repl/Repl.svelte";
  import { onMount } from "svelte";
  let repl;

  export let code = `# Hello World!`;
  export let components = [
    {
        type: "md",
        name: "App",
        source: '# Hello World!'
    }
];

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
        />
    </div>
</div>

<style>
    .container{
        max-width: 120rem;
        margin: 0 auto;
        width: 96%;
        padding: 1rem 1rem;
    } 

    .repl{
        width:90%;
        height: 400px;
        border:1px solid var(--dark);
        border-radius: 10px;
        overflow: hidden;
    }
</style>