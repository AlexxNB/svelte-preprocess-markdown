# Control

| Name   | Gender | Breed                      |
| ------ | :----: | -------------------------- |
| Dasher |  male  | Whippet                    |
| Maisey | female | Treeing Walker Coonhound   |

# Simple table

| Name  | Gender | Breed |
| ----: | :----: | ----- |
{#each dogs as {name, gender, breed}}
| {name} | {gender} | {breed} |
{/each}

# Multiline table

| Name | Gender | Breed |
| ---- | ---- | ----- |
{#each dogs as {name, gender, breed}}
| {name} | {gender || 'undefined'} | {breed} |
| {name} | {gender} | {breed} |
{/each}


# Table in each with else
| Name | Gender | Breed |
| ---- | :----: | ----- |
{#each dogs as {name, gender, breed}}
| {name} | {gender} | {breed} |
{:else}
No entries
{/each}

# Table with if condition

| Name  | Gender | Breed |
| ----: | :----: | ----- |
{#if dogs.length > 2}
  {#each dogs as {name, gender, breed}}
    | {name} | {gender} | {breed} |
  {/each}
{/if}



# Table with nested if condition

| Name  | Gender | Breed |
| ----: | :----: | ----- |
{#each dogs as {name, gender, breed}}
  {#if breed === 'male'}
    | {name} | {gender} | {breed} |
  {/if}
{/each}

# Control - should not break

| Name   | Gender | Breed                      |
| ------ | :----: | -------------------------- |
| {#if blah}Bobik{/if} |  male  | Whippet      |
| Maisey | female | Treeing Walker Coonhound   |


# Control - cells num not equal - shouldn't be converted

| Name  | Gender | Breed |
| ----: | :----: | ----- |
{#each dogs as {name, gender, breed}}
| {name} | {gender} | {breed} | {unknown} |
{/each}


# Control - blank line after header - shouldn't be converted

| Name  | Gender | Breed |
| ----: | :----: | ----- |

{#each dogs as {name, gender, breed}}
| {name} | {gender} | {breed} |
{/each}