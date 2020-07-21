# svelte-preprocess-markdown
Allows to import `*.md` files as Svelte component. Very useful when your components have a lot of formatted texts and you doesn't want to write it in HTML. It is based on superfast [Marked](https://www.npmjs.com/package/marked) markdown parser.

[![npm](https://img.shields.io/npm/v/svelte-preprocess-markdown)](https://www.npmjs.com/package/svelte-preprocess-markdown)   [![npm](https://img.shields.io/npm/dt/svelte-preprocess-markdown)](https://www.npmjs.com/package/svelte-preprocess-markdown)    [![](https://github.com/AlexxNB/svelte-preprocess-markdown/workflows/Publish%20on%20NPM/badge.svg)](https://github.com/AlexxNB/svelte-preprocess-markdown/actions?workflow=Publish+on+NPM)

# Documentaton

* Please, see the [Docs](https://alexxnb.github.io/svelte-preprocess-markdown) for more info
* Or try yourself in the our [Playground](https://alexxnb.github.io/svelte-preprocess-markdown/playground)

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
      extensions: ['.svelte','.md'],
      // 3. add markdown preprocessor
      preprocess: markdown()
    })
  ]
}
```

# Usage

## Common usage

```markdown
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
## MDSv usage

The `MDSv` format is [MDX](https://mdxjs.com/)-like way to write documents using imported Svelte-components.

```markdown
import Block from './Block.svelte';
import { data } from './my_data.js';

# The MDSv example

You can use *components* and a *logic* inside doc:

<Block color="red">
  My `data` list:
  {#each data as item}
    {item}
  {/each}
</Block>
```


# Options

You can pass any [options](https://marked.js.org/#/USING_ADVANCED.md#options) that are accepted by [Marked](https://www.npmjs.com/package/marked).

```js
...
plugins: [
    svelte({
      ...
      preprocess: markdown({
          headerIds: false
      })
      ...
    })
  ]
...
```

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
