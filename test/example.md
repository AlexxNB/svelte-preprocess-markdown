<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Tag} from './../../../cmp/index';
</script>

# Tag

**Bold text** 

<Tag on:click={e => {console.log(e)}}>Hello **{name}**</Tag>
<Tag>This will be `marked` by only inline tags</Tag>
<Tag prop1="2"
    prop2={3}
    on:click={e => console.log(e)}
>This will be `marked` by only inline tags</Tag>

<Tag>
    This **will** be `marked`
    **Hello**
    [Name]()

    * kjbed
    * jdkjdhw
</Tag>

<Snippet code="{`
<Tag>One</Tag>
<Tag>Two</Tag>
<Tag>Three</Tag>
<Tag small>Small</Tag>
<Tag large>Large</Tag>
`}">
    <Tag>One</Tag>
    <Tag>Two</Tag>
    <Tag>Three</Tag>
    <Tag small>Small</Tag>
    <Tag large>**Large**</Tag>
</Snippet>


<style>
    h1{
        color:red;
    }
</style>