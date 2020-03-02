<script>
    import Example from './../components/Example.svelte';
    import {Example1} from './examples';
</script>

# Introducing

The [svelte-preprocess-markdown](https://www.npmjs.com/package/svelte-preprocess-markdown) is a way to use [Svelte](https://svelte.dev) components written in Markdown syntax. You can import any `*.md` file as a component, which will be handled by Svelte's compiler. You can import any other component in your `*.md` file and use it right inside a markup. All [HTMLx](https://github.com/htmlx-org/HTMLx) logic and interpolations are also supported.

The format of the *MarkDown* and *Svelte* combination is called `MDSv`. It is like React's [MDX](https://mdxjs.com/) format, but for [Svelte](https://svelte.dev).

<Example components={Example1}/>

> You can try `svelte-preprocess-markdown` in the fullpage [Playground](/playground)
