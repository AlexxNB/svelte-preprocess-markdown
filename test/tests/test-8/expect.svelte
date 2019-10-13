<!-- Test #8 -->

<div><pre><code class="language-js">    ...
    // import css plugin at the top of the file
    import postcss from &#39;rollup-plugin-postcss&#39;;
    ...

    const production = !process.env.ROLLUP_WATCH;

    export default &#123;
        ...
        plugins: [
            ...
            svelte(&#123;
                ...
                // REPLACE
                //   css: css =&gt; &#123;
                //      css.write(&#39;public/bundle.css&#39;);
                //   &#125;
                // BY:
                emitCss:true
            &#125;),
            // add the postccs plugin
            postcss(&#123;
                extract: true,
                minimize: production,
                sourceMap: !production
            &#125;),
            ...
        ]
        ...
    &#125;</code></pre>
</div>
