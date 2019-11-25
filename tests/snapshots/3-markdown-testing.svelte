<h1>Hello {name}!</h1>
<p>Let&#39;s try the list:</p>
<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
<p><a href="https://ya.ru">Link</a></p>
<Child />


<script>
    import Child from './Child.svelte'
    let name = 'world';
</script>


<script context="module">
export const META = {};
</script>