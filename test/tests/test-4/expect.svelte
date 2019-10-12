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
<p>{#each list as item}</p>
<ul>
<li>{item}
{/each}</li>
</ul>
<p>{#if name}
    Hello, <em>{name}</em>!
{:else}
    Hello, stranger!
{/if}</p>
