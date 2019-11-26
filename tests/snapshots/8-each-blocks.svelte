<h3>Case 1:</h3>
{#each [1,2,3] as _}
<p>text</p>
{/each}
<h3>Case 2:</h3>
{#each [1,2,3] as _}text{/each}
<h3>Case 3:</h3>
{#each [1,2,3] as _}
<p>text</p>
{/each}
<h3>Case 4:</h3>
{#each [1,2,3] as _}
<p>One
Two</p>
{/each}
<h3>Case 5:</h3>
{#each [1,2,3] as _}
<p>One</p>
<p>Two</p>
{/each}
<h3>Case 6:</h3>
<ul>
{#each [1,2,3] as num}
<li>List item {num}</li>
{/each}
</ul>
<h3>Case 7:</h3>
{#each [1,2,3] as num}
<ul>
<li>List item {num}</li>
</ul>
<p>and some text</p>
{/each}
<h3>Case 8:</h3>
<ol>
{#each [1,2,3] as num}
<li>List item </li>
{/each}
</ol>


<script context="module">
export const META = {};
</script>