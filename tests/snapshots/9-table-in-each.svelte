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
<table>
<thead><tr>
<th>Name</th>
<th align="center">Gender</th>
<th>Breed</th>
</tr></thead>
<tbody>
{#each dogs as {name, gender, breed}}
<tr>
<td> {name} </td>
<td align="center"> {gender} </td>
<td> {breed} </td>
</tr>
{:else}
<tr>
<td colspan="3">No entries</td>
</tr>
{/each}
</tbody>
</table>
<table>
<thead><tr>
<th>Name</th>
<th>Gender</th>
<th>Breed</th>
</tr></thead>
<tbody>
{#each dogs as {name, gender, breed}}
<tr>
<td> {name} </td>
<td> {gender || 'undefined'} </td>
<td> {breed} </td>
</tr>
<tr>
<td> {name} </td>
<td> {gender} </td>
<td> {breed} </td>
</tr>
{/each}
</tbody>
</table>
<table>
<thead><tr>
<th>Name</th>
<th align="center">Gender</th>
<th>Breed</th>
</tr></thead>
<tbody>
{#each dogs as {name, gender, breed}}
<tr>
<td> {name} </td>
<td align="center"> {gender || 'undefined'} </td>
<td> {breed} </td>
</tr>
{/each}
</tbody>
</table>


<script context="module">
export const META = {};
</script>