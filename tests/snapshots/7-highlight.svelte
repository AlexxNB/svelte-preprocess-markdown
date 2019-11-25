<pre><code class="language-svelte"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript"> 
    <span class="hljs-keyword">let</span> items = [<span class="hljs-string">'item0'</span>,<span class="hljs-string">'item1'</span>];
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params"></span>) </span>&#123; items = [...items,<span class="hljs-string">'item'</span>+items.length] &#125;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">del</span>(<span class="hljs-params"></span>) </span>&#123; items = items.slice(<span class="hljs-number">0</span>,<span class="hljs-number">-1</span>) &#125;
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
...
 </span><span class="javascript">&#123;</span><span class="hljs-keyword">#each</span><span class="javascript">  items <span class="hljs-keyword">as</span> item&#125;</span><span class="xml">
*  </span><span class="javascript">&#123;item&#125;</span><span class="xml">
 </span><span class="javascript">&#123;</span><span class="hljs-keyword">/each</span><span class="javascript"> &#125;</span><span class="xml">

<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">on:click</span>= </span></span><span class="javascript">&#123;add&#125;</span><span class="xml"><span class="hljs-tag">&gt;</span>Add Item<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">on:click</span>= </span></span><span class="javascript">&#123;del&#125;</span><span class="xml"><span class="hljs-tag">&gt;</span>Del Item<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span></code></pre>



<script context="module">
export const META = {};
</script>