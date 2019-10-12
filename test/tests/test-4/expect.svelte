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
<h1>Testing list</h1>
{#each list as item}{#if item === 'alexxnb'}<ul>
<li>Hello, <em>{item}</em>!</li>
</ul>
{:else}
<ul>
<li>Hello, stranger!</li>
</ul>
{/if}
{/each}
{#each list as item}<ul>
<li>Hello, <em>{item}</em>!</li>
</ul>
{/each}
{#if name}<p>Hello, <em>{name}</em>!</p>
{:else}
<p>Hello, stranger!</p>
{/if}
{#await promise}<p>waiting for the promise to resolve...</p>
{:then value}
<p>The value is <code>{value}</code></p>
{:catch error}
<p>Something went wrong: <code>{error.message}</code></p>
{/await}
