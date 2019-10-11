<script>
    import Snippet from './../cmp/Snippet.svelte';
    import {Tag} from './../../../cmp/index';
</script>
<h1 id="tag">Tag</h1>
<p><strong>Bold text</strong> </p>
<p><Tag  on:click={e => {console.log(e)}}>Hello <strong>{name}</strong></Tag>
<Tag>This will be <code>marked</code> by only inline tags</Tag>
<Tag  prop1="2"
    prop2={3}
    on:click={e => console.log(e)}>This will be <code>marked</code> by only inline tags</Tag></p>
<p><Tag><p>This <strong>will</strong> be <code>marked</code>
<strong>Hello</strong>
<a href="">Name</a></p>
<ul>
<li>kjbed</li>
<li>jdkjdhw</li>
</ul>
</Tag></p>
<p><Snippet  code="{`
<Tag>One</Tag>
<Tag>Two</Tag>
<Tag>Three</Tag>
<Tag small>Small</Tag>
<Tag large>Large</Tag>
`}"><p><Tag>One</Tag>
<Tag>Two</Tag>
<Tag>Three</Tag>
<Tag  small>Small</Tag>
<Tag  large><strong>Large</strong></Tag></p>
</Snippet></p>
<style>
    h1{
        color:red;
    }
</style>
