<h1>Control</h1>
<table>
<thead>
<tr>
<th>Name</th>
<th align="center">Gender</th>
<th>Breed</th>
</tr>
</thead>
<tbody><tr>
<td>Dasher</td>
<td align="center">male</td>
<td>Whippet</td>
</tr>
<tr>
<td>Maisey</td>
<td align="center">female</td>
<td>Treeing Walker Coonhound</td>
</tr>
</tbody></table>
<h1>Simple table</h1>
<table>
<thead><tr>
<th align="right">Name</th>
<th align="center">Gender</th>
<th>Breed</th>
</tr></thead>
<tbody>
{#each dogs as {name, gender, breed}}
<tr><td align="right"> {name} </td><td align="center"> {gender} </td><td> {breed} </td></tr>
{/each}
</tbody>
</table>
<h1>Multiline table</h1>
<table>
<thead><tr>
<th>Name</th>
<th>Gender</th>
<th>Breed</th>
</tr></thead>
<tbody>
{#each dogs as {name, gender, breed}}
<tr><td> {name} </td><td> {gender || 'undefined'} </td><td> {breed} </td></tr>
<tr><td> {name} </td><td> {gender} </td><td> {breed} </td></tr>
{/each}
</tbody>
</table>
<h1>Table in each with else</h1>
<table>
<thead><tr>
<th>Name</th>
<th align="center">Gender</th>
<th>Breed</th>
</tr></thead>
<tbody>
{#each dogs as {name, gender, breed}}
<tr><td> {name} </td><td align="center"> {gender} </td><td> {breed} </td></tr>
{:else}
<tr><td colspan="3">No entries</td></tr>
{/each}
</tbody>
</table>
<h1>Table with if condition</h1>
<table>
<thead><tr>
<th align="right">Name</th>
<th align="center">Gender</th>
<th>Breed</th>
</tr></thead>
<tbody>
{#if dogs.length > 2}
{#each dogs as {name, gender, breed}}
<tr><td align="right"> {name} </td><td align="center"> {gender} </td><td> {breed} </td></tr>
{/each}
{/if}
</tbody>
</table>
<h1>Table with nested if condition</h1>
<table>
<thead><tr>
<th align="right">Name</th>
<th align="center">Gender</th>
<th>Breed</th>
</tr></thead>
<tbody>
{#each dogs as {name, gender, breed}}
{#if breed === 'male'}
<tr><td align="right"> {name} </td><td align="center"> {gender} </td><td> {breed} </td></tr>
{/if}
{/each}
</tbody>
</table>
<h1>Control - should not break</h1>
<table>
<thead>
<tr>
<th>Name</th>
<th align="center">Gender</th>
<th>Breed</th>
</tr>
</thead>
<tbody><tr>
<td>{#if blah}Bobik{/if}</td>
<td align="center">male</td>
<td>Whippet</td>
</tr>
<tr>
<td>Maisey</td>
<td align="center">female</td>
<td>Treeing Walker Coonhound</td>
</tr>
</tbody></table>
<h1>Control - cells num not equal - shouldn&#39;t be converted</h1>
<table>
<thead><tr>
<th align="right">Name</th>
<th align="center">Gender</th>
<th>Breed</th>
</tr></thead>
<tbody>
{#each dogs as {name, gender, breed}}
| {name} | {gender} | {breed} | {unknown} |
{/each}
</tbody>
</table>
<h1>Control - blank line after header - shouldn&#39;t be converted</h1>
<table>
<thead>
<tr>
<th align="right">Name</th>
<th align="center">Gender</th>
<th>Breed</th>
</tr>
</thead>
</table>
{#each dogs as {name, gender, breed}}
<p>| {name} | {gender} | {breed} |</p>
{/each}


<script context="module">
export const META = {};
</script>