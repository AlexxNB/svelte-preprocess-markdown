```svelte
<script> 
    let items = ['item0','item1'];
    function add() { items = [...items,'item'+items.length] }
    function del() { items = items.slice(0,-1) }
</script>
...
 {#each  items as item}
*  {item}
 {/each }

<button on:click= {add}>Add Item</button>
<button on:click= {del}>Del Item</button>
```