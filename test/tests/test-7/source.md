<!-- Test #7 -->
```js
    ...
    // import css plugin at the top of the file
    import postcss from 'rollup-plugin-postcss';
    ....

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
```
```markdown
    ```js
        console.log()
    ```
    ```js
        console.log()
    ```
```

<div>
    ```js
        if(true)
            doit();
        else
            donot();
    ```
</div>