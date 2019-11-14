<h1>{META.title}</h1>
<p>The number is: {META.number}</p>
{#each META.list as item}
<ul>
<li>{item}</li>
</ul>
{/each}


<script context="module">
export const META = {"title":"This is a title","number":100500,"list":[1,2,3,4,5]};

    let a = 'fff';
</script>
