### Case 1:

{#each [1,2,3] as _}
  text
{/each}

### Case 2:

{#each [1,2,3] as _}text{/each}

### Case 3:

{#each [1,2,3] as _}

  text

{/each}

### Case 4:

{#each [1,2,3] as _}
  One
  Two
{/each}

### Case 5:
{#each [1,2,3] as _}
  One

  Two
{/each}

### Case 6:
{#each [1,2,3] as num}
 * List item {num}
{/each}

### Case 7:
{#each [1,2,3] as num}
 * List item {num}
 
 and some text
{/each}