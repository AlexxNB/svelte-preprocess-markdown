<!-- Test #8 -->

<div><pre><code class="language-js">
    ...
    // import css plugin at the top of the file
    import postcss from 'rollup-plugin-postcss';
    ...

    const production = !process.env.ROLLUP_WATCH;

    export default &amp;#123;
        ...
        plugins: [
            ...
            svelte(&amp;#123;
                ...
                // REPLACE
                //   css: css =&gt; &amp;#123;
                //      css.write('public/bundle.css');
                //   &amp;#125;
                // BY:
                emitCss:true
            &amp;#125;),
            // add the postccs plugin
            postcss(&amp;#123;
                extract: true,
                minimize: production,
                sourceMap: !production
            &amp;#125;),
            ...
        ]
        ...
    &amp;#125;</code></pre>
</div>
<Example><div slot="text">3.&nbsp;Now you can import chota in the root <code>App.svelte</code> file</div>
<div slot="code"><pre><code class="language-html">
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
        <span class="hljs-keyword">import</span> <span class="hljs-string">"chota"</span>;
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
</div>
</Example>
