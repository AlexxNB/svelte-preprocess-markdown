<!-- Test #5 -->
import Block from './Block.svelte';
import { data } from './my_data.js';

# The MDSv example

You can use components and a logic inside doc:

<Block color="red">
  My `data` list:
  {#each data as item}
    {item}
  {/each}
</Block>