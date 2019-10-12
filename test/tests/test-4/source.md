<!-- Test #4 -->
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

    {#if item === 'alexxnb'}
        * Hello, *{item}*!
    {:else}
        * Hello, stranger!
    {/if}

{/each}

{#each list as item}
    * Hello, *{item}*!
{/each}


{#if name}
    Hello, *{name}*!
{:else}
    Hello, stranger!
{/if}

{#await promise}
	waiting for the promise to resolve...
{:then value}
	The value is `{value}`
{:catch error}
	Something went wrong: `{error.message}`
{/await}