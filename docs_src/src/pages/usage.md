<script>
    import Example from './../components/Example.svelte';
    import {Example2,Example3,Example4,Example5,Example6} from './examples';
</script>

# Usage

### Simple markup

First of all `MDSv` is markdown format. The simplest component is just a markdown synatax without any Svelte's magic.

<Example components={Example2}/>


### Components

You can mix svelte and markdown as you want:

<Example components={Example3}/>

### Imports

Import components and use it as usual:

<Example components={Example4}/>

Import other `*.md` files as well:

<Example components={Example5}/>

If there are only imports in the `<script>` tag, you may use simplified imports:

<Example components={Example6}/>