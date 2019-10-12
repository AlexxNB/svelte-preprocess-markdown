<!-- Test #3 -->
<script>
    import Child from './Child.svelte'
    let name = 'world';
</script>

# Hello {name}!

<Child />

<Child></Child>

<Child>Just a **simple** `text`</Child>
<Child 
    props={1}
    on:click={e => console.log(e)}
>Just a **simple** `text`</Child>

<Child>
    Just a **simple** `text`

    Let's try the list:

    * Item 1
    * Item 2
</Child>

<Child 
    props={1}
>
    Just a **simple** `text`

    Let's try the list:

    * Item 1
    * Item 2
</Child>