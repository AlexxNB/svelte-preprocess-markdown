<script>
  import Repl from "../../components/Repl/Repl.svelte";
  import { onMount } from "svelte";
  let repl;

  const code_1 = `
# Hello World!
`;

  onMount(() => {
    repl.set({
      components: [
        {
          type: "md",
          name: "App",
          source: code_1
        }
      ]
    });
  });
</script>

<Repl bind:this={repl} />
