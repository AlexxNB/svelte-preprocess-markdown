---
title: This is a title
number: 100500
list: [1, 2, 3, 4, 5]
---
<!-- Test #9 -->


    import Snippet from './../cmp/Snippet.svelte';
    import {Tag} from './../../../cmp/index';

# Tag

```html svelte
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
</Snippet>
```
<Playground components={[{"type":"svelte","name":"App","source":"<script>\n    let name = 'World'\n</script>\n<h1>Just one component</h1>"}]} />