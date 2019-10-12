<script>
    import Child from './Child.svelte'
    let name = 'world';

    let list = [
        'item1',
        'item1',
        'item1',
        'item1',
        'item1'
    ]
</script>

# Testing list

{#each list as item}
* {item}
{/each}

{#if name}
    Hello, *{name}*!
{:else}
    Hello, stranger!
{/if}