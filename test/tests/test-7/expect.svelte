<!-- Test #7 -->
<pre><code class="language-js">    ...
    // import css plugin at the top of the file
    import postcss from &#39;rollup-plugin-postcss&#39;;
    ....

    const production = !process.env.ROLLUP_WATCH;

    export default &#123;
        ...
        plugins: [
            ...
            svelte(&#123;
                ...
                // REPLACE
                //   css: css => &#123;
                //      css.write('public/bundle.css');
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
        ]</code></pre>
<pre><code class="language-markdown">    ```js
        console.log()
    ```
    ```js
        console.log()
    ```</code></pre>
