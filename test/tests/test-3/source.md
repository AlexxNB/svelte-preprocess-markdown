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
    use:someaction
    class:active={true}
>Just a **simple** `text`</Child>

<Child>
    Just a **simple** `text`

    Let's try the list:

    * Item 1
    * Item 2
</Child>

<Child 
    props={1}
    use:someaction
    class:active={true}
>
    Just a **simple** `text`

    Let's try the list:

    * Item 1
    * Item 2
</Child>