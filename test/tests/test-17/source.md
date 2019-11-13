---
title: This is a title
number: 100500
list: [1, 2, 3, 4, 5]
---

<script context="module">
    let a = 'fff';
</script>

# {META.title} #

The number is: {META.number}

{#each META.list as item}
* {item}
{/each}