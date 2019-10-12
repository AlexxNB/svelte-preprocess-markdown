<!-- Test #3 -->
<script>
    import Child from './Child.svelte'
    let name = 'world';
</script>
<h1>Hello {name}!</h1>
<p><Child  /><Child></Child></p>
<p><Child>Just a <strong>simple</strong> <code>text</code></Child>
<Child  
    props={1}
    use:someaction
    class:active={true}>Just a <strong>simple</strong> <code>text</code></Child></p>
<p><Child><p>Just a <strong>simple</strong> <code>text</code>
Let&#39;s try the list:</p>
<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
</Child></p>
<p><Child  
    props={1}
    use:someaction
    class:active={true}><p>Just a <strong>simple</strong> <code>text</code>
Let&#39;s try the list:</p>
<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
</Child></p>
