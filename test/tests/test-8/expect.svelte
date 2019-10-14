<!-- Test #8 -->
<div><div><pre><code class="language-js">
...
<span class="hljs-comment">// import css plugin at the top of the file</span>
<span class="hljs-keyword">import</span> postcss <span class="hljs-keyword">from</span> <span class="hljs-string">'rollup-plugin-postcss'</span>;
...

const production = !process.env.ROLLUP_WATCH;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> &#123;
    ...
    plugins: [
        ...
        svelte(&#123;
            ...
            <span class="hljs-comment">// REPLACE</span>
            <span class="hljs-comment">//   css: css =&gt; &#123;</span>
            <span class="hljs-comment">//      css.write('public/bundle.css');</span>
            <span class="hljs-comment">//   &#125;</span>
            <span class="hljs-comment">// BY:</span>
            emitCss:<span class="hljs-literal">true</span>
        &#125;),
        <span class="hljs-comment">// add the postccs plugin</span>
        postcss(&#123;
            <span class="hljs-attr">extract</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-attr">minimize</span>: production,
            <span class="hljs-attr">sourceMap</span>: !production
        &#125;),
        ...
    ]
    ...
&#125;</code></pre>
</div></div>
<Example><div slot="text">3.&nbsp;Now you can import chota in the root <code>App.svelte</code> file</div>
<div slot="code"><pre><code class="language-html">
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">import</span> <span class="hljs-string">"chota"</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
</div>
</Example>
