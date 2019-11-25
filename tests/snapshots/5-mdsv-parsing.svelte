<h1>The MDSv example</h1>
<p>You can use components and a logic inside doc:</p>
<Block color="red"><p>My <code>data</code> list:</p>
{#each data as item}
<p>{item}</p>
{/each}
</Block>


<script>
  import Block from './Block.svelte';
  import { data } from './my_data.js';
</script>



<script context="module">
export const META = {};
</script>