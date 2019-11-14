<!-- Test #9 -->


<h1>Tag</h1>
<pre><code class="language-html">&lt;Snippet code=&#123;`
&lt;Tag&gt;One&lt;/Tag&gt;
&lt;Tag&gt;Two&lt;/Tag&gt;
&lt;Tag&gt;Three&lt;/Tag&gt;
&lt;Tag small&gt;Small&lt;/Tag&gt;
&lt;Tag large&gt;Large&lt;/Tag&gt;
`&#125;&gt;
    &lt;Tag&gt;One&lt;/Tag&gt;
    &lt;Tag&gt;Two&lt;/Tag&gt;
    &lt;Tag&gt;Three&lt;/Tag&gt;
    &lt;Tag small&gt;Small&lt;/Tag&gt;
    &lt;Tag large&gt;Large&lt;/Tag&gt;
&lt;/Snippet&gt;</code></pre>

<Playground components={[{"type":"svelte","name":"App","source":"<script>\n    let name = 'World'\n</script>\n<h1>Just one component</h1>"}]} />


<script>
  import Snippet from './../cmp/Snippet.svelte';
  import {Tag} from './../../../cmp/index';
</script>

<script context="module">
export const META = {"title":"This is a title","number":100500,"list":[1,2,3,4,5]};
</script>