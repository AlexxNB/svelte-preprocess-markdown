# Install

1. Install the package:

```bash
npm i -D svelte-preprocess-markdown
```

2. Then, edit `rollup.config.js` file:

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