<!-- Test #8 -->
    <div>    
        <div>
            ```js
            ...
            // import css plugin at the top of the file
            import postcss from 'rollup-plugin-postcss';
            ...
            
            const production = !process.env.ROLLUP_WATCH;
            
            export default {
                ...
                plugins: [
                    ...
                    svelte({
                        ...
                        // REPLACE
                        //   css: css => {
                        //      css.write('public/bundle.css');
                        //   }
                        // BY:
                        emitCss:true
                    }),
                    // add the postccs plugin
                    postcss({
                        extract: true,
                        minimize: production,
                        sourceMap: !production
                    }),
                    ...
                ]
                ...
            }
            ```
        </div>
    </div>

        
<Example>
    <div slot="text">
        3.&nbsp;Now you can import chota in the root `App.svelte` file
    </div>
    <div slot="code">
    ```html
    <script>
        import "chota";
    </script>
    ```
    </div>
</Example>