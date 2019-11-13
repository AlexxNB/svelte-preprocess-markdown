let counter = {
  type: "svelte",
  name: "Counter",
  source: `
<script>
let count = 0;
</script>

<span class="counter">
<span class="minus" on:click={e => count--}>-</span>
<span class="value">{count}</span>
<span class="plus" on:click={e => count++}>+</span>
</span>

<style>
.counter{
background-color: #f9ac00;
padding: 2px;
border-radius:5px;
}

.value{
display: inline-block;
background-color: white;
text-align: center;
padding:0 5px;
border-radius:5px;
color: black;
}

.minus,.plus{
display: inline-block;
color: white;
width:15px;
text-align: center;
font-weight: bold;
cursor:pointer;
}
</style>
`
}


let box = {
  type: "svelte",
  name: "Box",
  source: `
<script>
export let color = "black";
</script>

<div style="background-color:{color}"><slot /></div>

<style>
div{
  color: white;
  border-radius:5px;
  padding: 20px;
  text-align: center;
}
</style>
`
}


export const Example1 = [
  {
      type: "md",
      name: "App",
      source: `
<script>
let name = 'World'
</script>
# Hello {name}!`
  }
];

export const Example2 = [
{
    type: "md",
    name: "App",
    source: `
## Simplest component

You can write **any** \`markdown\` you want.

|ID|Name|
|--|----|
|1 |John|
`
}
];

export const Example3 = [
{
    type: "md",
    name: "App",
    source: `
<script>
  let list = ['item0','item1'];
  function add() { list = [...list,'item'+list.length] }
  function del() { list = list.slice(0,-1) }
</script>

### My items

{#each list as item}
* {item}
{/each}

<button on:click={add}>Add Item</button>
<button on:click={del}>Del Item</button>
`
}
];

export const Example4 = [
{
    type: "md",
    name: "App",
    source: `
<script>
  import Counter from './Counter.svelte'
  import Box from './Box.svelte'
</script>

<Box color="orange">
   Hello, I'm **orange** box
</Box>

You could inline <Counter /> components as well.
`
},
counter,
box
];

export const Example5 = [
{
    type: "md",
    name: "App",
    source: `
<script>
  import Box from './Box.svelte';
  import Submarkup from './Submarkup.md';
</script>

<Box color="slateblue">
   <Submarkup />
</Box>
`
},
{
    type: "md",
    name: "Submarkup",
    source: `
# Hello

I'm **blue** box
`
},
box
];

export const Example6 = [
{
    type: "md",
    name: "App",
    source: `
import Counter from './Counter.svelte'
import Box from './Box.svelte'

<Box color="silver">
   Hello, I'm **grey** box. Counter: <Counter />
</Box>
`
},
counter,
box
];

export const Example7 = [
{
    type: "md",
    name: "App",
    source: `
# \`h1\` heading
...
##### \`h5\` heading

*\`em\`* **\`strong\`**

<style>
  h1{
    color:green;
  }

  strong{
    color:red
  }
</style>
`
}
];

export const Example8 = [
{
    type: "md",
    name: "App",
    source: `
---
title: This is a title
number: 100500
list: [1,2,3,"four","five"]
---

# {META.title}

The number is: {META.number}

{#each META.list as item}
* {item}
{/each}
`
}
];