<script>    import Snippet from './../cmp/Snippet.svelte';
    import {Tag} from './../../../cmp/index';</script><h1 id="tag">Tag</h1>
<p><strong>Bold text</strong> </p>
    <Snippet code={`
    <Tag>One</Tag>
    <Tag>Two</Tag>
    <Tag>Three</Tag>
    <Tag small>Small</Tag>
    <Tag large>Large</Tag>
    `}>
        <Tag>One</Tag>
        <Tag>Two</Tag>
        <Tag>Three</Tag>
        <Tag small>Small</Tag>
        <Tag large>Large</Tag>
    </Snippet><style>h1{
    color:red;
}</style>