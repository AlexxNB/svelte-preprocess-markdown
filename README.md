# svelte-preprocess-markdown
Allows to import `*.md` files as Svelte component. Very useful when your components have a lot of formatted texts and you doesn't want to write it in HTML. It is based on superfast [Marked](https://www.npmjs.com/package/marked) markdown parser.

# Installation

Install package:

```bash
npm i -D svelte-preprocess-markdown
```

Then, edit `rollup.config.js` file:

```js

// 1. import package
const {markdown} = require('svelte-preprocess-markdown');

export default {
  // ...
  plugins: [
    svelte({
      // 2. add '.md', to the extensions  
      extensions: ['.md'],
      // 3. add markdown preprocessor
      preprocess: markdown()
    })
  ]
}
```

# Usage

## Common usage

```html
    <script>
        import Child from './Child.svelte';
        let name = 'world';
    </script>

    # Hello {name}!

    This is text in `markdown` **notation**

    <Child />

    <style>
        h1{
            color:red
        }
    </style>
```

## Extended usage

```markdown
    ```js script
        import Child from './Child.svelte';
        let name = 'world';
    ```

    # Hello {name}!

    This is text in `markdown` **notation**

    ```html svelte
        <Child />
    ```
    
    ```css style
        h1{
            color:red
        }
    ```
```

# Options

You can pass any [options](https://marked.js.org/#/USING_ADVANCED.md#options) that accepts [Marked](https://www.npmjs.com/package/marked).

## Renderer
If you need `renderer` object for options, you can get it from the package:

```js
const {Renderer} = require('svelte-preprocess-markdown');

const renderer = Renderer();

renderer.heading = function (text, level) {
    ...
};

const options = {renderer};
```