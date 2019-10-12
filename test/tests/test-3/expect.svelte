<!-- Test #3 -->
<script>
    import Child from './Child.svelte'
    let name = 'world';
</script>

<h1>Hello {name}!</h1>
<Child  /><Child></Child>
<Child>Just a <strong>simple</strong> <code>text</code></Child>
<Child  
    props={1}
    on:click={e => console.log(e)}>Just a <strong>simple</strong> <code>text</code></Child>
<Child><p>Just a <strong>simple</strong> <code>text</code>
Let&#39;s try the list:</p>
<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
</Child>
<Child  
    props={1}><p>Just a <strong>simple</strong> <code>text</code>
Let&#39;s try the list:</p>
<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
</Child>
